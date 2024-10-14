# RAG評価コード説明

- **evaluation/crag.py**
- **evaluation/docker-compose.yml**
- **evaluation/Dockerfile**
- **evaluation/readme.md**
- **evaluation/data/ans_txt.csv**
- **evaluation/src/dbmanager.py**
- **evaluation/src/evaluator.py**
- **evaluation/src/settings.py**
- **evaluation/src/validator.py**
- **evaluation/submit/predictions.csv**

## crag.py

コマンドライン引数で使用データを指定し、データの検証、評価結果の保存を行う。
推論結果のファイルと正解データを読み比較して評価するCRAGスタイル

**検証フェーズ**:

- 予測回答のフォーマットチェックを行い、以下の点を確認します。
    - **ファイル拡張子の確認**: ファイルの拡張子が`csv`かどうか。
    - **カラム数確認**: `index`、`answer`、`evidence`のカラムが正しく存在するか。
    - **サンプル数の確認**: すべての問題について回答があるか。
    - **欠損の確認**: 回答に欠損がないか。
    - **データ型確認**: 模範解答とデータ型が一致しているか。
    - **トークン数の確認**: 各回答のトークン数が上限を超えていないか。

**最終スコアの計算フェーズ**:

- 各問題に対する回答と模範解答を比較して点数をつけ、最終的にすべての問題の平均値を精度評価とする
- 評価結果は以下の基準で点数化
    - **Perfect (1点)**: 正確な回答。
    - **Acceptable (0.5点)**: 軽微な誤りがあるが有用な回答。
    - **Missing (0点)**: 回答がない場合。
    - Incorrect (-1点): 間違った回答

```python
def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--model-name', default='gpt-4o-2024-08-06')
    parser.add_argument('--result-dir', default='./submit')
    parser.add_argument('--result-name', default='predictions.csv')
    parser.add_argument('--max-num-tokens', default=50, type=int)
    parser.add_argument('--ans-dir', default='./data')
    parser.add_argument('--ans-txt', default='ans_txt.csv')
    parser.add_argument('--eval-result-dir', default='./result')
    args = parser.parse_args()
    return args
```

コマンドライン引数の設定

```python
# parse args
args = parse_args()
ans_txt_path = os.path.join(args.ans_dir, args.ans_txt)
result_path = os.path.join(args.result_dir, args.result_name)
```

正解データと推論結果のパスの生成

```python
# format settings
data_format = FormatSetter(ans_txt_path=ans_txt_path, max_num_tokens=args.max_num_tokens, keys={}, ext='.csv', model=args.model_name).get_format()
```

max_num_tokensで回答が50トークンになっていることなどを指定するようにフォーマットを指定

```python
# validation
validator = DataFrameValidator(data_format=data_format)
validator.validate(result=result_path)
sub = validator.get_data()
```

`DataFrameValidator`で推論結果のデータ形式が正しいかを検証

```python
# load the answer texts
ans = DBLoader(db_path=ans_txt_path).get_db()
```

正解データの読み込み

```python
# evaluation
score, result = CRAGEvaluator(sub=sub, ans=ans).evaluate(args.model_name)
```

推論と正解を使い評価を実施し、評価結果を生成

```python
# save the results
ResultHandler(score=score, result=result, eval_result_dir=args.eval_result_dir).save()
```

結果を指定フォーマットで保存

### dbmanager.py

正解データの読み込みと結果の保存

```python
class DBLoader():
    def __init__(self, db_path: str) -> None:
        """
        no header, index column=0
        """
        print('\nLoading Ground Truth:')
        start = time.time()
        self.db = pd.read_csv(db_path, index_col=0, header=None)
        print('  db shape: {}'.format(self.db.shape))
        print('  time elapsed: {}[s]'.format(time.time()-start))
    
    def get_db(self) -> pd.DataFrame:
        return self.db
```

ヘッダーがなし指定でデータ読み込み

