```python
!python3 -m pip install --upgrade pip
```

    Requirement already satisfied: pip in /usr/local/lib/python3.10/dist-packages (24.0)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
# !pip install openai==1.2.3
!pip install openai==1.3.4
!pip3 install arxiv==2.1.0
!pip install -U duckduckgo-search==4.4

!pip install python-dotenv tiktoken
!pip install pdfplumber
```

    Requirement already satisfied: openai==1.3.4 in /usr/local/lib/python3.10/dist-packages (1.3.4)
    Requirement already satisfied: anyio<4,>=3.5.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (3.7.1)
    Requirement already satisfied: distro<2,>=1.7.0 in /usr/lib/python3/dist-packages (from openai==1.3.4) (1.7.0)
    Requirement already satisfied: httpx<1,>=0.23.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (0.27.0)
    Requirement already satisfied: pydantic<3,>=1.9.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (1.10.13)
    Requirement already satisfied: tqdm>4 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.66.1)
    Requirement already satisfied: typing-extensions<5,>=4.5 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.9.0)
    Requirement already satisfied: idna>=2.8 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (3.4)
    Requirement already satisfied: sniffio>=1.1 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.3.0)
    Requirement already satisfied: exceptiongroup in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.2.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (2022.12.7)
    Requirement already satisfied: httpcore==1.* in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (1.0.4)
    Requirement already satisfied: h11<0.15,>=0.13 in /usr/local/lib/python3.10/dist-packages (from httpcore==1.*->httpx<1,>=0.23.0->openai==1.3.4) (0.14.0)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mRequirement already satisfied: arxiv==2.1.0 in /usr/local/lib/python3.10/dist-packages (2.1.0)
    Requirement already satisfied: feedparser==6.0.10 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (6.0.10)
    Requirement already satisfied: requests==2.31.0 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (2.31.0)
    Requirement already satisfied: sgmllib3k in /usr/local/lib/python3.10/dist-packages (from feedparser==6.0.10->arxiv==2.1.0) (1.0.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2.1.1)
    Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (3.4)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (1.26.13)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2022.12.7)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mRequirement already satisfied: duckduckgo-search==4.4 in /usr/local/lib/python3.10/dist-packages (4.4)
    Requirement already satisfied: docstring-inheritance>=2.1.2 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (2.2.0)
    Requirement already satisfied: click>=8.1.7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (8.1.7)
    Requirement already satisfied: curl-cffi>=0.6.0b7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (0.6.3b1)
    Requirement already satisfied: lxml>=4.9.3 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (4.9.4)
    Requirement already satisfied: nest-asyncio>=1.6.0 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (1.6.0)
    Requirement already satisfied: cffi>=1.12.0 in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (1.16.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2022.12.7)
    Requirement already satisfied: pycparser in /usr/local/lib/python3.10/dist-packages (from cffi>=1.12.0->curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2.21)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mRequirement already satisfied: python-dotenv in /usr/local/lib/python3.10/dist-packages (1.0.1)
    Requirement already satisfied: tiktoken in /usr/local/lib/python3.10/dist-packages (0.6.0)
    Requirement already satisfied: regex>=2022.1.18 in /usr/local/lib/python3.10/dist-packages (from tiktoken) (2023.12.25)
    Requirement already satisfied: requests>=2.26.0 in /usr/local/lib/python3.10/dist-packages (from tiktoken) (2.31.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (2.1.1)
    Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (3.4)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (1.26.13)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (2022.12.7)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mRequirement already satisfied: pdfplumber in /usr/local/lib/python3.10/dist-packages (0.11.0)
    Requirement already satisfied: pdfminer.six==20231228 in /usr/local/lib/python3.10/dist-packages (from pdfplumber) (20231228)
    Requirement already satisfied: Pillow>=9.1 in /usr/local/lib/python3.10/dist-packages (from pdfplumber) (9.3.0)
    Requirement already satisfied: pypdfium2>=4.18.0 in /usr/local/lib/python3.10/dist-packages (from pdfplumber) (4.28.0)
    Requirement already satisfied: charset-normalizer>=2.0.0 in /usr/local/lib/python3.10/dist-packages (from pdfminer.six==20231228->pdfplumber) (2.1.1)
    Requirement already satisfied: cryptography>=36.0.0 in /usr/local/lib/python3.10/dist-packages (from pdfminer.six==20231228->pdfplumber) (41.0.7)
    Requirement already satisfied: cffi>=1.12 in /usr/local/lib/python3.10/dist-packages (from cryptography>=36.0.0->pdfminer.six==20231228->pdfplumber) (1.16.0)
    Requirement already satisfied: pycparser in /usr/local/lib/python3.10/dist-packages (from cffi>=1.12->cryptography>=36.0.0->pdfminer.six==20231228->pdfplumber) (2.21)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
from time import time

class Timer:
    def __init__(self, logger=None, format_str="{:.3f}[s]", prefix=None, suffix=None, sep=" "):

        if prefix: format_str = str(prefix) + sep + format_str
        if suffix: format_str = format_str + sep + str(suffix)
        self.format_str = format_str
        self.logger = logger
        self.start = None
        self.end = None

    @property
    def duration(self):
        if self.end is None:
            return 0
        return self.end - self.start

    def __enter__(self):
        self.start = time()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time()
        out_str = self.format_str.format(self.duration)
        if self.logger:
            self.logger.info(out_str)
        else:
            print(out_str)
```


```python
from contextlib import contextmanager
from time import time

class Timer:
    """処理時間を表示するクラス
    with Timer(prefix=f'pred cv={i}'):
        y_pred_i = predict(model, loader=test_loader)
    
    with Timer(prefix='fit fold={} '.format(i)):
        clf.fit(x_train, y_train, 
                eval_set=[(x_valid, y_valid)],  
                early_stopping_rounds=100,
                verbose=verbose)

    with Timer(prefix='fit fold={} '.format(i), verbose=500):
        clf.fit(x_train, y_train, 
                eval_set=[(x_valid, y_valid)],  
                early_stopping_rounds=100,
                verbose=verbose)
    """
    def __init__(self, logger=None, format_str='{:.3f}[s]', prefix=None, suffix=None, sep=' ', verbose=0):

        if prefix: format_str = str(prefix) + sep + format_str
        if suffix: format_str = format_str + sep + str(suffix)
        self.format_str = format_str
        self.logger = logger
        self.start = None
        self.end = None
        self.verbose = verbose

    @property
    def duration(self):
        if self.end is None:
            return 0
        return self.end - self.start

    def __enter__(self):
        self.start = time()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time()
        out_str = self.format_str.format(self.duration)
        if self.logger:
            self.logger.info(out_str)
        else:
            print(out_str)
```


```python
import openai
import pdfplumber
from openai import OpenAI
import tiktoken
from dotenv import load_dotenv
import os
import json
import arxiv
import datetime as dt

load_dotenv()
```




    True




```python
# MODEL_NAME = "gpt-3.5-turbo-0125"
# MODEL_NAME = "gpt-3.5-turbo-instruct"
MODEL_NAME = "gpt-4-0125-preview"
TEMPERATURE = 0.7
# OpenAIクライアントの初期化
client = OpenAI()
```


```python

def generate_research_questions_and_purpose_with_gpt(objective, num_questions, client):
    # プランナーエージェント: 研究目的から研究質問と検索文字列を生成します
    # Construct the prompt dynamically
    prompt_content = f"You are a helpful assistant capable of generating research questions along with their purposes for a systematic literature review.\n"
    prompt_content = f"Given the research objective: '{objective}', generate {num_questions} distinct research questions, each followed by its specific purpose. 'To examine', or 'To investigate'."
    
    response = client.chat.completions.create(
        # model="gpt-3.5-turbo",
        model="gpt-3.5-turbo-0125",
        messages=[
            {"role": "system", "content": "You are a helpful assistant capable of generating research questions along with their purposes for a systematic literature review."},
            {"role": "user", "content": prompt_content}
        ],
        # response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    result = response.choices[0].message.content
    return {"research_questions": result}

```


```python
objective = "RAG Evaluation Methods"
# objective = "RAG検証方法"

num_questions = 5
```


```python
questions_and_purposes = generate_research_questions_and_purpose_with_gpt(objective, num_questions, client)
print(questions_and_purposes)
```

    {'research_questions': 'Research Question 1: What are the existing methods for evaluating RAG (Red, Amber, Green) status in project management?\nPurpose: To examine the different evaluation techniques and approaches used to assess RAG status in project management and identify their strengths and limitations.\n\nResearch Question 2: How do different industries utilize RAG evaluation methods in project management?\nPurpose: To investigate the application of RAG evaluation methods across various industries and determine any sector-specific adaptations or best practices.\n\nResearch Question 3: What are the key factors influencing the accuracy and reliability of RAG evaluations in project management?\nPurpose: To examine the factors that impact the precision and dependability of RAG assessments in project management and suggest potential strategies for improvement.\n\nResearch Question 4: How do stakeholders perceive the effectiveness of RAG evaluation methods in project management?\nPurpose: To investigate the perspectives and feedback of project stakeholders on the utility and efficacy of RAG evaluation methods to enhance project monitoring and decision-making processes.\n\nResearch Question 5: What are the emerging trends and advancements in RAG evaluation methods for project management?\nPurpose: To explore the latest developments and innovations in RAG evaluation techniques and tools within project management practices and identify potential areas for future research and application.'}



```python
print(questions_and_purposes['research_questions'])
```

    Research Question 1: What are the existing methods for evaluating RAG (Red, Amber, Green) status in project management?
    Purpose: To examine the different evaluation techniques and approaches used to assess RAG status in project management and identify their strengths and limitations.
    
    Research Question 2: How do different industries utilize RAG evaluation methods in project management?
    Purpose: To investigate the application of RAG evaluation methods across various industries and determine any sector-specific adaptations or best practices.
    
    Research Question 3: What are the key factors influencing the accuracy and reliability of RAG evaluations in project management?
    Purpose: To examine the factors that impact the precision and dependability of RAG assessments in project management and suggest potential strategies for improvement.
    
    Research Question 4: How do stakeholders perceive the effectiveness of RAG evaluation methods in project management?
    Purpose: To investigate the perspectives and feedback of project stakeholders on the utility and efficacy of RAG evaluation methods to enhance project monitoring and decision-making processes.
    
    Research Question 5: What are the emerging trends and advancements in RAG evaluation methods for project management?
    Purpose: To explore the latest developments and innovations in RAG evaluation techniques and tools within project management practices and identify potential areas for future research and application.



