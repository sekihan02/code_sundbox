![](./search_small_agent_q2_doc.png)


```python
!python3 -m pip install --upgrade pip
```

    Requirement already satisfied: pip in /usr/local/lib/python3.10/dist-packages (24.0)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
!pip3 install arxiv==2.1.0
!pip3 install python-dotenv tiktoken
# !pip install openai==0.27.8
# !pip install openai==1.2.3
!pip install openai==1.3.4
!pip install -U duckduckgo-search==4.4
```

    Requirement already satisfied: arxiv==2.1.0 in /usr/local/lib/python3.10/dist-packages (2.1.0)
    Requirement already satisfied: feedparser==6.0.10 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (6.0.10)
    Requirement already satisfied: requests==2.31.0 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (2.31.0)
    Requirement already satisfied: sgmllib3k in /usr/local/lib/python3.10/dist-packages (from feedparser==6.0.10->arxiv==2.1.0) (1.0.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2.1.1)
    Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (3.4)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (1.26.13)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2022.12.7)
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
    [0mRequirement already satisfied: openai==1.3.4 in /usr/local/lib/python3.10/dist-packages (1.3.4)
    Requirement already satisfied: anyio<4,>=3.5.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (3.7.1)
    Requirement already satisfied: distro<2,>=1.7.0 in /usr/lib/python3/dist-packages (from openai==1.3.4) (1.7.0)
    Requirement already satisfied: httpx<1,>=0.23.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (0.26.0)
    Requirement already satisfied: pydantic<3,>=1.9.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (1.10.13)
    Requirement already satisfied: tqdm>4 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.66.1)
    Requirement already satisfied: typing-extensions<5,>=4.5 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.9.0)
    Requirement already satisfied: idna>=2.8 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (3.4)
    Requirement already satisfied: sniffio>=1.1 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.3.0)
    Requirement already satisfied: exceptiongroup in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.2.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (2022.12.7)
    Requirement already satisfied: httpcore==1.* in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (1.0.2)
    Requirement already satisfied: h11<0.15,>=0.13 in /usr/local/lib/python3.10/dist-packages (from httpcore==1.*->httpx<1,>=0.23.0->openai==1.3.4) (0.14.0)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mRequirement already satisfied: duckduckgo-search==4.4 in /usr/local/lib/python3.10/dist-packages (4.4)
    Requirement already satisfied: docstring-inheritance>=2.1.2 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (2.1.2)
    Requirement already satisfied: click>=8.1.7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (8.1.7)
    Requirement already satisfied: curl-cffi>=0.6.0b7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (0.6.0b9)
    Requirement already satisfied: lxml>=4.9.3 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (4.9.4)
    Requirement already satisfied: nest-asyncio>=1.6.0 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (1.6.0)
    Requirement already satisfied: cffi>=1.12.0 in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (1.16.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2022.12.7)
    Requirement already satisfied: pycparser in /usr/local/lib/python3.10/dist-packages (from cffi>=1.12.0->curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2.21)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
import os
import json
import datetime as dt
import yaml
import warnings


import arxiv
import openai
from openai import OpenAI
from dotenv import load_dotenv

from duckduckgo_search import DDGS, AsyncDDGS
import asyncio

# すべての警告を無視する
warnings.filterwarnings('ignore')
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
load_dotenv()
```




    True




```python
openai.api_key = os.getenv("OPENAI_API_KEY")
```


```python
MODEL_NAME = "gpt-3.5-turbo-0125"
# MODEL_NAME = "gpt-3.5-turbo-instruct"
# MODEL_NAME = "gpt-4-0125-preview"
TEMPERATURE = 0.7
# OpenAIクライアントの初期化
client = OpenAI()
```


```python
# 質問
# question = "禁闕の変について教えてください"

question = "今日の東京と稚内市の天気を教えてください"
```


```python
# 各ノードの名称を定義
RESEARCH_NODE = "research"
RE_RESEARCH_NODE = "re-research"
QUALITY_ASSURANCE_NODE = "quality_assurance"
WRITER_NODE = "writer"
SUPERVISOR_NODE = "supervisor"
```

## ノードの定義


```python
# チームメンバーの定義　特に使わないけど
"""
Researchノード: Web上から必要な情報を検索し、ユーザーからのリクエストに応じて記事を作成します。
Re-Researchノード: (QAでnot acceptだったら)問い合わせと直前の検索クエリから今まで使っていない検索クエリをを生成し、それを基にWeb上から必要な情報を検索し、ユーザーからのリクエストに応じて記事を作成します。
Quality Assurance (QA) ノード: 記事の品質が基準を満たしているかをチェックし、満たしていない場合はフィードバックを返します。品質の受け入れ基準は常にこのノードによって決定されます。
Writerノード: 世界最高レベルのAIチェッカーでも人間が書いたと判断されるような文章を作成します。
Supervisorノード: 会話を管理し、次に動作するワーカーを指示します。全てのタスクが完了したら、「FINISH」と応答します。
"""
team_members = [
    {"name": RESEARCH_NODE,
     "description": "Search the web for necessary information and write articles as requested by users."},
    {"name": RE_RESEARCH_NODE,
     "description": "Generate new search queries based on user inquiries and previous search queries that have not been used before, then search the web for necessary information to create articles as requested by users. Search the web for necessary information and write articles as requested by users."},
    {"name": QUALITY_ASSURANCE_NODE,
     "description": f"Check that the quality of the article meets the criteria. If not, return feedback. The acceptability of deliverables is always determined by {QUALITY_ASSURANCE_NODE}."},
    {"name": WRITER_NODE,
     "description": "Write articles that even the world's best AI checkers would judge as written by a human."},
]
```




```python
# エージェントに追加するシステムプロンプト作成関数
def create_agent_system(
        system_prompt: list,  # システムからエージェントへの初期プロンプト
        team_members: str,   # メンバーの役割
):
    # システムプロンプトに自律的な働きに関する指示を追加
    system_prompt.append({"role" : "system", "content" : "Work autonomously according to your specialty, using the tools available to you."})
    system_prompt.append({"role" : "system", "content" : " Do not ask for clarification."})
    system_prompt.append({"role" : "system", "content" : " Your other team members (and other teams) will collaborate with you with their own specialties."})
    system_prompt.append({"role" : "system", "content" : f" You are chosen for a reason! You are one of the following team members: {team_members}."})
    """
    あなたの専門分野に従って自律的に働いてください。使用可能なツールを使ってください
    確認のために質問をしないでください
    あなたの他のチームメンバーや他のチームも、それぞれの専門分野であなたと協力します
    あなたが選ばれたのには理由があります！あなたは以下のチームメンバーの一人です: {team_members}
    """
    # エージェントを実行するsystem_promptを返す
    return system_prompt
```


```python
# 使わないが
# チームのスーパーバイザーを生成する関数
def create_team_supervisor(
        model_name: str,
        system_prompt: list,
        members: list,  # チームメンバーのリスト
        job_result: str, # jobの結果
):
    # メンバー名のリストを生成
    member_names = [member["name"] for member in members]
    team_members = []
    # チームメンバーの名前と説明を文字列に整形
    for member in members:
        team_members.append(f"\n name: {member['name']}\n description: {member['description']}")
    options = ["FINISH"] + member_names  # 終了オプション
    
    # スーパーバイザー用のプロンプトテンプレートを作成
    superviser_prompt = []
    superviser_prompt.append({"role" : "system", "content" : "Given the conversation above, who should act next?"})
    superviser_prompt.append({"role" : "system", "content" : f" Or should we FINISH? Select one of option: {options}"})
    # team_membersからcontent文字列を作成
    content = 'List one of the choices as "name" and its description as "description" below.'
    # チームメンバーの名前と説明を文字列に整形
    for member in team_members:
        content += f"\n name: {member['name']}\n description: {member['description']}"
        superviser_prompt.append({"role" : "system", "content" : f"{content}"})
    superviser_prompt.append({"role": "user", "content": 'Please generate JSON from the text of job results. Use "supervisor_result" as the schema, and use one of {options} as the key to generate it in the form {"supervisor_result": {option}}.'})
    superviser_prompt.append({"role": "user", "content": f"Text of job results: {job_result}"})
    """
    システム
    上記の会話を踏まえて、次に行動すべきは誰ですか？
    選ぶ選択肢の一つを"name"として、その説明を"description"として以下に記載します。\n name: {member['name']}\n description: {member['description']}\n
    それとも、終了すべきですか？次の選択肢の中から一つ選んでください: {options}
    
    user
    次のジョブ結果のテキストからJSONを生成してください。「supervisor_result」をスキーマとして使用し、{options}のうちの一つをキーとして使って、形式が{"supervisor_result": {option}}となるように生成してください。
    ジョブ結果のテキスト: {job_result}
    """
    # スーパーバイザー用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=superviser_prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    # print(response.choices[0].message.content)
    
    # スーパーバイザーの機能をバインドし、JSON出力を解析するパイプラインを作成
    return response.choices[0].message.content
```

