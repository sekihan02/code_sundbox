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
    Requirement already satisfied: tiktoken in /usr/local/lib/python3.10/dist-packages (0.5.2)
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

import arxiv
import openai
from openai import OpenAI
from dotenv import load_dotenv

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
# test
system_prompt = []
create_agent_system(system_prompt, "research")
```




    [{'role': 'system',
      'content': 'Work autonomously according to your specialty, using the tools available to you.'},
     {'role': 'system', 'content': ' Do not ask for clarification.'},
     {'role': 'system',
      'content': ' Your other team members (and other teams) will collaborate with you with their own specialties.'},
     {'role': 'system',
      'content': ' You are chosen for a reason! You are one of the following team members: research.'}]




```python
# 各ノードの名称を定義
RESEARCH_NODE = "research"
QUALITY_ASSURANCE_NODE = "quality_assurance"
WRITER_NODE = "writer"
SUPERVISOR_NODE = "supervisor"
```


```python
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
    print(response.choices[0].message.content)
    # スーパーバイザーの機能をバインドし、JSON出力を解析するパイプラインを作成
    return response.choices[0].message.content
```

## Researchエージェントの定義


```python
from duckduckgo_search import DDGS, AsyncDDGS
import asyncio

# テキスト検索用の関数
def search_text(keywords, region='wt-wt', safesearch='moderate', timelimit=None, max_results=5):
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

## ノードの定義


```python
# チームメンバーの定義
"""
Researchノード: Web上から必要な情報を検索し、ユーザーからのリクエストに応じて記事を作成します。
Quality Assurance (QA) ノード: 記事の品質が基準を満たしているかをチェックし、満たしていない場合はフィードバックを返します。品質の受け入れ基準は常にこのノードによって決定されます。
Writerノード: 世界最高レベルのAIチェッカーでも人間が書いたと判断されるような文章を作成します。
Supervisorノード: 会話を管理し、次に動作するワーカーを指示します。全てのタスクが完了したら、「FINISH」と応答します。
"""
team_members = [
    {"name": RESEARCH_NODE,
     "description": "Search the web for necessary information and write articles as requested by users."},
    {"name": QUALITY_ASSURANCE_NODE,
     "description": f"Check that the quality of the article meets the criteria. If not, return feedback. The acceptability of deliverables is always determined by {QUALITY_ASSURANCE_NODE}."},
    {"name": WRITER_NODE,
     "description": "Write articles that even the world's best AI checkers would judge as written by a human."},
]
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
    print(search_res_str)
    # JSON形式の文字列を辞書に変換
    search_res = json.loads(search_res_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": search_res["research_result"],
        "messages": job_result
    }
```


```python
# 使用例: テキスト検索
search = ""
text_results = search_text(question)
for result in text_results:
    search += result["body"] + ", "
    print(result["body"])
```

    /tmp/ipykernel_2501/2308027652.py:6: UserWarning: DDGS running in an async loop. This may cause errors. Use AsyncDDGS instead.
      with DDGS() as ddgs:


    PM2.5分布予測 地震情報 気象予報士の解説 スキー積雪情報 注目 トップ 北海道地方 道北 稚内市 1時間天気 雪雲の状況は? (関東地方の雨雲レーダー) 注目 稚内市の天気 06日04:00発表 稚内市の注意報： 低温 着氷 今日・明日の天気 3時間天気 1時間天気 2週間天気 今日06日 (火) 明日07日 (水) 明後日08日...
    【NHK】稚内市｜天気予報 [1時間毎]今日・明日・明後日の天気 全国天気 防災・減災 津波 地震 火山 河川 全国 宗谷地方 稚内市 ハザードマップ このサイトについて 現在地 地域 設定 稚内市 対象エリアに発表中の情報 情報の取得ができませんでした 再読み込みしてください。 地域のNHKより： 情報の取得ができませんでした...
    稚内市の今日明日の天気 - 日本気象協会 tenki.jp 稚内市の天気 06日16:00発表 今日・明日の天気 3時間天気 1時間天気 2週間天気 今日 02月06日 (火) [友引] 曇 真冬日 最高 -5℃ [+1] 最低 -9℃ [-1] 明日 02月07日 (水) [先負] 曇 真冬日 最高 -5℃ [0] 最低 -7℃ [+2] 16:50現在...
    稚内市の天気予報。 3時間ごとの天気、降水量、気温などがチェックできます。
    稚内の現在の天気 (気象観測所の観測結果)を見ることができます。 最小3時間毎の天気や雲の観測のほか、10分ごとに更新される今の気温、風向風速、日照などを見ることができます。 過去10日間の天気と最高最低気温なども見ることができます。