```python
def extract_search_strings(content):
    possible_operators = ['AND', 'OR', 'NOT', '"']
    search_strings = []
    for line in content.split('\n'):
        if any(op in line for op in possible_operators):
            search_strings.append(line.strip())  # strip()を追加して余分な空白を削除
    return search_strings if search_strings else [content]

def generate_search_string_with_gpt(objective, research_questions, client):
    # 生成された検索文字列を使用して学術データベースをクエリし、関連論文の初期セットを取得します。
    # Removed the explicit instruction for logical operators
    combined_prompt = f"Given the research objective: '{objective}', and the following research questions: {research_questions['research_questions']}, generate two concise search string for identifying relevant literature for literature review.Do not include OR. Use AND if needed."

    response = client.chat.completions.create(
        # model="gpt-3.5-turbo",
        model="gpt-3.5-turbo-0125",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": combined_prompt}
        ],
        # response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    
    content = response.choices[0].message.content
    search_string = extract_search_strings(content)
    return search_string
```


```python
generate_search_string = generate_search_string_with_gpt(objective, questions_and_purposes, client)
print(generate_search_string)
```

    ['Search String 1: ("evaluating RAG status" OR "RAG evaluation methods") AND ("project management" OR "project monitoring")', 'Search String 2: ("RAG evaluation methods" OR "Red Amber Green assessment techniques") AND ("industry applications" OR "sector-specific adaptations")']



```python
# # キーワードの入力
# search_strings = [
#     '"Risk Assessment and Governance evaluation methods"',
#     '"Organizations measure success outcomes Risk Assessment Governance initiatives"'
# ]
```


```python
SYSTEM = """
### 指示 ###
論文の内容を理解した上で，重要なポイントを箇条書きで3点書いてください。

### 箇条書きの制約 ###
- 最大3個
- 日本語
- 箇条書き1個を50文字以内

### 対象とする論文の内容 ###
{text}

### 出力形式 ###
タイトル(和名)

- 箇条書き1
- 箇条書き2
- 箇条書き3
"""
```


```python
# arXivの更新頻度を加味して、365日前の論文を検索
N_DAYS =365

MAX_RESULT = 10  # 取得する論文数の上限
# MODEL_NAME = "gpt-3.5-turbo-0613"
# MODEL_NAME = "gpt-3.5-turbo-1106"
MODEL_NAME = "gpt-3.5-turbo-0125"

# MODEL_NAME = "gpt-3.5-turbo-instruct"
TEMPERATURE = 0.7
# OpenAIクライアントの初期化
client = OpenAI()

# テンプレートを用意
QUERY_TEMPLATE = '%28 ti:%22{}%22 OR abs:%22{}%22 %29 AND submittedDate: [{} TO {}]'

# 検索を行い、結果を取得する関数
def search_arxiv(keyword):
    # Construct the default API client.
    client = arxiv.Client()
    # 2日前からN_DAYS前までの論文を検索
    today = dt.datetime.today() - dt.timedelta(days=2)
    # today = dt.datetime.today()
    
    base_date = today - dt.timedelta(days=N_DAYS)
    query = QUERY_TEMPLATE.format(keyword, keyword, base_date.strftime("%Y%m%d%H%M%S"), today.strftime("%Y%m%d%H%M%S"))

    search = arxiv.Search(
        query=query,
        max_results=MAX_RESULT,
        sort_by=arxiv.SortCriterion.SubmittedDate,
        sort_order=arxiv.SortOrder.Descending,
    )

    results = client.results(search)
    return results

# 論文の要約を取得する関数
def get_summary(result):
    text = f"title: {result.title}\nbody: {result.summary}"

    messages = [
        {"role" : "system", "content" : SYSTEM},
        {"role": "user", "content": text}
    ]
    
    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=messages,
        temperature=TEMPERATURE,
    )
    return response.choices[0].message.content

```


```python
import re
def simplify_search_queries(complex_queries):
    simplified_queries = []

    for query in complex_queries:
        # 数字とピリオドを除去して、クエリの本体だけを抽出
        clean_query = re.sub(r'^\d+\.\s*', '', query)
        
        # 括弧を除去
        clean_query = re.sub(r'[()"]', '', clean_query)
        
        # 'AND' と 'OR' で分割
        split_queries = re.split(r'\sAND\s|\sOR\s', clean_query)
        
        # 分割したクエリをリストに追加
        for sub_query in split_queries:
            sub_query = sub_query.strip()
            if sub_query and sub_query not in simplified_queries:
                simplified_queries.append(sub_query)
                
    return simplified_queries
```


```python
simplified_queries = simplify_search_queries(generate_search_string)
# 複数の単語の間のスペースをハイフンに置換
# modified_queries = [query.replace(" ", "") for query in simplified_queries]
modified_queries = [query.replace(" ", "_") for query in simplified_queries]
# modified_queries = [query.split(" ") for query in simplified_queries]

for query in modified_queries:
    print(query)
```

    Search_String_1:_evaluating_RAG_status
    RAG_evaluation_methods
    project_management
    project_monitoring
    Search_String_2:_RAG_evaluation_methods
    Red_Amber_Green_assessment_techniques
    industry_applications
    sector-specific_adaptations



```python
simplified_queries
```




    ['Search String 1: evaluating RAG status',
     'RAG evaluation methods',
     'project management',
     'project monitoring',
     'Search String 2: RAG evaluation methods',
     'Red Amber Green assessment techniques',
     'industry applications',
     'sector-specific adaptations']