## Researchエージェントの定義


```python
# テキスト検索用の関数
def search_text(keywords, region='wt-wt', safesearch='moderate', timelimit=None, max_results=10):
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(keywords, region=region, safesearch=safesearch, timelimit=timelimit, max_results=max_results)]
    return results

# 画像検索用の関数
def search_images(keywords, region='wt-wt', safesearch='moderate', size=None, color=None, max_results=10):
    with DDGS() as ddgs:
        results = [r for r in ddgs.images(keywords, region=region, safesearch=safesearch, size=size, color=color, max_results=max_results)]
    return results

# 非同期テキスト検索用の関数
def async_search_text(keywords, max_results=10):
    with AsyncDDGS() as ddgs:
        results = [r for r in ddgs.text(keywords, max_results=max_results)]
    return results


# # 使用例: テキスト検索
# text_results = search_text(question)
# for result in text_results:
#     print(result)

# # 使用例: 画像検索
# image_results = search_images('cats', color='Monochrome', max_results=5)
# for result in image_results:
#     print(result)
```


```python

```


```python
# Researchノードの定義
def research_node(
        model_name: str,
        job_result: str, # search の結果
):
    # リサーチエージェントを呼び出し、結果を取得
    # あなたは、DuckDuckGo検索エンジンを使って、検索された情報を順番に確認し、ポイントを外さずに思慮深く要約するリサーチアシスタントです。
    prompt = [{'role': 'system', 'content': "You are a research assistant who uses the DuckDuckGo search engine to review the information retrieved in sequence and summarize it thoughtfully without missing the point."}]
    prompt.append({"role": "system", "content": "Summary results must be in Japanese."})
    
    research_prompt = create_agent_system(prompt, RESEARCH_NODE)
    research_prompt.append({"role": "system", "content": 'Please generate JSON from the following search result text. Generate in the format {"supervisor_result": summarized results} using "search_result" as the schema and summarized results as the keys.'})
    research_prompt.append({"role": "user", "content": 'Please generate JSON from the text of search job results. Use "research_result" as the schema, and use one of summarized results as the key to generate it in the form {"research_result": summarized results}.'})
    research_prompt.append({"role": "user", "content": f"Text of search job results: {job_result}"})
    """
    システム
    あなたは、DuckDuckGo検索エンジンを使って、検索された情報を順番に確認し、ポイントを外さずに思慮深く要約するリサーチアシスタントです。
    要約結果は日本語でなければならない。
    
    あなたの専門分野に従って自律的に働いてください。使用可能なツールを使ってください
    確認のために質問をしないでください
    あなたの他のチームメンバーや他のチームも、それぞれの専門分野であなたと協力します
    あなたが選ばれたのには理由があります！あなたは以下のチームメンバーの一人です: {team_members}
    以下の検索結果のテキストからJSONを生成してください。スキーマとして「search_result」、キーとして「summarized results」を使用し、{"supervisor_result": summarized results}の形式で生成してください。
    user
    以下の検索結果のテキストからJSONを生成する。スキーマとして "search_result "を使用し、キーとして要約された結果を使用して、{"supervisor_result": 要約された結果}というフォーマットで生成します。
    search ジョブ結果のテキスト: {job_result}
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=research_prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    search_res_str = response.choices[0].message.content
    # print(search_res_str)
    
    # JSON形式の文字列を辞書に変換
    search_res = json.loads(search_res_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": search_res["research_result"],
        "messages": job_result
    }
```


```python
# 再検索用クエリを抽出
def make_re_search_query(
    model_name: str,
    question: str,    # 最初の質問
    before_query: str,   # 直前の検索クエリ 初回は question
):
    
    # questionから検索クエリを作成する。before_queryと違うものクエリを作成する
    # テキストのブロックが提供されます。あなたのタスクは、そこからキーワードのリストを抽出することです。
    prompt = [{'role': 'system', 'content': "You will be provided with a block of text, and your task is to extract a list of keywords from it."}]
    
    prompt.append({"role": "system", "content": "Use the following example to extract a list of keywords.\n###Example###\n\nuser's question: Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors.\n\nresult query: {      'query_result': 'Black-on-black ware, pottery tradition, Puebloan Native American, ceramic artists, Northern New Mexico, reduction-fired blackware, pueblo artists, smooth surface, designs, selective burnishing, refractory slip, carving, incising designs, polishing, generations, families, Kha'po Owingeh, P'ohwhóge Owingeh pueblos, matriarch potters, contemporary artists, ancestors'}"})
    """
    Use the following example to extract a list of keywords.
    ###Example###
    
    user's question: Black-on-black ware is a 20th- and 21st-century pottery tradition developed by the Puebloan Native American ceramic artists in Northern New Mexico. Traditional reduction-fired blackware has been made for centuries by pueblo artists. Black-on-black ware of the past century is produced with a smooth surface, with the designs applied through selective burnishing or the application of refractory slip. Another style involves carving or incising designs and selectively polishing the raised areas. For generations several families from Kha'po Owingeh and P'ohwhóge Owingeh pueblos have been making black-on-black ware with the techniques passed down from matriarch potters. Artists from other pueblos have also produced black-on-black ware. Several contemporary artists have created works honoring the pottery of their ancestors.
    
    result query: 
    {
      "query_result": "Black-on-black ware, pottery tradition, Puebloan Native American, ceramic artists, Northern New Mexico, reduction-fired blackware, pueblo artists, smooth surface, designs, selective burnishing, refractory slip, carving, incising designs, polishing, generations, families, Kha'po Owingeh, P'ohwhóge Owingeh pueblos, matriarch potters, contemporary artists, ancestors"
    }
    """
    prompt.append({'role': 'system', 'content': "Generate queries that are as different as possible from the query used in the previous search for extracting the list of keywords."})
    prompt.append({'role': 'system', 'content': f"The query used in the previous search was '{before_query}'."})

    prompt.append({"role": "user", "content": "Generate JSON from search result text. Use 'query_result' as the schema, generate in the format {'query_result': Result extract keywords from a block of text.}, and key in the evaluation results, such as whether the generated search results describe the user's request."})
    prompt.append({"role": "user", "content": f"user's question:{question}. Result extract keywords from a block of text.:"})
    

    """
    system
    以下の例を参考にキーワードのリストを抽出してください。
    
    ###Example###
    
    user's question: 黒地に黒の陶器は、ニューメキシコ州北部のプエブロ人ネイティブ アメリカンの陶芸家によって発展した、20 世紀から 21 世紀にかけての陶器の伝統です。伝統的な還元焼成黒食器は、プエブロの芸術家によって何世紀にもわたって作られてきました。前世紀の黒地に黒の陶器は、選択的に磨きをかけたり、耐火物スリップを塗布したりすることによってデザインが施され、滑らかな表面で製造されています。別のスタイルには、デザインを彫刻または切り込み、盛り上がった領域を選択的に研磨することが含まれます。カポ オウィンゲとポホゲ オウィンゲ プエブロの数家族が、家長の陶芸家から受け継がれた技術を用いて、黒地に黒の陶器を何世代にもわたって作り続けてきました。他のプエブロ出身の芸術家も黒地に黒の陶器を制作しています。何人かの現代芸術家は、祖先の陶器に敬意を表して作品を制作しました。
    
    result query: 
    {
      'query_result': '黒地に黒の器、陶器の伝統、プエブロのネイティブ アメリカン、陶芸家、ニューメキシコ北部、還元焼成黒器、プエブロの芸術家、滑らかな表面、デザイン、選択的バニシング、耐火物スリップ、彫刻、切り込みデザイン、研磨、世代、家族、カポ・オウィンゲ、ポホゲ・オウィンゲ・プエブロス、女家長陶芸家、現代芸術家、先祖'
    }
    
    キーワードリストを抽出するために、前回の検索で使用したクエリとはできるだけ異なるクエリを生成する。
    前回の検索で使用したクエリは「{before_query}」です。
    user
    検索結果のテキストからJSONを生成する。スキーマとして "query_result"を使用し、{"query_result"： テキストブロックからキーワードを抽出した結果}の形式で生成する。
    
    前回の検索で使用したクエリ: "{before_query}".

    
    user's question:{}. result query:
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE+TEMPERATURE,
    )
    res_str = response.choices[0].message.content
    # print(res_str)
    
    # JSON形式の文字列を辞書に変換
    res = json.loads(res_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": res["query_result"],
        "before_query": before_query
    }
```