```python
# search_node test
research_res = research_node(
    MODEL_NAME,
    search, # search の結果
)
research_res
```

    {
      "research_result": "稚内市の天気に関する様々な情報が提供されており、PM2.5分布予測や地震情報、気象予報などが含まれています。また、気象観測所の観測結果や天気予報、現在の天気なども確認できます。"
    }





    {'output': '稚内市の天気に関する様々な情報が提供されており、PM2.5分布予測や地震情報、気象予報などが含まれています。また、気象観測所の観測結果や天気予報、現在の天気なども確認できます。',
     'messages': 'PM2.5分布予測 地震情報 気象予報士の解説 スキー積雪情報 注目 トップ 北海道地方 道北 稚内市 1時間天気 雪雲の状況は? (関東地方の雨雲レーダー) 注目 稚内市の天気 06日04:00発表 稚内市の注意報： 低温 着氷 今日・明日の天気 3時間天気 1時間天気 2週間天気 今日06日 (火) 明日07日 (水) 明後日08日..., 【NHK】稚内市｜天気予報 [1時間毎]今日・明日・明後日の天気 全国天気 防災・減災 津波 地震 火山 河川 全国 宗谷地方 稚内市 ハザードマップ このサイトについて 現在地 地域 設定 稚内市 対象エリアに発表中の情報 情報の取得ができませんでした 再読み込みしてください。 地域のNHKより： 情報の取得ができませんでした..., 稚内市の今日明日の天気 - 日本気象協会 tenki.jp 稚内市の天気 06日16:00発表 今日・明日の天気 3時間天気 1時間天気 2週間天気 今日 02月06日 (火) [友引] 曇 真冬日 最高 -5℃ [+1] 最低 -9℃ [-1] 明日 02月07日 (水) [先負] 曇 真冬日 最高 -5℃ [0] 最低 -7℃ [+2] 16:50現在..., 稚内市の天気予報。 3時間ごとの天気、降水量、気温などがチェックできます。, 稚内の現在の天気 (気象観測所の観測結果)を見ることができます。 最小3時間毎の天気や雲の観測のほか、10分ごとに更新される今の気温、風向風速、日照などを見ることができます。 過去10日間の天気と最高最低気温なども見ることができます。, '}




```python
research_res['output']
```




    '稚内市の天気に関する様々な情報が提供されており、PM2.5分布予測や地震情報、気象予報などが含まれています。また、気象観測所の観測結果や天気予報、現在の天気なども確認できます。'