```python
import arxiv
# デフォルトのAPIクライアントを構築する。
arxivclient = arxiv.Client()

# 検索条件を指定する。
# query: 検索キーワードを指定する。ここでは "GPT-4" を指定。
# max_results: 取得する論文の最大件数を指定する。ここでは 10 件。
# sort_by: 論文の並び替え条件を指定する。ここでは投稿日時の降順（最新順）。

# for query in modified_queries:
for query in simplified_queries:
    print(query)
    search = arxiv.Search(
        query = query,
        max_results = 10,
        sort_by = arxiv.SortCriterion.SubmittedDate
    )

    # 検索を実行し、結果を取得する。
    results = arxivclient.results(search)
    # 取得した論文のタイトルを1件ずつ表示する。
    for r in results:
        print(f"\n{str(r.title)}\n{get_summary(r)}\n{r}")
    print("-" * 50)
```

    Search String 1: evaluating RAG status
    
    Holo-Relighting: Controllable Volumetric Portrait Relighting from a Single Image
    ホロ・リライティング: 単一画像から制御可能なボリューメトリックポートレートのリライティング
    
    - 単一画像から新しい視点と照明を合成可能
    - ヘッドポーズに依存した照明効果の生成
    - 物理的な照明の事前知識なしで非ランバート照明効果を生成
    http://arxiv.org/abs/2403.09632v1
    
    Generating functional of correlators of twist-$2$ operators in $\mathcal{N} = 1$ SUSY Yang-Mills theory, I
    $\mathcal{N} = 1$ SUSY Yang-Mills理論におけるtwist-$2$演算子の相関関数の生成汎関数
    
    - twist-$2$演算子の相関関数の生成汎関数を計算
    - 大$N$展開のleadingとnext-to-leading orderで計算
    - 非摂動解への強いUV漸近制約を設定
    http://arxiv.org/abs/2403.09617v1
    
    pARam: Leveraging Parametric Design in Extended Reality to Support the Personalization of Artifacts for Personal Fabrication
    pARam: パラメトリックデザインを拡張現実に活用して、個人製作用のアーティファクトのパーソナライゼーションをサポートする
    
    - 拡張現実とパラメトリックデザインを組み合わせたpARamは、複雑な3Dモデリングの必要性を排除し、ジェスチャーや照明推定などの実践的な入力を通じて、個人製作のためのアーティファクトのインタラクティブな構成を可能にする。
    - pARamを使用したユーザーは、コンテキストに関連するパラメータを選択し、環境を考慮して設定を行うことに成功し、その効果を示した。
    - パラメトリックデザインの拡張現実における活用は、個人製作のための複雑なデザイン手法を合理化する一方、適切な表現性を保持する上での見通しと課題について示唆している。
    http://arxiv.org/abs/2403.09607v1
    
    Multi-Fidelity Bayesian Optimization With Across-Task Transferable Max-Value Entropy Search
    多重信頼性ベイズ最適化において、将来のタスクにも適用可能な新しい情報理論的取得関数が導入された。
    
    - 多重信頼性ブラックボックス最適化戦略は、最適な値や解に関する情報を最大化することを目的としている。
    - 未来のタスクに適用可能な情報を収集する必要性と現在のタスクに関する情報を取得する必要性をバランスさせる。
    - 提案手法は、未来のタスクに対応するための取得戦略を含み、最適化効率を大幅に改善できることが示された。
    http://arxiv.org/abs/2403.09570v1
    
    A perturbative approach to the non-relativistic string spectrum
    A非相対論的な文字列のスペクトルに対する摂動論的アプローチ
    
    - 非相対論的文字列のスペクトルを見つけるために摂動論的手法を使用
    - アクションのボソンセクターを摂動し、BMN様の折り畳まれた文字列解を考える
    - 相互作用項がフィールド再定義により消失し、AdSバックグラウンドでの質量と質量なしの自由場の組み合わせで記述されることを示す
    http://arxiv.org/abs/2403.09563v1
    
    A targeted radio pulsar survey of redback candidates with MeerKAT
    タイトル：MeerKATを用いたレッドバック候補のターゲテッドな電波パルサー調査
    
    - レッドバック候補のうち3つの新たな電波ミリ秒パルサーを発見
    - レッドバック候補の1つが長期間にわたり電波放射を吸収することが確認され、その対象の移り変わりを明らかに
    - 電波タイミングによって、3つのパルサーからガンマ線パルスが検出され、15年間のタイミング解が得られる
    http://arxiv.org/abs/2403.09553v1
    
    How do Machine Learning Projects use Continuous Integration Practices? An Empirical Study on GitHub Actions
    機械学習プロジェクトにおける継続的インテグレーションの実践について：GitHub Actionsに関する実証的研究
    
    - MLプロジェクトは通常よりも長いビルド時間を必要とし、中規模のMLプロジェクトは非MLプロジェクトよりも低いテストカバレッジを示す。
    - 小規模および中規模のMLプロジェクトは、非MLプロジェクトと比較してビルド時間が増加する傾向が高い。
    - MLプロジェクトにおけるCIの実践に関する定性的分析では、CIビルド実行と状態、CIテスト、CIインフラストラクチャなどのテーマが含まれる。
    http://arxiv.org/abs/2403.09547v1
    
    Artificial Bugs for Crowdsearch
    人工バグによるクラウドサーチ(和名)
    
    - バグ報奨金プログラムに人工バグを挿入することで、本物のバグを探すインセンティブを高める
    - 人工バグは1つ挿入するだけで効率的な利益をもたらす
    - デザイナーが本物のバグを見つけることに高い評価を置く場合や、予算が不十分な場合に特に有益
    http://arxiv.org/abs/2403.09484v1
    
    Edge-apexing in hereditary classes of graphs
    エッジ-エーペキシングにおけるグラフの世代的クラス
    
    - エッジ-エーペキシングは、クラス$\mathcal{G}$が禁止された誘導部分グラフを有限個持つ場合、エーペックスからの距離が1以下のグラフのクラス$G^{epex}$も有限個の禁止誘導部分グラフを持つことを示す。
    - コーグラフの世代的クラスは、補集合と直和から生成されるすべてのグラフからなる。エッジ-エーペキシングコーグラフの禁止誘導部分グラフの個数は8に制限され、コンピュータ検索によってそれらのすべてが見つかる。
    http://arxiv.org/abs/2403.09456v1
    
    Search for Higgs boson pair production in the bbWW decay mode in proton-proton collisions at $\sqrt{s}$ = 13 TeV
    ヒッグス粒子対生成の検索: $bbWW$崩壊モードにおける13 TeVプロトン-プロトン衝突
    
    - HH生成断面積の上限値が標準模型の予測値の14(18)倍となり、非共鳴HH生成の断面積に制限を設定。
    - ヒッグス粒子結合変調子や異常ヒッグス粒子結合シナリオに関する断面積の制限値を提示。
    - 質量範囲250-900 GeVのスピン0およびスピン2共鳴を介したHH生成に対する制限を設定。
    http://arxiv.org/abs/2403.09430v1
    --------------------------------------------------
    RAG evaluation methods
    
    SCP-Diff: Photo-Realistic Semantic Image Synthesis with Spatial-Categorical Joint Prior
    SCP-Diff: 空間カテゴリー共同事前分布を用いた写真実在的な意味画像合成
    
    - 現在の最良手法であるGANに基づくSemantic image synthesis (SIS) は、望ましい品質レベルにまだ達していない。
    - ControlNetの結果には、大きな意味領域内の奇妙なサブ構造の存在と、内容が意味マスクとの整合性が欠けるという2つの主要な問題がある。
    - SCP-Diffは、空間、カテゴリー、そして新しい空間カテゴリー共同事前分布を含むSIS向けの特定のノイズ事前分布を開発し、その結果、CityscapesでFID 10.53、ADE20Kで12.66を達成した。
    http://arxiv.org/abs/2403.09638v1
    
    GaussianGrasper: 3D Language Gaussian Splatting for Open-vocabulary Robotic Grasping
    GaussianGrasper: 3D言語ガウス散乱を用いたロボットの掴むためのオープンボキャブラリー
    
    - 3Dシーンをガウスプリミティブのコレクションとして明示的に表現する
    - Efficient Feature Distillation (EFD)モジュールによる言語埋め込みの効率的な抽出
    - ノーマルに誘導された掴むモジュールを使用して最適な掴む姿勢を選択
    http://arxiv.org/abs/2403.09637v1
    
    Dynamic Memory Compression: Retrofitting LLMs for Accelerated Inference
    動的メモリ圧縮：高速推論のためのLLMの後付け
    
    - Dynamic Memory Compression (DMC)はオンラインのキー・バリューキャッシュ圧縮を提案
    - DMCは異なるヘッドやレイヤーで異なる圧縮率を適用することを学習
    - DMCは元のダウンストリームパフォーマンスを保持しつつ、最大4倍のキャッシュ圧縮を実現
    http://arxiv.org/abs/2403.09636v1
    
    OneTracker: Unifying Visual Object Tracking with Foundation Models and Efficient Tuning
    OneTracker: Foundationモデルと効率的なチューニングで視覚オブジェクトトラッキングを統合
    
    - 視覚オブジェクトトラッキングは、初期フレームでの外観に基づいて各フレームの対象オブジェクトをローカライズすることを目指す。
    - OneTrackerは、Foundation TrackerとPrompt Trackerから構成され、他のモデルを凌駕し、最先端のパフォーマンスを達成。
    - OneTrackerは、大規模なプリトレーニングを行い、安定した能力を持つFoundation Trackerを構築し、パラメーター効率の良いファインチューニングを実現。
    http://arxiv.org/abs/2403.09634v1
    
    Holo-Relighting: Controllable Volumetric Portrait Relighting from a Single Image
    Holo-Relighting: 単一画像からの制御可能な体積的ポートレート・リライティング
    
    - Holo-Relightingは単一画像から新しい視点と照明を合成できる。
    - EG3Dを活用して、３次元のジオメトリと外観を復元する。
    - ホロ・リライティングは、照明、視点、ヘッドポーズを制御可能にする。
    http://arxiv.org/abs/2403.09632v1
    
    Quiet-STaR: Language Models Can Teach Themselves to Think Before Speaking
    Quiet-STaR: 言語モデルは話す前に考えることを自己学習できる
    
    - STaRでは少数の例から合理的思考を学ぶが、Quiet-STaRは任意のテキストで合理的思考を推論する
    - LMが内部思考を生成・使用する方法を学ぶ課題を解決し、難しいトークンの予測精度向上に貢献
    - Internetテキストでの事前学習後、GSM8KやCommonsenseQAでゼロショットで改善し、難しいトークンのperplexityも向上
    http://arxiv.org/abs/2403.09629v1
    
    Video Mamba Suite: State Space Model as a Versatile Alternative for Video Understanding
    動画理解におけるState Space Modelの重要性
    
    - State Space Model(Mamba)は長いシーケンスのモデリングに成功しており、動画モデリングにも有望な特性を示す。
    - MambaはTransformersに代わる動画理解の選択肢として優れている可能性がある。
    - Mambaは動画専用および動画-言語タスクの両方で強力な潜在能力を示し、効率性と性能のトレードオフも期待される。
    http://arxiv.org/abs/2403.09626v1
    
    Make-Your-3D: Fast and Consistent Subject-Driven 3D Content Generation
    Make-Your-3D: 3Dコンテンツの迅速で一貫性のある主題駆動生成
    
    - 既存の3D生成手法では、異なるプロンプト間で主題駆動の3Dコンテンツを生成することが難しい。
    - Make-Your-3Dは、単一の画像とテキスト記述からわずか5分で高品質かつ一貫した3Dコンテンツを個人化できる。
    - 著者らの手法は、主題に合った分布への調整を行い、未知の主題画像からのテキスト駆動変更が可能。
    http://arxiv.org/abs/2403.09625v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusion for 3D Human Recovery
    
    - 3D人体ポーズと形状再構築のための逆問題解決手法
    - 画像観測に人体モデルを適合させるが、スコアガイダンスによって逆問題を解決
    - ScoreHMRは最適化手法に比べて、3つの設定/アプリケーションで優れた性能を示す
    http://arxiv.org/abs/2403.09623v1
    
    Glyph-ByT5: A Customized Text Encoder for Accurate Visual Text Rendering
    カスタマイズされたテキストエンコーダーによる正確な視覚テキストレンダリング
    
    - テキストエンコーダーの不足による視覚テキストレンダリングの課題
    - Glyph-ByT5の開発により、デザイン画像生成におけるテキストレンダリングの正確性が大幅に向上
    - Glyph-SDXLモデルの登場により、自動多行レイアウトでの高いスペル精度を実現
    http://arxiv.org/abs/2403.09622v1
    --------------------------------------------------
    project management
    
    SCP-Diff: Photo-Realistic Semantic Image Synthesis with Spatial-Categorical Joint Prior
    SCP-Diff: 空間カテゴリー共同事前分布を用いた写真リアルな意味画像合成
    
    - 現在の最高水準であるGANに基づくSISは、望ましい品質には至っていない。
    - ControlNetの結果には、大きな意味領域内の奇妙なサブ構造と意味マスクとのコンテンツの不一致がある。
    - SCP-Diffは、特定のノイズ事前分布を開発し、優れた成果を上げている。
    http://arxiv.org/abs/2403.09638v1
    
    3D-VLA: A 3D Vision-Language-Action Generative World Model
    3D-VLA: 3D Vision-Language-Action Generative World Model
    
    - 2D入力に頼らず、3D世界との統合を実現する
    - 3D知覚、推論、アクションを結びつける
    - 実世界の計画における理由付け、多様な生成、計画能力を向上
    http://arxiv.org/abs/2403.09631v1
    
    Make-Your-3D: Fast and Consistent Subject-Driven 3D Content Generation
    Make-Your-3D: 高速で一貫した主題駆動の3Dコンテンツ生成
    
    - 既存の3D生成手法では、異なるプロンプトを使って主題駆動の3Dコンテンツを生成するのが難しい
    - Make-Your-3Dは、一枚の画像とテキストの説明から5分以内で高品質で一貫性のある3Dコンテンツを作成する
    - マルチビューディフュージョンモデルと特定の2D生成モデルの分布を調和させ、望ましい3D主題の分布に合わせる
    http://arxiv.org/abs/2403.09625v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusionによる3D人体復元
    
    - 画像観測に対するスコア誘導により、拡散モデルの潜在空間でモデルと画像の整合を達成。
    - 画像からの人体モデルパラメータの条件付き分布を捉えた拡散モデルを使用。
    - ScoreHMRは再トレーニング不要で逆問題を解決し、3つの応用設定で最適化手法を凌駕する。
    http://arxiv.org/abs/2403.09623v1
    
    PosSAM: Panoptic Open-vocabulary Segment Anything
    PosSAM: Panoptic Open-vocabulary Segment Anything
    
    - SAMの制限を解決するために、PosSAMはLDPモジュールとMASEアルゴリズムを提案
    - PosSAMはSAMとCLIPの特徴を組み合わせ、高い汎化性能を実現
    - COCO to ADE20KとADE20K to COCOの両方で、既存手法を大幅に上回る性能
    http://arxiv.org/abs/2403.09620v1
    
    PrompTHis: Visualizing the Process and Influence of Prompt Editing during Text-to-Image Creation
    PrompTHis: テキストから画像への生成過程とプロンプト編集の影響を可視化
    
    - プロンプト編集の過程を可視化するためのImage Variant Graphの提案
    - ユーザーがプロンプト履歴を通じて探索し、プロンプト変更が出力画像に与える影響を理解
    - PrompTHisはプロンプト履歴のレビューと分析を通じて、ユーザーが出力画像の生成を効果的に制御
    http://arxiv.org/abs/2403.09615v1
    
    Network-Controlled Repeater -- An Introduction
    ネットワーク制御中継器--導入
    
    - 5Gネットワークでは、ミリ波スペクトルがスループット、信頼性、遅延などの向上をもたらすが、ブロッキングの影響も高まり、カバレッジを制限する課題も。
    - ネットワーク制御中継器(NCR)は、カバレッジ問題を克服する手法として低複雑性のネットワークノードであり、適切なネットワーク計画とビームフォーミング設計により、BSの死角をカバーする魅力的な解決策となる。
    - 3GPP Rel-18で合意されたNCRの主要仕様を提示し、都市シナリオでの異なるNCR展開を分析し、その性能を他の展開と比較。
    http://arxiv.org/abs/2403.09601v1
    
    DungeonMaker: Embedding Tangible Creation and Destruction in Hybrid Board Games through Personal Fabrication Technology
    DungeonMaker: ハイブリッドボードゲームにおける物質的な創造と破壊を個人製作技術を通じて組み込む
    
    - DungeonMakerは物語を語り、デジタルゲームボードをレーザーカッターに投影する。
    - プレイヤーが作成したアーティファクトを評価する。
    - レーザーがプレイヤーや非プレイヤーのフィギュアを移動させ、物理的に損傷させる。
    http://arxiv.org/abs/2403.09592v1
    
    Are you a robot? Detecting Autonomous Vehicles from Behavior Analysis
    ロボットかどうかを検出するための行動分析から自律車両を特定
    
    - 自律車両と人間運転車両を自動的に識別する必要性
    - カメラ画像と状態情報を活用して自律車両を特定するフレームワークの提案
    - 動画クリップの分析により自律車両を80%の精度で識別可能であり、状態情報がある場合には93%まで向上
    http://arxiv.org/abs/2403.09571v1
    
    PaperBot: Learning to Design Real-World Tools Using Paper
    PaperBot: 紙を使用して実世界のツールを設計する方法を学習する
    
    - 紙を使用し、ツールを設計・使用する方法を直接学習するアプローチ
    - 紙飛行機の最大飛行距離や最大把持力を持つペーパーグリッパーを学習する
    - 折りたたみ、切断、ダイナミックな操作を組み合わせてツールの設計・使用を最適化
    http://arxiv.org/abs/2403.09566v1
    --------------------------------------------------
    project monitoring
    
    SCP-Diff: Photo-Realistic Semantic Image Synthesis with Spatial-Categorical Joint Prior
    SCP-Diff: 空間-カテゴリー共同事前知識を用いた写真リアルな意味画像合成
    
    - GANに基づくSISの品質向上課題
    - 既存手法の問題点の特定と対応
    - SCP-Diffの高い性能(FID: 10.53 on Cityscapes, 12.66 on ADE20K)
    http://arxiv.org/abs/2403.09638v1
    
    3D-VLA: A 3D Vision-Language-Action Generative World Model
    3D-VLA: 3Dビジョン・言語・行動生成ワールドモデル
    
    - 3D-VLAは3D知覚、推論、行動をシームレスに結びつけるための新しいモデルを提案する。
    - 3D-VLAは大規模言語モデルをベースに構築され、生成能力を持つ拡散モデルを導入している。
    - 3D-VLAは実世界応用において、理論、多様な生成、計画能力を大幅に向上させる実験結果を示している。
    http://arxiv.org/abs/2403.09631v1
    
    Make-Your-3D: Fast and Consistent Subject-Driven 3D Content Generation
    Make-Your-3D: 主体に基づく3Dコンテンツ生成の高速かつ一貫性のある手法
    
    - 既存の3D生成方法では、異なるプロンプト間で主体に基づく3Dコンテンツを作成することが困難である
    - Make-Your-3Dは、単一の画像とテキスト説明から5分以内で高品質かつ一貫性のある3Dコンテンツを個人化できる
    - 多視点拡散モデルと特定のアイデンティティに基づく2D生成モデルの分布を調和させ、所望の3D主体の分布と整合させる
    http://arxiv.org/abs/2403.09625v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusionによる3D人物復元
    
    - 3D人物ポーズと形状再構築の逆問題を解決するためのScoreHMRアプローチ
    - 画像観測に人体モデルを適合させる逆問題を、拡散モデルの潜在空間でスコアガイドを用いて解決
    - ScoreHMRは画像観測との整合性を拡散モデルの潜在空間でスコアガイダンスによって実現
    http://arxiv.org/abs/2403.09623v1
    
    PosSAM: Panoptic Open-vocabulary Segment Anything
    PosSAM: Panoptic Open-vocabulary Segment Anything
    
    - SAMとCLIPを統合したPosSAMは、空間的マスク生成と物体クラス認識の両方に優れ、オーバーセグメンテーションを軽減する。
    - LDPモジュールは、SAMとCLIPの特徴を活用し、偏見のないオープンボキャブラリー分類を実現する。
    - MASEアルゴリズムは、マスクの品質を向上させ、推論時の分類性能を向上させる。
    http://arxiv.org/abs/2403.09620v1
    
    PrompTHis: Visualizing the Process and Influence of Prompt Editing during Text-to-Image Creation
    PrompTHis: テキストから画像を生成する際のプロンプト編集のプロセスと影響を可視化
    
    - プロンプト履歴を可視化するImage Variant Graphは、プロンプトと画像の比較や編集履歴の探索をサポートする。
    - PrompTHisシステムは、プロンプト履歴のレビューや分析を通じて、ユーザーがプロンプト変更の影響を理解し、画像生成を効果的に制御できるようにする。
    - ユーザースタディによると、PrompTHisはユーザーがプロンプト履歴を確認し、モデルを理解し、創造プロセスを計画するのに役立つことが示された。
    http://arxiv.org/abs/2403.09615v1
    
    Network-Controlled Repeater -- An Introduction
    ネットワーク制御リピーターの紹介
    
    - 5Gネットワークではミリ波スペクトルを活用し、NCRがカバレッジ問題を解決
    - 3GPP Rel-18でのNCR仕様を提示し、都市シナリオでの性能を検証
    - 適切なネットワーク計画とビームフォーミング設計により、NCRはBSの死角をカバー
    http://arxiv.org/abs/2403.09601v1
    
    A comprehensive study of orbital evolution of LMC X-4: Existence of a second derivative of the orbital period
    論文のタイトル: LMC X-4の軌道進化の包括的研究: 軌道周期の2次導関数の存在
    
    - LMC X-4の軌道周期が0.8 Myrの時間スケールで進化していることが示された。
    - 今回初めて、LMC X-4において軌道周期の2次導関数の存在が確認された。
    - 中間食時刻データとパルスタイミングデータを使用して得られた軌道進化の独立した解析は一致し、連星系の離心率に0.009の上限を設定した。
    http://arxiv.org/abs/2403.09595v1
    
    DungeonMaker: Embedding Tangible Creation and Destruction in Hybrid Board Games through Personal Fabrication Technology
    DungeonMaker: ハイブリッドボードゲームにおける物理的創造と破壊の組み込みを通じた個人製作技術
    
    - DungeonMakerは物理的要素とデジタルゲーム要素を結びつけ、プレイヤーの作成物を評価する
    - レーザーカッターにデジタルゲーム盤を投影し、フィギュアを物理的にダメージを与える
    - 評価結果はDungeonMakerが楽しい体験を提供し、プレイヤーのフィギュアへのつながりをサポートし、製作に興味を持つ可能性を示唆
    http://arxiv.org/abs/2403.09592v1
    
    Are you a robot? Detecting Autonomous Vehicles from Behavior Analysis
    ロボットかどうかを自動的に検出するためのフレームワーク
    
    - 自動車が自律車両かどうかをカメラ画像と状態情報を活用して自動的にプロファイリングする必要性
    - 車両同士の協力に基づいてデータ共有し、機械学習モデルを用いて自律車両を識別するフレームワークを提案
    - ビデオクリップの分析により、自動的に80%の精度で自律車両と人間運転車両を識別可能であり、状態情報があれば93%に向上する。
    http://arxiv.org/abs/2403.09571v1
    --------------------------------------------------
    Search String 2: RAG evaluation methods
    
    SCP-Diff: Photo-Realistic Semantic Image Synthesis with Spatial-Categorical Joint Prior
    SCP-Diff: 空間カテゴリー共同事前分布を用いた写真実感的な意味画像合成
    
    - 現行の最良手法はGANに基づくが、望ましい品質には至っていない。
    - ControlNetの結果において主に問題となるのは、奇妙なサブ構造と意味的マスクとの不整合。
    - SCP-Diffアプローチは、空間、カテゴリー、そして新規な空間-カテゴリー共同事前分布を包括し、優れた結果を達成。
    http://arxiv.org/abs/2403.09638v1
    
    GaussianGrasper: 3D Language Gaussian Splatting for Open-vocabulary Robotic Grasping
    GaussianGrasper: 3D言語ガウススプラッティングによるオープンボキャブラリー・ロボティックグラスピング
    
    - 3Dシーンをガウスプリミティブのコレクションとして表現
    - Efficient Feature Distillation (EFD)モジュールを提案
    - ノーマルガイドグラスプモジュールによる最適なグラスプ位置の選択
    http://arxiv.org/abs/2403.09637v1
    
    Dynamic Memory Compression: Retrofitting LLMs for Accelerated Inference
    動的メモリ圧縮：高速推論のためのLLMの改造
    
    - 推論時にオンラインでキー・バリューキャッシュを圧縮する方法
    - 異なるヘッドやレイヤーで異なる圧縮率を適用することを学習
    - キャッシュ圧縮率を最大4倍にしても元の性能を維持
    http://arxiv.org/abs/2403.09636v1
    
    OneTracker: Unifying Visual Object Tracking with Foundation Models and Efficient Tuning
    OneTracker: Foundationモデルと効率的なチューニングでビジュアルオブジェクトトラッキングを統一
    
    - 初めにFoundation Trackerで大規模な事前トレーニングを行い、安定した能力を獲得
    - Prompt TrackerはFoundation Trackerを凍結し、追加のトレーニングパラメータを調整してRGB+Xトラッキングタスクに適したパラメータ効率的なfine-tuningを実現
    - OneTrackerは他のモデルを凌駕し、11のベンチマークを通じて6つの人気トラッキングタスクで最先端の性能を達成
    http://arxiv.org/abs/2403.09634v1
    
    Holo-Relighting: Controllable Volumetric Portrait Relighting from a Single Image
    Holo-Relighting: 単一画像からの制御可能なボリューメトリック肖像写真のリライティング
    
    - 1枚の画像から新しい視点と照明を合成するボリューメトリックリライティング手法
    - ヘッドポーズに基づいた照明効果を可能にする条件付きのリライティングモジュール
    - 物理的な照明の事前知識なしで複雑な非ランバーティアン照明効果を生成
    http://arxiv.org/abs/2403.09632v1
    
    Quiet-STaR: Language Models Can Teach Themselves to Think Before Speaking
    Quiet-STaR: 言語モデルは話す前に考えることを自己学習できる
    
    - STaRでは、質問応答の少ない例から合理的な考え方を学ぶが、Quiet-STaRでは文脈に応じて理由を生成するように学習。
    - 計算コスト、内部思考の生成方法、個々のトークンを超えた予測の必要性など、主要な課題に対処する。
    - 無Fine-tuningでGSM8KとCommonsenseQAでゼロショット改善を達成し、自然文の難しいトークンのPerplexityも改善。
    http://arxiv.org/abs/2403.09629v1
    
    Video Mamba Suite: State Space Model as a Versatile Alternative for Video Understanding
    ビデオ理解における状態空間モデルの汎用的代替手段
    
    - ビデオモデリングにおいて、状態空間モデル（Mamba）は長いシーケンスのモデリング成功を拡張する有望な特性を示す。
    - 14のモデル/モジュールからなるVideo Mamba Suiteを導出し、12のビデオ理解タスクで評価。
    - Mambaはビデオのみならずビデオ-言語タスクでも強力な潜在能力を示し、有望な効率-性能のトレードオフを示す。
    http://arxiv.org/abs/2403.09626v1
    
    Make-Your-3D: Fast and Consistent Subject-Driven 3D Content Generation
    Make-Your-3D: 高品質かつ一貫した主題駆動型3Dコンテンツ生成
    
    - 既存の3D生成手法では多様なプロンプトを用いた主題駆動型3Dコンテンツの作成が困難である
    - Make-Your-3Dはたった1枚の画像とテキスト説明から5分以内で高品質かつ一貫した3Dコンテンツを生成する
    - 著者らの手法は、モデルの分布を調和させることで、高品質で主題に特化した3Dコンテンツを生成可能
    http://arxiv.org/abs/2403.09625v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusionを用いた3Dヒューマンリカバリー
    
    - ScoreHMRは、画像観測に対して得られるスコアのガイダンスを介して、拡散モデルの潜在空間でのアライメントにより、3Dヒューマンポーズと形状の再構築の逆問題を解決する手法。
    - ScoreHMRは、再トレーニングが不要なタスク非特化の拡散モデルにより、様々なアプリケーションにおける逆問題を効果的に解決する。
    - ScoreHMRは、シングルフレームモデル適合、複数の非キャリブレーションビューからの再構築、ビデオシーケンス内の人物再構築といった3つの設定/アプリケーションにおいて、人気のベンチマークで最適化ベースラインを常に上回る。
    http://arxiv.org/abs/2403.09623v1
    
    Glyph-ByT5: A Customized Text Encoder for Accurate Visual Text Rendering
    Glyph-ByT5: 正確な視覚テキストレンダリングのためのカスタマイズテキストエンコーダ
    
    - テキストエンコーダに必要な要件: 文字認識とグリフとの整合性
    - Glyph-ByT5はByT5エンコーダを微調整し、グリフ-テキストのデータセットを使用して作成
    - Glyph-SDXLモデルの導入により、デザイン画像生成におけるテキストの正確性が飛躍的に向上
    http://arxiv.org/abs/2403.09622v1
    --------------------------------------------------
    Red Amber Green assessment techniques
    
    GaussianGrasper: 3D Language Gaussian Splatting for Open-vocabulary Robotic Grasping
    GaussianGrasper: 3D言語ガウススプラッティングによるオープンボキャブラリーロボットグラスピング
    
    - ガウススプラッティングを使用して、シーンをガウス原理の集合として明示的に表現
    - Efficient Feature Distillation (EFD) モジュールを導入し、効率的かつ正確に言語埋め込みを抽出
    - リアルワールドの実験により、GaussianGrasperが言語指示による物体掴みを可能にし、新しい解決策を提供
    http://arxiv.org/abs/2403.09637v1
    
    Holo-Relighting: Controllable Volumetric Portrait Relighting from a Single Image
    Holo-Relighting: 単一画像からの制御可能な体積ポートレート照明
    
    - 3D GAN（EG3D）を利用して入力ポートレートからジオメトリと外観を再構築し、3D感知特徴の形で照明を生成する。
    - 三面体形式のリライト3D表現を予測し、任意の視点にレンダリングできる。
    - ヘッドポーズに応じたライティング効果を可能にし、物理的なライティング先行知識を使用せずに複雑な非ランバート照明効果を生成できる。
    http://arxiv.org/abs/2403.09632v1
    
    Quiet-STaR: Language Models Can Teach Themselves to Think Before Speaking
    Quiet-STaR: 言語モデルは話す前に考えることを自己学習できる
    
    - STaRでは、少数の例から合理的な考え方を学び、正しい答えに至る過程を学習
    - Quiet-STaRでは、言語モデルが未来のテキストを説明するためにrationalesを生成することを学習
    - モデルの予測能力を改善し、難しい質問に直接答える能力を向上させる zero-shot 改善を達成
    http://arxiv.org/abs/2403.09629v1
    
    Video Mamba Suite: State Space Model as a Versatile Alternative for Video Understanding
    ビデオ理解のための状態空間モデルの汎用的代替手段
    
    - Mambaは長いシーケンスモデリングの成功をビデオモデリングに拡張する有望な特性を示す。
    - 14のモデル/モジュールで構成されたビデオMamba Suiteの提案。
    - ビデオのみおよびビデオ-言語タスクの両方でMambaの強力なポテンシャルと有望な効率性能トレードオフが明らかにされた。
    http://arxiv.org/abs/2403.09626v1
    
    Physically motivated improvements of Variational Quantum Eigensolvers
    物理的動機に基づく変分量子固有値ソルバーの改善
    
    - ADAPT-VQEの効率向上を図るために、状態の準備を最適化し、回路を浅くする。
    - 電子構造理論から得た知見を活用して、正確な解に収束を早める。
    - H4モデルや水分子において、物理的動機に基づく戦略がADAPT-VQEの効率を向上させることを実証。
    http://arxiv.org/abs/2403.09624v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusion for 3D Human Recovery
    
    - 3D人物の姿勢と形状再構築の逆問題を解決するScore-Guided Human Mesh Recovery（ScoreHMR）を提案
    - 画像観測に人体モデルを適合させる逆問題を最適化技術で解決する代わりに、得点による誘導を用いた拡散モデルの潜在空間で画像観測との整合性を実現
    - ScoreHMRは最適化ベースラインを常に上回り、異なるアプリケーションで逆問題を効果的に解決可能。
    http://arxiv.org/abs/2403.09623v1
    
    Minimax Optimal and Computationally Efficient Algorithms for Distributionally Robust Offline Reinforcement Learning
    分布的に堅牢なオフライン強化学習のためのミニマックス最適かつ計算効率的なアルゴリズム
    
    - 環境の摂動に対して堅牢なポリシー訓練を実現するため、関数近似が必要。
    - モデルの不確実性により、関数近似に本質的な非線形性と計算負荷が導入され、独自の課題をもたらす。
    - 堅牢なオフライン強化学習における関数近似は、通常のオフライン強化学習よりも本質的に異なり、おそらく難しい。
    http://arxiv.org/abs/2403.09621v1
    
    PosSAM: Panoptic Open-vocabulary Segment Anything
    PosSAM: Panoptic Open-vocabulary Segment Anything
    
    - SAMの限界を解消し、クラス情報の認識と過剰セグメンテーションを改善
    - LDPモジュールを導入し、オープンボキャブラリー分類を提案
    - MASEアルゴリズムを使用してマスクの品質を向上、性能を向上
    http://arxiv.org/abs/2403.09620v1
    
    Optimistic Verifiable Training by Controlling Hardware Nondeterminism
    最適化された検証可能なトレーニング方法
    
    - ハードウェアの非決定性を制御することで信頼性の高いトレーニングを実現
    - NVIDIA GPUを使用してFP32精度でResNet-50とGPT-2モデルの正確なトレーニング複製を達成
    - 証明ベースのシステムに比べてストレージと時間コストを大幅に削減
    http://arxiv.org/abs/2403.09603v1
    
    Network-Controlled Repeater -- An Introduction
    ネットワーク制御中継器--導入
    
    - 5G無線セルラーネットワークでは、ミリ波スペクトルがスループット、信頼性、遅延などの向上をもたらす可能性がある。
    - ネットワーク制御中継器(NCR)は、ブロッキングの影響を低減し、カバレッジ問題を解決するための手法として注目されている。
    - 3GPP Rel-18で合意されたNCRの主な仕様を提示し、都市シナリオでのNCR展開を分析し、その性能を比較している。
    http://arxiv.org/abs/2403.09601v1
    --------------------------------------------------
    industry applications
    
    3D-VLA: A 3D Vision-Language-Action Generative World Model
    3D-VLA: 3Dビジョン・言語・アクション生成ワールドモデル
    
    - 現在のVLAモデルは2D入力に依存しており、3D物理世界との統合が不足している。
    - 3D-VLAは3D知覚、推論、アクションをリンクする新しい組み込み基盤モデルを導入する。
    - 3D-VLAは多大な3D関連情報からなる大規模なデータセットを用いて実験を行い、実世界の応用における潜在能力を示す。
    http://arxiv.org/abs/2403.09631v1
    
    Generalized Predictive Model for Autonomous Driving
    自動運転向け汎用予測モデル
    
    - 大規模ビデオ予測モデルを導入
    - Webから大量データ取得し、高品質なテキストとペアに
    - GenADは時空間推論ブロックを持ち、ゼロショットで汎用性を示す
    http://arxiv.org/abs/2403.09630v1
    
    Score-Guided Diffusion for 3D Human Recovery
    Score-Guided Diffusion for 3D Human Recovery
    
    - 3D人体姿勢と形状の逆問題を解決するScoreHMRアプローチ
    - 潜在空間でスコアガイダンスを使用して画像観測との整合性を達成
    - 画像からの条件付き分布を捉えた拡散モデルにより、逆問題を解決
    http://arxiv.org/abs/2403.09623v1
    
    Compute-first optical detection for noise-resilient visual perception
    光学信号処理によるノイズ耐性視覚知覚
    
    - ノイズの影響を受けやすい状況において、光学信号処理を検出前に行うことで、視覚知覚タスクの性能向上が可能。
    - 空間的に光学信号を再配分することで、MNIST分類などの視覚認識タスクの検出ノイズ耐性が向上する。
    - 実装可能な非コヒーレントイメージングシステムにおいて、信号濃度とノイズ耐性の関係を定量的に分析し、提案手法の有効性を示した。
    http://arxiv.org/abs/2403.09612v1
    
    Signal Recovery with Proximal Comixtures
    信号回復におけるProximal Comixtures
    
    - 損失関数と線形演算子を混合したproximal comixturesの代替フォーミュレーションを提案
    - 結果関数の近接作用素が明示的に計算可能な操作
    - 画像回復と機械学習へのcomixtureフォーミュレーションの恩恵
    http://arxiv.org/abs/2403.09610v1
    
    Parafermions with symmetry-protected non-Abelian statistics
    対称性保護された非アーベル統計を持つパラフェルミオン
    
    - 対称性保護された非アーベル統計(SPNAS)の概念を拡張
    - パラフェルミオン零モード(PZM)を保護する一般的なユニタリー対称性
    - PZMがSPNASを固有に従うことを厳密に証明
    http://arxiv.org/abs/2403.09602v1
    
    ExploRLLM: Guiding Exploration in Reinforcement Learning with Large Language Models
    ExploRLLM: Guiding Exploration in Reinforcement Learning with Large Language Models
    
    - 大観測・行動空間を持つ画像ベースのロボット操作タスクにおいて、ExploRLLMは大規模な言語モデルの帰納バイアスを活用し、探索を誘導する手法を提案。
    - 基礎モデルを活用して行動と観測空間を再構成し、強化学習のトレーニング効率を向上させる。
    - 実験結果では、誘導探索がないトレーニングよりもはるかに迅速な収束を可能にし、ExploRLLMはバニラ基礎モデルよりも優れていることが示された。
    http://arxiv.org/abs/2403.09583v1
    
    Universal Definitions of the Roman Factorial: Introduction to Foundational Functions and the Generalization Process
    Universal Definitions of the Roman Factorial: Foundational Functions and Generalization
    
    - ローマ数字階乗を再定義するための普遍的な適用可能な関数の導入
    - Boolean演算に類似した基礎関数の使用による階乗表現の簡素化
    - 汎化プロセスを通じて、再帰的および非再帰的なローマ数字階乗の普遍的な定義を目指す
    http://arxiv.org/abs/2403.09581v1
    
    Algorithmic syntactic causal identification
    アルゴリズミック構文的因果同定
    
    - 現在の因果同定手法が適用できない状況を解決するため、古典的確率論の代わりに対称的単位的圏の公理的基盤を使用する方法を提案。
    - 一般的な因果同定手法を純粋に構文的に記述するアルゴリズムを提供。
    - 古典的なバックドアおよびフロントドアの因果調整の構文的類似物を導出し、より複雑な因果モデルへの適用を示す。
    http://arxiv.org/abs/2403.09580v1
    
    Commutation principles for nonsmooth variational problems on Euclidean Jordan algebras
    Euclidean Jordan代数上の滑らかでない変分問題のための交換原理
    
    - Ram\'irez, Seeger, and Sossaによって証明されたEuclidean Jordan代数の設定における交換原理
    - $\Theta$が滑らかでなくても、局所最小化子$a$は$\Theta$の勾配と交換する
    - 局所最大化子$a$は$\Theta$の(Fenchel)部分微分の各要素と交換する
    http://arxiv.org/abs/2403.09578v1
    --------------------------------------------------
    sector-specific adaptations
    
    Generalized Predictive Model for Autonomous Driving
    自動運転のための汎用予測モデル
    
    - 自動運転向けの大規模ビデオ予測モデルを紹介
    - 高コストなデータ収集の制約を取り除き、汎用性を高めるために大規模なWebデータを使用
    - GenADは他のビデオ予測モデルを上回るゼロショット学習で未知のデータに適用可能
    http://arxiv.org/abs/2403.09630v1
    
    Physically motivated improvements of Variational Quantum Eigensolvers
    物理的なモチベーションに基づくVariational Quantum Eigensolversの改善
    
    - ADAPT-VQEの効果を向上させるために、状態準備の最適化とアンサッツの展開を行う。
    - 新しい手法により、浅い回路と減少した測定要件を実現する。
    - H4モデルと水分子における性能評価を通じて、物理的な戦略の有効性が示される。
    http://arxiv.org/abs/2403.09624v1
    
    PosSAM: Panoptic Open-vocabulary Segment Anything
    PosSAM: Panoptic Open-vocabulary Segment Anything
    
    - SAMの空間的なマスク生成に優れつつも、物体クラス情報の認識と過分割の課題を解決
    - PosSAMはSAMの特徴を活用し、インスタンス認識マスクを生成し、CLIPの特徴を利用して効果的なインスタンス分類を実現
    - MASEアルゴリズムにより生成されたマスクの品質を向上させ、オープンボキャブラリー分類の性能を高める
    http://arxiv.org/abs/2403.09620v1
    
    pARam: Leveraging Parametric Design in Extended Reality to Support the Personalization of Artifacts for Personal Fabrication
    pARam: Leveraging Parametric Design in Extended Reality to Support the Personalization of Artifacts for Personal Fabrication
    
    - XRを使用したPDとの組み合わせによるPF向けアーティファクトのin-situ設定を可能にするpARam
    - pARamは複雑な3Dモデリングスキルを要求せず、ジェスチャーや照明推定などの実用的な入力でカスタマイズをサポート
    - ユーザーは環境を考慮してパラメータを選択し、複雑な設計方法を簡素化しながら適切な表現力を保持可能
    http://arxiv.org/abs/2403.09607v1
    
    Optimistic Verifiable Training by Controlling Hardware Nondeterminism
    最適なハードウェアの非決定性を制御することによる楽観的検証可能なトレーニング
    
    - 訓練プロセスのハードウェアの非決定性を制御するために、高い精度で訓練を行い、中間計算ステップ後に丸めを行う手法を提案。
    - NVIDIAの異なるGPUでの検証を通じて、FP32精度での正確なトレーニング再現を達成。
    - 証明ベースのシステムと比較して、ストレージおよび時間コストを大幅に削減する検証可能なトレーニング手法を示した。
    http://arxiv.org/abs/2403.09603v1
    
    Iterative Forgetting: Online Data Stream Regression Using Database-Inspired Adaptive Granulation
    イテレーティブ・フォーゲッティング: データベースに着想を得た適応的な粗粒度を用いたオンラインデータストリーム回帰
    
    - 既存データを用いた粗粒度の作成
    - 情報が古くなった粒を継続的に忘れる
    - データと粒を利用して低遅延予測を提供
    http://arxiv.org/abs/2403.09588v1
    
    uaMix-MAE: Efficient Tuning of Pretrained Audio Transformers with Unsupervised Audio Mixtures
    uaMix-MAE: 教師なしオーディオ混合物で事前学習済みオーディオトランスフォーマーを効率的に調整する方法
    
    - 教師なしオーディオ混合物を利用した、効率的なInstance Discrimination(ID)調整戦略の導入
    - 対象セマンティクスへの適応を助けるために、事前学習済みMAEの表現を整列させるコントラスティブ調整の活用
    - 少量の教師なしデータでモデルを最適化するためのオーディオ混合技術の提案
    http://arxiv.org/abs/2403.09579v1
    
    Eyes Closed, Safety On: Protecting Multimodal LLMs via Image-to-Text Transformation
    目を閉じて安全を確保：画像からテキストへの変換を通じたマルチモーダルLLMの保護
    
    - MLLMは印象的な推論能力を示すが、画像特徴の導入により、安全メカニズムが迂回されやすくなっている。
    - ECSOはMLLMの内在的な安全意識を活用し、不安全な画像を適応的にテキストに変換して、安全メカニズムを活性化させる。
    - ECSOは5つのSoTA MLLMで実験を行い、モデルの安全性を大幅に向上させることが示された。
    http://arxiv.org/abs/2403.09572v1
    
    AdaShield: Safeguarding Multimodal Large Language Models from Structure-based Attack via Adaptive Shield Prompting
    AdaShield: 構造ベース攻撃からマルチモーダル大規模言語モデルを適応的に守る
    
    - MLLMに対する構造ベースジェイルブレイク攻撃に対抗するAdaShieldは、MLLMをFine-tuningや追加モジュールのトレーニングなしで防御する。
    - 手動設計された静的な防御プロンプトと、適応的な自動修正フレームワークにより、悪意のあるクエリに対する防御が可能。
    - 実験結果は、AdaShieldがMLLMの堅牢性を向上させ、一般的な能力を損なうことなく、構造ベースの攻撃から保護できることを示している。
    http://arxiv.org/abs/2403.09513v1
    
    SkateFormer: Skeletal-Temporal Transformer for Human Action Recognition
    SkateFormer: 人間の動作認識のためのスケルトン・テンポラル・トランスフォーマー
    
    - スケルトンデータにおけるGCNの受容野制約を解決するためにTransformerを導入
    - SkateFormerはスケルトン-時間的関係に基づくパーティションとself-attentionを用いた新手法
    - 4つの異なるスケルトン-時間的関係タイプを組み合わせたアプローチで高い性能を達成
    http://arxiv.org/abs/2403.09508v1
    --------------------------------------------------