```python
# test_query = make_re_search_query(
#     MODEL_NAME,
#     question,
#     question
# )
# test_query['output']
```


```python
# Re-Researchノードの定義
# ###Instruction###で始め、次に関連する場合は###Example###または'###Question###
def re_research_node(
    model_name: str,
    question: str,    # 最初の質問
    before_query: str,   # 直前の検索クエリ 初回は question
    before_job_result: str, # 直前のsearch の結果
):
    # re-search 用クエリ
    re_query = make_re_search_query(
        MODEL_NAME,
        question,
        before_query
    )
    re_query = re_query['output']
    
    # search
    re_search = ""
    text_results = search_text(re_query)
    for result in text_results:
        re_search += result["body"] + ", "
        print(re_search["body"])
    
    # search_node
    research_res = research_node(
        MODEL_NAME,
        search, # search の結果
    )
    research_res['output']
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": research_res['output'],
        "re_query": re_query
    }
```


```python
# 品質チェックノードの定義
def qa_node(
    model_name: str,
    question:str, # 検索結果
    research_output:str, # 検索結果
):
    # 品質チェックの指示を含むシステムメッセージ
#     system_message = """You are a specialist in inspecting the quality of articles. 
#     Inspect the article to see if it meets the following requirements:

#     - The article is written in Japanese.
#     - The writing style MUST be such that the AI sentence checker determines that it was written by a HUMAN.
#     - The article MUST be written in a way that is easy to understand.
#     - The article MUST meet the user's requirements.

#     If the evaluation criteria are met, write 'Acceptable'.
#     In addition, write the reason why you judged that the evaluation criteria are met.

#     If the evaluation criteria are not met, write 'Not Acceptable'.
#     In addition, provide feedback on what needs to be done to meet the evaluation criteria.

#     DO NOT make excuses such as 'I can't make a decision because I am an AI'.

#     The quality of your articles is relevant to your career.
#     Please be as rigorous as possible in your inspections and make sure that your feedback is helpful in making corrections.
#     """
    prompt = [{'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: The article is written in Japanese."}]
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: The writing style MUST be such that the AI sentence checker determines that it was written by a HUMAN."})
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: The article MUST be written in a way that is easy to understand."})
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: The article MUST meet the user's requirements."})

    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: If the evaluation criteria are met, write 'Acceptable'."})
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: In addition, write the reason why you judged that the evaluation criteria are met."})
  
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: If the evaluation criteria are not met, write 'Not Acceptable'."})
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: In addition, provide feedback on what needs to be done to meet the evaluation criteria."})

    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: DO NOT make excuses such as 'I can't make a decision because I am an AI'."})
  
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: The quality of your articles is relevant to your career."})
    prompt.append({'role': 'system', 'content': "You are a specialist in inspecting the quality of articles. Inspect the article to see if it meets the following requirements: Please be as rigorous as possible in your inspections and make sure that your feedback is helpful in making corrections."})

    # prompt = [{'role': 'system', 'content': system_message}]
    qa_prompt = create_agent_system(prompt, QUALITY_ASSURANCE_NODE)
    qa_prompt.append({"role": "user", "content": "Generate JSON from search result text. Use 'qa_result' as the schema, generate in the format {'qa_result': Acceptable or Not Acceptable}, and key in the evaluation results, such as whether the generated search results describe the user's request."})
    qa_prompt.append({"role": "user", "content": f"user's requirements:{question}. search result text: {research_output}"})
    

    """
    評価基準の適用例:
    1. 言語と文章スタイルの評価:
        - 記事が日本語で書かれているか。
        - 文章が人間によって書かれたとAI文章チェッカーに判断させるスタイルであるか。
    2. 内容の理解しやすさ:
        - 記事の内容が簡潔に、かつ明確に表現されているか。
        - 専門用語が適切に説明され、一般の読者も理解できるようになっているか。
    3. ユーザーの要件への適合性:
        - 記事がユーザーの要求や指定したテーマに沿っているか。
        - ユーザーが期待する情報や視点が適切に取り入れられているか。
    評価例:
    - 受理可能: 記事は全ての評価基準を満たしています。日本語で書かれており、文章スタイルは人間によるものと判断できます。
    内容は理解しやすく、ユーザーの要件にも適合しています。これらの点から、記事は受理可能と判断します。
    - 受理不可: 記事は一部の評価基準を満たしていません。特に、文章スタイルがAIによって書かれたように見える部分があります。
    また、専門用語の説明が不足しているため、内容の理解が難しい箇所があります。これらの問題を解決するためには、人間らしい表現を増やし、専門用語に対する説明を追加する必要があります。
    user
    検索結果のテキストからJSONを生成する。スキーマとして "qa_result"を使用し、{"qa_result"： Acceptable or Not Acceptable}の形式で生成し、生成された検索結果をキーとして評価する。
    user's requirements:{}. 検索結果のテキスト: {research_output}
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=qa_prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    qa_res_str = response.choices[0].message.content
    # print(qa_res_str)
    
    # JSON形式の文字列を辞書に変換
    qa_res = json.loads(qa_res_str)
    """
    "qa_result": "Not Acceptable" だったら戻り値に次の検索ワードを入れるか、質問と分割するかとかしたい
    """
    # 出力と新しいメッセージをステートに反映
    return {
        "output": qa_res["qa_result"]
    }
```


```python

```


```python
# # 使用例: 1サイクル
# with Timer(prefix=f'Processing time for one cycle.'):
#     question = "今日の東京と稚内市の天気を教えてください"

#     search = ""
#     text_results = search_text(question)
#     for result in text_results:
#         search += result["body"] + ", "
#         # print(result["body"])

#     # search_node
#     research_res = research_node(
#         MODEL_NAME,
#         search, # search の結果
#     )
#     research_output = research_res['output']
#     print(f"検索して質問に回答した結果: {research_output}")

#     qa_res = qa_node(
#         MODEL_NAME,
#         question,
#         research_output
#     )
#     print(f"質問と回答の整合性チェック: {qa_res}")

```

検索して質問に回答した結果: 稚内市の天気予報に関する情報が提供されており、今日・明日の天気や気温、降水確率、注意報などが記載されている。また、稚内市のPM2.5分布予測や地震情報、スキー積雪情報なども含まれている。

質問と回答の整合性チェック: {'output': 'Not Acceptable'}

Processing time for one cycle. 5.816[s]


```python
def search_agent_1cycle(
    question: str,
    query: str,
):
    search = ""
    text_results = search_text(query)
    for result in text_results:
        search += result["body"] + ", "
        # print(result["body"])

    # search_node
    research_res = research_node(
        MODEL_NAME,
        search, # search の結果
    )
    research_output = research_res['output']

    qa_res = qa_node(
        MODEL_NAME,
        question,
        research_output
    )
    
    
    return {
        "output": research_output,
        "qa_result": qa_res
    }
```