```python
class ResultHandler():
    def __init__(self, score: float, result: dict[str, Any], eval_result_dir: str) -> None:
        print('\nSaving the Results:')
        self.score = score
        self.result = result
        self.eval_result_dir = eval_result_dir
    
    def save(self):
        start = time.time()
        if not os.path.exists(self.eval_result_dir):
            os.mkdir(self.eval_result_dir)
        
        print('  Score: {}'.format(self.score))
        
        pd.DataFrame(self.result).T.to_csv(os.path.join(self.eval_result_dir, 'scoring.csv'), header=False)
        print('  time elapsed: {}[s]'.format(time.time()-start))
```

resultをscoring.csvとして保存

### evaluator.py

推論結果と回答を比較し評価を実施

```python
class CRAGEvaluator(Evaluator):
    def evaluate(self, model_name: str, save_sims: bool = True) -> tuple:
        print('  By CRAG')
        print('  llm: {}'.format(model_name))
        # エンコーディングの設定
        try:
            encoding = tiktoken.encoding_for_model(model_name)
        except KeyError:
            encoding = tiktoken.get_encoding("cl100k_base")

        client = OpenAI()
        start = time.time()
        ans_sims = {}
        score = 0

        # 評価のループ
        for i, true in tqdm(self.ans.iterrows()):
            res, num_tokens = self._judge_by_crag(self.sub.loc[i][1], true[1], client, model_name, encoding)
            if save_sims:
                ans_sims[i] = {
                    'judge_result': res['judged'],
                    'num_tokens': num_tokens
                }
            if res['judged'] == 'Perfect':
                score += 1
            elif res['judged'] == 'Acceptable':
                score += 0.5
            elif res['judged'] == 'Incorrect':
                score += -1

        score /= len(self.ans)
        print('  time elapsed: {}[s]\n'.format(time.time() - start))

        if save_sims:
            return score, ans_sims
        else:
            return score, None
```

評価結果に対してスコアを設定(Perfectなら1点、Acceptableなら0.5点、Incorrectなら-1点)

```python
def _judge_by_crag(self, pred: str, true: str, client, model_name: str, encoding) -> tuple:
    system_prompt = """
    与えられた問題のground_truthとanswerを比較してその結果を"Perfect", "Acceptable", "Missing", "Incorrect"の中から一つだけ選んで答えてください...
    """
    prompt = 'ground_truth: {} answer: {}\n'.format(true, pred)
    num_tokens = len(encoding.encode(pred))
    
    input_messages = [
        {
            "role": "system",
            "content": system_prompt
        },
        {
            "role": "user",
            "content": prompt
        }
    ]
    for _ in range(3):
        try:
            response = client.chat.completions.create(
                model=model_name,
                temperature=0,
                seed=0,
                timeout=1200,
                response_format={"type": "json_object"},
                messages=input_messages
            ).choices[0].message.content

            return json.loads(response), num_tokens

        except Exception as e:
            print("openai chatcompletion failed. retry...\n")
            print(e)
            time.sleep(60)

    else:
        print("maximum trial.\n")
        raise MaximumTrialError
```

推論結果と正解を比較しLLMで評価結果を生成
再試行は最大3回まで行い、失敗した場合はMaximumTrialErrorを発生させる

## Dockerfile

```dockerfile
# install miniconda
RUN wget -q https://repo.anaconda.com/miniconda/Miniconda3-py39_24.4.0-0-Linux-x86_64.sh -P ./downloads/ && \
    bash ./downloads/Miniconda3-py39_24.4.0-0-Linux-x86_64.sh -b -p /opt/conda && \
    rm -rf ./downloads
```

Minicondaを入れて`/opt/conda`

```dockerfile
# install additional libraries
RUN pip install pandas==2.2.2 openai==1.30.1 tiktoken==0.7.0 &&\
    rm -rf ~/.cache/pip
```