```python
generate_search_string


# デフォルトのAPIクライアントを構築する。
arxivclient = arxiv.Client()

# 検索条件を指定する。
# query: 検索キーワードを指定する。ここでは "GPT-4" を指定。
# max_results: 取得する論文の最大件数を指定する。ここでは 10 件。
# sort_by: 論文の並び替え条件を指定する。ここでは投稿日時の降順（最新順）。
for query in generate_search_string:
    print(query)
    search = arxiv.Search(
        query = query,
        max_results = 10,
        sort_by = arxiv.SortCriterion.SubmittedDate
    )

    # 検索を実行し、結果を取得する。
    results = arxivclient.results(search)
    # 取得した論文のタイトルを1件ずつ表示する。
    for r in results:
        print(f"\n{str(r.title)}\n{get_summary(r)}\n{r}")
    print("-" * 50)
```

    Search String 1: ("evaluating RAG status" OR "RAG evaluation methods") AND ("project management" OR "project monitoring")
    --------------------------------------------------
    Search String 2: ("RAG evaluation methods" OR "Red Amber Green assessment techniques") AND ("industry applications" OR "sector-specific adaptations")
    --------------------------------------------------



```python
# client = arxiv.Client()
# for query in modified_queries:
#     search = arxiv.Search(
#         query = query,
#         max_results = 10,
#         sort_by = arxiv.SortCriterion.SubmittedDate
#     )

#     # 検索を実行し、結果を取得する。
#     results = client.results(search)
#     # 取得した論文のタイトルを1件ずつ表示する。
#     for r in results:
#         print(r.title)
#         print(r)
        
#         print(r.summary)
#     print("-" * 50)
```