```python
def date_range_from_word_updated_fixed(word):
    # 現在の日時を取得
    now = dt.datetime.now()
    # 日付の範囲を格納する変数を初期化
    date_range = ""
    
    if "最近" in word:
        six_months_ago = now - dt.timedelta(days=182) # 大体半年前
        date_range = f"{six_months_ago.strftime('%Y-%m-%d')}から{now.strftime('%Y-%m-%d')}までの{word.replace('最近', '')}"
    
    elif "今年" in word:
        start_of_year = dt.datetime(now.year, 1, 1)
        end_of_year = dt.datetime(now.year, 12, 31)
        date_range = f"{start_of_year.strftime('%Y-%m-%d')}から{end_of_year.strftime('%Y-%m-%d')}までの{word.replace('今年', '')}"
    
    elif "今週" in word:
        start_of_week = now - dt.timedelta(days=now.weekday())
        end_of_week = start_of_week + dt.timedelta(days=6)
        date_range = f"{start_of_week.strftime('%Y-%m-%d')}から{end_of_week.strftime('%Y-%m-%d')}までの{word.replace('今週', '')}"
    
    elif "来週" in word:
        start_of_next_week = now + dt.timedelta(days=(7 - now.weekday()))
        end_of_next_week = start_of_next_week + dt.timedelta(days=6)
        date_range = f"{start_of_next_week.strftime('%Y-%m-%d')}から{end_of_next_week.strftime('%Y-%m-%d')}までの{word.replace('来週', '')}"
    
    elif "昨日" in word:
        yesterday = now - dt.timedelta(days=1)
        date_range = yesterday.strftime('%Y-%m-%d')
    
    elif "未来" in word:
        start_of_next_year = dt.datetime(now.year + 1, 1, 1)
        end_of_next_year = dt.datetime(now.year + 1, 12, 31)
        date_range = f"{now.strftime('%Y-%m-%d')}から{start_of_next_year.strftime('%Y-%m-%d')}までの{word.replace('未来', '')}"
        # future_time = word.replace("未来", "").strip()
        # if future_time == "":
        #     start_of_next_year = dt.datetime(now.year + 1, 1, 1)
        #     end_of_next_year = dt.datetime(now.year + 1, 12, 31)
        #     date_range = f"{now.strftime('%Y-%m-%d')}から{start_of_next_year.strftime('%Y-%m-%d')}までの{word.replace('未来', '')}"
        # elif future_time.isdigit():
        #     future_date = now + dt.timedelta(days=365 * int(future_time))
        #     date_range = future_date.strftime('%Y-%m-%d')
        # else:
        #     # 不正確な入力に対する処理を追加するか、エラーメッセージを表示する
        #     return word
    elif "これから" in word:
        start_of_next_year = dt.datetime(now.year + 1, 1, 1)
        end_of_next_year = dt.datetime(now.year + 1, 12, 31)
        date_range = f"{now.strftime('%Y-%m-%d')}から{start_of_next_year.strftime('%Y-%m-%d')}までの{word.replace('これから', '')}"
        # future_time = word.replace("これから", "").strip()
        # if future_time == "":
        #     start_of_next_year = dt.datetime(now.year + 1, 1, 1)
        #     end_of_next_year = dt.datetime(now.year + 1, 12, 31)
        #     date_range = f"{now.strftime('%Y-%m-%d')}から{start_of_next_year.strftime('%Y-%m-%d')}までの{word.replace('これから', '')}"
        # elif future_time.isdigit():
        #     future_date = now + dt.timedelta(days=365 * int(future_time))
        #     date_range = future_date.strftime('%Y-%m-%d')
        # else:
        #     # 不正確な入力に対する処理を追加するか、エラーメッセージを表示する
        #     return word
    elif "将来" in word:
        start_of_next_year = dt.datetime(now.year + 1, 1, 1)
        end_of_next_year = dt.datetime(now.year + 1, 12, 31)
        date_range = f"{now.strftime('%Y-%m-%d')}から{start_of_next_year.strftime('%Y-%m-%d')}までの{word.replace('将来', '')}"
        
    elif "最新" in word:
        # 「最新の」処理
        six_months_ago = now - dt.timedelta(days=182) # 大体半年前
        date_range = f"{six_months_ago.strftime('%Y-%m-%d')}から{now.strftime('%Y-%m-%d')}までの{word.replace('最新', '')}"
    

    elif "近年" in word:
        # 「近年の」処理
        three_years_ago = now - dt.timedelta(days=3*365) # おおよそ3年前
        date_range = f"{three_years_ago.strftime('%Y-%m-%d')}から{now.strftime('%Y-%m-%d')}までの{word.replace('近年', '')}"

    else:
        # 日付のわかるワードがない場合はそのまま返す
        return word
    
    return date_range

```


```python
# # テスト
# print(date_range_from_word_updated_fixed("最近"))
# print(date_range_from_word_updated_fixed("今年"))
# print(date_range_from_word_updated_fixed("今週"))
# print(date_range_from_word_updated_fixed("来週"))
# print(date_range_from_word_updated_fixed("昨日"))
# print(date_range_from_word_updated_fixed("未来"))
# print(date_range_from_word_updated_fixed("未来50年後"))
# print(date_range_from_word_updated_fixed("未来5日後"))
# print(date_range_from_word_updated_fixed("最新のAIトレンド"))
# print(date_range_from_word_updated_fixed("今年のファッショントレンド"))
```

検索クエリを具体化する道具


```python
functions = \
[
    {
        # 【Query2doc】
        # 関数名
        "name": "q2_doc",
        # 関数の説明
        "description": "与えられた専門的な単語や難しい文章をわかりやすく詳細に説明します。",
        # 関数の引数の定義
        "parameters":
         {
            "type": "object",
            "properties":
             {
                "model_name":
                {
                    "type": "string",
                    "description": "わかりやすく詳細に説明するために使うモデル名"
                },
                "query":
                {
                    "type": "string",
                    "description": "専門的な単語や難しい文章が入ります。"
                },
            },
            "required": ["model_name", "query"],
        }
    },
]

```