```python
# # writerノードの定義
# def writer_node(
#         model_name: str,
#         job_result: str, # search の要約結果
#         objective: str,# 目的
#         method="Web search", # method
# ):
#     # Writerとしての指示を含むシステムメッセージ
#     # あなたは文章作成の専門家です。世界最高のAIチェッカーでさえ、人間が書いたと判断するような文章を書くことができます。
#     system_message = """You are a writing specialist.
# You can write sentences that even the world's best AI checkers would judge as written by a human."""
#     prompt = [{'role': 'system', 'content': system_message}]    
#     prompt.append({"role": "system", "content": "survey report must be in Japanese."})
    
#     writer_prompt = create_agent_system(prompt, WRITER_NODE)
#     writer_result = str({"writer_result": f"{objective}"})
#     writer_prompt.append({"role": "system", "content": f'Please generate JSON from the following write result text. Generate in the format {writer_result} using "writer_result" as the schema and survey report as the keys.'})

#     writer_prompt.append({"role": "user", "content": f'Please generate JSON from the text of search job results. Use "writer_result" as the schema, and use one of survey report as the key to generate it in the form {writer_result}.'})
#     format_str = f"""Please use the following format to prepare your survey report.

# ## 1. Introduction
# - Survey Objective: {objective}
# - Survey method: {method}

# ## 2. Survey Results
# - Data Summary: An overview of the main findings and data.
# - Interpretation of results: A detailed explanation of what the survey results mean.

# ## 3. Conclusion
# - Response to Objectives: Conclusions based on the survey objectives.
# - Summary of Key Findings Summary of key findings.

# ## 4. Recommendations
# Action Plan: Specific recommendations or improvements based on the findings.
# Implementation steps: Step-by-step process for putting recommendations into action.
# """
#     writer_prompt.append({"role": "system", "content": format_str})
#     writer_prompt.append({"role": "user", "content": f"Findings for the preparation of the survey report: {job_result}"})
#     """
#     システム
#     あなたは文章作成の専門家です。世界最高のAIチェッカーでさえ、人間が書いたと判断するような文章を書くことができます。
#     survey reportは日本語でなければならない。
#     以下の検索結果のテキストからJSONを生成してください。スキーマとして「writer_result」、キーとして「summarized results」を使用し、{"supervisor_result": summarized results}の形式で生成してください。
#     あなたの専門分野に従って自律的に働いてください。使用可能なツールを使ってください
#     確認のために質問をしないでください
#     あなたの他のチームメンバーや他のチームも、それぞれの専門分野であなたと協力します
#     あなたが選ばれたのには理由があります！あなたは以下のチームメンバーの一人です: {team_members}
    
#     調査報告書の作成には、以下の書式を使用してください。

#     ## 1. はじめに
#     - 調査目的 object
#     - 調査方法 method

#     ## 2. 調査結果
#     - データ概要：主な調査結果とデータの概要。
#     - 結果の解釈： 調査結果が意味するものについての詳細な説明。

#     ## 3. 結論
#     - 目的に対する回答： 調査目的に基づく結論。
#     - 主な調査結果の要約 主な調査結果の要約。

#     ## 4. 提言
#     行動計画： 調査結果に基づく具体的な推奨事項または改善事項。
#     実施手順： 提言を実行に移すための段階的プロセス。

#     user
#     以下の検索結果のテキストからJSONを生成する。スキーマとして "write_result "を使用し、キーとしてsurvey reportを使用して、{"supervisor_result": 要約された結果}というフォーマットで生成します。
#     調査報告書の作成のための調査結果: {job_result}
#     """
    
#     # writer用のプロンプトテンプレートを作成
#     response = client.chat.completions.create(
#         model=model_name, # model = "deployment_name".
#         messages=writer_prompt,
#         response_format={ "type": "json_object" },
#         temperature=TEMPERATURE,
#     )
#     writer_res_str = response.choices[0].message.content
#     print(writer_res_str)
#     # JSON形式の文字列を辞書に変換
#     writer_res = json.loads(writer_res_str)
    
#     # 出力と新しいメッセージをステートに反映
#     return {
#         "output": writer_res["writer_result"],
#         "messages": job_result
#     }

# output_search = research_res['output']
# objective = "survey"
# method = "Web search"

# writer_res = writer_node(
#         MODEL_NAME,
#         output_search,
#         objective,
#         method,
# )
# writer_res
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
    print(qa_res_str)
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
research_output = research_res['output']
```


```python
qa_node(
    MODEL_NAME,
    question,
    research_output
)
```

    {
      "qa_result": "Not Acceptable"
    }





    {'output': 'Not Acceptable'}




```python
# 質問
question
```




    '今日の東京と稚内市の天気を教えてください'




```python
# 検索結果
research_output
```




    '稚内市の天気に関する様々な情報が提供されており、PM2.5分布予測や地震情報、気象予報などが含まれています。また、気象観測所の観測結果や天気予報、現在の天気なども確認できます。'




```python

```


```python
out = "東京は晴れ、稚内市は晴れ時々雪です。"
```


```python
qa_node(
    MODEL_NAME,
    question,
    out
)
```

    {
      "qa_result": "Acceptable"
    }





    {'output': 'Acceptable'}




```python

```