```python
# results = arxiv.Search(
#         query = "AI",
#         max_results = 10,
#         sort_by = arxiv.SortCriterion.SubmittedDate
#     )
# print(results)
```


```python
# for k in modified_queries:
#     for keyword in k:
#         print(f"Searching for: {keyword}\n")
#         try:
#             results = search_arxiv(str(keyword))
#         except Exception as e:
#             print(f"Error searching for keyword '{keyword}': {e}")
#             continue  # 検索中にエラーが発生した場合、次のキーワードの検索に進む

#         for result in results:
#             try:
#                 # summary = get_summary(result)
#                 print()
#             except KeyboardInterrupt:
#                 print("KeyboardInterrupt detected, skipping to the next result.")
#                 continue  # KeyboardInterruptが発生した場合、次の論文の処理に進む
#             except Exception as e:
#                 print(f"Error getting summary for result '{result.title}': {e}")
#                 continue  # その他のエラーが発生した場合、次の論文の処理に進む

#             # エラーが発生しなかった場合の処理をここに記述
#             print(f"title: {result.title}")
#             print(f"published: {result.published}")
#             # print(f"abstract: {result.summary}")
#             print(f"PDF link: {result.pdf_url}")
#             # print(f"summary: {summary}")
#         print("-" * 50)

```