```python
# Query2doc
def q2_doc(
    model_name: str,
    query: str,
):
    
    # queryの詳細説明を作成する。
    # あなたは、以下の例を参考にクエリを順番に詳しく日本語で説明し無ければいけません。
    prompt = [{'role': 'system', 'content': "You must explain queries in detail and in order in Japanese, referring to the examples below."}]
    
    prompt.append({"role": "system", "content": "Use the following example to create a detailed query description.\n\n###Example###\n\nQuery: what state is this zip code 85282\n\nresult query: {      'q2_doc_passage': 'Welcome to TEMPE, AZ 85282. 85282 is a rural zip code in Tempe, Arizona. The population is primarily white, and mostly single. At $200,200 the average home value here is a bit higher than average for the Phoenix-Mesa-Scottsdale metro area, so this probably isn’t the place to look for housing bargains.5282 Zip code is located in the Mountain time zone at 33 degrees latitude (Fun Fact: this is the same latitude as Damascus, Syria!) and -112 degrees longitude.'}"})
    """
    Use the following example to create a detailed query description.
    
    ###Example###
    Query: what state is this zip code 85282
    
    result query: 
    {
      "q2_doc_passage": "Welcome to TEMPE, AZ 85282. 85282 is a rural zip code in Tempe, Arizona. The population is primarily white, and mostly single. At $200,200 the average home value here is a bit higher than average for the Phoenix-Mesa-Scottsdale metro area, so this probably isn’t the place to look for housing bargains.5282 Zip code is located in the Mountain time zone at 33 degrees latitude (Fun Fact: this is the same latitude as Damascus, Syria!) and -112 degrees longitude."
    }
    """
    prompt.append({"role": "system", "content": "Use the following example to create a detailed query description.\n\n###Example###\n\nQuery: why is gibbs model of reflection good\n\nresult query: {      'q2_doc_passage': 'In this reflection, I am going to use Gibbs (1988) Reflective Cycle. This model is a recognised framework for my reflection. Gibbs (1988) consists of six stages to complete one cycle which is able to improve my nursing practice continuously and learning from the experience for better practice in the future.n conclusion of my reflective assignment, I mention the model that I chose, Gibbs (1988) Reflective Cycle as my framework of my reflective. I state the reasons why I am choosing the model as well as some discussion on the important of doing reflection in nursing practice.'}"})
    """
    Use the following example to create a detailed query description.
    
    ###Example###
    Query: why is gibbs model of reflection good
    
    result query: 
    {
      "q2_doc_passage": "In this reflection, I am going to use Gibbs (1988) Reflective Cycle. This model is a recognised framework for my reflection. Gibbs (1988) consists of six stages to complete one cycle which is able to improve my nursing practice continuously and learning from the experience for better practice in the future.n conclusion of my reflective assignment, I mention the model that I chose, Gibbs (1988) Reflective Cycle as my framework of my reflective. I state the reasons why I am choosing the model as well as some discussion on the important of doing reflection in nursing practice."
    }
    """
    prompt.append({"role": "system", "content": "Use the following example to create a detailed query description.\n\n###Example###\n\nQuery: what does a thousand pardons means\n\nresult query: {      'q2_doc_passage': 'Oh, that’s all right, that’s all right, give us a rest; never mind about the direction, hang the direction - I beg pardon, I beg a thousand pardons, I am not well to-day; pay no attention when I soliloquize, it is an old habit, an old, bad habit, and hard to get rid of when one’s digestion is all disordered with eating food that was raised forever and ever before he was born; good land! a man can’t keep his functions regular on spring chickens thirteen hundred years old.'}"})    
    """
    Use the following example to create a detailed query description.
    
    ###Example###
    Query: what does a thousand pardons means
    
    result query: 
    {
      "q2_doc_passage": "Oh, that’s all right, that’s all right, give us a rest; never mind about the direction, hang the direction - I beg pardon, I beg a thousand pardons, I am not well to-day; pay no attention when I soliloquize, it is an old habit, an old, bad habit, and hard to get rid of when one’s digestion is all disordered with eating food that was raised forever and ever before he was born; good land! a man can’t keep his functions regular on spring chickens thirteen hundred years old."
    }
    """
    prompt.append({"role": "system", "content": "Use the following example to create a detailed query description.\n\n###Example###\n\nQuery: what is a macro warning\n\nresult query: {      'q2_doc_passage': 'Macro virus warning appears when no macros exist in the file in Word. When you open a Microsoft Word 2002 document or template, you may receive the following macro virus warning, even though the document or template does not contain macros: C:\<path>\<file name>contains macros. Macros may contain viruses.'}"})
    """
    Use the following example to create a detailed query description.
    
    ###Example###
    Query: what is a macro warning   
    
    result query: 
    {
      "q2_doc_passage": "Macro virus warning appears when no macros exist in the file in Word. When you open a Microsoft Word 2002 document or template, you may receive the following macro virus warning, even though the document or template does not contain macros: C:\<path>\<file name>contains macros. Macros may contain viruses."
    }
    """
    prompt.append({"role": "system", "content": "Use the following example to create a detailed query description.\n\n###Example###\n\nQuery: ポケモン緑はいつリリースされたか\n\nresult query: {      'q2_doc_passage': 'ポケモン緑は1996年2月27日に日本でリリースされました。これはポケモンシリーズのゲームの中で最初のものであり、後に1998年にアメリカでリリースされたポケモン赤と青の基礎となりました。オリジナルのポケモン緑は、シリーズのファンの間で愛されるクラシックな作品として残っています。'}"})
    """
    Use the following example to create a detailed query description.
    
    ###Example###
    Query: ポケモン緑はいつリリースされたか 
    
    result query: 
    {
      "q2_doc_passage": "ポケモン緑は1996年2月27日に日本でリリースされました。これはポケモンシリーズのゲームの中で最初のものであり、後に1998年にアメリカでリリースされたポケモン赤と青の基礎となりました。オリジナルのポケモン緑は、シリーズのファンの間で愛されるクラシックな作品として残っています。"
    }
    """
    

    prompt.append({"role": "user", "content": "Generate JSON from the text of a detailed query description. Use 'q2_doc_passage' as the schema and generate it in the form {'q2_doc_passage': text of the detailed query description}."})
    prompt.append({"role": "user", "content": f"Query:{query}. Result extract keywords from a block of text.:"})
    

    """
    system
    あなたは、以下の例を参考にクエリを順番に詳しく日本語で説明し無ければいけません。
    次の例を使用して、詳細なクエリの説明を作成します。
    
    ###Example###
    
    Write a passage that answers the given query: 使用された完全なプロンプトの翻訳
    問い: この郵便番号85282はどの州にあるか
    回答: TEMPE, AZ 85282へようこそ。85282はアリゾナ州テンピにある郵便番号です。人口は主に白人で、ほとんどが独身です。平均住宅価格は$200,200で、フェニックス-メサ-スコッツデール都市圏の平均よりも少し高いため、住宅の掘り出し物を探す場所ではないかもしれません。85282郵便番号は、山岳時間帯の33度緯度（面白い事実: これはシリアのダマスカスと同じ緯度です！）と-112度経度に位置しています。
    問い: ギブスの反省モデルが良い理由は何か
    回答: この反省では、ギブス（1988年）の反射サイクルを使用します。このモデルは、私の反省のための認識された枠組みです。ギブス（1988年）は、一連のサイクルを完了するために6つの段階からなり、経験から学び、将来の実践に向けて看護実践を継続的に改善することができます。私の反省課題の結論として、選んだモデルであるギブス（1988年）の反射サイクルと、そのモデルを選んだ理由、さらに看護実践における反省の重要性についての議論を述べます。
    問い: 千回の許しとは何を意味するか
    回答: それは大丈夫、それは大丈夫、休息を与えてください; 方向について心配するな、方向を吊るして - 申し訳ありません、千回の許しを請います、私は今日は体調が優れません; 私が独り言を言うときに注意を払わないでください、それは古い習慣、古くからの悪い習慣で、一人の消化が生まれる前から永遠に育てられた食物で全て乱れているとき、それを断つのは難しいです; いいですね！ 1300年前の春の鶏で人の機能を規則正しく保つことはできません。
    問い: マクロ警告とは何か
    回答: ファイルにマクロが存在しない場合にマクロウイルス警告が表示されます。Microsoft Word 2002のドキュメントやテンプレートを開くと、ドキュメントやテンプレートにマクロが含まれていないにも関わらず、次のようなマクロウイルス警告が表示されることがあります: C:<パス><ファイル名>にはマクロが含まれています。マクロにはウイルスが含まれている可能性があります。
    問い: ポケモン緑はいつリリースされたか
    回答: ポケモン緑は1996年2月27日に日本でリリースされました。これはポケモンシリーズのゲームの中で最初のものであり、後に1998年にアメリカでリリースされたポケモン赤と青の基礎となりました。オリジナルのポケモン緑は、シリーズのファンの間で愛されるクラシックな作品として残っています。
    
    キーワードリストを抽出するために、前回の検索で使用したクエリとはできるだけ異なるクエリを生成する。
    user
    詳細なクエリの説明のテキストからJSONを生成する。スキーマとして "q2_doc_passage"を使用し、{"q2_doc_passage"： 詳細なクエリの説明のテキスト}の形式で生成する。
    
    Query:{}. q2_doc_passage:
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE+TEMPERATURE,
    )
    res_str = response.choices[0].message.content
    # print(res_str)
    
    # JSON形式の文字列を辞書に変換
    res = json.loads(res_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": res["q2_doc_passage"],
        "use_query": query
    }
```


```python

```


```python
# 関数を選択して実行するデモ関数
def function_calling_query_change_3cycle(
    question: str,
    query: str,
):

    # GPTにプロンプトと関数定義リストを一緒に投入し、Function callingの使用を指示
    response = client.chat.completions.create(
        model=MODEL_NAME,
        temperature=TEMPERATURE,
        messages=
    	[
    		{ "role": "user", "content": query}  # プロンプトを投入
    	],
        functions=functions, # プロンプトと一緒に関数定義リストを投入
        function_call="auto", # Function callingを使用するが、その際、関数の選択はGPTに任せる
    )

    # GPTからの応答を抽出
    message = response.choices[0].message
    function_call = message.function_call
    if function_call is not None:
        # 実行すべき関数名
        function_name = function_call.name
        # その関数に渡すべき引数
        # arguments = json.loads(function_call.arguments)
        # promptを直接引数として使用
        arguments = {"model_name": MODEL_NAME, "query": query}
    
        # 関数の選択と実行
        if function_name == "q2_doc":
            # q2_doc関数を実行
            res = q2_doc(arguments["model_name"], arguments["query"])
            print(f"move q2_doc: {res}")
            # QAの実行
            # M_NAME = "gpt-3.5-turbo-0125"
            qa_res = qa_node(
                MODEL_NAME,
                res["output"],
                res["use_query"]
            )
            print(f"qa res: {qa_res['output']}")
            if qa_res["output"] == "Acceptable":
                print("Acceptable")
                query = res["output"]
                get_query = make_re_search_query(
                    M_NAME,
                    question,
                    query
                )
                answer = get_query['output']
            else:
                answer = query
                
        else:
            # 他の関数が選択された場合の処理
            # この例では、選択された関数がdate_range_from_word_updated_fixedのみであるため、他の分岐は省略
            # answer = "該当する関数がありません。"
            answer = query
    else:
        answer = query
    return answer
```


```python
# 関数を選択して実行するデモ関数
def function_calling_query_change_cycle(
    question: str,
    query: str,
):

    # GPTにプロンプトと関数定義リストを一緒に投入し、Function callingの使用を指示
    response = client.chat.completions.create(
        model=MODEL_NAME,
        temperature=TEMPERATURE,
        messages=
    	[
    		{ "role": "user", "content": query}  # プロンプトを投入
    	],
        functions=functions, # プロンプトと一緒に関数定義リストを投入
        function_call="auto", # Function callingを使用するが、その際、関数の選択はGPTに任せる
    )

    # GPTからの応答を抽出
    message = response.choices[0].message
    function_call = message.function_call
    if function_call is not None:
        # 実行すべき関数名
        function_name = function_call.name
        # その関数に渡すべき引数
        # arguments = json.loads(function_call.arguments)
        # promptを直接引数として使用
        arguments = {"model_name": MODEL_NAME, "query": query}
    
        # 関数の選択と実行
        if function_name == "q2_doc":
            # q2_doc関数を実行
            res = q2_doc(arguments["model_name"], arguments["query"])
            print(f"move q2_doc: {res}")
            query = res["output"]
            # M_NAME = "gpt-3.5-turbo-0125"
            get_query = make_re_search_query(
                MODEL_NAME,
                question,
                query
            )
            answer = get_query['output']
                
        else:
            # 他の関数が選択された場合の処理
            # この例では、選択された関数がdate_range_from_word_updated_fixedのみであるため、他の分岐は省略
            # answer = "該当する関数がありません。"
            answer = query
    else:
        answer = query
    return answer
```


