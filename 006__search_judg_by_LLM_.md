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
    Requirement already satisfied: httpcore==1.* in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (1.0.3)
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
ORGANIZE = "organize"
DECISION = "decision"
```


```python

```

## ノードの定義


```python
# チームメンバーの定義　特に使わないけど
"""
Decision: 入力に対してどのタスクを実行するかの判断を行う
Organize planノード: タスクをどのように実行していくかを入力と実行するタスクの内容から整理します
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
# Decisionノードの定義
def search_decision_node(
        model_name: str,
        input_text: str,
):
    # 検索判断エージェントを呼び出し、結果を取得
    # あなたは、input_text を受け取り、それを自分が持つ知識で絶対に正しく回答できるかを思慮深く考えて判断する決定者です。
    prompt = [{'role': 'system', 'content': "You are the decider who receives input_text and judiciously considers whether you can respond with certainty on your own."}]
    prompt = [{'role': 'system', 'content': "If you receive input_text and determine that it's better to generate an answer by conducting an external search, please decide 'Search'. If you can answer with your own knowledge and the query does not pertain to recent content, then please reply 'Not Search'."}]
    
    decision_prompt = create_agent_system(prompt, DECISION)
    decision_prompt.append({"role": "system", "content": 'Please generate a JSON from the following input text. Use "decision_result" as the schema and "decision results" as the key, and generate it in the format of {"decision_result": "decision results"}.'})
    decision_prompt.append({"role": "user", "content": 'Generate a JSON from the following input text. Use "decision_result as the schema and the decision result as the key, creating it in the format of {"decision_result": "Search or Not Search"}.'})
    decision_prompt.append({"role": "user", "content": f"Input text: {input_text}"})
    """
    システム
    あなたは、input_text を受け取り、それを自分が持つ知識で絶対に正しく回答できるかを思慮深く考えて判断する決定者です。
    あなたは、input_text を受け取り、外部検索を行い回答を生成した方が良いと判断するのなら  Search と判断してください。あなた自身の知識で回答でき、最近の内容が聞かれているのでなければ　Not Search と回答してください。
    (これは入れてません。回答できるか自信が無くても Search と回答します。) 
    
    あなたの専門分野に従って自律的に働いてください。使用可能なツールを使ってください
    確認のために質問をしないでください
    あなたの他のチームメンバーや他のチームも、それぞれの専門分野であなたと協力します
    あなたが選ばれたのには理由があります！あなたは以下のチームメンバーの一人です: {team_members}
    以下の入力されたテキストからJSONを生成してください。スキーマとして「decision_result」、キーとして「decision results」を使用し、{"decision_result": decision results}の形式で生成してください。
    user
    以下の入力されたテキストからJSONを生成する。スキーマとして "decision_result "を使用し、キーとして判断結果を使用して、{"decision_result": Search or Not Search}というフォーマットで生成します。
    入力されたテキスト: {input_text}
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=decision_prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    decision_res_str = response.choices[0].message.content
    # print(search_res_str)
    
    # JSON形式の文字列を辞書に変換
    search_res = json.loads(decision_res_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": search_res["decision_result"],
        "messages": input_text
    }
```


```python
question = """hello"""
with Timer(prefix=f'thinking time by decision.'):
    decision_res = search_decision_node(MODEL_NAME, question)
    
decision_res
```

    thinking time by decision. 0.950[s]





    {'output': 'Not Search', 'messages': 'hello'}




```python
question = """雨の日の過ごし方を教えてください。"""
with Timer(prefix=f'thinking time by decision.'):
    decision_res = search_decision_node(MODEL_NAME, question)
    
decision_res
```

    thinking time by decision. 0.629[s]





    {'output': 'Not Search', 'messages': '雨の日の過ごし方を教えてください。'}




```python
question = """2024年に注目されている最新のテクノロジートレンドは何ですか？
また、それらのトレンドが社会にどのような影響を与えると予想されますか？"""
with Timer(prefix=f'thinking time by decision.'):
    decision_res = search_decision_node(MODEL_NAME, question)
    
decision_res
```

    thinking time by decision. 1.008[s]





    {'output': 'Search',
     'messages': '2024年に注目されている最新のテクノロジートレンドは何ですか？\nまた、それらのトレンドが社会にどのような影響を与えると予想されますか？'}




```python
question = """ワールドカップで最多優勝を誇るブラジルが近年優勝できない原因はどこにありますか？"""
# 過去と最近のブラジル代表の情報を取得、比較し違いを分析する
# 最近のブラジル代表の代表選手の現状を取得、二つの結果から質問の回答を生成する必要がある
with Timer(prefix=f'thinking time by decision.'):
    decision_res = search_decision_node(MODEL_NAME, question)
    
decision_res
```

    thinking time by decision. 0.509[s]





    {'output': 'Search', 'messages': 'ワールドカップで最多優勝を誇るブラジルが近年優勝できない原因はどこにありますか？'}




```python
decision_res["output"]
```




    'Search'