```python

```


```python

```

```
from bs4 import BeautifulSoup
import requests
import re

def get_search_results(keyword, number=5):
    # Google Scholarの検索URLを構築
    html_doc = requests.get(f"https://scholar.google.co.jp/scholar?hl=ja&num={number}&q=" + keyword).text
    soup = BeautifulSoup(html_doc, "html.parser")  # BeautifulSoupの初期化
    
    # 必要な情報を抽出
    tags_title_url = soup.find_all("h3", {"class": "gs_rt"})  # タイトル&URL
    tags_author_year = soup.find_all("div", {"class": "gs_a"})  # 著者&年
    tags_citations = soup.find_all("div", {"class": "gs_fl"})  # 引用元リンクが含まれるセクション

    for tag_title, tag_author_year, tag_citation in zip(tags_title_url, tags_author_year, tags_citations):
        title = tag_title.text.replace("[HTML]", "").replace("[PDF]", "")
        url = tag_title.find('a')['href']
        
        citation_link = None
        for a in tag_citation.find_all('a'):
            if "引用" in a.text:
                citation_link = a['href']
                break
                
        citations = re.search(r'\d+', a.text) if citation_link else '0'
        citations = citations.group(0) if citations else '0'

        print(f"Title: {title}\nURL: {url}\nCitations: {citations}")
        
        # 引用元リンクがあれば、そのURLを表示（引用元ページからさらに情報を取得する場合に使用）
        if citation_link:
            print(f"Citation URL: https://scholar.google.co.jp{citation_link}")

        # 概要の取得はGoogle ScholarのHTML構造に依存するため、概要を直接取得することは推奨されていません。
        # 代わりに、論文のURLを訪れて内容を確認してください。
        
        print("--------------------------------------------------\n")

search_strings = [
    '"Risk Assessment and Governance evaluation methods"',
    '"Organizations measure success outcomes Risk Assessment Governance initiatives"'
]

for keyword in search_strings:
    print(f"Searching for: {keyword}\n")
    get_search_results(keyword, number=2)

# search_strings = [
#     '1. "Risk Assessment and Governance evaluation methods"',
#     '2. "Organizations measure success outcomes Risk Assessment Governance initiatives"'
# ]


for keyword in generate_search_string:
    print(f"Searching for: {keyword}\n")
    get_search_results(keyword, number=2)



def get_title_and_url(soup):
    """obtain title and url from soup
    :param soup: parsed html by BeautifulSoup
    :return: title_list, url_list
    """
    tags1 = soup.find_all("h3", {"class": "gs_rt"})
    title_list = []
    url_list = []
    for tag1 in tags1:
        # タイトル取得
        # PDF, 書籍, B, HTML, 引用, Cのタグを除去
        title = re.sub(r"\[(PDF|書籍|B|HTML|引用|C)\]", "", tag1.text)
        # 空白区切りを廃止
        title = "_".join(title.split(" "))
        if title[0] == "_":
            title = title[1:]
        title_list.append(title)

        # url取得
        try:
            url = tag1.select("a")[0].get("href")
            url_list.append(url)
        except IndexError:
            url_list.append(None)
    return title_list, url_list


def get_writer_and_year(soup):
    """obtain writer(author) and year from soup
    :param soup: parsed html by BeautifulSoup
    :return: writer_list, year_list
    """
    tags2 = soup.find_all("div", {"class": "gs_a"})
    writer_list = []
    year_list = []
    for tag2 in tags2:
        # 著者取得
        """
        writer = tag2.text
        writer = re.sub(r"\d", "", writer)
        for char in range(0, len(writer)):
            if writer[char] == "-":
                writer = writer[2 : char - 1]
                break
        """
        writer = tag2.text.split("\xa0- ")[0]
        writer_list.append(writer)

        # 論文発行年取得
        year = tag2.text
        year = re.sub(r"\D", "", year)
        # yearが5桁以上だった場合の例外処理
        if len(year) > 4:
            year_list.append(year[len(year) - 4 : len(year)])
        else:
            year_list.append(year)
    return writer_list, year_list


def get_citations(soup):
    """obtain number of citations from soup
    :param soup: parsed html by BeautifulSoup
    :return: ci_num_list
    """
    tags3 = soup.find_all(text=re.compile("引用元"))
    ci_num_list = []
    for tag3 in tags3:
        # 被引用数取得
        citation = tag3.replace("引用元", "")
        ci_num_list.append(int(citation))
    return ci_num_list


def get_id(soup):
    """obtain paper id from soup
    :param soup: parsed html by BeautifulSoup
    :return: ci_num_list
    """
    tags4 = soup.find_all("div", {"class": "gs_fl"})
    p_id_list = []
    for tag4 in tags4:
        # 論文ID取得
        try:
            elem = tag4.find_all("a")[2]["href"]
            a = 15
            while True:
                if elem[a] == "&":
                    break
                a += 1
            p_id_list.append(elem[15:a])
        except:
            print("")
    return p_id_list

def year_list_to_cite_years(year_list,p_year):
    """convert year_list into cite_years
    :param year_list,p_year:
    :return: cite_years
    """
    year_list_int = []
    for s in year_list:
        try:
            year_list_int.append(int(s))
        except:
            pass
    y = [p_year+i for i in range(2021 - p_year + 1)]
    cite_years = [0 for _ in range(2021 - p_year + 1)]
    for year in year_list_int:
        if year >= p_year and year <= 2021:
            cite_years[year - p_year] += 1
    list_return = [y, cite_years]
#    cite_years = pd.DataFrame(cite_years,
#                       index=y,
#                       columns=['total'])
#    cite_years  = cite_years.T
    return list_return



def make_url(keyword, conf, author, year, paper_id=None):
    """make url for search papers
    normal search (keyword, conf, author, year) or target search (paper_id)
    :param keyword: str or None
    :param conf: str or None, conference information
    :param author: str or None, author information
    :param year: int or None, published year
    :param paper_id: None or int, paper information
    :return: url
    """
    assert (
        keyword is not None
        or conf is not None
        or author is not None
        or year is not None
        or paper_id is not None
    ), "KeywordNotFoundError"
    url = "https://scholar.google.co.jp/scholar?"
    if paper_id is not None:
        url += f"&cites={paper_id}"
    else:
        url += "&as_sdt=0%2C5"
        if keyword is not None:
            url += f"&as_q={'%20'.join(keyword.split())}"
        else:
            url += "&as_q="
        if conf is not None:
            url += f"&as_publication={'%20'.join(conf.split())}"
        if author is not None:
            author = "+".join(author.split())
            url += f"&as_sauthors={'%20'.join(author.split())}"
        if year is not None:
            url += f"&as_ylo={year}"
    return url



def get_snippet(soup):
    """obtain snippet from soup
    :param soup: parsed html by BeautifulSoup
    :return: snippet_list
    """
    tags = soup.find_all("div", {"class": "gs_rs"})
    snippet_list = [tags[i].text for i in range(len(tags))]
    return snippet_list


def grep_candidate_papers(url):
    html_doc = requests.get(url).text
    soup = BeautifulSoup(html_doc, "html.parser")

    title_list, url_list = get_title_and_url(soup)
    writer_list, year_list = get_writer_and_year(soup)
    ci_num_list = get_citations(soup)
    p_id_list = get_id(soup)
    snippet_list = get_snippet(soup)

    for i in range(len(title_list)):
        print("-" * 20)
        print(f"paper number: {i}")
        print(f"paper title: {title_list[i]}")
        print(f"published year: {year_list[i]}")
        print(f"citations: {ci_num_list[i]}")

    print(f"\nSelect a paper number between 0 and {len(title_list)-1}")
    while True:
        try:
            target_paper_num = int(input("Select paper number: "))
            if 0 <= target_paper_num < len(title_list):
                break
            else:
                print(f"Please enter a number between 0 and {len(title_list)-1}.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    
    target_paper = {
        "title": title_list[target_paper_num],
        "writer": writer_list[target_paper_num],
        "year": year_list[target_paper_num],
        "citations": ci_num_list[target_paper_num],
        "url": url_list[target_paper_num],
        "paper_id": p_id_list[target_paper_num],
        "snippet": snippet_list[target_paper_num],
    }
    return target_paper



def scraping_papers(url):
    """scrape 100 papers
    :param url: target url
    :return: title_list, url_list, writer_list, year_list, ci_num_list, p_id_list, snippet_list
    """
    url_each = url.split("&")
    url_each[0] = url_each[0] + "start={}"
    url_base = "&".join(url_each)

    title_list = []
    url_list = []
    writer_list = []
    year_list = []
    ci_num_list = []
    p_id_list = []
    snippet_list = []

    for page in range(0, 100, 10):
        print("Loading next {} results".format(page + 10))
        url_tmp = url_base.format(page)
        html_doc = requests.get(url_tmp).text
        soup = BeautifulSoup(html_doc, "html.parser")

        title_list_tmp, url_list_tmp = get_title_and_url(soup)
        writer_list_tmp, year_list_tmp = get_writer_and_year(soup)
        ci_num_list_tmp = get_citations(soup)
        p_id_list_tmp = get_id(soup)
        snippet_list_tmp = get_snippet(soup)

        title_list.extend(title_list_tmp)
        url_list.extend(url_list_tmp)
        writer_list.extend(writer_list_tmp)
        year_list.extend(year_list_tmp)
        ci_num_list.extend(ci_num_list_tmp)
        p_id_list.extend(p_id_list_tmp)
        snippet_list.extend(snippet_list_tmp)

        sleep(np.random.randint(5, 10))
    return (
        title_list,
        url_list,
        writer_list,
        year_list,
        ci_num_list,
        p_id_list,
        snippet_list,
    )
```