```python
def research_agent(
    question:str,
):
    query = question
    search_res = search_agent_1cycle(question, query)

    print(f"検索結果を要約した回答: {search_res['output']}")
    print(f"質問と回答の整合性チェック: {search_res['qa_result']['output']}")

    # カウント用変数の初期化
    research_cnt = 1
    # outputが'Not Acceptable'である間、処理を繰り返す
    while search_res['qa_result']['output']  == 'Not Acceptable':
        print("-"*50)
        with Timer(prefix=f'Number of re-researches {research_cnt+1} :'):
            # カウントが3に達したらループを強制終了
            if research_cnt == 5:
                print("再実行回数が4に達したため、処理を終了します。")
                break
            # 再検索用のクエリ生成 2回目以降実行
            re_query = make_re_search_query(
                MODEL_NAME,
                question,
                query
            )
            
            query = re_query['output']
            print(f"再検索用の初期クエリ: {query}")
            # date_range_from_word_updated_fixedによる検索クエリ変換　3回目以降実行
            # if research_cnt != 0:
            if research_cnt >= 2:
                with Timer(prefix=f'date_range_from_word_updated_fixed {research_cnt}:'):
                    query_list = query.split(",")
                    query_re_list = []
                    for q in query_list:
                        f_c_q = date_range_from_word_updated_fixed(q)
                        query_re_list.append(f_c_q)

                    # query = ", ".join(query_re_list).strip()
                    query = ", ".join(list(dict.fromkeys(query_re_list))).strip()
                    
                    print(f"query: {query}")
                
            # function_callingによる検索クエリの拡張　4回目
            # if research_cnt != 0:
            if research_cnt == 3:
                with Timer(prefix=f'function calling change {research_cnt}:'):
                    query_list = query.split(",")
                    query_re_list = []
                    for q in query_list:
                        f_c_q = function_calling_query_change_3cycle(question, q)
                        query_re_list.append(f_c_q)
                    # query = ", ".join(query_re_list).strip()
                    query = ", ".join(list(dict.fromkeys(query_re_list))).strip()

            if research_cnt >= 4:    # 5回目以降実行
                with Timer(prefix=f'function calling change {research_cnt}:'):
                    query_list = query.split(",")
                    query_re_list = []
                    for q in query_list:
                        f_c_q = function_calling_query_change_cycle(question, q)
                        query_re_list.append(f_c_q)
                    # 重複は消して
                    # query = ", ".join(query_re_list).strip()
                    query = ", ".join(list(dict.fromkeys(query_re_list))).strip()
            print(f"再検索クエリ: {query}")

            search_res = search_agent_1cycle(question, query)

            print(f"検索結果を要約した回答: {search_res['output']}")
            print(f"質問と回答の整合性チェック: {search_res['qa_result']['output']}")
            # カウントアップ
            research_cnt += 1
    return {
        "final_qa": search_res['qa_result']['output'],
        "final_query": query,
        "search_output": search_res['output']
    }
```


```python

```


```python
def get_summary_of_search_results(question, search_res):
    print("-"*50)
    print(f"質問: {question}")
    print("-"*50)
    print(f"検索に使用したクエリ:\n {research_res['final_query']}")
    print(f"検索結果を要約した最終回答:\n {research_res['search_output']}")
    print(f"最終判定結果: {research_res['final_qa']}")
    print("-"*50)
    print(f"使用モデル: {MODEL_NAME}")
```


```python
question = """2024年に注目されている最新のテクノロジートレンドは何ですか？
また、それらのトレンドが社会にどのような影響を与えると予想されますか？"""
with Timer(prefix=f'Handle all time by research.'):
    research_res = research_agent(question)
```

    検索結果を要約した回答: 2024年の7つの注目トレンド: 1. 生成AIの業務への応用、2. 投資の保護、3. ビルダーの台頭、4. 価値のデリバー、5. テクノロジービジョン2024、6. 7つのテックトレンド予測、7. ITエンジニア不足をAIが救うか
    質問と回答の整合性チェック: Acceptable
    Handle all time by research. 5.576[s]



```python
get_summary_of_search_results(question, research_res)
```

    --------------------------------------------------
    質問: 2024年に注目されている最新のテクノロジートレンドは何ですか？
    また、それらのトレンドが社会にどのような影響を与えると予想されますか？
    --------------------------------------------------
    検索に使用したクエリ:
     2024年に注目されている最新のテクノロジートレンドは何ですか？
    また、それらのトレンドが社会にどのような影響を与えると予想されますか？
    検索結果を要約した最終回答:
     2024年の7つの注目トレンド: 1. 生成AIの業務への応用、2. 投資の保護、3. ビルダーの台頭、4. 価値のデリバー、5. テクノロジービジョン2024、6. 7つのテックトレンド予測、7. ITエンジニア不足をAIが救うか
    最終判定結果: Acceptable
    --------------------------------------------------
    使用モデル: gpt-3.5-turbo-0125



```python
# MODEL_NAME = "gpt-4-0125-preview"
MODEL_NAME = "gpt-3.5-turbo-0125"

question = """最近世界の異なる国々で行われているユニークな新年の祝い方を3つ挙げ、
それぞれの文化的背景を説明してください。"""

with Timer(prefix=f'Handle all time by research.'):
    research_res = research_agent(question)
```

    検索結果を要約した回答: 日本のお正月に関する祝いや行事について様々な情報が記載されており、初詣や鏡開きなどの習慣が紹介されています。また、世界各国の新年の祝い方や文化についても触れられており、中国、コロンビア、ドイツ、デンマーク、オランダ、イスラエル、スコットランド、タイなどの独自のお正月の祝い方が述べられています。さらに、春節祭やソンクラーン祭りなど、日本以外の国々で行われる異なるお正月の様子も紹介されています。
    質問と回答の整合性チェック: Acceptable
    Handle all time by research. 6.573[s]



```python
get_summary_of_search_results(question, research_res)
```

    --------------------------------------------------
    質問: 最近世界の異なる国々で行われているユニークな新年の祝い方を3つ挙げ、
    それぞれの文化的背景を説明してください。
    --------------------------------------------------
    検索に使用したクエリ:
     最近世界の異なる国々で行われているユニークな新年の祝い方を3つ挙げ、
    それぞれの文化的背景を説明してください。
    検索結果を要約した最終回答:
     {'日本のお正月': '新年には初詣で神社や寺を訪れ、一年の幸福や健康を祈願します。また、鏡開きの行事では鏡餅を開いて食べ、家族の絆や豊かな収穫を願います。', 'スペインの新年': 'プエルタ・デル・ソルでのぶどう食べは、12粒を食べきることでその年の幸せを願う伝統ですが、3秒に1回の鐘の音に合わせて食べるのは難しいとされています。', 'デンマークの新年': '大晦日に玄関に物を投げる伝統があり、これは友情や愛情を示す行為とされています。', '世界の新年の祝い方': '異なる文化では、中国の春節、コロンビアではブドウを食べて彫像を燃やし、ドイツでは爆竹を鳴らし、オランダでは新年に飛び込むなど、国や地域によって様々な新年の祝い方があります。', 'タイのソンクラン': '4月半ばに旧正月を祝うソンクラン祭りでは、人々が水をかけ合って新年を祝います。', '世界の文化の相互理解': '世界には様々な文化が存在し、相互理解を深めることが重要です。知っておきたい海外文化として挨拶の仕方などが挙げられています。', '大晦日と歳神様': '日本では大晦日に歳神様を迎える伝統があり、世界各地でも大晦日の過ごし方は様々です。', '世界の農業': 'ヨーロッパの国々では農業の形態が異なり、EUの共通農業政策「CAP」を通じて日本農業との違いを探ることができます。', '社会貢献と教育格差': '社会構造の仕組みが影響する教育格差の問題に対して、寄付をすることで社会貢献を行う方法があります。'}
    最終判定結果: Acceptable
    --------------------------------------------------
    使用モデル: gpt-4-0125-preview



