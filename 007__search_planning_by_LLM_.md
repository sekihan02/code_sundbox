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
    [0mRequirement already satisfied: duckduckgo-search==4.4 in /usr/local/lib/python3.10/dist-packages (4.4)
    Requirement already satisfied: docstring-inheritance>=2.1.2 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (2.1.2)
    Requirement already satisfied: click>=8.1.7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (8.1.7)
    Requirement already satisfied: curl-cffi>=0.6.0b7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (0.6.1)
    Requirement already satisfied: lxml>=4.9.3 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (4.9.4)
    Requirement already satisfied: nest-asyncio>=1.6.0 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (1.6.0)
    Requirement already satisfied: cffi>=1.12.0 in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (1.16.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2022.12.7)
    Requirement already satisfied: pycparser in /usr/local/lib/python3.10/dist-packages (from cffi>=1.12.0->curl-cffi>=0.6.0b7->duckduckgo-search==4.4) (2.21)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
!pip install -U duckduckgo-search==4.4
```

    Requirement already satisfied: duckduckgo-search==4.4 in /usr/local/lib/python3.10/dist-packages (4.4)
    Requirement already satisfied: docstring-inheritance>=2.1.2 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (2.1.2)
    Requirement already satisfied: click>=8.1.7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (8.1.7)
    Requirement already satisfied: curl-cffi>=0.6.0b7 in /usr/local/lib/python3.10/dist-packages (from duckduckgo-search==4.4) (0.6.1)
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
# 各ノードの名称を定義
SPLIT_SEAECH_DECISION = "split_search_decision"
# 質問
question = """最近の世界経済動向を分析し、これから市場で注目すべき3つの産業を予測してください。それぞれの産業が注目される理由も含めて説明してください。
また、将来発展するような市場についても教えてください。"""
search_query = "世界経済動向, 市場, 注目, 産業, 予測, 理由, 発展, 市場の将来"
# search_query = "世界経済動向,  市場,  注目,  産業,  予測,  理由,  発展, 2024-02-21から2025-01-01までの 市場の"
```

手順 1: キーワードの意味を理解する
まず、質問から重要なキーワードやフレーズを把握し、それぞれがどのような情報を求めているのかを理解する必要があります。

手順 2: 関連性のあるキーワードをグループ化する
抽出したキーワードやフレーズを、意味的に関連するもの同士でグループ化します。このプロセスにより、個別の検索クエリに分割する際の基準が得られます。

手順 3: 検索クエリを形成する
各グループから具体的な検索クエリを形成します。この際、検索エンジンが理解しやすいように、必要に応じてキーワードを組み合わせたり、検索クエリを具体化したりします。


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
def planning_split_search_query(model_name, question, search_query):
    # 検索判断エージェントを呼び出し、結果を取得
    prompt = [{'role': 'system', 'content': "Based on the following 'question', please group the 'search_query' based on relevance and format it into a list that can be used in Python."}]
    
    split_s_dec_prompt = create_agent_system(prompt, SPLIT_SEAECH_DECISION)
    split_s_dec_prompt.append({"role": "system", "content": 'Please generate a JSON from the following input text. Use "split_search_query_result" as the schema, and "the result of grouping the search_query based on relevance into a list format that can be used in Python" as the key. Generate it in the format {"split_search_query_result": the result of grouping the search_query based on relevance into a list format that can be used in Python}.'})
    
    split_s_dec_prompt.append({"role": "user", "content": 'Generate a JSON from the following input text. Use "split_search_query_result" as the schema, and use the judgment result as the key, to create it in the format {"split_search_query_result": the result of grouping the search_query based on relevance into a list format that can be used in Python}.'})
    split_s_dec_prompt.append({"role": "user", "content": f"Input text: {question}"})
    split_s_dec_prompt.append({"role": "user", "content": f"Search queries extracted from the input text: {search_query}"})
    """
    システム
    あなたは、以下の question に基づいて、 search_query を関連性に基づいてグループ化して python で使用できるリストの形にしてください。
    
    あなたの専門分野に従って自律的に働いてください。使用可能なツールを使ってください
    確認のために質問をしないでください
    あなたの他のチームメンバーや他のチームも、それぞれの専門分野であなたと協力します
    あなたが選ばれたのには理由があります！あなたは以下のチームメンバーの一人です: {team_members}
    
    以下の入力されたテキストからJSONを生成してください。スキーマとして「split_search_query_result」、キーとして「search_query を関連性に基づいてグループ化して python で使用できるリストの形した結果」を使用し、{"split_search_query_result": search_query を関連性に基づいてグループ化して python で使用できるリストの形した結果}の形式で生成してください。
    user
    以下の入力されたテキストからJSONを生成する。スキーマとして "split_search_query_result"を使用し、キーとして判断結果を使用して、{"split_search_query_result": search_query を関連性に基づいてグループ化して python で使用できるリストの形した結果}というフォーマットで生成します。
    
    入力されたテキスト: {question}
    入力されたテキストから抽出した検索クエリ: search_query
    """
    
    # Research用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=split_s_dec_prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    split_search_query_str = response.choices[0].message.content
    print(split_search_query_str)
    
    # JSON形式の文字列を辞書に変換
    split_search_query = json.loads(split_search_query_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "output": split_search_query["split_search_query_result"],
    }

```


```python
# 検索クエリの分割を実行
planning_split_queries = planning_split_search_query(MODEL_NAME, question, search_query)
```

    {
        "split_search_query_result": {
            "Relevance_Group_1": ["世界経済動向"],
            "Relevance_Group_2": ["市場", "市場の将来"],
            "Relevance_Group_3": ["注目", "産業", "予測", "理由", "発展"]
        }
    }



```python
planning_split_queries["output"]
```




    {'Relevance_Group_1': ['世界経済動向'],
     'Relevance_Group_2': ['市場', '市場の将来'],
     'Relevance_Group_3': ['注目', '産業', '予測', '理由', '発展']}




```python
for query_string in planning_split_queries["output"]:
    combined_string = " ".join([query_string])
    print(f"{combined_string}")
```

    Relevance_Group_1
    Relevance_Group_2
    Relevance_Group_3



```python
# split_search_query_result 内の全てのキーと値に順番にアクセス
for key, values in planning_split_queries["output"].items():
    print(f"{key}: {values}")
```

    Relevance_Group_1: ['世界経済動向']
    Relevance_Group_2: ['市場', '市場の将来']
    Relevance_Group_3: ['注目', '産業', '予測', '理由', '発展']



```python
from duckduckgo_search import DDGS, AsyncDDGS

# テキスト検索用の関数
def search_text(keywords, region='wt-wt', safesearch='moderate', timelimit=None, max_results=10):
    with DDGS() as ddgs:
        results = [r for r in ddgs.text(keywords, region=region, safesearch=safesearch, timelimit=timelimit, max_results=max_results)]
    return results
```


```python
for key, values in planning_split_queries["output"].items():
    print(f"{key}: {values}")
    combined_string = " ".join(values)
    text_results = search_text(combined_string)
    print("検索結果:", text_results)
```

    Relevance_Group_1: ['世界経済動向']
    検索結果: [{'title': '世界経済見通し（Weo）2024年1月改訂版 - Imf', 'href': 'https://www.imf.org/ja/Publications/WEO/Issues/2024/01/30/world-economic-outlook-update-january-2024', 'body': '2024年1月 概要 世界経済の成長率予測 日本語 レポートをダウンロードする 概要 世界経済成長へのリスクは概ね均衡がとれており、ソフトランディング（軟着陸）の可能性が見えてきた。 世界経済の成長率は、2024年が3.1%、2025年が3.2%と予測されており、米国といくつかの主要新興市場国・発展途上国における予想以上の底堅さと中国における財政支援が理由で、2024年の予測は2023年10月の「世界経済見通し（WEO）」における予測を0.2%ポイント上回っている。 しかし、インフレと闘うために高水準にある中央銀行の政策金利と、債務の増大を受けた財政支援の縮小が経済活動の重しとなっており、2024年と2025年の予測は2000～2019年の歴史的平均である3.8%を下回る。'}, {'title': '世界経済見通し - World Bank Group', 'href': 'https://www.worldbank.org/ja/publication/global-economic-prospects', 'body': '2024年の世界経済の成長率は2.4％と3年連続の減速が予想される。 金融政策の引き締め、制約的な与信状況、貿易と投資の世界的な低迷が成長を下押しする見通しだ。 最近の中東紛争は地政学的リスクを高めている。 債務の膨張、気候変動、貿易の分断化、食料不安、紛争といった諸課題に対処するには国際協調が不可欠だ。 新興国及び途上国において財政余地が限られていることが、歳出の効率を高める重要性を浮き彫りにしている。 また、投資を継続的に加速させる果断な政策行動も必要だ。 地域別予測 新興国及び途上国の経済成長見通しは、世界及び国内の情勢が変化し続ける中、地域によりばらついている。'}, {'title': '経済 | 最新世界経済展望ニュース | ロイター', 'href': 'https://jp.reuters.com/economy/', 'body': '経済 | 最新世界経済展望ニュース | ロイター 経済 日銀特集 イスラエル軍、ラファに最大級の攻撃 97人死亡 経済 · 午前 2:33 PST イスラエル軍は22日朝にかけてパレスチナ自治区ガザ最南部のラファに「最大級」の攻撃を実施。 モスクや住宅が倒壊し、死傷者が出た。 ワールド 日本経済が動き出していると市場が評価、心強く思う＝株最高値で岸田首相...'}, {'title': '世界経済、2023年まで成長減速 高まる途上国の「ハードランディング」リスク', 'href': 'https://www.worldbank.org/ja/news/press-release/2022/01/11/global-recovery-economics-debt-commodity-inequality', 'body': '世界経済の成長率は、繰延需要の消失と世界規模での財政面・金融面の支援の縮小を受け、2021年の5.5％から、2022年は4.1％、そして2023年は3.2％と大きく鈍化すると予測される。 新型コロナウイルスの新たな変異株であるオミクロン株の感染が急速に拡大していることから、短期的にパンデミックによる経済活動の混乱が続く可能性が高い。 さらに、米国と中国をはじめ主要国経済の著しい減速に伴い、新興国・途上国で外需の下押しが予測される。 また、多くの途上国において、必要に応じ経済活動を下支えするための政策を採る余地が限られている。'}, {'title': '第1節 世界経済の現状と見通し：通商白書2023年版 （Meti/経済産業省）', 'href': 'https://www.meti.go.jp/report/tsuhaku2023/2023honbun/i1110000.html', 'body': '本章では、はじめに、世界経済は、ロシアによるウクライナ侵略による不確実性の高まりやインフレの高進、金融引締めの加速により減速感を強めていること、欧米を中心とした急速な金融引締めは、通貨価値の下落、金利上昇を通じてグローバル・サウスを中心に債務リスクを高めていることを示す。 つぎに、権威主義国の台頭により、世界経済は今、分断の危機に直面する一方、グローバル・サウスは中立的立場で自国の利益を確保する構図となっていることを示す。 最後に、近年、経済依存関係を武器化する経済的威圧に係る事案が増加しており、WTOの上級委員会が機能不全に陥る中、欧米諸国では対応の検討を加速していることを示す。 1．減速感を強める世界経済 （1）2022年の世界経済の概要 2022年の世界経済は成長鈍化の1年であった。'}, {'title': '世界経済、過去30年で最低の水準へ - World Bank Group', 'href': 'https://www.worldbank.org/ja/news/press-release/2024/01/09/global-economic-prospects-january-2024-press-release', 'body': '世界銀行は報告書「世界経済見通し（GEP）」の最新版で、開発が大きく進展するはずの10年間の折返し地点が近づく中、世界経済の成長率は2024年末までに、5年間のGDP成長率が過去30年で最低の水準になることで残念な記録を塗り替えるとの見方を示した。'}, {'title': '世界経済見通しとは 最新データ・ニュース一覧 - 日本経済新聞', 'href': 'https://www.nikkei.com/topics/22A00703', 'body': '世界経済見通し 世界経済見通し 国際通貨基金（IMF）や世界銀行、経済協力開発機構（OECD）などの国際機関は年に複数回、経済見通しを公表する。 主に成長率の予測を示しながら政策も提言する。 各国の経済運営や国際協調の重要な指針となる。 IMFは世界全体、世界銀行は新興・途上国、OECDは先進各国の動向を詳しく調べる特徴がある。...'}, {'title': '2023年の世界経済 急減速 リスクと課題 Nhk解説委員室', 'href': 'https://www.nhk.or.jp/kaisetsu-blog/100/478352.html', 'body': '2023年の世界経済 急減速 リスクと課題. 2023年01月12日 (木) 櫻井 玲子 解説委員. 「ことしの世界経済は、ここ30年で3番目に低い成長にとどまる ...'}, {'title': '第1節 コロナ禍からの正常化を見据えた世界経済の動向：通商白書2022年版 （Meti/経済産業省）', 'href': 'https://www.meti.go.jp/report/tsuhaku2022/2022honbun/i1210000.html', 'body': '1．世界経済の動向. 2021年は未曾有のショックとなった新型コロナウイルスへの対応が進展し、世界経済が回復してきた姿とその後の姿が示唆される一年であったといえる。. 2020年序盤に感染が深刻化した新型コロナウイルスは、世界経済に深刻な景気後退を ...'}, {'title': 'OECD、24年世界成長率は2.7％－利上げや中国低迷踏まえ下方修正 - Bloomberg', 'href': 'https://www.bloomberg.co.jp/news/articles/2023-09-19/S17O65T1UM0W01', 'body': 'OECD、24年世界成長率は2.7％－利上げや中国低迷踏まえ下方修正. 経済協力開発機構（OECD）は19日、世界経済が鈍化に向かっているとの見方を示し ...'}]
    Relevance_Group_2: ['市場', '市場の将来']
    検索結果: [{'title': '未来市場 2019-2028│日経bp', 'href': 'https://project.nikkeibp.co.jp/mirai/miraishijo2019/', 'body': '未来市場 2019-2028│日経BP. 事業開発や経営戦略立案などの局面において、. 「将来その事業の市場規模がどうなるか」「これからどのような新市場が出現するか」を. 予測する作業は欠かせません。. しかし、まだ出現していない新市場の今後を定量的に推定 ...'}, {'title': '新たな有望消費市場の1つ、「ウェルネス市場」の2040年を見通す', 'href': 'https://xtrend.nikkei.com/atcl/contents/watch/00013/01766/', 'body': 'コンサルティング会社のd4dr（ディー・フォー・ディー・アール、東京・港）は、リポート『消費トレンド2040市場予測』を日経bpから刊行。2030～2040年に存在すると予想される象徴的な15の新たな消費市場を定義し、各市場の将来を予測した。本記事ではリポートで取り上げた15の新・消費市場の1 ...'}, {'title': '発表!「未来の市場をつくる100社」 23年に飛躍する企業を大予測', 'href': 'https://xtrend.nikkei.com/atcl/contents/18/00745/00001/', 'body': '直面する社会課題を解決し、新市場を生み出す企業はどこか。日経クロストレンドは「未来の市場をつくる100社【2023年版】」を選出した。新型コロナウイルス禍の"出口"がおぼろげながら見え始めた中、伸長が期待できる11の分野で23年の日本を明るく照らす先駆者のリストを公開する。'}, {'title': '2023 デジタルトランスフォーメーション市場の将来展望 市場編', 'href': 'https://www.fcr.co.jp/report/223q14a.htm', 'body': '富士キメラ総研は市場調査会社。電子デバイス、先端素材、エンジニアリング、情報通信、itソリューション、av、自動車などの産業分野について、受託調査から市場調査レポートに至る調査サービスを提供します。'}, {'title': '『消費トレンド2040市場予測』日経BP【公式】', 'href': 'https://info.nikkeibp.co.jp/nxr/campaign/book/284360/', 'body': '市場の変化を俯瞰。カギとなる技術や サービス、データも収録. 各市場の変化を2040年まで5年刻みでロードマップ化。社会背景、関連技術、サプライチェーンやサービスプラットフォームといった構成要素などを整理。市場変化の全貌が掴めます。'}, {'title': '「未来の市場をつくる100社」大公開 次の30年をひらく企業は？', 'href': 'https://xtrend.nikkei.com/atcl/contents/18/00557/00002/', 'body': 'afterコロナを見据え、世界はさらなる変化の時代へ突入しようとしている。直面する社会課題を解決し、新市場を生み出す企業はどこか。日経クロストレンドと日経MJは「未来の市場をつくる100社 2022年版」を選出した。伸長が期待できる10のジャンルと「次の30年」を目指す先駆者のリストを ...'}, {'title': 'PDF 日本経済の中期見通し（2021～2030年度） - Murc', 'href': 'https://www.murc.jp/wp-content/uploads/2021/10/news_release_211013.pdf', 'body': '問題研究所の「日本の将来人口推計」（2017 年4 月時点）を参考に、2020 年までの動きを加味 した当社の推計によると、今後、減少ペースは加速し、2030 年には1 億1952 万人とピークから 約860 万人も減少する見込みである（図表3）。 高齢化も今後着実に進行 ...'}, {'title': '2023年版 モビリティ社会を実現するxMaaS市場の将来展望 ｜ 調査レポート ｜ 富士経済グループ', 'href': 'https://www.fuji-keizai.co.jp/report/detail.html?code=162305834', 'body': '2023年版 モビリティ社会を実現するxMaaS市場の将来展望. 発刊日 2023/10/18 162305834. 観光MaaSや医療MaaSといったモビリティサービスの用途に応じたxMaaS市場の分析を行行うことで、モビリティ社会の方向性を予測します。. また、カーシェアや電動キックボード ...'}, {'title': '『2023 デジタルトランスフォーメーション市場の将来展望 市場編／ベンダー戦略編』まとまる（2023/3/17発表 第23032号）', 'href': 'https://www.fcr.co.jp/pr/23032.htm', 'body': '2030年度予測（2021年度比） dx関連の国内市場（投資額） 6兆5,195億円（2.8倍）. 交通／運輸／物流や金融などの規模が大きく、伸びが拡大をけん引; ユーザーアンケート結果. dxの取り組みを開始している企業は67.8％、今後3年以内に取り組み開始の計画がある企業は13.4％。'}, {'title': '2022 デジタルトランスフォーメーション市場の将来展望 ベンダー戦略編 (市場調査レポート)', 'href': 'https://www.fcr.co.jp/report/213q14b.htm', 'body': '富士キメラ総研は市場調査会社。電子デバイス、先端素材、エンジニアリング、情報通信、itソリューション、av、自動車などの産業分野について、受託調査から市場調査レポートに至る調査サービスを提供します。'}]
    Relevance_Group_3: ['注目', '産業', '予測', '理由', '発展']
    検索結果: [{'title': '【2024年版】これから伸びる9つの業界!今後危ない7つの業界も紹介 | テックキャンプ ブログ', 'href': 'https://tech-camp.in/note/pickup/98063/', 'body': '1.2 ITトレンドにマッチしている 2 これから伸びる9つの業界【2024年版】 2.1 IT業界 2.2 電子部品・半導体業界 2.3 エンタメ業界 2.4 EC業界 2.5 倉庫・物流業界 2.6 医療業界 2.7 フードデリバリーサービス業界 2.8 農業業界 2.9 宇宙開発業界'}, {'title': '未来調査2028 全産業編│日経bp【公式】', 'href': 'https://project.nikkeibp.co.jp/mirai/research/', 'body': '2028年に向けた海外ビジネスの最重要課題 中国／台湾ビジネスへの対応 経済安全保障への取り組み ウクライナ危機の影響 未来をけん引する 「テクノロジー」を 「医療・健康・食農」「モビリティー／移動」「場所／空間」「ライフスタイル／ワークスタイル」「IT・通信」「基盤技術」「AI（人工知能）関連」の7分野について、関連する「100のテクノロジー」を徹底分析。...'}, {'title': '大胆予測!2030年に勝つ業界､沈む業界はココだ 最新版｢業界地図2022年版｣で未来を読み解く | コロナショック、企業の針路 | 東洋経済 ...', 'href': 'https://toyokeizai.net/articles/-/449901', 'body': '最新版の『業界地図 2022年版』も自動車、電機、IT、小売りなどの主要業界のほか、注目が集まる脱炭素やDX（デジタルトランスフォーメーション）など、ビッグトレンドを新規に加えた全174業界の最新情勢を、会社四季報記者が徹底解説している。 業界地図で毎年掲載する内容の1つに、各業界の景況感を、大雨から快晴までの6段階で評価する「天気予想」がある。...'}, {'title': 'これから伸びる業界と市場縮小する今後危ない業界は？将来性のある資格・スキルも【2024年】 | マイナビニュース転職', 'href': 'https://news.mynavi.jp/tenshoku/expected-to-grow/', 'body': 'この記事3つのポイント! まずは「 これから伸びる将来性がある業界 」と「 廃れる可能性が高い業界 」の一覧を確認しましょう! これから伸びる業界への転職を検討している人は、「 おすすめの転職エージェント 」から2つ以上登録して転職活動をすると効率的です。 違う業種へのキャリアチェンジをする場合は、 必要な資格やスキル についても学んでおくと転職に有利に働きます! 「 今の自分の年収は適正なのか？ 」「 他の会社だったらいくらもらえるのか？ 」と気になりませんか？ 無料 で簡単に自分の市場価値を知るなら ビズリーチ に登録するのがおすすめです! スキマ時間に登録しておくだけで、企業からスカウトを受け取れます。 スカウトのあった企業の規模や年収で、自分の市場価値を見極められるでしょう。 編集部'}, {'title': '世界経済見通し（Weo）2024年1月改訂版 - Imf', 'href': 'https://www.imf.org/ja/Publications/WEO/Issues/2024/01/30/world-economic-outlook-update-january-2024', 'body': '供給側の問題が解消し、引き締め的な金融政策が続く中、インフレ率は大半の地域で予想以上に速く鈍化している。 ... といくつかの主要新興市場国・発展途上国における予想以上の底堅さと中国における財政支援が理由で、2024年の予測は2023年10月の「世界 ...'}, {'title': '発表!「未来の市場をつくる100社」 24年に飛躍する企業を大予測', 'href': 'https://xtrend.nikkei.com/atcl/contents/18/00923/00001/', 'body': '「未来の市場をつくる100社」 24年に飛躍する企業を大予測：日経クロストレンド 日経クロストレンド 未来の市場をつくる100社【2024年版】 発表! 「未来の市場をつくる100社」 24年に飛躍する企業を大予測 特集 マーケ・消費 未来の市場をつくる100社【2024年版】 第1回／全19回 発表! 「未来の市場をつくる100社」 24年に飛躍する企業を大予測...'}, {'title': '発表!「未来の市場をつくる100社」 23年に飛躍する企業を大予測', 'href': 'https://xtrend.nikkei.com/atcl/contents/18/00745/00001/', 'body': '（写真／Shutterstock） [画像のクリックで拡大表示] 岸田文雄政権が推し進める経済政策「新しい資本主義」の柱の一つとして、社会の成長エンジンとして期待する過去最大規模のスタートアップ育成策が、2022年11月28日にまとめられた。 「スタートアップ5カ年計画」では、現在年間8000億円規模のスタートアップ投資額を27年度に10兆円規模に引き上げると明記。...'}, {'title': 'テクノロジーが2025年までに世界を変える17の方法 | 世界経済フォーラム', 'href': 'https://jp.weforum.org/agenda/2020/07/tekunoroji-ga2025-madeni-wo-eru17no/', 'body': '今後5年間でテクノロジーが世界をどう変えるか、テクノロジー・パイオニア2020</a>選出企業に見解を求めました。量子コンピューターから、普及が進む5G技術、そして癌の長期コントロールまで、彼らの近未来予測をご紹介します。'}, {'title': '業界展望2023年 産業機械製造業 - Deloitte US', 'href': 'https://www2.deloitte.com/jp/ja/pages/manufacturing/articles/ad/manufacturing-industry-outlook.html', 'body': '日本の製造業は、新型コロナウイルス感染症の流行からの反動需要として、設備投資が回復基調となってきている。. 日本の製造業、とくに、産業機械製造業において、これが好機となるかは予断を許さない状況であり、2023年も事業環境の不確実性は続く ...'}, {'title': '次の10年の世界経済はどうなる？投資するなら、注目すべき国は？成長する産業分野は？ | Moneyizm', 'href': 'https://www.all-senmonka.jp/moneyizm/77938/', 'body': 'なぜなら、世界経済のトレンドは潮の満ち引きのように先進国と新興国のサイクルが交互にやってくるからです。 例えば、2001年に米国でインターネットバブルの象徴であるドットコムバブルが弾けたあと、投資家の注目は新興国へと移っていきました。'}]



```python

```