```python

def check_paper_relevance_and_keywords(title, search_string, client):
    # Adjust the prompt to ask for relevance and keywords
    prompt = (f"Determine if the paper titled '{title}' is relevant to the topic '{search_string}'. "
              "and in return just informed paper is relevant or paper is not relevant, to the point.")

    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": "You are a knowledgeable assistant."},
            {"role": "user", "content": prompt}
        ]
    }
    response = client.chat.completions.create(
        # model="gpt-3.5-turbo",
        model="gpt-3.5-turbo-0125",
        messages=[
            {"role": "system", "content": "You are a knowledgeable assistant."},
            {"role": "user", "content": prompt}
        ],
        # response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    content = response.choices[0].message.content.strip().lower()
    
    return content
```


```python

```

```
# キーワードの入力
search_strings = [
    '"Risk Assessment and Governance evaluation methods"',
    '"Organizations measure success outcomes Risk Assessment Governance initiatives"'
]

for keyword in search_strings:
    print(f"Searching for: {keyword}\n")
    
    # 検索用URLの作成
    url = make_url(keyword=keyword, conf=None, author=None, year=None)
    
    # 候補となる論文の選択
    print("Please select a paper")
    selected_paper = grep_candidate_papers(url)
    
    # 選択された論文の情報を表示
    print(f"Selected Paper: {selected_paper['title']}")
    print(f"URL: {selected_paper['url']}")
    print(f"Citations: {selected_paper['citations']}")
    print(f"Snippet: {selected_paper['snippet']}\n")
    
    # 選択された論文の引用論文情報の取得
    url_cite = make_url(paper_id=selected_paper["paper_id"])
    cited_papers_info = scraping_papers(url_cite)
    
    # 引用論文情報の表示 (例: タイトルとURL)
    for title, url in zip(cited_papers_info[0], cited_papers_info[1]):
        print(f"Cited Paper Title: {title}")
        print(f"Cited Paper URL: {url}\n")
```