```python
MODEL_NAME = "gpt-4-0125-preview"

question = """最近の世界経済動向を分析し、これから市場で注目すべき3つの産業を予測してください。それぞれの産業が注目される理由も含めて説明してください。
また、将来発展するような市場についても教えてください。"""

with Timer(prefix=f'Handle all time by research.'):
    research_res = research_agent(question)
```

    検索結果を要約した回答: {'世界のインフレ率見通し': '世界の総合インフレ率は2024年に5.8%へ、2025年に4.4%へと鈍化する見込みで、2025年の予測は下方改定された。', '経済成長とリスク': 'ディスインフレと着実な成長に伴い、ハードランディングの可能性が低下し、世界経済成長に対するリスクは概ね均衡がとれている。', '先進国と新興市場の成長率': '先進国の成長率は2022年の2.6%から、2023年は1.5%、2024年は1.4%へ鈍化。新興市場国と発展途上国は2022年の4.1％から、2023年と2024年はともに4.0％となる見込み。', '中国経済の回復': '中国経済は、ゼロコロナ政策解除後の景気回復が緩慢。', '世界銀行の見通し': '2021年に力強く回復した世界経済は、新型コロナウイルス感染症の変異株、インフレ率の上昇、債務そして所得格差の拡大が相まって大幅な減速局面に。', 'リスク要因': '金融政策の引き締め、制約的な与信状況、貿易と投資の世界的な低迷が成長を下押しする見通し。ウクライナ情勢や米中対立など、地政学リスクへの警戒感から、経済への悪影響が想定される。'}
    質問と回答の整合性チェック: Not Acceptable
    --------------------------------------------------
    再検索用の初期クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展, 市場
    再検索クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展, 市場
    検索結果を要約した回答: {'2022年GDP成長率の見直し': '当初、2022年のGDP成長率予測は4.4％でしたが、オミクロン株の流行やインフレの加速、ロシアによるウクライナ侵略の影響等を受け、最終的には3.2％へ下方修正されました。', '世界経済成長率の予測': '2022年の3.5%から2023年は3.0%、2024年は2.9%へと鈍化する見込みで、2000～19年の歴史的平均3.8%を下回る。', '先進国と新興市場国の成長率': '先進国は2022年の2.6%から2024年には1.4%へ鈍化。新興市場国と発展途上国は2022年の4.1%から2023年と2024年は4.0%へとやや鈍化。', '世界のインフレ率予測': '2022年の8.7%から2024年には5.8%へと安定的に鈍化する見込み。', 'ウクライナでの戦争の経済への影響': 'ウクライナでの戦争が多大な人道危機を引き起こし、経済回復を抑制。2022年と2023年の世界経済成長率はそれぞれ3.6%と見込まれる。', 'デジタル変革の進展': 'デジタル技術の発展が経済・社会システムの再設計や企業経営のDXを加速。第四次産業革命が進展中。', '長期経済成長予測': '世界経済は2016年から2050年までに年平均実質成長率約2.5％で成長し、新興市場と開発途上国が成長の主なけん引役となる。'}
    質問と回答の整合性チェック: Not Acceptable
    Number of re-researches 2 : 42.535[s]
    --------------------------------------------------
    再検索用の初期クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展
    query: 世界経済動向,  市場,  注目,  産業,  予測,  理由, 2024-02-14から2025-01-01までの 発展
    date_range_from_word_updated_fixed 2: 0.000[s]
    再検索クエリ: 世界経済動向,  市場,  注目,  産業,  予測,  理由, 2024-02-14から2025-01-01までの 発展
    検索結果を要約した回答: IMFによる2022年の世界のGDP成長率予測は、ロシアによるウクライナ侵略やインフレなどの要因を考慮し、累次に下方修正された。当初は2022年の成長率予測が4.4％であったものの、4月の見通しでは3.6％へと修正された。世界経済は金融政策の引き締め、制約的な金融環境、貿易や投資の低迷により成長がさらに減速する見通しで、下振れリスクには中東の紛争激化や金融ストレスなどがある。2024年の世界経済成長率は2.4％と予想され、3年連続の減速が見込まれる。2022年から2024年の間、世界経済成長率は鈍化し、先進国と新興市場・発展途上国の成長率も低下する見込み。インフレに関しては、2022年の8.7％から2024年は5.2％に鈍化すると予測されている。
    質問と回答の整合性チェック: Not Acceptable
    Number of re-researches 3 : 22.049[s]
    --------------------------------------------------
    再検索用の初期クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展
    query: 世界経済動向,  市場,  注目,  産業,  予測,  理由, 2024-02-14から2025-01-01までの 発展
    date_range_from_word_updated_fixed 3: 0.000[s]
    move q2_doc: {'output': "クエリ: 世界経済動向. 内容: この質問は、グローバルな視点から経済の流れや傾向を理解することと密接に関わっています。'/>世界経済動向'>について知りたい場合、それは通常、国際貿易の変化、各国経済の成長や衰退、グローバル化の影響など、多岐にわたる対象を指しています。また、地政学的な出来事や環境政策が経済動向に与える影響にも興味がある場合があります。このように幅広い情報源からキーワードや重要なポイントを抽出することで経済の動きを具体的に把握することができます。例えば、'新興市場'、'貿易戦争'、'持続可能な開発'、'経済成長率'などが含まれる場合があります。", 'use_query': '世界経済動向'}
    qa res: Not Acceptable
    move q2_doc: {'output': 'クエリは、「市場からテキストブロックからキーワードを抽出する」という内容です。 返す結果の取り扱いにおいて、テキスト内から効率的かつ具体的にキーワードを識別・抽出することが目標です。これには、様々な自然言語処理技術やアルゴリズムが利用されることがあります。キーワード抽出は、文書分類、検索エンジンの最適化（SEO）、文書要約、またはテキストの理解を目的とした研究など、幅広い用途で活用されます。このクエリは情報抽出というより、ある特定のテキストデータセットに含まれる重要な語句やフレーズを見つけ出し、理解や分析の助けとなるキーワードを提供することに重点を置いています。', 'use_query': '  市場'}
    qa res: Not Acceptable
    move q2_doc: {'output': 'このクエリでは、特定のテキストブロックからキーワードを抽出することが注目されています。テキストからキーワードを抽出するプロセスは、文書内の重要な情報や概念を際立たせる役割を果たします。キーワード抽出は、テキストの分析や要約、さらには検索エンジン最適化（SEO）など、さまざまなアプリケーションで利用される重要なテクニックです。このプロセスには、自然言語処理（NLP）の技術が用いられ、テキストデータを精緻に分析し、その中から意義のある或いは代表的な単語やフレーズを抽出するものです。', 'use_query': '  注目'}
    qa res: Not Acceptable
    move q2_doc: {'output': '産業に関連するキーワードの抽出は、テキストデータの分析において生じる基本的なプロセスのひとつです。テキストブロックからキーワードを抽出することにより、そのテキストの主題や関連性が高い要素を明らかにすることが可能になります。これは特に、大量の文書やデータの中から、特定の産業や領域に関連する重要な情報を見つけ出したい場合に有用です。キーワードの抽出には多様なテクニックがあり、例えば自然言語処理(NLP)の技術、頻出語分析、TF-IDF（Term Frequency-Inverse Document Frequency）のアルゴリズムなどが含まれます。適切な手法を選択し利用することで、産業に関するテキストの分析から貴重な洞察を得ることが可能となるのです。', 'use_query': '  産業'}
    qa res: Not Acceptable
    move q2_doc: {'output': '「予測」クエリの結果については、「テキストブロックからキーワードを抽出する」という具体的な操作が提示されています。このクエリでは、指定されたテキストブロックから重要と思われる単語やフレーズを識別し取り出す方法に焦点を当てることを示しています。「予測」という言葉自身が、データ分析や自然言語処理(NLP)技術など、計算手法を使用して未来のイベントやデータの傾向を推測するといったコンテクストで用いられることがあります。しかし、このクエリでは、さらに狭い意味での予測、特にテキスト解析においてキーワードをどのように識別して抽出するか、といったプロセスについての説明や方法が期待されると解釈できるでしょう。', 'use_query': '  予測'}
    qa res: Not Acceptable
    function calling change 3: 173.703[s]
    再検索クエリ: 世界経済動向,   市場,   注目,   産業,   予測,   理由,  2024-02-14から2025-01-01までの 発展
    検索結果を要約した回答: {'IMFによる2022年の世界のGDP成長率予測': 'IMFは2022年の世界のGDP成長率を累次にわたり下方修正しており、2022年1月の初期予測では4.4％であったが、4月には3.6％へと下方修正された。主な理由はロシアによるウクライナ侵略やインフレの加速、金融引締めの加速などである。', '2022年以降の世界経済の見通し': '2022年の世界経済成長率は3.5%と推計され、2023年と2024年はともに3.0%に減速する見込み。先進国は政策の引き締めの影響で成長率が鈍化し、新興市場国と発展途上国もわずかに成長率が鈍化する。世界のインフレ率は2022年の8.7%から2024年は5.8%へと鈍化する見込み。', '世界経済におけるリスク要因': '下振れリスクには中東紛争の激化、金融ストレス、根強いインフレ、貿易の分断化、気候関連の自然災害などがある。国際協調による債務免除の供与、貿易統合の促進、気候変動への対処、食料不安の軽減が必要。', '新興国及び途上国の課題': '新興国及び途上国では財政政策が景気循環増幅的であり変動が大きい。適正なマクロ経済・構造政策と十全に機能する制度が投資と長期的な成長を促すのに不可欠。', '今後の成長のけん引役': '新興市場と開発途上国が今後の成長の主なけん引役となる見込み。特に新興7カ国（E7）は今後34年間で年平均3.5％のペースで成長する予想。一方で、先進7カ国（G7）の成長率は平均1.6％にとどまる見込み。'}
    質問と回答の整合性チェック: Not Acceptable
    Number of re-researches 4 : 214.766[s]
    --------------------------------------------------
    再検索用の初期クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展
    query: 世界経済動向,  市場,  注目,  産業,  予測,  理由, 2024-02-14から2025-01-01までの 発展
    date_range_from_word_updated_fixed 4: 0.000[s]
    move q2_doc: {'output': '「世界経済動向」とは、全世界の経済活動の現在及び予測される動きを概観する分析のことを指します。これには各国の経済成長率、貿易と投資の流れ、為替率、インフレーション率といった経済指標の分析が含まれています。更に、世界経済に影響を及ぼす主な要因、例えば地政学的緊張、資源価格の変動、金融政策の変更などについても考慮されます。このような分析は、世界経済の健全性を評価し、各国政府や企業が未来の計画を立てる際の重要な情報提供者となります。', 'use_query': '世界経済動向'}
    move q2_doc: {'output': '「市場. Result」の概要抽出では、与えられたテキストから主要なキーワードを特定するプロセスを指します。ここでは「市場」という単語がキーワードと見なされ、その文脈や関連性に基づいてテキスト内の重要な情報や意味を抽出、分析するタスクに焦点を当てます。このプロセスは一般にテキストマイニングやナチュラルランゲージプロセッシング（NLP）技術を使用して実行され、情報検索、意味分析、テキスト要約などのアプリケーションに役立つ要素を洗い出します。具体的なテキスト内容に応じて、関連するキーワードやフレーズが明確にされ、その上でより詳細なデータ分析やインサイト抽出につながる可能性があります。', 'use_query': '  市場'}
    move q2_doc: {'output': 'この問い合わせは特定のテキストブロックからキーワードを抽出する方法に関するものです。クエリ「注目」に関しては、おそらく特定の文書や文章の中から重要や焦点を当てるべき単語やフレーズ、いわゆるキーワードを識別、抽出することが目的であると理解されます。このプロセスはテキスト分析、情報検索、または自然言語処理の一環として行われ、具体的な情報を見つけるための研究、概要作成、または可視化を容易にするために用いられることがあります。', 'use_query': '  注目'}
    move q2_doc: {'output': '「産業」というキーワードは、製造や生産、サービス提供など、あらゆる経済活動の部門を指し示す一般的な用語です。特定のテキストコンテンツにおいて、この用語より抽出する動作では、文脈内で「産業」が指し示す具体的な分野や背景、それらの産業が直面する挑戦やトレンド、技術革新など特定の詳細を明らかにすることを目的とします。リズムを検索したり理解する際に、その産業が属している市場、技術の採用、環境への影響、経済的寄与、およびそれに関連するすべての側面が重要となってきます。これには専門的な知識と、特定の産業分野の動向に精通する能力が求められる作業です。', 'use_query': '  産業'}
    move q2_doc: {'output': '「予測」のクエリ結果では、与えられたテキストからキーワードを抽出することが要求されます。テキストブロックからのキーワード抽出は、テキストの重要な要素を強調し、主要な概念やテーマを速やかに理解するのに役立ちます。このプロセスは、自然言語処理(NLP)技術を使用して自動的に行われることもあります。キーワードは、文書・記事の概要を提供し、検索エンジンの最適化(SEO)、情報の組織化、研究や学習のための材料の速読に特に有用です。このように「予測」というクエリは、テキスト内の主要な情報点 or概念を識別するための方法の探求を意味します。', 'use_query': '  予測'}
    function calling change 4: 189.170[s]
    再検索クエリ: 世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展, 市場, 世界経済動向, 市場, 注目産業, 予測, 発展, 将来, 世界経済動向, 市場, 注目, 産業, 予測, 発展, 市場, 世界経済動向, 市場予測, 注目産業, 産業発展, 将来発展, 市場分析,   理由,  2024-02-14から2025-01-01までの 発展
    検索結果を要約した回答: {'IMF_2022年世界GDP成長率予測': 'IMFによると、2022年の世界のGDP成長率予測は、ロシアによるウクライナ侵略やインフレなどの影響で累次にわたり下方修正され、当初4.4％から3.6％へと修正された。', '産業別成長見通し': '鉄鋼、オイル・ガス、石油化学、紙パルプ、医薬品、食品、電子部品・半導体、家電などの産業が挙げられ、不動産、アパレル、スーパー・ドラッグストア、外食、レジャー(旅行・ホテル)、電力などの順に並べられている。', 'PwC_長期経済予測': 'PwCの予測によると、2042年までに世界経済は倍増し、中国は既に購買力平価ベースで世界最大の経済国になっており、2050年までにはインドが米国を抜き世界第2位の経済大国となる見通し。', '2022年〜2024年の世界経済成長率予測': '2022年の世界経済成長率のベースライン予測は3.5%から、2023年は3.0%、2024年は2.9%へと鈍化する見込み。先進国と新興市場国の成長率も鈍化するとされている。', '物価上昇率': '2022年の物価上昇率予測は先進国が5.7％、新興国と発展途上国が8.7％とされ、戦争が主な要因で一次産品価格の上昇が見られる。', 'デジタル変革': '21世紀に入り、デジタル技術の発展が経済のルールを変え、第四次産業革命が進行中である。'}
    質問と回答の整合性チェック: Not Acceptable
    Number of re-researches 5 : 241.471[s]
    --------------------------------------------------
    再実行回数が4に達したため、処理を終了します。
    Number of re-researches 6 : 0.000[s]
    Handle all time by research. 556.217[s]



