```python
!python3 -m pip install --upgrade pip
```

    Requirement already satisfied: pip in /usr/local/lib/python3.10/dist-packages (23.3.2)
    Collecting pip
      Downloading pip-24.0-py3-none-any.whl.metadata (3.6 kB)
    Downloading pip-24.0-py3-none-any.whl (2.1 MB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m2.1/2.1 MB[0m [31m528.8 kB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hInstalling collected packages: pip
      Attempting uninstall: pip
        Found existing installation: pip 23.3.2
        Uninstalling pip-23.3.2:
          Successfully uninstalled pip-23.3.2
    Successfully installed pip-24.0
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
# !pip install openai==1.2.3
!pip install openai==1.3.4
!pip install python-dotenv tiktoken
!pip install pdfplumber
```

    Collecting openai==1.3.4
      Downloading openai-1.3.4-py3-none-any.whl.metadata (16 kB)
    Collecting anyio<4,>=3.5.0 (from openai==1.3.4)
      Downloading anyio-3.7.1-py3-none-any.whl.metadata (4.7 kB)
    Requirement already satisfied: distro<2,>=1.7.0 in /usr/lib/python3/dist-packages (from openai==1.3.4) (1.7.0)
    Collecting httpx<1,>=0.23.0 (from openai==1.3.4)
      Downloading httpx-0.27.0-py3-none-any.whl.metadata (7.2 kB)
    Requirement already satisfied: pydantic<3,>=1.9.0 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (1.10.13)
    Requirement already satisfied: tqdm>4 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.66.1)
    Requirement already satisfied: typing-extensions<5,>=4.5 in /usr/local/lib/python3.10/dist-packages (from openai==1.3.4) (4.9.0)
    Requirement already satisfied: idna>=2.8 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (3.4)
    Requirement already satisfied: sniffio>=1.1 in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.3.0)
    Requirement already satisfied: exceptiongroup in /usr/local/lib/python3.10/dist-packages (from anyio<4,>=3.5.0->openai==1.3.4) (1.2.0)
    Requirement already satisfied: certifi in /usr/local/lib/python3.10/dist-packages (from httpx<1,>=0.23.0->openai==1.3.4) (2022.12.7)
    Collecting httpcore==1.* (from httpx<1,>=0.23.0->openai==1.3.4)
      Downloading httpcore-1.0.4-py3-none-any.whl.metadata (20 kB)
    Collecting h11<0.15,>=0.13 (from httpcore==1.*->httpx<1,>=0.23.0->openai==1.3.4)
      Downloading h11-0.14.0-py3-none-any.whl.metadata (8.2 kB)
    Downloading openai-1.3.4-py3-none-any.whl (220 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m220.5/220.5 kB[0m [31m798.3 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hDownloading anyio-3.7.1-py3-none-any.whl (80 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m80.9/80.9 kB[0m [31m849.1 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hDownloading httpx-0.27.0-py3-none-any.whl (75 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m75.6/75.6 kB[0m [31m826.5 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hDownloading httpcore-1.0.4-py3-none-any.whl (77 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m77.8/77.8 kB[0m [31m863.4 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hDownloading h11-0.14.0-py3-none-any.whl (58 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m58.3/58.3 kB[0m [31m902.3 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hInstalling collected packages: h11, anyio, httpcore, httpx, openai
      Attempting uninstall: anyio
        Found existing installation: anyio 4.2.0
        Uninstalling anyio-4.2.0:
          Successfully uninstalled anyio-4.2.0
    Successfully installed anyio-3.7.1 h11-0.14.0 httpcore-1.0.4 httpx-0.27.0 openai-1.3.4
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mCollecting python-dotenv
      Downloading python_dotenv-1.0.1-py3-none-any.whl.metadata (23 kB)
    Collecting tiktoken
      Downloading tiktoken-0.6.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (6.6 kB)
    Requirement already satisfied: regex>=2022.1.18 in /usr/local/lib/python3.10/dist-packages (from tiktoken) (2023.12.25)
    Requirement already satisfied: requests>=2.26.0 in /usr/local/lib/python3.10/dist-packages (from tiktoken) (2.31.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (2.1.1)
    Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (3.4)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (1.26.13)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests>=2.26.0->tiktoken) (2022.12.7)
    Downloading python_dotenv-1.0.1-py3-none-any.whl (19 kB)
    Downloading tiktoken-0.6.0-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (1.8 MB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m1.8/1.8 MB[0m [31m514.9 kB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hInstalling collected packages: python-dotenv, tiktoken
    Successfully installed python-dotenv-1.0.1 tiktoken-0.6.0
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0mCollecting pdfplumber
      Downloading pdfplumber-0.11.0-py3-none-any.whl.metadata (39 kB)
    Collecting pdfminer.six==20231228 (from pdfplumber)
      Downloading pdfminer.six-20231228-py3-none-any.whl.metadata (4.2 kB)
    Requirement already satisfied: Pillow>=9.1 in /usr/local/lib/python3.10/dist-packages (from pdfplumber) (9.3.0)
    Collecting pypdfium2>=4.18.0 (from pdfplumber)
      Downloading pypdfium2-4.28.0-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl.metadata (48 kB)
    [2K     [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m48.5/48.5 kB[0m [31m353.6 kB/s[0m eta [36m0:00:00[0ma [36m0:00:01[0m
    [?25hRequirement already satisfied: charset-normalizer>=2.0.0 in /usr/local/lib/python3.10/dist-packages (from pdfminer.six==20231228->pdfplumber) (2.1.1)
    Requirement already satisfied: cryptography>=36.0.0 in /usr/local/lib/python3.10/dist-packages (from pdfminer.six==20231228->pdfplumber) (41.0.7)
    Requirement already satisfied: cffi>=1.12 in /usr/local/lib/python3.10/dist-packages (from cryptography>=36.0.0->pdfminer.six==20231228->pdfplumber) (1.16.0)
    Requirement already satisfied: pycparser in /usr/local/lib/python3.10/dist-packages (from cffi>=1.12->cryptography>=36.0.0->pdfminer.six==20231228->pdfplumber) (2.21)
    Downloading pdfplumber-0.11.0-py3-none-any.whl (56 kB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m56.4/56.4 kB[0m [31m880.1 kB/s[0m eta [36m0:00:00[0m[36m0:00:01[0m
    [?25hDownloading pdfminer.six-20231228-py3-none-any.whl (5.6 MB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m5.6/5.6 MB[0m [31m579.3 kB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hDownloading pypdfium2-4.28.0-py3-none-manylinux_2_17_x86_64.manylinux2014_x86_64.whl (2.8 MB)
    [2K   [90m━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━[0m [32m2.8/2.8 MB[0m [31m672.5 kB/s[0m eta [36m0:00:00[0m00:01[0m00:01[0m
    [?25hInstalling collected packages: pypdfium2, pdfminer.six, pdfplumber
    Successfully installed pdfminer.six-20231228 pdfplumber-0.11.0 pypdfium2-4.28.0
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
import re
# 取得したいURL
url = "https://arxiv.org/abs/2403.08399v1"

identifier = re.search(r'/([^/]+)$', url).group(1)
identifier
```




    '2403.08399v1'




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
import requests

def download_pdf(link, save_path):
    response = requests.get(link)
    with open(save_path, 'wb') as file:
        file.write(response.content)
```


```python
import os

files_to_remove = ['sample.pdf']

for file in files_to_remove:
    if os.path.exists(file):
        os.remove(file)
        print(f"{file} を削除しました。")
    else:
        print(f"{file} は存在しません。")
```

    sample.pdf を削除しました。



```python
url = "https://arxiv.org/pdf/" + identifier

with Timer(prefix="download_pdf"):
    # download_pdf(url, nougat_path)
    download_pdf(url, "sample.pdf")
```

    download_pdf 3.832[s]



```python
pdf_path = "./sample.pdf"
```


```python
import openai
import pdfplumber
from openai import OpenAI
import tiktoken
from dotenv import load_dotenv
import os
import json

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
def extract_summary_method_name(model_name, text):
    # 概要と提案手法名を生成する
    prompt = [{'role': 'system', 'content': "Please compile the following text into a research report so that it can be fully understood without any omissions. If a method is proposed, extract its name."}]
    prompt.append({"role" : "system", "content" : 'Please generate the research report to include the following contents.\n"CHALLENGE" The current situation faced by the researcher; it will normally include a Problem Statement, the Motivation, a Hypothesis and/or a Goal.\n"APPROACH" How they intend to carry out the investigation, comments on a theoretical model or framework.\n"OUTCOME" Overall conclusion that should reject or support the research hypothesis.'})
    
    prompt.append({"role" : "system", "content" : 'Please create a research report by referencing the example research report below, structuring it around three distinct aspects in order: "Challenge," "Approach," and "Outcome."\n"Challenge" Existing statistical phrasal orhierarchical machine translation system relies on a large set of translation rules which results in engineering challenges. \n"Approach": The proposed method consistently outperforms existing methods in BLEU on various low-resource language translation tasks with less training data.\n"Outcome" They propose to use factorized grammar from the field of linguistics as more general translation rules from XTAG English Grammar.'})
    
    prompt.append({"role": "system", "content": "Results must be in Japanese."})
    prompt.append({"role" : "system", "content" : "Outputs should be generated in step by step."})
    prompt.append({"role": "system", "content": "Think the option as hypothesis. Whether it entails with those premises?"})
    prompt.append({"role" : "system", "content" : "Please explain the research report in a way that is easy to understand for high school students, without making it complicated. It's okay if the explanation becomes lengthy."})
    
    prompt.append({"role": "system", "content": "Please format the output in Markdown."})
    prompt.append({"role": "system", "content": "Results must be in Japanese."})
    
    prompt.append({"role": "user", "content": 'Based on the input text, generate a JSON containing two different pieces of information. First, use "extract_summary" as the schema to create a section that keys in the result of summarizing the content of the text accurately and completely. Next, use "method_name" as the schema to create a section that keys in the name of the method proposed or used within the text. Combine these pieces of information to output as a single JSON object. This JSON will be formatted as {"extract_summary": [the result of summarizing the text content], "method_name": [the name of the method proposed or used within the text]}.'})
    
    prompt.append({"role": "user", "content": f"Input text: {text}"})
    prompt.append({"role": "user", "content": f"Include:\n- Overview\n- Novelty\n- Methodology\n- Results"})
    """
    システム
    あなたは以下の text を過不足なく理解できるように調査報告書としてまとめ、提案されている手法がある場合はその名称を抽出してください。
    調査報告書は以下の内容を含む形で生成してください\n
    • CHALLENGE: The current situation faced by the researcher; it will normally include a Problem Statement, the Motivation, a Hypothesis and/or a Goal.\n
    • APPROACH: How they intend to carry out the investigation, comments on a theoretical model or framework.\n
    • OUTCOME: Overall conclusion that should reject or support the research hypothesis.

    調査報告書は以下の例を参考に「課題」「アプローチ」「結果」の3つの異なる側面を順番に作成してください。概要: [ACLSum: A New Dataset for Aspect-based Summarization of Scientific Publications](https://arxiv.org/abs/2403.05303v1)のデータセット例を一つ
    出力は Markdown 形式にしてください。
    
    結果は日本語でなければならない。
    user
    入力されたテキストに基づき、二つの異なる情報を含むJSONを生成します。最初に、"extract_summary"をスキーマとして使用し、テキストの内容を過不足なく概要としてまとめた結果をキーとする部分を生成します。次に、"method_name"をスキーマとして使用し、テキスト内で提案されたり使用されている手法名をキーとする部分を生成します。これらの情報を組み合わせて、一つのJSONオブジェクトとして出力します。このJSONは、{"extract_summary": [テキストの内容を概要としてまとめた結果], "method_name": [テキスト内で提案されたり使用されている手法名]}の形式で表されます。
    
    入力されたテキスト: {text}
    """
    
    # 概要と提案手法名抽出用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    summary_method_name_str = response.choices[0].message.content
    # print(summary_method_name_str)
    
    # JSON形式の文字列を辞書に変換
    summary_method_name = json.loads(summary_method_name_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "summary": summary_method_name["extract_summary"],
        "method_name": summary_method_name["method_name"],
    }

```


```python
file_path = 'sample.pdf'  # PDFファイルのパス
```


```python
# PDFファイルを読み込み、テキストに変換する関数
def pdf_to_text(file_path):
    with pdfplumber.open(file_path) as pdf:
        return ''.join(page.extract_text() for page in pdf.pages)

```


```python
with Timer(prefix="pdf_to_text"):
    paper_text = pdf_to_text(file_path)
```

    pdf_to_text 1.305[s]



```python
print(paper_text)
```

    SYSTEM FOR SYSTEMATIC LITERATURE REVIEW USING
    MULTIPLE AI AGENTS: CONCEPT AND AN EMPIRICAL
    EVALUATION
    APREPRINT
    AbdulMalikSami ZeeshanRasheed
    TampereUniversity TampereUniversity
    malik.sami@tuni.fi zeeshan.rasheed@tuni.fi
    Kai-KristianKemell MuhammadWaseem TerhiKilamo
    UniversityofHelsinki JyväskyläUniversity TampereUniversity
    kai-kristian.kemell@helsinki.fi muhammad.m.waseem@jyu.fi terhi.kilamo@tuni.fi
    MikaSaari KariSystä AnhNguyenDuc
    TampereUniversity TampereUniversity UniversityofSouthEasternNorway
    mika.saari@tuni.fi kari.systa@tuni.fi Anh.Nguyen.duc@usn.no
    PekkaAbrahamsson
    TampereUniversity
    pekka.abrahamsson@tuni.fi
    March14,2024
    ABSTRACT
    SystematicLiteratureReviews(SLRs)havebecomethefoundationofevidence-basedstudies,en-
    abling researchers to identify, classify, and combine existing studies based on specific research
    questions. ConductinganSLRislargelyamanualprocess. Overthepreviousyears,researchers
    havemadesignificantprogressinautomatingcertainphasesoftheSLRprocess,aimingtoreduce
    theeffortandtimeneededtocarryouthigh-qualitySLRs. However,thereisstillalackofAIagent
    basedmodelsthatautomatetheentireSLRprocess. Tothisend,weintroduceanovelmulti-AIagent
    modeldesignedtofullyautomatetheprocessofconductinganSLR.Byutilizingthecapabilitiesof
    LargeLanguageModels(LLMs),ourproposedmodelstreamlinesthereviewprocess,enhancing
    efficiencyandaccuracy. Themodeloperatesthroughauser-friendlyinterfacewhereresearchersinput
    theirtopic,andinresponse,themodelgeneratesasearchstringusedtoretrieverelevantacademic
    papers. Subsequently, an inclusive and exclusive filtering process is applied, focusing on titles
    relevanttothespecificresearcharea. Themodelthenautonomouslysummarizestheabstractsof
    thesepapers,retainingonlythosedirectlyrelatedtothefieldofstudy. Inthefinalphase,themodel
    conductsathoroughanalysisoftheselectedpapersinrelationtopredefinedresearchquestions. This
    paperdetailsthedevelopmentofthemodel,anditsoperationalframework,anddemonstrateshowit
    significantlyreducesthetimeandefforttraditionallyrequiredforSLRwhileensuringahighlevelof
    comprehensivenessandprecision. Wealsoconductedanevaluationoftheproposedmodelbysharing
    it with ten competent software engineering researchers for testing and analysis. The researchers
    expressedstrongsatisfactionwiththeproposedmodelandprovidedfeedbackforfurtherimprovement.
    Inthefuture,weplantoengage50practitionersandresearcherstoevaluateourmodel. Additionally,
    weaimtopresentourmodeltotheaudienceattheSANER2024conferenceinRovaniemi(Finland)
    forfurthertesting,analysis,andfeedbackcollection. Thecodeforthisprojectcanbefoundonthe
    GitHubrepositoryathttps://github.com/GPT-Laboratory/SLR-automation.
    4202
    raM
    31
    ]ES.sc[
    1v99380.3042:viXraarXivTemplate APREPRINT
    Keywords SystematicLiteratureReview,LargeLanguageModel,AIAgent,SoftwareEngineering
    1 Introduction
    TheSystematicLiteratureReview(SLR)isafundamentalcomponentofacademicresearch,offeringacomprehensive
    andunbiasedoverviewofexistingliteratureonaspecifictopicKeeleetal.[2007]. Itinvolvesastructuredmethodology
    foridentifying,evaluating,andsynthesizingallrelevantresearchtoaddressclearlydefinedresearchquestionsKitchen-
    hametal.[2009]. Thisprocessiscriticalforestablishingthecontextandfoundationofnewresearch,identifyinggaps
    incurrentknowledge,andinformingfutureresearchdirectionsvanDinteretal.[2021]. However,conductinganSLR
    isinherentlytime-consumingandlabor-intensive. Itrequiresmeticulousplanning,extensivesearching,andrigorous
    screeningoflargevolumesofliterature. Thecomplexityandscaleofthistask,especiallyinfieldswithvastandrapidly
    expandingbodiesofwork,canbedauntingandresource-intensive. Thechallengeliesnotonlyinthecollectionof
    relevantliteraturebutalsointheaccuratesynthesisandinterpretationofthegathereddata.
    The emergence of Large Language Models (LLMs) in Artificial Intelligence (AI) presents new opportunities for
    automatingandstreamliningtheSLRprocessRasheedetal.[2024a],Rasheedetal.[2023]. LLMs,trainedonextensive
    datasetsoftext,areadeptatunderstandingandgeneratinghuman-likelanguageCarlinietal.[2021]. Theycanprocess
    andanalyzelargevolumesoftextrapidly,offeringinsightsandsummariesthatwouldtakehumanssignificantlylonger
    tocompile. Theirabilitytounderstandcontextandnuancesinlanguagemakesthemparticularlyusefulfortaskslike
    identifyingrelevantliterature,extractingkeyinformation,andsummarizingresearchfindingsHouetal.[2023]. By
    automatingthemoretediousandrepetitiveaspectsoftheSLRprocess,LLMscansignificantlyreducethetimeand
    effortrequired,allowingresearcherstofocusonthemorenuancedaspectsoftheirresearchRasheedetal.[2024b].
    Inthiscontext,ourproposedmodelutilizesthecapabilitiesofLLMstoautomatethewholeSLRprocess. Wedeveloped
    amulti-AIagentmodelthatautomateseachstepoftheSLR,fromtheinitialliteraturesearchtothefinalanalysis.
    The model begins with a simple user input–researchers enter their topic into a designated text box. This input is
    thenprocessedbytheLLM,whichgeneratesaprecisesearchstringtailoredtoretrievethemostrelevantacademic
    papers. Themodel’snextphaseinvolvesanintelligentfilteringmechanism. Itappliesaninclusiveandexclusivetheory,
    screeningtitlesandabstractstoretainonlythosestudiesthataredirectlyrelevanttothespecifiedresearcharea.
    Thefinalstageofourmodelautonomouslysummarizestheabstractsoftheselectedpapers,ensuringthatonlycontent
    pertinenttotheresearchquestionsisretained. Itintroducesalevelofprecisionandconsistencyindataanalysisthatis
    challengingtoachievemanually. Finally,themodelconductsanin-depthanalysisoftheselectedpapers,aligningits
    findingsdirectlywiththeresearchquestions. Thiscomprehensiveapproachensuresthatthefinaloutputisnotonlya
    reflectionofthevastarrayofliteratureavailablebutalsoafocusedandrelevantresourcetailoredtothespecificneeds
    oftheresearcher. Ourmodel,therefore,standsasatestamenttothepotentialofintegratingadvancedAItechnologiesin
    academicresearchmethodologies.
    We also evaluated the efficiency and accuracy of our proposed model by sharing it with ten proficient software
    engineeringresearchersforacomprehensivetestandanalysis. Thefeedbackreceivedwasoverwhelminglypositive,
    highlightingthemodel’seffectivenessandpavingthewayforfurtherenhancements. Lookingahead,weaimtoexpand
    our evaluation by involving 50 additional practitioners and researchers. Furthermore, we intend to showcase our
    modelattheupcomingSANER2024conferenceinRovaniemi(Finland),seekingtobroadenitstestingandanalysis
    whilegatheringvaluablefeedbackfromawideraudience. Thisstepiscrucialinrefiningourmodelandensuringits
    applicabilityandrobustnessindiversereal-worldscenarios.
    Ourcontributioncanbesummarizedasfollows:
    • We propose a novel multi-AI agent model that utilizes LLMs to automate the SLR process, significantly
    enhancingefficiencyandaccuracy.
    • Ourmodelwasevaluatedbytenexperiencedsoftwareengineeringresearchersandpractitioners,confirming
    itseffectivenessandgatheringinsightsforfurtherrefinement.
    • Weplantoextendtheevaluationto30additionalpractitionersandresearchersandpresentthemodelatthe
    SANER2024conferenceinRovaniemi(Finland)forwidertestingandfeedback.
    2 RelatedWork
    Bartholomew[2002]conductedthefirstSLRtocarriedoutsystematicclinicaltrialstoidentifyeffectivetreatments
    forscurvy. Histrials,whichrigorouslyevaluatedvariouspotentialremedies,notablyhighlightedtheeffectiveness
    2arXivTemplate APREPRINT
    of oranges and lemons as the most successful treatments Bartholomew [2002]. In the domain of SE research, the
    SLRapproachwasintroducedbyKitchenham[2004]. Thisframeworkwasinstrumentalinadaptingtheprinciplesof
    systematicreviews,alreadyprevalentinfieldslikehealthcareandsocialsciences,tothespecificchallengesandneeds
    ofSEresearch. Followingthisdevelopment,SLRshavebecomeanextensivelyusedpracticetosupportevidence-based
    materialinSE.ThesuccessofSLRsinfacilitatingevidence-basedstudieshasmotivatedotherresearcherstoadopt
    thisapproachintheirworkKitchenhametal.[2009]. However,UndertakingSLRsisoftenachallengingendeavor,
    encompassingvariousactivitiessuchasgathering,assessing,andrecordingevidence. ThesetaskswithinSLRsare
    typicallydonemanually,withouttheaidofautomationordecisionsupporttools,makingtheprocessnotonlytime-
    intensivebutalsosusceptibletoerrorsvanDinteretal.[2021]. Manyresearchersmakeprogresstoautomatetheprocess
    ofSLRvanDinteretal.[2021].
    CurrentresearcheffortsareprimarilyfocusedonrefiningtheSLRprocesstooptimizeprecisionwhileensuringhigh
    recall,addressingtheprecisionshortcomingsoftenfoundinexistingmethodsO’Mara-Evesetal.[2015]. Additionally,
    there’sasignificantpushtowardsreducinghumanerrors,especiallysincemanystepsinthereviewprocessarehighly
    repetitiveMarshalletal.[2016]. Inthiscontext,theworksofK.R.FelizardoandJ.C.Maldonadoarenotable. They
    haveexploredtheshiftfromtraditional,repetitive,anderror-proneSLRmethodstowardstheapplicationofvisual
    textmining. Thisapproach,asoutlinedintheirarticlesFelizardoetal.[2012],Felizardoetal.[2014],Felizardoetal.
    [2011],Malheirosetal.[2007]leveragesunsupervisedlearningtoassistusersinidentifyingrelevantarticles,thoughit
    doesrequireuserstohaveabackgroundinmachinelearningandstatistics.
    Olorisadeetal.[2016]presentedaninnovativeMLmodeldesignedtoautomatetheprimarystudyselectionprocess
    in SLRs, potentially streamlining this critical step and significantly reducing the manual effort involved in sifting
    throughvastquantitiesofacademicliterature. Shakeeletal.[2018]providedvaluableinsightsintopotentialthreats
    that could arise when automating the SLR process. Feng et al. [2017] highlighted various text mining techniques
    currentlyemployedinSLRs,afoundationuponwhichourtoolbuilds. Significantly,Paynteretal.[2016]presenteda
    comprehensivereportdelineatingtheapplicationoftextmining(TM)techniquesinautomatingvariousstagesofthe
    SLRprocess,includingselection,extraction,andupdates. Thisalignscloselywithourtool’sobjectives. Clarketal.
    [2020]demonstratedthefeasibilityofcompletinganSLRinamarkedlyreducedtimeframeusingmultipletools,a
    precedentfortheefficiencyourtoolaimstoachieve.
    MichelsonandReuter[2019]providedaneconomicanalysisandtimeestimatesforSLRs,underscoringtheneedfor
    automatedsolutions–acallthatourtooldirectlyrespondsto. Inasimilarvein,Belleretal.[2018]notonlylistedtools
    usefulforautomatingSLRsbutalsoestablishedeightguidelinesthathaveinformedourtool’sdevelopment.
    Jonnalagaddaetal.[2015]detailedmethodsfordataextractionfrompublishedreports,whichhasbeeninstrumentalin
    shapingourtool’sdatahandlingcapabilities. Moreover,MarshallandWallace[2019]andO’Connoretal.[2019]have
    respectivelylistedusefultoolsforsystematicreviewsandarticulatedbarrierstotheadoptionofsuchtools,providinga
    comprehensiveunderstandingofthecurrentlandscapeanduserhesitanceinthisdomain. Furthercontributionsinclude
    O’Mara-Evesetal.[2015]andO’Mara-Evesetal.[2015],whorespectivelyconductedanSLRontextmininginthe
    automationofSLRsanddescribedtheautomationpotentialacrossdifferentstepsintheSLRprocess. Theseworks
    havebeenpivotalinidentifyingareaswhereourtoolcanbemostimpactful. Additionally,Jaspersetal.[2018]and
    Thomasetal.[2011]haveexploredmachinelearningtechniquesandtheapplicationofTMtechniquesinautomating
    theSLRprocess,whichhavebeenkeyinfluencesinourtool’sdesign. Lastly,thesurveybyVanAltenaetal.[2019],
    highlightingthelimiteduseofSLRtoolsamongresearchers,emphasizestheneedformoreuser-friendlyandefficient
    solutionsliketheoneourtoolaimstoprovide.
    DespitetheseadvancementsinautomatingtheSLRprocess,thereremainsanotablegapinthecompleteautomationof
    SLRsusingLLMs. Addressingthisgap,wehavedevelopedanovelapproach: amulti-agentmodelbasedonLLMs.
    ThisinnovativemodelisdesignedtofullyautomatetheSLRprocess,utilizingtheadvancedcapabilitiesofLLMsto
    efficientlymanageandsynthesizevastamountsofdata,whichisasignificantstepforwardinthefieldofautomated
    literaturereviews.
    3 ResearchMethod
    ThisresearchaimstoinvestigatehowanLLM-basedmulti-agentmodelcanbeutilizedtoautomatetheentireprocess
    ofSLRs. Wealsooutlinethemethodologyfortestingandanalyzingthecapabilitiesoftheproposedmodel. Below,
    wediscusshowourLLM-basedmulti-agentmodelcollaboratesandperformssuchtasks. Wehaveformulatedthe
    followingresearchquestions(RQs):
    3arXivTemplate APREPRINT
    RQ1.HowdoesaLLM-basedmulti-agentsystemtransformtraditionalmethodologiestoautomatethesystematic
    literaturereviewprocessinSE?
    Motivation: Themotivationfortheresearchquestionarisesfromtheneedtoenhancetheefficiencyandeffectiveness
    ofliteraturereviewprocessesintherapidlyevolvingfieldofSE.Traditionalmethodsofconductingliteraturereviews
    areoftentime-consumingandlabor-intensive,potentiallyleadingtodelaysinresearchprogressandthedissemination
    ofnewknowledge. TheintegrationofLLMspromisesaparadigmshift,potentiallyautomatingandstreamliningthese
    processes. ByexploringthetransformationbroughtaboutbyanLLM-basedmulti-agentsystem,thisresearchseeksto
    reducethetimeandeffortrequiredforcomprehensiveliteraturereviewsandalsotoincreasetheaccuracyandscopeof
    thesereviews. ThiscouldresultinmoretimelyandinformedresearchoutcomesinSE,afieldwherestayingabreastof
    currenttrends,methodologies,anddiscoveriesarecrucialfortechnologicaladvancementandinnovation.
    RQ2. HowcantheefficiencyandaccuracyoftheproposedLLM-basedmulti-agentmodelbeevaluated?
    Motivation: Themotivationbehindthisresearchquestionisbasedonthecriticalneedtovalidateandquantifythe
    performanceoftheproposedmodel,specificallyinconductingSLRs. Withtheintroductionofsophisticatedmodels
    likeLLM-basedmulti-agentsystems,establishingrigorousevaluationcriteriatoassesstheirreal-worldapplicability
    andreliabilitybecomesimperative. Thisquestionaddressesthenecessityofaproposedmodelthatcansystematically
    measureitsefficiencyandaccuracyinselectingandinterpretingrelevantliterature. Evaluatingtheproposedmodelis
    crucialtoensurethatintegratingsuchmodelsintoacademicworkflowsenhances,ratherthancompromises,thequality
    ofresearchoutputs.
    3.1 LLM-BasedAssistedSystematicLiteratureReview
    The section focuses on research methodology for developing an LLM-based multi-agent model. This model is
    specificallyengineeredtoautomatetheentireprocessofconductingSLRs. Theinnovationliesinitsabilitytotransform
    agivenresearchtopicintoacomprehensivereviewthroughaseriesofautomated,interconnectedsteps. Eachstepis
    managedbyaspecializedagentwithinthemodel,workingcollaborativelytoensureaseamlessandefficientliterature
    reviewprocess. InFigure??,weillustratehowagentscollaboratewitheachothertogeneratearesponse. Below,we
    alsoprovidethedetailedfunctionalityofeachagentwithinthismulti-agentsystem.
    3.1.1 Planneragent
    The first agent in our model is dedicated to generating research questions and purpose and search strings. Upon
    receivingaresearchobjectivefromtheend-user,Forthesearchstringweprovideresearchquestionsandobjectiveto
    theagent,itgeneratesasearchstring. thisagentemploysadvancedlanguageunderstandingalgorithmstointerpret
    thetopic’skeyelements. TheLLM-basedalgorithm,designedfordeepsemanticunderstanding,analyzesthetopicto
    extractkeyconcepts,themes,andterminologies. Itthenutilizesitsextensivetrainingondiversetextualdatatoconstruct
    apreciseandcomprehensivesearchstring. Thisstringisformulatedbycombiningrelevantkeywords,synonyms,and
    technicaltermsthatcapturetheessenceoftheresearchquestion. Furthermore,thealgorithmisadeptatunderstanding
    context and varying semantic structures, enabling it to refine the search string to match specific research domains.
    Thegeneratedsearchstringiscrucialinaccuratelyretrievingrelevantliteraturefromvariousacademicdatabases. By
    ensuringthattheinitialsearchisboththoroughandfocused,theagentsignificantlyenhancestheefficiencyandquality
    oftheliteraturecollectionprocess. ThissetsasolidfoundationforthesubsequentstagesoftheSLR,wherethedepth
    andbreadthofthecollectedliteratureplayacrucialrole.
    3.1.2 Literatureidentificationagent
    Followingthegenerationofthesearchstring,researchquestions,andthepurposeofeachquestion,thenextagenttakes
    overthetaskofliteratureretrieval. Thisagentisresponsibleforusingthesearchstringtoqueryacademicdatabases
    andretrievinginitialsetsofpapersthatarepotentiallyrelevanttotheresearchtopic. Itemployssophisticatedfiltering
    algorithmstomanagethevastamountofavailabledata,selectingpapersbytheirtitlewhicharemostcloselyalign
    withthepredefinedparametersofthesearchstring. Thisstepiscrucialinnarrowingdownthepoolofliteraturetoa
    manageablesizeforin-depthreview.
    4arXivTemplate APREPRINT
    Figure1: ProcessofSystematicLiteratureReviewAutomationTool
    3.1.3 Dataextractionagent
    Thethirdagentinourmodelistaskedwithrefiningtheliteratureusinginclusionandexclusioncriteriabasedonthe
    researchobjectives. Initially,itemploysourLLMalgorithmtoanalyzethetitlesofretrievedpapers,discerningtheir
    relevancetotheresearchtopic. Thisstepinvolvestextanalysis,wheretheLLMalgorithmidentifieskeytermsand
    conceptsthatalignwiththeresearchobjectives. Byapplyingthesepredefinedrules,theagenteffectivelyfiltersout
    irrelevantmaterial,ensuringtheliteraturereviewremainsfocusedandpertinenttotheresearchquestions.
    Followingthetitleanalysis,theagentproceedstoanalyzetheabstractsofselectedpapers. LLMalgorithmconductsa
    morein-depthtextanalysis,evaluatingthecontext,methodologies,andfindingsintheabstractstoassesstheirrelevance.
    Thefinalandmostcomprehensivestepinvolvesanalyzingthefullcontentofeachpaper. Thisthoroughexamination
    encompassesthewholepaper,allowingtheagenttoevaluatehoweachpaper’scontentandfindingsrelatetothespecific
    researchquestion. Thisagentextractskeyinformation,Answerseachquestionofthefilteredpapers,andshowsits
    dataintabularform,a. Itthensynthesizesthisinformationtoprovideacomprehensiveoverviewofthecurrentstateof
    researchonthetopic. Thissynthesisiscrucialinunderstandingthebroadercontextandimplicationsofthefindings
    withintheselectedliterature.
    3.1.4 Datacompilationagent
    Thefinalagentinourmulti-agentmodelisresponsibleforanalyzingthesynthesizeddatainrelationtotheresearch
    questions and objectives. It assesses trends, identifies gaps in the literature, and draws conclusions based on the
    aggregatedinformation.Thisagentalsopreparesareportthatsummarizesthefindingsoftheliteraturereview,providing
    aclearandconciseoverviewoftheresearchlandscapeforthegiventopic.
    EachagentintheLLM-basedmulti-agentmodelplaysavitalroleinautomatingthesystematicliteraturereviewprocess.
    Fromgeneratingsearchstringstoreportingfindings,theagentsworkinacoordinatedmannertoensureathorough,
    efficient,andaccuratereview. ThismethodologyrepresentsasignificantadvancementinthewaySLRsareconducted,
    offeringamorestreamlinedandeffectiveapproachtoacademicresearch.
    3.2 PerformanceValidation
    Inthisproject,weengagedtheexpertiseof10researcherstoevaluatetheefficiencyandperformanceofourproposed
    model. Theseprofessionalswereapproachedfromvariousindustriesandresearchgroupstoensureadiverserange
    ofperspectives. Ourevaluationmethodologywasanchoredinapractice-orientedframework,focusingonrigorous
    scrutinyofthemodel’sutilityandefficacybyseasonedindustryprofessionals. Thisapproachguaranteedadetailed
    andperceptiveevaluation,factoringinthereal-worldapplicationsandneedsofexpertsinthecorrespondingfields.
    5arXivTemplate APREPRINT
    Theinclusionofinsightsfromadiversegroupofexperiencedcontributorswasinstrumentalinouraimtodelivera
    comprehensiveoverviewofthemodel’sfunctionalityanditspossibleinfluenceintheindustry.
    3.2.1 Professional-basedevaluation
    Inthevalidationstageofourresearch,wecollaboratedwithtenexpertsfromdiversesectors,includingacademiaand
    industry,toevaluatetheefficacyofourLLM-basedmodel. Thisselectionwasstrategic,andaimedatcapturingawide
    rangeofperspectivesandinsightsonthemodel’sperformanceacrossvariousprofessionalcontexts. Tofacilitatea
    thoroughevaluation,eachexpertwasprovidedwithaccesstothemodel,accompaniedbycomprehensiveinstructions
    onitsintendeduseandcapabilities. Thisapproachensuredthattheywereadequatelyequippedtoconductanin-depth
    assessmentofthemodelwithintheirrespectivedomains.
    Participant’sselection: Initially,weconductedasearchforsuitableresearchersfromvariousresearchgroupsand
    expandedouroutreachtoindividualsthroughsocialnetworks. WereachedouttoresearchersviatheirResearchGate
    andGoogleScholarprofiles. Fromtheseplatforms,werecruitedfiveparticipants,andtheremainingfivewereidentified
    throughsocialnetworkingsitesandprofessionalcontacts. Consequently,weassembledagroupoftenparticipants,
    referredtoasP1toP10inTable1,fortheevaluationofourproposedmodel.Table1demonstratesthattheseparticipants
    comefromavarietyoffields,suchasSoftwareEngineering,andMachineLearning/DeepLearningDevelopment.
    Datacollection: Themethodologyemployedasystematicapproachtogatherfeedbackdata. Participantsweretasked
    withintegratingthemodelintotheirresearchandprovidingatopicrelevanttotheirexpertise. Theythencompared
    the results generated by our model with those obtained manually. To collect their feedback, we implemented a
    comprehensive feedback mechanism that enabled them to document their experiences, observations, and critiques
    systematically. Thismechanismwasgearedtowardsobtainingdetailedresponsesaboutthemodel’sefficiency,user-
    friendliness,andaccuracyindataanalysis. Theformatofthefeedbackwasmeticulouslycraftedtoextractin-depth
    qualitativeinsights,therebyfacilitatingtheassessmentofquantifiableelementsofthemodel’sperformance.
    Dataanalysis: Inthefinalphaseofourvalidationprocess,analyzingparticipantfeedbackwasessentialforongoing
    model improvement. Participants were allowed to choose any data source for input. We gathered and scrutinized
    theirfeedbacktounderstandhowthemodelperformedinvariousscenarios. Toevaluatethemodel’sperformance,
    weusedanextensiveLikertscalerangingfrom’NotSatisfied’to’Excellent,’withintermediateoptionslike’Fair,’
    ’Satisfactory,’ ’Good,’ and ’Very Good.’ This scale provided a nuanced spectrum for evaluation, enabling precise
    andcomprehensivegradingofthemodel’seffectiveness. Ouriterativeapproachwasdrivenbyafocusonenhancing
    themodel’sfunctionality,userexperience,andoverallefficacy,aimingtofulfillthevariedneedsandexpectationsof
    professionalsinqualitativedataanalysis.
    4 Results
    ThissectionpresentstheresultsobtainedfromimplementinganAI-agent-basedmodelaimedatautomatingtheSLR
    processinSE.Thefindingsaredetailedinaccordancewithtwoprimaryresearchquestions(RQs)thatsteeredthe
    creationandevaluationofthemodel.
    4.1 LLMBasedMulti-AgentModel(RQ1)
    OurresearchintroducesanLLM-basedmulti-agentmodelthatredefinestheconventionalapproachtoSLRsinSE.The
    multi-agentmodeldevelopedforautomatingtheSLRprocesshasdemonstrateditsefficacythroughastructuredand
    sequentialworkflow. Theprocessbeginswiththeinputofaresearchtopic,asdepictedinFigure2.
    6arXivTemplate APREPRINT
    Figure2: ResultsofSearchStringandRQs
    Figure3: ResultsofPaperIdentification
    Uponreceivingthetopic,themodelsystematicallygeneratesapertinentsetofresearchquestions. Asillustratedin
    Figure2,itformulatedquestionslike’Howhavelargelanguagemodelsbeenutilizedinvariousaspectsofthesoftware
    developmentprocess?’ and’Whatchallengesandlimitationsexistintheadoptionandimplementationoflargelanguage
    modelsinsoftwaredevelopment?’ Thesequestionsplayacrucialroleinguidingtheliteraturesearchandanalysis
    process. Subsequenttotheresearchquestionformulation,themodelproceedstogenerateasearchstring. Inthiscase,
    thesearchstring“largelanguagemodelsORsoftwaredevelopment”wascreated,coupledwithaspecifiedyearto
    narrowdownthesearchscope,therebyenhancingtherelevanceandprecisionofthesearchresults.
    7arXivTemplate APREPRINT
    Figure4: PaperFiltering
    Thesubsequentphaseinvolvesretrievingpapersthatmatchthegeneratedsearchstring. Thisfeatureofthemodelis
    specificallydesignedtofetchresearchpapersfromvariousdatabases, asdemonstratedbythelistofpapersshown
    in Figure 3. For this demonstration, we focused solely on papers published in the year 2023, setting the model to
    retrieveonly10papersfromthatyear,allrelevanttothisfield. Thetoolefficientlycompilesrelevantinformationsuch
    asthetitle,author,publicationURL,journalname,DOI,papertype,affiliationcountry,andtheaffiliationinstitution.
    Moreover,themodelisequippedwiththecapabilitytoapplyinclusiveandexclusivecriteriabasedontitles,which
    furtherrefinesthesearchresultstoensureonlythemostpertinentliteratureisconsideredforreview. Asshownin
    Figure4,onlythreepaperswereselectedforanin-depthanalysis.
    Finally,themodelextractsdatabasedontheformulatedRQs. Thisadvancedfeatureisexemplifiedinthedemowhere
    detailedanswersareprovidedforthepreviouslygeneratedRQs. Forinstance,theanswertothefirstRQdiscussesthe
    variedapplicationsoflargelanguagemodelsinthesoftwaredevelopmentlifecycleandhighlightsspecificinstancesof
    theiruse,liketheinferencefromthepaper“InferLinkEnd-to-EndProgramRepairwithLargeLanguageModels.”
    Figure5: DataExtraction
    Inconclusion,theautomatedSLRtoolhasshowcaseditsabilitytostreamlinethelaboriousprocessofliteraturereview,
    fromdefiningthescopeoftheresearchtoextractingandsynthesizingdatapertinenttotheresearchquestions. The
    demonstrationaffirmsthemodel’spotentialinsignificantlyreducingthetimeandeffortconventionallyrequiredfor
    conductingsystematicliteraturereviews.
    8arXivTemplate APREPRINT
    Figure6: SummaryofAbstractandIntroduction
    4.2 EvaluationResult(RQ2)
    The empirical evaluation of our tool was conducted by involving ten researchers and practitioners from diverse
    backgroundswithintheSEcommunity. Theirengagementwiththemodelprovidedacomprehensiveperspectiveon
    its practical utility and user experience. The feedback was overwhelmingly positive, with 80% of the participants
    approvingthetool’sfunctionalityandrecognizingitscontributiontosimplifyingtheSLRprocess.
    Despitethegeneralconsensusonthemodel’sefficacy,20%oftheparticipantsrecommendedimprovements. Specific
    suggestionshighlightedtheneedforamorenuancedinterpretationofcomplexresearchqueriesandthegeneration
    ofmorerefinedsearchstrings. Thisconstructivefeedbackisinvaluableasitdirectsthefocustowardenhancingthe
    model’sinterpretativealgorithmsanditsabilitytohandleambiguousormultifacetedresearchquestions.
    In pursuit of continuous improvement, the model is scheduled for further exposure and evaluation. The SANER
    2024conferenceinRovaniemi(Finland)presentsanopportunityforawidearrayoffeedbackfromtheSEresearch
    community,whichwillbeinstrumentalinthemodel’siterativedevelopment.Furthermore,alarge-scaletestinginitiative
    isplanned,wherethemodelwillbedisseminatedtoagroupof50researchersandpractitionersforextensiveevaluation.
    Thisforthcomingphaseisexpectedtoyielddeeperinsightsintothemodel’sgeneralizabilityandperformanceacross
    variousdomainswithinSE.ItwillalsohelptopinpointanysubtlenuancesinSLRprocessesthatthemodelneedsto
    accommodate. Thecomprehensivefeedbackwillbeintegraltorefiningthemodel,ensuringthatthefinalversionisnot
    onlyeffectiveandefficientbutalsoversatileanduser-friendly. Theultimateobjectiveistodeliverarobust,universally
    applicabletoolthatstandardizesandautomatesSLRs,contributingtotheadvancementofresearchmethodologiesin
    SE.
    5 Discussions
    Theresultsderivedfromtheimplementationofourmulti-AIagentmodelforSLRhavebeenbothencouragingand
    insightful. ThemodelsuccessfullyautomatedkeycomponentsoftheSLRprocess,includingthegenerationofsearch
    strings, the selection and filtering of relevant literature, and the summarization of key findings. This automation
    significantlyreducedthetimeandefforttypicallyrequiredinconductingSLRs,whilemaintaining,andinsomeaspects
    enhancing,theaccuracyandcomprehensivenessofthereview. Themodel’sabilitytoprocessandanalyzelargevolumes
    oftextrapidly,anditsprecisioninidentifyingrelevantstudies,demonstratedthesubstantialpotentialofintegrating
    LLMsinacademicresearch.
    Theimplicationsoftheseresultsarefar-reaching. Firstly,themodelpresentsavaluabletoolforresearchersacross
    variousfields,reducingthebarrierstoconductingcomprehensiveliteraturereviews. Thisefficiencycanaccelerate
    thepaceofresearchanddiscovery,enablingscholarstofocusonmorecomplexandcreativeaspectsoftheirwork.
    Additionally,themodel’sstandardizationoftheSLRprocesscanpotentiallyleadtomoreconsistentandreplicable
    researchoutcomes,acornerstoneinscientificresearch. Thereductioninmanualeffortalsoopensupopportunitiesfor
    9arXivTemplate APREPRINT
    Table1: Researcher’sdemographyandtheirassessment
    ID Role of Prac- Experience Performance Feedback Suggestion
    titioner
    P1 AIResearcher 5Years VeryGood Suggested enhancements in Includemorestepsforrefine-
    thenumberofyearsforpaper ment.
    selection.
    P2 SEResearcher 8Years Excellent Impressed with accuracy, Userinterfacecouldbemore
    recommended UI improve- intuitive.
    ments.
    P3 Empirical Re- 10Years Good Advised on incorporating Include more steps for data
    searcher generalterminologysupport. analyze.
    P4 Theoretical 3Years Satisfactory Suggestedtoimprovesearch Improvethepaperselection
    Researcher stringstep. criteria.
    P5 DataScientist 6Years VeryGood Pleased with model, sug- Increaseprocessingspeed.
    inSE gestedspeedoptimizations.
    P6 SEResearcher 12Years Excellent Recommended additional Providetemplatesforvarious
    casestudytemplates. businessscenarios.
    P7 Empirical Re- 7Years NotSatisfied Provided result was not ex- Need to improve the tool
    searcher pected. scalability.
    P8 Theoretical 9Years VeryGood Requestedsupportformore Addadditionallanguageca-
    Researcher languages. pabilities.
    P9 SEResearcher 4Years Excellent Impressed with multi- Continue to refine multi-
    methodapproach. methodcapabilities.
    P10 Empirical Re- 15Years Fair Suggestedafeatureforbetter Createopensourcemodelfor
    searcher paperselection. dataextractions.
    researcherswithlimitedresourcesorthosefacingconstraintssuchastimepressures,broadeningthescopeofwhocan
    conductthoroughliteraturereviews.
    Lookingahead,thefutureimpactofourmodelispoisedtobesignificant. Akeymilestonewillbeourattendance
    at the Sanner Conference on March 12th, where we will showcase our developed tool to a diverse audience. This
    eventwillnotonlyserveasaplatformtodemonstratethecapabilitiesofourmodelbutalsoasacriticalopportunity
    togatherfeedbackfromawiderangeofusers. Thisfeedbackwillbeinvaluableinrefiningandenhancingthemodel
    further. Understandinghowthemodelperformsinreal-worldscenariosandgatheringdiverseperspectiveswillenable
    ustotailoritmorecloselytotheneedsoftheresearchcommunity. Followingthis,weplantoimplementupdatesand
    improvementsbasedonthisfeedback,ensuringthatourtoolremainsattheforefrontofinnovationinSLRautomation.
    Thecontinueddevelopmentandadaptationofourmodelinresponsetouserinputwillensureitsrelevanceandutilityin
    theever-evolvinglandscapeofacademicresearch.
    In addition, the long-term impact of our work on researchers and the broader academic community is expected to
    be substantial. Our model represents a paradigm shift in how SLRs are conducted, offering a tool that is not only
    efficientbutalsoadaptabletotheevolvingneedsofresearchers. Onesignificantfutureimpactisthedemocratizationof
    research. BysimplifyingtheSLRprocess,ourtoolmakeshigh-qualityliteraturereviewsaccessibletoawiderrangeof
    researchers,includingthosefrominstitutionswithfewerresourcesorthosenewtothefield. Thisaccessibilitycould
    leadtoamorediverserangeofvoicesandperspectivesinacademicresearch,enrichingthefieldasawhole.
    Furthermore, themodel’sefficiencyinhandlinglargevolumesofdatamakesitaninvaluableassetinfieldswhere
    literatureisvastandrapidlygrowing,suchasbiomedicalresearch,environmentalstudies,andtechnology. Researchers
    inthesefieldscanstayabreastofthelatestdevelopmentsmoreeffectively,ensuringtheirworkisinformedbythemost
    currentandcomprehensivedataavailable.
    Inthedomainofinterdisciplinaryresearch,ourmodelcanfacilitatethesynthesisofinformationacrossdifferentfields,
    potentiallyleadingtonovelinsightsandinnovations. Byefficientlycollatingandanalyzingdiversesetsofliterature,the
    toolcanhelpuncoverconnectionsbetweendisciplinesthatmightotherwisebeoverlooked.
    The long-term adaptation of our model based on user feedback and technological advancements will also ensure
    itsongoingrelevance. ContinuousupdateswillallowthemodeltoincorporatethelatestAIadvancements,further
    enhancingitscapabilitiesandensuringitremainsacutting-edgetoolforSLR.Moreover,themodel’spotentialfor
    customizationwillallowittocatertothespecificneedsofdifferentresearchdomains. Thiscustomizedapproachmeans
    10arXivTemplate APREPRINT
    thatthetoolcanbefine-tunedtodelivermoretargetedandrelevantresults,dependingonthespecificrequirementsof
    theresearchquestionorfield.
    6 Limitation
    Thisstudy,whilecontributingvaluableinsightsintotheSEfield. However,thereisseverallimitationsthatnecessitate
    attentioninfutureiterationsoftheresearch. Primarily,theinitialsearchstrategyemployedforidentifyingrelevant
    literaturewassuboptimal. TheabsenceofacomprehensiveuseofBooleanoperators, notablythelackof"AND"
    inthesearchstrings,potentiallycompromisedthespecificityandthoroughnessoftheliteraturesearch,leadingtoan
    incompleterepresentationoftheavailableevidence. Thisissueunderscorestheneedforamorerigorouslydefined
    searchstrategytoenhancetheprecisionandrelevanceofretrieveddocuments.
    Furthermore, the methodology exhibited a significant gap in its approach to literature selection, characterized by
    anabsenceofclearlydefinedcriteriaforprimaryandsecondaryexclusion. Thisoversightlikelyresultedinaless
    rigorousfilteringprocess,diminishingthestudy’sabilitytoexcludeirrelevantorlow-qualitystudiessystematically.
    Implementingexplicitinclusionandexclusioncriteriawillbecrucialforimprovingthereliabilityandvalidityofthe
    literaturereviewinsubsequentversionsofthepaper.
    Anothercriticallimitationobservedwasinthedataextractionphase. Althoughdatawereextractedbasedonpredefined
    researchquestions,thereliabilityoftheextractedinformationisquestionableduetothelackofarobustanalytical
    algorithm. Thecurrentmethodologydoesnotadequatelyensuretheaccuracyandrelevanceoftheextracteddata,which
    isacornerstonefordrawingreliableconclusions. Futureiterationsofthisresearchwillbenefitsubstantiallyfromthe
    integrationofadvancedanalyticalalgorithmscapableofmoreadvanceddataanalysis. Suchalgorithmsshouldnotonly
    extractdatamoreefficientlybutalsoevaluatethequalityandapplicabilityoftheinformationinrelationtotheresearch
    objectives.
    Addressingtheselimitationsisessentialforadvancingtheresearch’scontributiontothefield. Enhancementsinsearch
    strategy,literaturescreening,anddataanalysiswillnotonlyrefinethemethodologicalapproachbutalsoimprovethe
    study’soverallcredibilityandimpact. Futureworkwillfocusonfixingtheseissuestoestablishamorereliableand
    comprehensiveresearchframework.
    7 FutureWork
    Addressingtheidentifiedlimitationspresentsapathwayforenhancingthecomprehensivenessofourresearchinfuture
    iterations. Theupcomingversionofthispaperwillaimtoimplementseveralkeyimprovements.
    Refinementofsearchstrategy: Toovercomethelimitationsposedbyaninadequatesearchstring,futureworkwill
    involvethedevelopmentofamoresophisticatedsearchstrategy. ThiswillincludethecomprehensiveuseofBoolean
    operators,particularlytheincorporationof"AND"toensurethespecificityandthoroughnessoftheliteraturesearch.
    Asystematicapproachtodefiningsearchstringswillbeadoptedtoenhancetheprecisionandrelevanceofretrieved
    documents.
    Implementationofexplicitexclusionandinclusioncriteria: Recognizingtheabsenceofclearlydefinedcriteria
    forprimaryandsecondaryliteratureexclusionasasignificantgap,futureeffortswillfocusonestablishingexplicit
    inclusion and exclusion criteria. This refinement will facilitate a more rigorous and systematic screening process,
    therebyimprovingthestudy’sabilitytoexcludeirrelevantorlow-qualitystudiessystematicallyandensuringamore
    reliableandvalidliteraturereview.
    Advancement of data extraction methods: The preliminary phase highlighted the need for a more reliable data
    extractionmechanism. Toaddressthis,futureworkwillincorporateadvancedanalyticalalgorithmsdesignedtoensure
    theaccuracyandrelevanceoftheextracteddata. Thesealgorithmswillnotonlyfacilitatemoreefficientdataextraction
    butwillalsoprovideameanstocriticallyevaluatethequalityandapplicabilityoftheinformationinrelationtothe
    researchobjectives. Theintegrationofmachinelearningandnaturallanguageprocessingtechniqueswillbeexploredto
    automateandenhancethedataextractionandanalysisprocess.
    Enhancementofanalyticalframework: Acknowledgingthelimitationsintheinitialdataanalysis,futureresearch
    willaimtodevelopandimplementamorerobustanalyticalframework. Thisframeworkwillbedesignedtoanalyzethe
    extracteddatacomprehensively,incorporatingbothqualitativeandquantitativemethodologiesasappropriate. Emphasis
    willbeplacedonensuringthereliabilityandvalidityofthefindingsthroughrigorousstatisticaltestingandsensitivity
    analyses.
    11arXivTemplate APREPRINT
    Broadeningofliteraturescope: Tocounteractanypotentialbiasesorgapsintheliteraturereviewcausedbytheinitial
    searchlimitations,futureresearchwillbroadenitsscopetoincludeawiderrangeofdatabasesandgreyliterature. This
    expansionwillensureamorecomprehensivecoverageofthesubjectmatter,encompassingdiverseperspectivesand
    emergingresearchtrends.
    Stakeholderengagement: Recognizingthevalueofstakeholderinsightsinrefiningresearchmethodologies,future
    iterationswillinvolveengagingwithdomainexperts,researchers,andpractitioners. Thisengagementwillprovide
    criticalfeedbackontheresearchdesign,methodologies,andfindings,contributingtoamorenuancedandimpactful
    researchoutcome.
    Bysystematicallyaddressingtheselimitations,futureworkwillsignificantlyenhancethestudy’scontributiontothe
    field,providingamorerobust,comprehensive,andreliablefoundationforunderstandingtheresearchtopic. These
    improvementswillnotonlyaddressthecurrentstudy’sshortcomingsbutalsosetaprecedentformethodologicalrigor
    insimilarresearchendeavors.
    8 Conclusions
    Thedevelopmentandimplementationofourmulti-AIagentmodelrepresentasignificantadvancementinthefield
    of SLR. By integrating the capabilities of LLMs, this research demonstrates a novel approach to automating and
    optimizingtheSLRprocess. OurmodeladdressestheprimarychallengesassociatedwithtraditionalSLRmethods:
    thetime-consumingnatureoftheprocessandthepotentialforhumanerrororbiasinliteratureselectionandanalysis.
    Byautomatingtheinitialsearch,screening,summarization,andanalysisphases,themodelsignificantlyreducesthe
    manualeffortandtimerequired,whilealsoenhancingtheaccuracyandconsistencyoftheresults.
    Theuseofasimpleuserinterfacefortopicinputandsubsequentgenerationoftailoredsearchstringsillustratesthe
    model’suser-friendlyapproach,makingcomplexSLRprocessesaccessibletoabroaderrangeofresearchers. The
    inclusiveandexclusivefilteringmechanismensuresthattheliteraturereviewremainsfocusedandrelevant,directly
    aligningwiththespecifiedresearchquestions. Theautonomoussummarizationofabstractsandthefinalanalytical
    phaseunderscorethemodel’sabilitytoextractvastamountsofdataintoclear,relevantinformation,ataskthatwould
    bechallengingwithouttheaidofadvancedAI.
    This research contributes to the growing field of AI application in academic research, showcasing how LLMs can
    beeffectivelyemployedtoenhanceresearchmethodologies. Whilethemodelsignificantlyimprovesefficiencyand
    accuracy,itisimportanttoacknowledgetheroleofhumanoversightinguidingandinterpretingtheresults,ensuring
    thatthefinaloutputmaintainsthedepthrequiredinscholarlyresearch.
    References
    StaffsKeeleetal. Guidelinesforperformingsystematicliteraturereviewsinsoftwareengineering,2007.
    BarbaraKitchenham,OPearlBrereton,DavidBudgen,MarkTurner,JohnBailey,andStephenLinkman. Systematic
    literaturereviewsinsoftwareengineering–asystematicliteraturereview. Informationandsoftwaretechnology,51(1):
    7–15,2009.
    RaymonvanDinter,BedirTekinerdogan,andCagatayCatal. Automationofsystematicliteraturereviews: Asystematic
    literaturereview. InformationandSoftwareTechnology,136:106589,2021.
    ZeeshanRasheed, MuhammadWaseem, MikaSaari, KariSystä, andPekkaAbrahamsson. Codepori: Largescale
    modelforautonomoussoftwaredevelopmentbyusingmulti-agents. arXivpreprintarXiv:2402.01411,2024a.
    ZeeshanRasheed,MuhammadWaseem,Kai-KristianKemell,WangXiaofeng,AnhNguyenDuc,KariSystä,andPekka
    Abrahamsson. Autonomousagentsinsoftwaredevelopment: Avisionpaper. arXivpreprintarXiv:2311.18440,
    2023.
    NicholasCarlini,FlorianTramer,EricWallace,MatthewJagielski,ArielHerbert-Voss,KatherineLee,AdamRoberts,
    TomBrown, DawnSong, UlfarErlingsson, etal. Extractingtrainingdatafromlargelanguagemodels. In30th
    USENIXSecuritySymposium(USENIXSecurity21),pages2633–2650,2021.
    Xinyi Hou, Yanjie Zhao, Yue Liu, Zhou Yang, Kailong Wang, Li Li, Xiapu Luo, David Lo, John Grundy, and
    Haoyu Wang. Large language models for software engineering: A systematic literature review. arXiv preprint
    arXiv:2308.10620,2023.
    ZeeshanRasheed,MuhammadWaseem,AakashAhmad,Kai-KristianKemell,WangXiaofeng,AnhNguyenDuc,
    andPekkaAbrahamsson. Canlargelanguagemodelsserveasdataanalysts? amulti-agentassistedapproachfor
    qualitativedataanalysis. arXivpreprintarXiv:2402.01386,2024b.
    12arXivTemplate APREPRINT
    MaryBartholomew. Jameslind’streatiseofthescurvy(1753). PostgraduateMedicalJournal,78(925):695–696,2002.
    BarbaraKitchenham. Proceduresforperformingsystematicreviews. Keele,UK,KeeleUniversity,33(2004):1–26,
    2004.
    AlisonO’Mara-Eves,JamesThomas,JohnMcNaught,MakotoMiwa,andSophiaAnaniadou. Usingtextminingfor
    studyidentificationinsystematicreviews: asystematicreviewofcurrentapproaches. Systematicreviews,4(1):1–22,
    2015.
    ChristopherMarshalletal. Toolsupportforsystematicreviewsinsoftwareengineering. PhDthesis,KeeleUniversity,
    2016.
    Katia R Felizardo, Gabriel F Andery, Fernando V Paulovich, Rosane Minghim, and José C Maldonado. A visual
    analysisapproachtovalidatetheselectionreviewofprimarystudiesinsystematicreviews. InformationandSoftware
    Technology,54(10):1079–1091,2012.
    KatiaRomeroFelizardo,ElisaYumiNakagawa,StephenGMacDonell,andJoséCarlosMaldonado. Avisualanalysis
    approachtoupdatesystematicreviews. InProceedingsofthe18thInternationalConferenceonEvaluationand
    AssessmentinSoftwareEngineering,pages1–10,2014.
    KatiaRomeroFelizardo,MehwishRiaz,MuhammadSulayman,EmiliaMendes,StephenGMacDonell,andJoséCarlos
    Maldonado. Analysingtheuseofgraphstorepresenttheresultsofsystematicreviewsinsoftwareengineering. In
    201125thBrazilianSymposiumonSoftwareEngineering,pages174–183.IEEE,2011.
    Viviane Malheiros, Erika Hohn, Roberto Pinho, Manoel Mendonca, and Jose Carlos Maldonado. A visual text
    miningapproachforsystematicreviews. InFirstinternationalsymposiumonempiricalsoftwareengineeringand
    measurement(ESEM2007),pages245–254.IEEE,2007.
    BabatundeKOlorisade,EddeQuincey,PearlBrereton,andPeterAndras. Acriticalanalysisofstudiesthataddressthe
    useoftextminingforcitationscreeninginsystematicreviews. InProceedingsofthe20thinternationalconference
    onevaluationandassessmentinsoftwareengineering,pages1–11,2016.
    YusraShakeel,JacobKrüger,IvonnevonNostitz-Wallwitz,ChristianLausberger,GabrielCamperoDurand,Gunter
    Saake,andThomasLeich.(automated)literatureanalysis:threatsandexperiences.InProceedingsoftheInternational
    WorkshoponSoftwareEngineeringforScience,pages20–27,2018.
    LFeng,YKChiam, andSKLo. Text-miningtechniquesandtoolsforsystematicliteraturereviews: Asystematic
    literaturereview.in201724thasia-pacificsoftwareengineeringconference(apsec)(pp.41–50). IEEE.https://doi.
    org/10.1109/apsec,2017.
    RobinPaynter,LionelLBañez,EliseBerliner,EileenErinoff,JenniferLege-Matsuura,ShannonPotter,andStaceyUhl.
    Epcmethods: anexplorationoftheuseoftext-miningsoftwareinsystematicreviews. 2016.
    JustinClark,PaulGlasziou,ChrisDelMar,AlexandraBannach-Brown,PaulinaStehlik,andAnnaMaeScott. Afull
    systematicreviewwascompletedin2weeksusingautomationtools: acasestudy. Journalofclinicalepidemiology,
    121:81–90,2020.
    MatthewMichelsonandKatjaReuter. Thesignificantcostofsystematicreviewsandmeta-analyses: acallforgreater
    involvementofmachinelearningtoassessthepromiseofclinicaltrials.Contemporaryclinicaltrialscommunications,
    16:100443,2019.
    ElaineBeller,JustinClark,GuyTsafnat,CliveAdams,HeinzDiehl,HansLund,MouradOuzzani,KristinaThayer,
    JamesThomas,TariTurner,etal. Makingprogresswiththeautomationofsystematicreviews: principlesofthe
    internationalcollaborationfortheautomationofsystematicreviews(icasr). Systematicreviews,7:1–7,2018.
    SiddharthaRJonnalagadda,PawanGoyal,andMarkDHuffman. Automatingdataextractioninsystematicreviews: a
    systematicreview. Systematicreviews,4(1):1–16,2015.
    Iain J Marshall and Byron C Wallace. Toward systematic review automation: a practical guide to using machine
    learningtoolsinresearchsynthesis. Systematicreviews,8:1–10,2019.
    AnnetteMO’Connor,GuyTsafnat,JamesThomas,PaulGlasziou,StephenBGilbert,andBrianHutton. Aquestionof
    trust: canwebuildanevidencebasetogaintrustinsystematicreviewautomationtechnologies? Systematicreviews,
    8(1):1–8,2019.
    StijnJaspers,EwoudDeTroyer,andMarcAerts. Machinelearningtechniquesfortheautomationofliteraturereviews
    andsystematicreviewsinefsa. EFSASupportingPublications,15(6):1427E,2018.
    James Thomas, John McNaught, and Sophia Ananiadou. Applications of text mining within systematic reviews.
    Researchsynthesismethods,2(1):1–14,2011.
    AJVanAltena,RSpijker,andSDOlabarriaga. Usageofautomationtoolsinsystematicreviews. Researchsynthesis
    methods,10(1):72–82,2019.
    13



```python
# 概要と提案手法名抽出の実行
with Timer(prefix="summary_method_name"):
    summary_method_name = extract_summary_method_name(MODEL_NAME, paper_text)
```

    summary_method_name 25.661[s]



```python
print(summary_method_name["summary"])
```

    本研究では、従来の手作業による時間がかかる文献レビューのプロセスを自動化するために、複数のAIエージェントを活用した新しいモデルを提案しています。このモデルは、大規模言語モデル（LLMs）の能力を用いて、研究者が入力したトピックから関連する学術論文を探索し、選択した論文の要約と分析を行うことで、文献レビューを全自動で行うことができます。このプロセスにより、文献レビューに必要な時間と労力を大幅に削減し、精度と効率を向上させています。実際の評価では、ソフトウェアエンジニアリングの研究者たちがこのモデルをテストし、高い評価とともに、さらなる改善のためのフィードバックを提供しました。今後は、より多くの実務家と研究者による評価を行い、2024年のSANERカンファレンスでの発表を通じて、モデルの改善と実用化を目指しています。



```python
print(summary_method_name["method_name"])
```

    LLMを利用した複数AIエージェントモデル



```python
def explain_method_algorithm(model_name, text, method_name):
    # アルゴリズムの説明
    prompt = [{'role': 'system', 'content': "Please explain the algorithm of the method name from the following text in detail, using both sentences and formulas. Carefully describe the mechanism in order, ensuring that it can be understood and implemented. Design the process flow in a way that allows for the algorithm to be implemented without any omissions or excess."}]
    prompt.append({"role" : "system", "content" : "Describe the algorithm in detail, explaining what it aims to achieve, how it processes to accomplish this, and how exactly these processes are carried out, regardless of the length of the explanation. Just ensure it is accurate."})
    prompt.append({"role" : "system", "content" : "Outputs should be generated in step by step."})
    prompt.append({"role" : "system", "content" : "Please format the output in Markdown."})
    prompt.append({"role": "system", "content": "Results must be in Japanese."})
    prompt.append({"role": "system", "content": 'Please generate a JSON from the following input text. Use "method" as the schema, and for the key, use "the detailed explanation of the processing of the method_name algorithm in simple language". Generate it in the format of {"method": "the result of a detailed explanation of the method_names algorithm described in simple language"}.'})
    
    prompt.append({"role": "user", "content": 'Generate a JSON from the following input text. Use "method" as the schema, and use the judgment result as the key, to create it in the format {"method": the result of grouping the search_query based on relevance into a list format that can be used in Python}.'})
    
    prompt.append({"role": "user", "content": f"Input text: {text}"})
    prompt.append({"role": "user", "content": f"method name: {method_name}"})
    
    """
    システム
    あなたは以下の text から method name のアルゴリズムを順番に過不足なく文章と数式で丁寧に順番に仕組みが理解でき、実装をするための処理の流れを設計できるように説明してください。
    アルゴリズムの説明は、何を実現するために、どのように処理を実行し、その処理はどのように実行されるのかをどれだけ長くなってもよいのでとにかく正確に説明してください。
    出力は Markdown 形式にしてください。
    
    結果は日本語でなければならない。
    以下の入力テキストからJSONを生成してください。スキーマには "method"、キーには"text から method_name のアルゴリズムを平易な文章で処理内容を詳細に説明した内容"を使ってください。"method": "method_name のアルゴリズムを平易な文章で処理内容を詳細に説明した内容した結果}'}の形式で生成してください。
    user
    
    入力されたテキスト: {text}
    method name: {method_name}
    """
    
    # 概要と提案手法名抽出用のプロンプトテンプレートを作成
    method = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    method_str = method.choices[0].message.content
    
    # JSON形式の文字列を辞書に変換
    method_algorithm = json.loads(method_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "method": method_algorithm["method"],
    }

```


```python
with Timer(prefix="explain_method_algorithm"):
    method_algorithm = explain_method_algorithm(MODEL_NAME, paper_text, str(summary_method_name["method_name"]))
```

    explain_method_algorithm 16.346[s]



```python
print(method_algorithm["method"])
```

    LLMを利用した複数AIエージェントモデルは、システマティックレビュー(SLR)のプロセスを自動化するために開発された新しい手法です。このモデルは、大規模言語モデル(LLM)の能力を活用して、研究者が入力したトピックに基づいて適切な検索文字列を生成し、関連する学術論文を効率的に検索し、選択します。その後、包括的および排除的なフィルタリングプロセスを適用し、特定の研究領域に関連するタイトルに焦点を当てます。モデルはこれらの論文の要約を自動的に生成し、研究分野に直接関連するもののみを保持します。最終段階では、モデルは定義された研究質問に関連して選択された論文の徹底的な分析を行います。この手法は、SLRを行うために必要な時間と労力を大幅に削減し、包括性と精度を確保することを目的としています。



```python
def generate_pseudocode_for_method(model_name, algorithm):
    # アルゴリズムの説明
    prompt = [{'role': 'system', 'content': "Based on the description of the following algorithm, please create a comprehensive pseudo-implementation code in Python without omitting any details."}]
    prompt.append({"role" : "system", "content" : "Outputs should be generated in step by step."})
    prompt.append({"role": "system", "content": "Please format the output in Markdown."})
    prompt.append({"role": "system", "content": "Comment must be in Japanese."})
    prompt.append({"role": "system", "content": 'Please generate a JSON from the following input text. Use "code" as the schema, and for the key, use "the result of generating code that executes the algorithm of algorithm in Python". Generate it in the format of {"code": "the result of reproducing the algorithm algorithm in Python code"}.'})
        
    prompt.append({"role": "user", "content": f"algorithm: {algorithm}"})
    
    """
    システム
    あなたは以下の algorithm の説明を基にpythonの疑似実装コードを過不足なく作成してください。
    出力は Markdown 形式にしてください。
    
    コメントは日本語でなければならない。
    以下の入力テキストからJSONを生成してください。スキーマには "code"、キーには"algorithm のアルゴリズムをpythonのコードで動くようにコードを生成した結果"を使ってください。"code": "algorithm のアルゴリズムをpythonのコードで再現した結果"}'}の形式で生成してください。
    user
    
    algorithm: {algorithm}
    """
    
    # 概要と提案手法名抽出用のプロンプトテンプレートを作成
    code_res = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        response_format={ "type": "json_object" },
        temperature=TEMPERATURE,
    )
    code_str = code_res.choices[0].message.content
    print(code_str)
    
    # JSON形式の文字列を辞書に変換
    code = json.loads(code_str)
    
    # 出力と新しいメッセージをステートに反映
    return {
        "code": code["code"],
    }

```


```python
with Timer(prefix="generate_pseudocode_for_method"):
    code_method = generate_pseudocode_for_method(MODEL_NAME, str(method_algorithm["method"]))
```

    
    {
      "code": "# LLMを利用した複数AIエージェントモデルの実装\n\n# 必要なライブラリのインポート\nimport openai\n\n# OpenAIのAPIキー設定\nopenai.api_key = 'your_api_key_here'\n\n# SLRプロセスの自動化\n\nclass SLRAutomation:\n    def __init__(self, topic):\n        self.topic = topic\n\n    # 適切な検索文字列を生成するメソッド\n    def generate_search_string(self):\n        # APIを利用して検索文字列を生成\n        response = openai.Completion.create(\n          engine=\"davinci\",\n          prompt=f\"研究トピック: {self.topic}に基づく適切な検索文字列を生成してください。\",\n          max_tokens=100\n        )\n        search_string = response.choices[0].text.strip()\n        return search_string\n\n    # 関連する学術論文を検索し選択するメソッド\n    def find_relevant_papers(self, search_string):\n        # 仮の実装、実際には検索APIやデータベースを利用して関連論文を検索\n        return ['paper1', 'paper2', 'paper3']\n\n    # 論文の要約を生成するメソッド\n    def generate_summaries(self, papers):\n        summaries = []\n        for paper in papers:\n            # APIを利用して論文の要約を生成\n            response = openai.Completion.create(\n              engine=\"davinci\",\n              prompt=f\"以下の論文の要約を生成してください: {paper}\",\n              max_tokens=150\n            )\n            summaries.append(response.choices[0].text.strip())\n        return summaries\n\n    # 選択された論文の分析を行うメソッド\n    def analyze_papers(self, summaries):\n        # 仮の実装、実際には分析手法を適用\n        analyzed_results = ['result1', 'result2', 'result3']\n        return analyzed_results\n\n# 例\n# 研究トピックの設定\nresearch_topic = '量子コンピューティング'\n\n# SLR自動化クラスのインスタンス化\nslr_automation = SLRAutomation(research_topic)\n\n# 検索文字列の生成\nsearch_string = slr_automation.generate_search_string()\nprint(f'生成した検索文字列: {search_string}')\n\n# 関連論文の検索と選択\npapers = slr_automation.find_relevant_papers(search_string)\nprint(f'選択した論文: {papers}')\n\n# 論文の要約の生成\nsummaries = slr_automation.generate_summaries(papers)\nprint(f'生成した要約: {summaries}')\n\n# 論文の分析\nanalyzed_results = slr_automation.analyze_papers(summaries)\nprint(f'分析結果: {analyzed_results}')\n"
    }
    generate_pseudocode_for_method 31.527[s]



```python
print(code_method["code"])
```

    # LLMを利用した複数AIエージェントモデルの実装
    
    # 必要なライブラリのインポート
    import openai
    
    # OpenAIのAPIキー設定
    openai.api_key = 'your_api_key_here'
    
    # SLRプロセスの自動化
    
    class SLRAutomation:
        def __init__(self, topic):
            self.topic = topic
    
        # 適切な検索文字列を生成するメソッド
        def generate_search_string(self):
            # APIを利用して検索文字列を生成
            response = openai.Completion.create(
              engine="davinci",
              prompt=f"研究トピック: {self.topic}に基づく適切な検索文字列を生成してください。",
              max_tokens=100
            )
            search_string = response.choices[0].text.strip()
            return search_string
    
        # 関連する学術論文を検索し選択するメソッド
        def find_relevant_papers(self, search_string):
            # 仮の実装、実際には検索APIやデータベースを利用して関連論文を検索
            return ['paper1', 'paper2', 'paper3']
    
        # 論文の要約を生成するメソッド
        def generate_summaries(self, papers):
            summaries = []
            for paper in papers:
                # APIを利用して論文の要約を生成
                response = openai.Completion.create(
                  engine="davinci",
                  prompt=f"以下の論文の要約を生成してください: {paper}",
                  max_tokens=150
                )
                summaries.append(response.choices[0].text.strip())
            return summaries
    
        # 選択された論文の分析を行うメソッド
        def analyze_papers(self, summaries):
            # 仮の実装、実際には分析手法を適用
            analyzed_results = ['result1', 'result2', 'result3']
            return analyzed_results
    
    # 例
    # 研究トピックの設定
    research_topic = '量子コンピューティング'
    
    # SLR自動化クラスのインスタンス化
    slr_automation = SLRAutomation(research_topic)
    
    # 検索文字列の生成
    search_string = slr_automation.generate_search_string()
    print(f'生成した検索文字列: {search_string}')
    
    # 関連論文の検索と選択
    papers = slr_automation.find_relevant_papers(search_string)
    print(f'選択した論文: {papers}')
    
    # 論文の要約の生成
    summaries = slr_automation.generate_summaries(papers)
    print(f'生成した要約: {summaries}')
    
    # 論文の分析
    analyzed_results = slr_automation.analyze_papers(summaries)
    print(f'分析結果: {analyzed_results}')
    



```python

```