```
# 検索パラメータを設定
# N_DAYS = 365  # 過去30日間の論文を検索
N_DAYS = 30  # 過去30日間の論文を検索

MAX_RESULT = 5  # 最大結果数
QUERY_TEMPLATE = 'all:{} AND submittedDate:[{} TO {}]'  # 検索クエリテンプレート

# 検索を行い、結果を取得する関数
def search_arxiv_with_keywords(keywords):
    client = arxiv.Client()
    results_list = []

    today = dt.datetime.today() - dt.timedelta(days=2)
    base_date = today - dt.timedelta(days=N_DAYS)

    for keyword in keywords:
        query = QUERY_TEMPLATE.format(keyword, base_date.strftime("%Y-%m-%d"), today.strftime("%Y-%m-%d"))
        
        search = arxiv.Search(
            query=query,
            max_results=MAX_RESULT,
            sort_by=arxiv.SortCriterion.SubmittedDate,
            sort_order=arxiv.SortOrder.Descending,
        )

        results = client.results(search)
        
        for result in results:
            # 特定の条件に基づいてフィルタリングを行う場合はここに追加
            results_list.append({
                'title': result.title,
                'summary': result.summary,
                'url': result.entry_id  # arXivへのリンク
            })

    return results_list

search_results = search_arxiv_with_keywords(generate_search_string)
for result in search_results:
    print(f"Title: {result['title']}\nSummary: {result['summary']}\nURL: {result['url']}\n")

# うまくいかないのでクエリを小さくする(本ちゃんではこれ使いたくねーな)

import re

def simplify_search_queries(complex_queries):
    simplified_queries = []

    for query in complex_queries:
        # 数字とピリオドを除去して、クエリの本体だけを抽出
        clean_query = re.sub(r'^\d+\.\s*', '', query)
        
        # 括弧を除去
        clean_query = re.sub(r'[()"]', '', clean_query)
        
        # 'AND' と 'OR' で分割
        split_queries = re.split(r'\sAND\s|\sOR\s', clean_query)
        
        # 分割したクエリをリストに追加
        for sub_query in split_queries:
            sub_query = sub_query.strip()
            if sub_query and sub_query not in simplified_queries:
                simplified_queries.append(sub_query)
                
    return simplified_queries


simplified_queries = simplify_search_queries(generate_search_string)
for query in simplified_queries:
    print(query)

from tqdm import tqdm
import time

# for query in tqdm(simplified_queries, desc="Searching"):
#     print(f"Query: {query}")
#     search_results = search_arxiv_with_keywords(query)
#     for result in search_results:
#         print(f"Title: {result['title']}\nSummary: {result['summary']}\nURL: {result['url']}\n")
#     time.sleep(2)  # 検索ごとに2秒間待機します。



from duckduckgo_search import DDGS
import requests
from bs4 import BeautifulSoup


# テキスト検索用の関数
def search_text(keywords, region='wt-wt', safesearch='moderate', timelimit=None, max_results=3):
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(keywords, region=region, safesearch=safesearch, timelimit=timelimit, max_results=max_results)]
        time.sleep(2)
    return results

# BeautifulSoupを使ってウェブページから情報を抽出する関数
def extract_info_from_url(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # 必要な情報を抽出するためのコードをここに追加します。
        # 例えば、ページの全ての段落テキストを取得する場合:
        paragraphs = soup.find_all('p')
        text = ' '.join([p.text for p in paragraphs])
        return text
    except Exception as e:
        print(f"Error extracting information from {url}: {e}")
        return None




for query in tqdm(simplified_queries, desc="Searching"):
    print(query)
    text_results = search_text(query)
    print(text_results)
    for result in text_results:
        print(f"Title: {result['title']}\nURL: {result['href']}\n")
        # # URLから情報を抽出
        # extracted_info = extract_info_from_url(result['href'])
        # print(f"Extracted Info: {extracted_info}\n")

import time
from tqdm import tqdm
from duckduckgo_search import DDGS  # あるいは適切なモジュール名

# テキスト検索用の関数
def search_text(keywords, max_results=3):
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(keywords, max_results=max_results)]
        time.sleep(2)  # 検索ごとに2秒間待機
    return results

# 検索クエリを簡略化する関数
def simplify_search_queries(complex_queries):
    simplified_queries = []
    # (クエリを簡略化するロジック)
    return simplified_queries

# 複雑なクエリのリスト
complex_queries = [
    '1. ("RAG evaluation methods" OR "risk assurance governance evaluation methods") AND ("accuracy" AND "efficiency")',
    '2. ("RAG evaluation methods" OR "risk assurance governance evaluation methods") AND ("factors influencing" AND "development" AND "implementation")'
]

# 簡略化されたクエリのリストを取得
simplified_queries = simplify_search_queries(complex_queries)

# tqdmを使用して進捗状況を表示しながら検索を実行
for query in tqdm(simplified_queries, desc="Searching"):
    print(f"Query: {query}")
    search_results = search_text(query)
    for result in search_results:
        print(f"Title: {result['title']}\nSummary: {result['summary']}\nURL: {result['url']}\n")
```


```python

```