```python
get_summary_of_search_results(question, research_res)
```

    --------------------------------------------------
    質問: 最近の世界経済動向を分析し、これから市場で注目すべき3つの産業を予測してください。それぞれの産業が注目される理由も含めて説明してください。
    また、将来発展するような市場についても教えてください。
    --------------------------------------------------
    検索に使用したクエリ:
     世界経済動向, 市場, 注目, 産業, 予測, 理由, 将来発展, 市場, 世界経済動向, 市場, 注目産業, 予測, 発展, 将来, 世界経済動向, 市場, 注目, 産業, 予測, 発展, 市場, 世界経済動向, 市場予測, 注目産業, 産業発展, 将来発展, 市場分析,   理由,  2024-02-14から2025-01-01までの 発展
    検索結果を要約した最終回答:
     {'IMF_2022年世界GDP成長率予測': 'IMFによると、2022年の世界のGDP成長率予測は、ロシアによるウクライナ侵略やインフレなどの影響で累次にわたり下方修正され、当初4.4％から3.6％へと修正された。', '産業別成長見通し': '鉄鋼、オイル・ガス、石油化学、紙パルプ、医薬品、食品、電子部品・半導体、家電などの産業が挙げられ、不動産、アパレル、スーパー・ドラッグストア、外食、レジャー(旅行・ホテル)、電力などの順に並べられている。', 'PwC_長期経済予測': 'PwCの予測によると、2042年までに世界経済は倍増し、中国は既に購買力平価ベースで世界最大の経済国になっており、2050年までにはインドが米国を抜き世界第2位の経済大国となる見通し。', '2022年〜2024年の世界経済成長率予測': '2022年の世界経済成長率のベースライン予測は3.5%から、2023年は3.0%、2024年は2.9%へと鈍化する見込み。先進国と新興市場国の成長率も鈍化するとされている。', '物価上昇率': '2022年の物価上昇率予測は先進国が5.7％、新興国と発展途上国が8.7％とされ、戦争が主な要因で一次産品価格の上昇が見られる。', 'デジタル変革': '21世紀に入り、デジタル技術の発展が経済のルールを変え、第四次産業革命が進行中である。'}
    最終判定結果: Not Acceptable
    --------------------------------------------------
    使用モデル: gpt-4-0125-preview



```python

```
