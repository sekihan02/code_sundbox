```python
!python3 -m pip install --upgrade pip
```

    Requirement already satisfied: pip in /usr/local/lib/python3.10/dist-packages (24.0)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
# !pip install openai==1.2.3
!pip install openai==1.3.4
!pip install python-dotenv tiktoken
!pip install pdfplumber
!pip install arxiv==2.1.0
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
    [0mRequirement already satisfied: arxiv==2.1.0 in /usr/local/lib/python3.10/dist-packages (2.1.0)
    Requirement already satisfied: feedparser==6.0.10 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (6.0.10)
    Requirement already satisfied: requests==2.31.0 in /usr/local/lib/python3.10/dist-packages (from arxiv==2.1.0) (2.31.0)
    Requirement already satisfied: sgmllib3k in /usr/local/lib/python3.10/dist-packages (from feedparser==6.0.10->arxiv==2.1.0) (1.0.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2.1.1)
    Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (3.4)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (1.26.13)
    Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.10/dist-packages (from requests==2.31.0->arxiv==2.1.0) (2022.12.7)
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
url = "https://arxiv.org/abs/2403.10351v1"

identifier = re.search(r'/([^/]+)$', url).group(1)
identifier
```




    '2403.10351v1'




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
import arxiv
import re

def get_arxiv_info_by_url(url):
    # URLからタイトルと概要を取得する関数
    # URLから論文のIDを抽出する
    match = re.search(r'arxiv\.org/abs/([0-9\.v]+)', url)
    if not match:
        return "URLから論文のIDを抽出できませんでした。"
    
    arxiv_id = match.group(1)
    
    # arXivから論文情報を検索するためのクライアントと検索条件を設定
    client = arxiv.Client()
    search = arxiv.Search(id_list=[arxiv_id])
    
    # 検索結果を取得
    result = next(client.results(search), None)
    
    if result:
        # 論文のタイトルと概要を返す
        return {
            "title": result.title,
            "summary": result.summary
        }
    else:
        return {"title": "指定されたIDの論文が見つかりませんでした。"}
```


```python
info = get_arxiv_info_by_url(url)
print(info)
```

    {'title': 'TriSum: Learning Summarization Ability from Large Language Models with Structured Rationale', 'summary': "The advent of large language models (LLMs) has significantly advanced natural\nlanguage processing tasks like text summarization. However, their large size\nand computational demands, coupled with privacy concerns in data transmission,\nlimit their use in resource-constrained and privacy-centric settings. To\novercome this, we introduce TriSum, a framework for distilling LLMs' text\nsummarization abilities into a compact, local model. Initially, LLMs extract a\nset of aspect-triple rationales and summaries, which are refined using a\ndual-scoring method for quality. Next, a smaller local model is trained with\nthese tasks, employing a curriculum learning strategy that evolves from simple\nto complex tasks. Our method enhances local model performance on various\nbenchmarks (CNN/DailyMail, XSum, and ClinicalTrial), outperforming baselines by\n4.5%, 8.5%, and 7.4%, respectively. It also improves interpretability by\nproviding insights into the summarization rationale."}



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

    download_pdf 1.823[s]



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

    pdf_to_text 3.795[s]



```python
print(paper_text)
```

    TriSum: Learning Summarization Ability from Large Language Models
    with Structured Rationale
    PengchengJiang1,CaoXiao2,ZifengWang1,ParminderBhatia2,
    JimengSun1,andJiaweiHan1
    1UniversityofIllinoisatUrbana-Champaign
    2GEHealthCare
    1{pj20, zifengw2, jimeng, hanj}@illinois.edu
    2danicaxiao@gmail.com
    Abstract Step 1: Step 2: Step 3:
    LLM Rationale Golden Rationale Local Training
    Probing Selection
    Theadventoflargelanguagemodels(LLMs) Document Prompt Document
    has significantly advanced natural language Scoring
    processingtasksliketextsummarization. How-
    ever, their large size and computational de- ? LLM MSm oda ell l
    mands, coupled with privacy concerns in
    datatransmission, limittheiruseinresource- Rationale Golden
    Ground-Truth Candidates Rationale
    constrained and privacy-centric settings. To Summary
    overcomethis,weintroduceTriSum,aframe-
    Figure1: Aconceptualdemonstrationofourthree-step
    workfordistillingLLMs’textsummarization
    framework TriSum that endows local small models
    abilitiesintoacompact,localmodel. Initially,
    withLLM’stextsummarizationcapability.
    LLMsextractasetofaspect-triplerationales
    andsummaries,whicharerefinedusingadual- However,manyexistingmethodsstruggletogen-
    scoring method for quality. Next, a smaller
    erate structured summaries (Brown et al., 2020;
    localmodelistrainedwiththesetasks,employ-
    Gekhmanetal.,2023;Liuetal.,2023). Thesestruc-
    ingacurriculumlearningstrategythatevolves
    tured summaries need to encompass essential as-
    from simple to complex tasks. Our method
    pects,keyentitiesandrelationships,andacoherent
    enhanceslocalmodelperformanceonvarious
    benchmarks(CNN/DailyMail,XSum,andClin- finalsummaryderivedfromtheseaspectsandratio-
    icalTrial), outperforming baselines by 4.5%, nales. Recentdevelopmentshaveseentheutiliza-
    8.5%,and7.4%,respectively. Italsoimproves tionofLLMstograspatext’stopicstructureand
    interpretabilitybyprovidinginsightsintothe coreideas(Vaswanietal.,2017a;Weietal.,2023),
    summarizationrationale.
    suggestingtheirpotentialingeneratingstructured
    text summaries. While rational distillation from
    1 Introduction
    LLMshasbeenemployedforNLPtaskslikeQA,
    naturallanguageunderstanding(NLU),andarith-
    Large language models (LLMs), such as GPT-3
    metic reasoning (Wang et al., 2022; Hsieh et al.,
    (Brownetal.,2020)anditssuccessors(Chowdhery
    2023; Magister et al., 2023; Ho et al., 2023), its
    etal.,2022;Touvronetal.,2023;OpenAI,2023),
    applicabilitytoabstractivetextsummarizationre-
    hasgreatlyadvancednaturallanguageprocessing
    mainsunexplored.
    tasks,includingmachinetranslation(Brantsetal.,
    2007), question-answering (QA) systems (Yang Inthisstudy,weaimtodistillLLMs’textsum-
    et al., 2019; Bao et al., 2021), and text summa- marization prowess into a more compact local
    rization (Liu and Lapata, 2019). However, due model. We enhance the transparency and inter-
    totheirsubstantialmodelsizeandcomputational pretability of this local model by incorporating
    demands, their utility can be limited in resource- elicitedrationalesfromLLMs’summarizationpro-
    constrained environments (Strubell et al., 2019). cessasadditionalguidance. Toachievethis,wein-
    Moreover,privacybecomesamajorconcernwhen troduceathree-stepframeworkTriSum(asshown
    sendingproprietarydatatoexternalLLMservices in Figure 1) involving LLM rationale probing,
    likeChatGPT. goldenrationaleselection,andlocaltraining:
    Among others, text summarization is a crucial Step 1: We first prompt vital aspect-triple ratio-
    task for transforming lengthy texts into concise nales and summaries from the input text using
    yet informative summaries (Radev et al., 2002). LLMs. This set includes essential aspects, rele-
    4202
    raM
    51
    ]LC.sc[
    1v15301.3042:viXravanttriplesextractedfromthetext,andaconcise However,theresourcedemandsofLLMshave
    summarythat’stiedtotheseaspectsandtriples. limited their widespread use. Concerns over
    Step2: Next,toensurequality,weemployadual- privacywhenusingLLM-as-a-serviceAPIshave
    scoringmethodforselectinggolden(high-quality) also arisen, especially for sensitive data. This
    rationales to use in the subsequent training. This highlightstheneedformorecompactlocalmodels
    methodevaluatesthesummary’squalitybasedon that can still capture summarization abilities.
    semanticsimilarityandensurescoherentrationales To harness the summarization ability of LLMs,
    usingatopicdistribution-basedapproach. Wang et al. (2021) uses LLMs to augment labels
    Step 3: Last, we train our compact local model for headline generation, while Liu et al. (2023)
    usingacurriculumlearningapproach(Nagatsuka usedsummariescreatedbyLLMsasbenchmarks
    etal.,2021;Xuetal.,2020). Thismethodprogres- for training their local models. LLMs were
    sivelyfine-tunesthemodelbystartingwithsimpler also used to evaluate summary quality during
    tasks and gradually advancing to more complex training. However, this approach did not fully
    ones. Thisprocessenablesourmodeltogradually transferthereasoningskillsofLLMstothelocal
    incorporatetherationalizedsummarizationskills models, indicating a partial capture of LLMs’
    acquiredfromtheLLMs. summarization abilities. Also, the uncertainty of
    Ourresearchbringsthefollowingcontributions. labels generated by deep learning models may
    affectreliability.
    • WeintroduceanewapproachthatdistillsLLMs’
    abstractivetextsummarizationpowerintoasmall
    Rationale Distillation for Interpretability in
    localmodel.
    LLMs Knowledge distillation, as introduced by
    • We design a scoring mechanism to select high- Hintonetal.(2015),referstotheconceptfortrans-
    qualityrationales,whichservesasarobustbase ferringknowledgefromalargemodel(teacher)to
    fortrainingthelocalmodel. asmallerone(student)tomakedeeplearningmod-
    elsusableinresource-limitedenvironments. This
    • Throughextensiveexperimentsweshowthatin-
    ideahasbeenappliedandextendedacrossvarious
    corporatingLLM-generatedrationalesboostsour
    fields (Sanh et al., 2019; Tang et al., 2019; Jiao
    localmodel’ssummarizationperformance.
    et al., 2019; Chen et al., 2019; Lin et al., 2020;
    Wang et al., 2023). Notably, Chen et al. (2019)
    • Weenhancemodelinterpretabilitybyanalyzing
    focused on abstractive summarization, while Lin
    LLM-derived rationales, deepening our insight
    et al. (2020) emphasized extractive summariza-
    intotheirsummarizationprocesses.
    tion. The complexity of deep neural networks
    Overall,ourstudystreamlinespowerfulsumma- hasdrivenresearchtowardmakingAImodelsin-
    rizationmodelsinresource-limitedcontexts,offer- terpretable(Ribeiroetal.,2016;Doshi-Velezand
    inginsightsintoharnessingLLMs’inherentsum- Kim,2017). Rationalegenerationisanemerging
    marizationabilities. techniqueininterpretability,highlightingamodel’s
    keyreasoningsteps(ZaidanandEisner,2008;Yu
    2 RelatedWork
    et al., 2020). In knowledge distillation, rationale
    TextSummarizationusingLLMs. Transformer- generation enhances interpretability, offering in-
    based language models (Vaswani et al., 2017b) sights into the decision-making of LLMs. This
    have improved the quality of text summarization informsthedevelopmentofbetterknowledgedis-
    significantly. These models excel at capturing tillationmethods. (Wangetal.,2022)developeda
    complex relationships in long texts. Recent re- smallermodelusingLLM-generatedrationalesand
    searchhastakenthistransformerarchitecturefur- questions. Others(Shridharetal.,2023;Hoetal.,
    therforsummarizationtasks(LiuandLapata,2019; 2023;Magisteretal.,2023;Hsiehetal.,2023)used
    Lewisetal.,2019;Zhangetal.,2020;Raffeletal., LLM-producedrationalestotrainmodels,improv-
    2020), utilizing LLMs such as ChatGPT, GPT-4, ing performance and transparency in predictions,
    andPaLM(OpenAI,2023;Chowdheryetal.,2022) primarilyfortaskslikeQA,NLU,arithmeticrea-
    whichhavebillionsofparametersandaretrained soning,andextractivesummarization (Yangetal.,
    onvastamountsoftext. Theirperformancecanbe 2023). Thishasleftagapconcerningabstractive
    furtherenhancedwhenpromptedtoexecutestep- textsummarization. Tobridgethisgap, weintro-
    by-stepreasoning(Weietal.,2023). duceanaspect-triplerationalegenerationapproach,aimed at distilling the summarization prowess of foraspect-triplerationalesintrainingdata;(2)se-
    LLMs. This method consists of a procedure of lecting golden (high-quality) rationales based on
    extractingessentialaspects,pinpointingprimaryre- summaryandcoherencyscores;and(3)traininga
    lationships,andconstructingadefinitivesummary. localmodelusingacurriculumlearningapproach.
    WedetaileachstepofTriSumasfollows.
    3 Method
    3.2 Step1: LLMRationaleProbing
    3.1 OverviewofTriSum
    We introduce TriSum, an approach transferring Given a set of documents for training, our initial
    document summarization ability from an LLM stepinvolvesleveragingtheLLMtoiterativelygen-
    ( 100B)toasmallLM( 1B)viarationaleprob-
    erateasetofaspect-triplerationalesalongsidetheir
    in≥ g, golden rationale sel≤ ection, and curriculum correspondingsummaries. Theobjectiveisthefol-
    learning. Here,weassumetheLLMhasreasoning lowing: first,toenabletheLLMtopinpointessen-
    abilityandcanbeusedforprompting. Beforedis- tialaspects,andsubsequently,toelaborateoneach
    cussingindetail,wedefineafewkeyconceptsand aspectusingdetailedtriples.
    notationsbelow. In this process, the auto-regressive LLM gen-
    erates both the rationale R and the summary S.
    Definition1(Aspect) An (essential) aspect α is
    We denote the length of a sequence by . The
    definedasafewwordsrepresentingadistincttopic |·|
    rationale R = (A,T) is a sequence of tokens
    inadocument.
    r ,r ,...,r ,whichiscomposedofaspectto-
    1 2 |R|
    { }
    -Example: Inadocumentaboutclimatechange, kens a ,a ,...,a followed by triple tokens
    1 2 |A|
    { }
    anaspectmightbe"risingsealevels". t ,t ,...,t , where R = A + T . Here,
    1 2 |T|
    { } | | | | | |
    Definition2(Triple) A triple τ = s r o is a
    Arepresentsessentialaspects,andT providesde-
    structureformattingapieceoffree-tex⟨ ti| nt| o⟩ asub- tailed triples. Each a i is an individual token in
    jects,arelationr,andanobjecto. A, and each t j is an individual token in T. The
    summary S is defined as s ,s ,...,s . Each
    1 2 |S|
    -Example: Forasentence“Catseatfish.”,“Cats” { }
    token r is generated based on the document D,
    i
    isthesubject,“eat”istherelation,and“fish”is
    theground-truthsummaryS ,andthetokenspre-
    gt
    theobject,formingatriple ⟨Cats |eat |fish ⟩. viously generated, R<i = r 1,r 2,...,r
    i−1
    . The
    { }
    Task1(AspectExtraction(AE)) Given a docu- prediction of s is contingent upon the generated
    i
    ment D, the task of aspect extraction is defined rationaleRandS<i = s ,s ,...,s :
    1 2 i−1
    { }
    as extracting its essential aspects A (where each
    α Arepresentsanaspect)thatapproximatesthe (cid:89)u
    ∈ p(R D,S ) = p(r D,S ,R<i),
    distributionp(A D). gt i gt
    | |
    | i=1
    (1)
    Task2(TripleExtraction(TE)) Given a docu- v
    (cid:89)
    ment D and its aspects A, the triple extraction p(S D,S ,R) = p(s D,S ,R,S<i).
    gt i gt
    | |
    taskisdefinedasextractingtriplesT (whereeach i=1
    τ T representsatriple)fromD,aimingtolearn
    ∈ whereS denotestheground-truthsummarycor-
    thedistributionp(T D,A). gt
    | respondingtothedocumentD. Toequipourlocal
    Task3(SummaryGeneration(SG)) Given a
    model with more interpretable and high-quality
    document D, its aspect A, and the triples T,
    rationales, we prompt the LLM for n iterations,
    the task of summary generation is defined as
    whichresultsinnpairsofrationale-summary,de-
    generating a summary S that approximates the notedas R ,S n foreachdocument. Eachpair,
    distributionp(S D,A,T). { i i }i=1
    whereR = (A ,T ),servesasacandidateforthe
    | i i i
    Task4(Rationale-SummaryGeneration(RSG)) goldenrationaleselectiondescribedasfollows.
    Given a document D, the task of rationale-
    summarygenerationisdefinedasgeneratingboth 3.3 Step2: GoldenRationaleSelection
    rationale and summary that approximates the
    Giventhegeneratedcandidaterationales,wethen
    distributionp(A,T,S D).
    incorporatetwotypesofscores-SummaryScore
    |
    As illustrated in Figure 2, TriSum operates andLatentDirichletAllocation(LDA)-basedCo-
    throughthreekeysteps: (1)tappingintotheLLM herenceScoretoselectthegoldenrationales.I. LLM Rationale Probing II. Golden Rationale Selection Golden
    Rationale
    G t ( o (i a 1 f 2v s ) )e k t n s A h F : c e oa c r o d d r o eo d c ac i u cu n m hm g e ee n sn t t st o . e na t tn h id e a li g t r as o s u pg n er d- co t tu ,rn ud- rtt ehr t u rst iuh em vms eau rm dym e,a t r aey ix, lt erd dao c t t rt e ih s pe s l e ef n so tl iil nao lw t i han esg p ects S Su com rm ea r<latexit sha1_base64="C8nfY5aQVuXCtnPY8IUVYlPI4Hw=">AAAB83icbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK9gOaWCbbbbt0swm7G6GE/g0vHhTx6p/x5r9x2+ag1QcDj/dmmJkXJoJr47pfTmFpeWV1rbhe2tjc2t4p7+41dZwqyho0FrFqh6iZ4JI1DDeCtRPFMAoFa4Wj66nfemRK81jem3HCgggHkvc5RWMl35cYCnzI7iZd3i1X3Ko7A/lLvJxUIEe9W/70ezFNIyYNFah1x3MTE2SoDKeCTUp+qlmCdIQD1rFUYsR0kM1unpAjq/RIP1a2pCEz9edEhpHW4yi0nRGaoV70puJ/Xic1/csg4zJJDZN0vqifCmJiMg2A9Lhi1IixJUgVt7cSOkSF1NiYSjYEb/Hlv6R5UvXOq6e3Z5XaVR5HEQ7gEI7BgwuowQ3UoQEUEniCF3h1UufZeXPe560FJ5/Zh19wPr4BJ2mRxQ==</latexit>ry S i S<latexit sha1_base64="UBu7fxod4wX5HY895vd9UvLDhxA=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8dK7Qe0oWy2k3bpZhN2N0IJ/QlePCji1V/kzX/jts1Bqw8GHu/NMDMvSATXxnW/nMLK6tr6RnGztLW9s7tX3j9o6ThVDJssFrHqBFSj4BKbhhuBnUQhjQKB7WB8O/Pbj6g0j+WDmSToR3QoecgZNVZqNPq8X664VXcO8pd4OalAjnq//NkbxCyNUBomqNZdz02Mn1FlOBM4LfVSjQllYzrErqWSRqj9bH7qlJxYZUDCWNmShszVnxMZjbSeRIHtjKgZ6WVvJv7ndVMTXvsZl0lqULLFojAVxMRk9jcZcIXMiIkllClubyVsRBVlxqZTsiF4yy//Ja2zqndZPb+/qNRu8jiKcATHcAoeXEEN7qAOTWAwhCd4gVdHOM/Om/O+aC04+cwh/ILz8Q0qzo27</latexit> i ~cos S<latexit sha1_base64="OQbU2x4KvWT7URQKZ+17rlZ6B/M=">AAAB7XicbVBNS8NAEJ34WetX1aOXYBE8lURFPRa9eKxoP6ANZbPdtGs3u2F3IpTQ/+DFgyJe/T/e/Ddu2xy09cHA470ZZuaFieAGPe/bWVpeWV1bL2wUN7e2d3ZLe/sNo1JNWZ0qoXQrJIYJLlkdOQrWSjQjcShYMxzeTPzmE9OGK/mAo4QFMelLHnFK0EqN+27Wx3G3VPYq3hTuIvFzUoYctW7pq9NTNI2ZRCqIMW3fSzDIiEZOBRsXO6lhCaFD0mdtSyWJmQmy6bVj99gqPTdS2pZEd6r+nshIbMwoDm1nTHBg5r2J+J/XTjG6CjIukxSZpLNFUSpcVO7kdbfHNaMoRpYQqrm91aUDoglFG1DRhuDPv7xIGqcV/6Jydnderl7ncRTgEI7gBHy4hCrcQg3qQOERnuEV3hzlvDjvzsesdcnJZw7gD5zPH8Mbj0M=</latexit> gt + S<latexit sha1_base64="UBu7fxod4wX5HY895vd9UvLDhxA=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8dK7Qe0oWy2k3bpZhN2N0IJ/QlePCji1V/kzX/jts1Bqw8GHu/NMDMvSATXxnW/nMLK6tr6RnGztLW9s7tX3j9o6ThVDJssFrHqBFSj4BKbhhuBnUQhjQKB7WB8O/Pbj6g0j+WDmSToR3QoecgZNVZqNPq8X664VXcO8pd4OalAjnq//NkbxCyNUBomqNZdz02Mn1FlOBM4LfVSjQllYzrErqWSRqj9bH7qlJxYZUDCWNmShszVnxMZjbSeRIHtjKgZ6WVvJv7ndVMTXvsZl0lqULLFojAVxMRk9jcZcIXMiIkllClubyVsRBVlxqZTsiF4yy//Ja2zqndZPb+/qNRu8jiKcATHcAoeXEEN7qAOTWAwhCd4gVdHOM/Om/O+aC04+cwh/ILz8Q0qzo27</latexit> +i ~cos(<latexit sha1_base64="f5CgMhslH+AQ7q/v0p21NJ0oPZ8=">AAAB6HicbVDLTgJBEOzFF+IL9ehlIjHhRHbVqEeiF4+QyCOBDZkdemFkdnYzM2tCCF/gxYPGePWTvPk3DrAHBSvppFLVne6uIBFcG9f9dnJr6xubW/ntws7u3v5B8fCoqeNUMWywWMSqHVCNgktsGG4EthOFNAoEtoLR3cxvPaHSPJYPZpygH9GB5CFn1FipXu4VS27FnYOsEi8jJchQ6xW/uv2YpRFKwwTVuuO5ifEnVBnOBE4L3VRjQtmIDrBjqaQRan8yP3RKzqzSJ2GsbElD5urviQmNtB5Hge2MqBnqZW8m/ud1UhPe+BMuk9SgZItFYSqIicnsa9LnCpkRY0soU9zeStiQKsqMzaZgQ/CWX14lzfOKd1W5qF+WqrdZHHk4gVMogwfXUIV7qEEDGCA8wyu8OY/Oi/PufCxac042cwx/4Hz+AG+VjLQ=</latexit> A<latexit sha1_base64="+896LC9lTKgd/1WPy75cgW/MTHE=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPVi8eK9gPaUDbbSbt0swm7G6GE/gQvHhTx6i/y5r9x2+ag1QcDj/dmmJkXJIJr47pfTmFpeWV1rbhe2tjc2t4p7+41dZwqhg0Wi1i1A6pRcIkNw43AdqKQRoHAVjC6mfqtR1Sax/LBjBP0IzqQPOSMGivdX/V4r1xxq+4M5C/xclKBHPVe+bPbj1kaoTRMUK07npsYP6PKcCZwUuqmGhPKRnSAHUsljVD72ezUCTmySp+EsbIlDZmpPycyGmk9jgLbGVEz1IveVPzP66QmvPQzLpPUoGTzRWEqiInJ9G/S5wqZEWNLKFPc3krYkCrKjE2nZEPwFl/+S5onVe+8enp3Vqld53EU4QAO4Rg8uIAa3EIdGsBgAE/wAq+OcJ6dN+d93lpw8pl9+AXn4xsPYo2p</latexit> i ⨁ T<latexit sha1_base64="7d4/mVP6SItKQjz/1Ta6QNeBeSI=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK/YI2lM120i7dbMLuRiihP8GLB0W8+ou8+W/ctjlo9cHA470ZZuYFieDauO6XU1hZXVvfKG6WtrZ3dvfK+wctHaeKYZPFIladgGoUXGLTcCOwkyikUSCwHYxvZ377EZXmsWyYSYJ+RIeSh5xRY6WHRp/3yxW36s5B/hIvJxXIUe+XP3uDmKURSsME1brruYnxM6oMZwKnpV6qMaFsTIfYtVTSCLWfzU+dkhOrDEgYK1vSkLn6cyKjkdaTKLCdETUjvezNxP+8bmrCaz/jMkkNSrZYFKaCmJjM/iYDrpAZMbGEMsXtrYSNqKLM2HRKNgRv+eW/pHVW9S6r5/cXldpNHkcRjuAYTsGDK6jBHdShCQyG8AQv8OoI59l5c94XrQUnnzmEX3A+vgEsVI28</latexit> i )<latexit sha1_base64="tt6//FjGc6rDwHkNg3hRwCCgBnA=">AAAB6HicbVDLSgNBEOyNrxhfUY9eBoOgl7Croh6DXjwmYB6QhDA76U3GzM4uM7NCWPIFXjwo4tVP8ubfOEn2oIkFDUVVN91dfiy4Nq777eRWVtfWN/Kbha3tnd294v5BQ0eJYlhnkYhUy6caBZdYN9wIbMUKaegLbPqju6nffEKleSQfzDjGbkgHkgecUWOl2lmvWHLL7gxkmXgZKUGGaq/41elHLAlRGiao1m3PjU03pcpwJnBS6CQaY8pGdIBtSyUNUXfT2aETcmKVPgkiZUsaMlN/T6Q01Hoc+rYzpGaoF72p+J/XTkxw0025jBODks0XBYkgJiLTr0mfK2RGjC2hTHF7K2FDqigzNpuCDcFbfHmZNM7L3lX5onZZqtxmceThCI7hFDy4hgrcQxXqwADhGV7hzXl0Xpx352PemnOymUP4A+fzB3EZjLU=</latexit> Argmax Aspects A<latexit sha1_base64="H2T18AqsMYqulRgj0MofBi3iydk=">AAAB6nicbVDLSgNBEOyNrxhfUY9eBoMgHsKuinqMevEY0TwgWcLsZJIMmZ1dZnqFsOQTvHhQxKtf5M2/cZLsQRMLGoqqbrq7glgKg6777eSWlldW1/LrhY3Nre2d4u5e3USJZrzGIhnpZkANl0LxGgqUvBlrTsNA8kYwvJ34jSeujYjUI45i7oe0r0RPMIpWerjunHSKJbfsTkEWiZeREmSodopf7W7EkpArZJIa0/LcGP2UahRM8nGhnRgeUzakfd6yVNGQGz+dnjomR1bpkl6kbSkkU/X3REpDY0ZhYDtDigMz703E/7xWgr0rPxUqTpArNlvUSyTBiEz+Jl2hOUM5soQyLeythA2opgxtOgUbgjf/8iKpn5a9i/LZ/XmpcpPFkYcDOIRj8OASKnAHVagBgz48wyu8OdJ5cd6dj1lrzslm9uEPnM8fr9eNag==</latexit> ⇤
    f t (o r 3r u )m t a h Wt i s t[ u hE m N m tT a hI r eT y Y . r1 e t| r iR eE vL eA dT tI rO iN p l| e sE ,N T cI oT mY p2 o] s u es e ad s ut mo m ac ro ymp oo fs e t ht eh e d og cr uo mu en nd- t. C Sco oh re eren r<latexit sha1_base64="M8yWSjWzrMGmQoiwPayMcmXr9gg=">AAAB83icbVBNS8NAEJ34WetX1aOXxSJ4KomKeiz24rGC/YAmlsl22y7dbMLuRiihf8OLB0W8+me8+W/ctjlo64OBx3szzMwLE8G1cd1vZ2V1bX1js7BV3N7Z3dsvHRw2dZwqyho0FrFqh6iZ4JI1DDeCtRPFMAoFa4Wj2tRvPTGleSwfzDhhQYQDyfucorGS70sMBT5mtUmXd0tlt+LOQJaJl5My5Kh3S19+L6ZpxKShArXueG5iggyV4VSwSdFPNUuQjnDAOpZKjJgOstnNE3JqlR7px8qWNGSm/p7IMNJ6HIW2M0Iz1IveVPzP66SmfxNkXCapYZLOF/VTQUxMpgGQHleMGjG2BKni9lZCh6iQGhtT0YbgLb68TJrnFe+qcnF/Wa7e5nEU4BhO4Aw8uIYq3EEdGkAhgWd4hTcndV6cd+dj3rri5DNH8AfO5w8O+ZG1</latexit>c C iy A<latexit sha1_base64="+896LC9lTKgd/1WPy75cgW/MTHE=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPVi8eK9gPaUDbbSbt0swm7G6GE/gQvHhTx6i/y5r9x2+ag1QcDj/dmmJkXJIJr47pfTmFpeWV1rbhe2tjc2t4p7+41dZwqhg0Wi1i1A6pRcIkNw43AdqKQRoHAVjC6mfqtR1Sax/LBjBP0IzqQPOSMGivdX/V4r1xxq+4M5C/xclKBHPVe+bPbj1kaoTRMUK07npsYP6PKcCZwUuqmGhPKRnSAHUsljVD72ezUCTmySp+EsbIlDZmpPycyGmk9jgLbGVEz1IveVPzP66QmvPQzLpPUoGTzRWEqiInJ9G/S5wqZEWNLKFPc3krYkCrKjE2nZEPwFl/+S5onVe+8enp3Vqld53EU4QAO4Rg8uIAa3EIdGsBgAE/wAq+OcJ6dN+d93lpw8pl9+AXn4xsPYo2p</latexit> i L~ KD LA D<latexit sha1_base64="4VW0CXWdPejN3MRt4nREEtILI9I=">AAAB6HicbVDLSgNBEOyNrxhfUY9eBoPgKeyqqMegHjwmYB6QLGF20knGzM4uM7NCWPIFXjwo4tVP8ubfOEn2oIkFDUVVN91dQSy4Nq777eRWVtfWN/Kbha3tnd294v5BQ0eJYlhnkYhUK6AaBZdYN9wIbMUKaRgIbAaj26nffEKleSQfzDhGP6QDyfucUWOl2l23WHLL7gxkmXgZKUGGarf41elFLAlRGiao1m3PjY2fUmU4EzgpdBKNMWUjOsC2pZKGqP10duiEnFilR/qRsiUNmam/J1Iaaj0OA9sZUjPUi95U/M9rJ6Z/7adcxolByeaL+okgJiLTr0mPK2RGjC2hTHF7K2FDqigzNpuCDcFbfHmZNM7K3mX5vHZRqtxkceThCI7hFDy4ggrcQxXqwADhGV7hzXl0Xpx352PemnOymUP4A+fzB5oFjNA=</latexit> −(<latexit sha1_base64="f5CgMhslH+AQ7q/v0p21NJ0oPZ8=">AAAB6HicbVDLTgJBEOzFF+IL9ehlIjHhRHbVqEeiF4+QyCOBDZkdemFkdnYzM2tCCF/gxYPGePWTvPk3DrAHBSvppFLVne6uIBFcG9f9dnJr6xubW/ntws7u3v5B8fCoqeNUMWywWMSqHVCNgktsGG4EthOFNAoEtoLR3cxvPaHSPJYPZpygH9GB5CFn1FipXu4VS27FnYOsEi8jJchQ6xW/uv2YpRFKwwTVuuO5ifEnVBnOBE4L3VRjQtmIDrBjqaQRan8yP3RKzqzSJ2GsbElD5urviQmNtB5Hge2MqBnqZW8m/ud1UhPe+BMuk9SgZItFYSqIicnsa9LnCpkRY0soU9zeStiQKsqMzaZgQ/CWX14lzfOKd1W5qF+WqrdZHHk4gVMogwfXUIV7qEEDGCA8wyu8OY/Oi/PufCxac042cwx/4Hz+AG+VjLQ=</latexit> A<latexit sha1_base64="+896LC9lTKgd/1WPy75cgW/MTHE=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPVi8eK9gPaUDbbSbt0swm7G6GE/gQvHhTx6i/y5r9x2+ag1QcDj/dmmJkXJIJr47pfTmFpeWV1rbhe2tjc2t4p7+41dZwqhg0Wi1i1A6pRcIkNw43AdqKQRoHAVjC6mfqtR1Sax/LBjBP0IzqQPOSMGivdX/V4r1xxq+4M5C/xclKBHPVe+bPbj1kaoTRMUK07npsYP6PKcCZwUuqmGhPKRnSAHUsljVD72ezUCTmySp+EsbIlDZmpPycyGmk9jgLbGVEz1IveVPzP66QmvPQzLpPUoGTzRWEqiInJ9G/S5wqZEWNLKFPc3krYkCrKjE2nZEPwFl/+S5onVe+8enp3Vqld53EU4QAO4Rg8uIAa3EIdGsBgAE/wAq+OcJ6dN+d93lpw8pl9+AXn4xsPYo2p</latexit> i ⨁ T<latexit sha1_base64="7d4/mVP6SItKQjz/1Ta6QNeBeSI=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK/YI2lM120i7dbMLuRiihP8GLB0W8+ou8+W/ctjlo9cHA470ZZuYFieDauO6XU1hZXVvfKG6WtrZ3dvfK+wctHaeKYZPFIladgGoUXGLTcCOwkyikUSCwHYxvZ377EZXmsWyYSYJ+RIeSh5xRY6WHRp/3yxW36s5B/hIvJxXIUe+XP3uDmKURSsME1brruYnxM6oMZwKnpV6qMaFsTIfYtVTSCLWfzU+dkhOrDEgYK1vSkLn6cyKjkdaTKLCdETUjvezNxP+8bmrCaz/jMkkNSrZYFKaCmJjM/iYDrpAZMbGEMsXtrYSNqKLM2HRKNgRv+eW/pHVW9S6r5/cXldpNHkcRjuAYTsGDK6jBHdShCQyG8AQv8OoI59l5c94XrQUnnzmEX3A+vgEsVI28</latexit> i )<latexit sha1_base64="tt6//FjGc6rDwHkNg3hRwCCgBnA=">AAAB6HicbVDLSgNBEOyNrxhfUY9eBoOgl7Croh6DXjwmYB6QhDA76U3GzM4uM7NCWPIFXjwo4tVP8ubfOEn2oIkFDUVVN91dfiy4Nq777eRWVtfWN/Kbha3tnd294v5BQ0eJYlhnkYhUy6caBZdYN9wIbMUKaegLbPqju6nffEKleSQfzDjGbkgHkgecUWOl2lmvWHLL7gxkmXgZKUGGaq/41elHLAlRGiao1m3PjU03pcpwJnBS6CQaY8pGdIBtSyUNUXfT2aETcmKVPgkiZUsaMlN/T6Q01Hoc+rYzpGaoF72p+J/XTkxw0025jBODks0XBYkgJiLTr0mfK2RGjC2hTHF7K2FDqigzNpuCDcFbfHmZNM7L3lX5onZZqtxmceThCI7hFDy4hgrcQxXqwADhGV7hzXl0Xpx352PemnOymUP4A+fzB3EZjLU=</latexit> L~ KD LA D<latexit sha1_base64="4VW0CXWdPejN3MRt4nREEtILI9I=">AAAB6HicbVDLSgNBEOyNrxhfUY9eBoPgKeyqqMegHjwmYB6QLGF20knGzM4uM7NCWPIFXjwo4tVP8ubfOEn2oIkFDUVVN91dQSy4Nq777eRWVtfWN/Kbha3tnd294v5BQ0eJYlhnkYhUK6AaBZdYN9wIbMUKaRgIbAaj26nffEKleSQfzDhGP6QDyfucUWOl2l23WHLL7gxkmXgZKUGGarf41elFLAlRGiao1m3PjY2fUmU4EzgpdBKNMWUjOsC2pZKGqP10duiEnFilR/qRsiUNmam/J1Iaaj0OA9sZUjPUi95U/M9rJ6Z/7adcxolByeaL+okgJiLTr0mPK2RGjC2hTHF7K2FDqigzNpuCDcFbfHmZNM7K3mX5vHZRqtxkceThCI7hFDy4ggrcQxXqwADhGV7hzXl0Xpx352PemnOymUP4A+fzB5oFjNA=</latexit> Triples
    T<latexit sha1_base64="b6nwwZunm9JhIqHBOgHPW9uK+qY=">AAAB6nicbVDLSgNBEOyNrxhfUY9eBoMgHsKuinoMevEYMS9IljA76SRDZmeXmVkhLPkELx4U8eoXefNvnCR70MSChqKqm+6uIBZcG9f9dnIrq2vrG/nNwtb2zu5ecf+goaNEMayzSESqFVCNgkusG24EtmKFNAwENoPR3dRvPqHSPJI1M47RD+lA8j5n1FjpsdY96xZLbtmdgSwTLyMlyFDtFr86vYglIUrDBNW67bmx8VOqDGcCJ4VOojGmbEQH2LZU0hC1n85OnZATq/RIP1K2pCEz9fdESkOtx2FgO0NqhnrRm4r/ee3E9G/8lMs4MSjZfFE/EcREZPo36XGFzIixJZQpbm8lbEgVZcamU7AheIsvL5PGedm7Kl88XJYqt1kceTiCYzgFD66hAvdQhTowGMAzvMKbI5wX5935mLfmnGzmEP7A+fwBzMmNfQ==</latexit>
    ⇤
    template Ground-truth III. Curriculum Learning (Local Training) Curriculum
    Document
    Summary
    D<latexit sha1_base64="4VW0CXWdPejN3MRt4nREEtILI9I=">AAAB6HicbVDLSgNBEOyNrxhfUY9eBoPgKeyqqMegHjwmYB6QLGF20knGzM4uM7NCWPIFXjwo4tVP8ubfOEn2oIkFDUVVN91dQSy4Nq777eRWVtfWN/Kbha3tnd294v5BQ0eJYlhnkYhUK6AaBZdYN9wIbMUKaRgIbAaj26nffEKleSQfzDhGP6QDyfucUWOl2l23WHLL7gxkmXgZKUGGarf41elFLAlRGiao1m3PjY2fUmU4EzgpdBKNMWUjOsC2pZKGqP10duiEnFilR/qRsiUNmam/J1Iaaj0OA9sZUjPUi95U/M9rJ6Z/7adcxolByeaL+okgJiLTr0mPK2RGjC2hTHF7K2FDqigzNpuCDcFbfHmZNM7K3mX5vHZRqtxkceThCI7hFDy4ggrcQxXqwADhGV7hzXl0Xpx352PemnOymUP4A+fzB5oFjNA=</latexit> S<latexit sha1_base64="OQbU2x4KvWT7URQKZ+17rlZ6B/M=">AAAB7XicbVBNS8NAEJ34WetX1aOXYBE8lURFPRa9eKxoP6ANZbPdtGs3u2F3IpTQ/+DFgyJe/T/e/Ddu2xy09cHA470ZZuaFieAGPe/bWVpeWV1bL2wUN7e2d3ZLe/sNo1JNWZ0qoXQrJIYJLlkdOQrWSjQjcShYMxzeTPzmE9OGK/mAo4QFMelLHnFK0EqN+27Wx3G3VPYq3hTuIvFzUoYctW7pq9NTNI2ZRCqIMW3fSzDIiEZOBRsXO6lhCaFD0mdtSyWJmQmy6bVj99gqPTdS2pZEd6r+nshIbMwoDm1nTHBg5r2J+J/XTjG6CjIukxSZpLNFUSpcVO7kdbfHNaMoRpYQqrm91aUDoglFG1DRhuDPv7xIGqcV/6Jydnderl7ncRTgEI7gBHy4hCrcQg3qQOERnuEV3hzlvDjvzsesdcnJZw7gD5zPH8Mbj0M=</latexit> gt Document Document AE AE AE
    Document Aspects
    Small TE TE TE
    LLM Document Aspects Triples Model
    𝒏runs SG SG SG RSG
    MSm oda ell l MSm oda ell l MSm oda ell l Aspects <latexit sha1_base64="lVIHt7fdSiG9i+tZlZMWvhdtbg4=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK9gPaUDbbTbt0swm7E6GE/gQvHhTx6i/y5r9x2+agrQ8GHu/NMDMvSKQw6LrfTmFldW19o7hZ2tre2d0r7x80TZxqxhsslrFuB9RwKRRvoEDJ24nmNAokbwWj26nfeuLaiFg94jjhfkQHSoSCUbTSA/bcXrniVt0ZyDLxclKBHPVe+avbj1kacYVMUmM6npugn1GNgkk+KXVTwxPKRnTAO5YqGnHjZ7NTJ+TEKn0SxtqWQjJTf09kNDJmHAW2M6I4NIveVPzP66QYXvuZUEmKXLH5ojCVBGMy/Zv0heYM5dgSyrSwtxI2pJoytOmUbAje4svLpHlW9S6r5/cXldpNHkcRjuAYTsGDK6jBHdShAQwG8Ayv8OZI58V5dz7mrQUnnzmEP3A+fwAGsI2j</latexit>t0 <latexit sha1_base64="UgLHzPwgdhFI3nHU6cfflvIRt9A=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK9gPaUDbbTbt0swm7E6GE/gQvHhTx6i/y5r9x2+agrQ8GHu/NMDMvSKQw6LrfTmFldW19o7hZ2tre2d0r7x80TZxqxhsslrFuB9RwKRRvoEDJ24nmNAokbwWj26nfeuLaiFg94jjhfkQHSoSCUbTSA/a8XrniVt0ZyDLxclKBHPVe+avbj1kacYVMUmM6npugn1GNgkk+KXVTwxPKRnTAO5YqGnHjZ7NTJ+TEKn0SxtqWQjJTf09kNDJmHAW2M6I4NIveVPzP66QYXvuZUEmKXLH5ojCVBGMy/Zv0heYM5dgSyrSwtxI2pJoytOmUbAje4svLpHlW9S6r5/cXldpNHkcRjuAYTsGDK6jBHdShAQwG8Ayv8OZI58V5dz7mrQUnnzmEP3A+fwAINI2k</latexit>t1 <latexit sha1_base64="j9ebr9sZ/dcxq6WnsP4YZFzrOvY=">AAAB6nicbVBNS8NAEJ34WetX1aOXxSJ4KkkV9Vj04rGi/YA2lM120y7dbMLuRCihP8GLB0W8+ou8+W/ctjlo64OBx3szzMwLEikMuu63s7K6tr6xWdgqbu/s7u2XDg6bJk414w0Wy1i3A2q4FIo3UKDk7URzGgWSt4LR7dRvPXFtRKwecZxwP6IDJULBKFrpAXvVXqnsVtwZyDLxclKGHPVe6avbj1kacYVMUmM6npugn1GNgkk+KXZTwxPKRnTAO5YqGnHjZ7NTJ+TUKn0SxtqWQjJTf09kNDJmHAW2M6I4NIveVPzP66QYXvuZUEmKXLH5ojCVBGMy/Zv0heYM5dgSyrSwtxI2pJoytOkUbQje4svLpFmteJeV8/uLcu0mj6MAx3ACZ+DBFdTgDurQAAYDeIZXeHOk8+K8Ox/z1hUnnzmCP3A+fwAJuI2l</latexit>t2 <latexit sha1_base64="LA2Nw+dC4y2KGZmjBVIEzV21eNE=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK9gPaUDbbTbt0swm7E6GE/gQvHhTx6i/y5r9x2+agrQ8GHu/NMDMvSKQw6LrfTmFldW19o7hZ2tre2d0r7x80TZxqxhsslrFuB9RwKRRvoEDJ24nmNAokbwWj26nfeuLaiFg94jjhfkQHSoSCUbTSA/bOe+WKW3VnIMvEy0kFctR75a9uP2ZpxBUySY3peG6CfkY1Cib5pNRNDU8oG9EB71iqaMSNn81OnZATq/RJGGtbCslM/T2R0ciYcRTYzoji0Cx6U/E/r5NieO1nQiUpcsXmi8JUEozJ9G/SF5ozlGNLKNPC3krYkGrK0KZTsiF4iy8vk+ZZ1busnt9fVGo3eRxFOIJjOAUPrqAGd1CHBjAYwDO8wpsjnRfn3fmYtxacfOYQ/sD5/AELPI2m</latexit>t3 <latexit sha1_base64="FqD73yY/uCIyhxLAcVziBfXK4Z8=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0m0qMeiF48V7Qe0oWy2m3bpZhN2J0IJ/QlePCji1V/kzX/jts1Bqw8GHu/NMDMvSKQw6LpfTmFldW19o7hZ2tre2d0r7x+0TJxqxpsslrHuBNRwKRRvokDJO4nmNAokbwfjm5nffuTaiFg94CThfkSHSoSCUbTSPfZr/XLFrbpzkL/Ey0kFcjT65c/eIGZpxBUySY3pem6CfkY1Cib5tNRLDU8oG9Mh71qqaMSNn81PnZITqwxIGGtbCslc/TmR0ciYSRTYzojiyCx7M/E/r5tieOVnQiUpcsUWi8JUEozJ7G8yEJozlBNLKNPC3krYiGrK0KZTsiF4yy//Ja2zqndRPb+rVerXeRxFOIJjOAUPLqEOt9CAJjAYwhO8wKsjnWfnzXlftBacfOYQfsH5+AYMwI2n</latexit>t4
    Triples
    Aspects Triples Summary Summary [<latexit sha1_base64="/7VFt/C5SuLeIRRVKoqyT+RxbPk=">AAACInicbZDLSgMxFIYzXmu9jbp0EyyCCykzbfG2KrpxWcFeoB2GTJq2oZkLyRmhDH0WN76KGxeKuhJ8GDPtULT1QOD//pNDcn4vElyBZX0ZS8srq2vruY385tb2zq65t99QYSwpq9NQhLLlEcUED1gdOAjWiiQjvidY0xvepP3mA5OKh8E9jCLm+KQf8B6nBLTlmpdtcK1TDK7tXOFOJ6/RTrE0w1KK5RmWU6xodM2CVbQmhReFnYkCyqrmmh+dbkhjnwVABVGqbVsROAmRwKlg43wnViwidEj6rK1lQHymnGSy4hgfa6eLe6HUJwA8cX9PJMRXauR7+qZPYKDme6n5X68dQ+/CSXgQxcACOn2oFwsMIU7zwl0uGQUx0oJQyfVfMR0QSSjoVPM6BHt+5UXRKBXts2L5rlKoXmdx5NAhOkInyEbnqIpuUQ3VEUWP6Bm9ojfjyXgx3o3P6dUlI5s5QH/K+P4BrSSe0w==</latexit>t0,t1]:singular-task learning
    Aspects A<latexit sha1_base64="+896LC9lTKgd/1WPy75cgW/MTHE=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPVi8eK9gPaUDbbSbt0swm7G6GE/gQvHhTx6i/y5r9x2+ag1QcDj/dmmJkXJIJr47pfTmFpeWV1rbhe2tjc2t4p7+41dZwqhg0Wi1i1A6pRcIkNw43AdqKQRoHAVjC6mfqtR1Sax/LBjBP0IzqQPOSMGivdX/V4r1xxq+4M5C/xclKBHPVe+bPbj1kaoTRMUK07npsYP6PKcCZwUuqmGhPKRnSAHUsljVD72ezUCTmySp+EsbIlDZmpPycyGmk9jgLbGVEz1IveVPzP66QmvPQzLpPUoGTzRWEqiInJ9G/S5wqZEWNLKFPc3krYkCrKjE2nZEPwFl/+S5onVe+8enp3Vqld53EU4QAO4Rg8uIAa3EIdGsBgAE/wAq+OcJ6dN+d93lpw8pl9+AXn4xsPYo2p</latexit> i Triples T<latexit sha1_base64="7d4/mVP6SItKQjz/1Ta6QNeBeSI=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8eK/YI2lM120i7dbMLuRiihP8GLB0W8+ou8+W/ctjlo9cHA470ZZuYFieDauO6XU1hZXVvfKG6WtrZ3dvfK+wctHaeKYZPFIladgGoUXGLTcCOwkyikUSCwHYxvZ377EZXmsWyYSYJ+RIeSh5xRY6WHRp/3yxW36s5B/hIvJxXIUe+XP3uDmKURSsME1brruYnxM6oMZwKnpV6qMaFsTIfYtVTSCLWfzU+dkhOrDEgYK1vSkLn6cyKjkdaTKLCdETUjvezNxP+8bmrCaz/jMkkNSrZYFKaCmJjM/iYDrpAZMbGEMsXtrYSNqKLM2HRKNgRv+eW/pHVW9S6r5/cXldpNHkcRjuAYTsGDK6jBHdShCQyG8AQv8OoI59l5c94XrQUnnzmEX3A+vgEsVI28</latexit> i Summary S<latexit sha1_base64="UBu7fxod4wX5HY895vd9UvLDhxA=">AAAB6nicbVBNS8NAEJ3Ur1q/qh69LBbBU0lU1GPRi8dK7Qe0oWy2k3bpZhN2N0IJ/QlePCji1V/kzX/jts1Bqw8GHu/NMDMvSATXxnW/nMLK6tr6RnGztLW9s7tX3j9o6ThVDJssFrHqBFSj4BKbhhuBnUQhjQKB7WB8O/Pbj6g0j+WDmSToR3QoecgZNVZqNPq8X664VXcO8pd4OalAjnq//NkbxCyNUBomqNZdz02Mn1FlOBM4LfVSjQllYzrErqWSRqj9bH7qlJxYZUDCWNmShszVnxMZjbSeRIHtjKgZ6WVvJv7ndVMTXvsZl0lqULLFojAVxMRk9jcZcIXMiIkllClubyVsRBVlxqZTsiF4yy//Ja2zqndZPb+/qNRu8jiKcATHcAoeXEEN7qAOTWAwhCd4gVdHOM/Om/O+aC04+cwh/ILz8Q0qzo27</latexit> i ExA t (rs Aap Ece t )c it o n ExT t (rr Tai Ep ctl )e io n GS eu nm (e Srm Ga )ta ir oy n GR S ea u nt mi eo rmn aa ta il r oe y n- [ [ [t t t1 2 3, , ,t t t2 3 4] ] ]: : :c c jo oon in nc c tu u r r ler r ae en n rnt t il l ne ea a gr rn ni in ng g ( (e laa tr el )y)
    (RSG)
    Figure 2: Distilling text summarization ability from LLM to local model using TriSum. Step 1. LLM
    RationaleProbing: Employingatemplate-basedpromptincorporatingthegivendocumentandground-truth
    summary,weengageanLLMtogenerateasetofnstep-by-steprationalesacrossniterations. Step2. Golden
    RationaleSelection: Weleveragesummaryandcoherencyscorestometiculouslychoosehigh-qualitytraining
    rationales,enhancingthetrainingdataset. Step3. CurriculumLearning: Weimplementacurriculumlearning
    strategytotrainourcompactsmallmodelwithrationalizedsummarizationabilityfromeasytochallengingtasks.
    Summary Score. For each rationale R in the oftopicsk. Itisimportanttoclarifythatthetopics
    i
    candidates R ,S n , suppose Rˆ , Sˆ, and Sˆ identifiedbyLDAarebasedontheentirecorpus,
    { i i }i=1 i i gt
    are the word embeddings of the rationale, LLM- incontrasttotheaspectswhicharespecifictoindi-
    generatedsummary,andtheground-truthsummary vidualdocuments. Fromthismodel,wederivethe
    respectively,thesummaryscoreisaweightedaver- topicdistributionspD ,pA ,andpR forthe
    LDA i,LDA i,LDA
    ageoftwosemanticsimilarity: document, thei-thaspects, andthei-thrationale,
    respectively. Thecoherencescore C iscalculated
    S = sim Sˆ,Sˆ +ϕ sim Sˆ,Rˆ , (2) ∇i
    ∇i ⟨ i gt ⟩ α · ⟨ i i ⟩ astheKL-divergencebetweenthesedistributions:
    where ϕ is a hyper-parameter balancing the im-
    α C = KL(pD pA )
    portance of two components, and sim is the i LDA i,LDA
    ∇ ||
    ⟨·⟩
    semantic similarity computation. For example, (1+ϕ ) KL(pD pR ) (3)
    β LDA i,LDA
    − · ||
    sim x,y canbecomputedusingcosinesimilarity
    as s⟨ im x⟩ ,y = x·y . The first term in Eq. (2) whereϕ β isaparameterthatmanagestheweight
    empha⟨ sizes⟩ the s|| ix m||· i| l|y a| r| ity between the generated oftheKL(pD LDA||pR i,LDA)termitself,andKL( ·||·)
    summaryandtheground-truthsummary,whilethe symbolizestheKL-divergencecomputation:
    second term focus on the relevance between the The score ∇C i in Eq. (3) fosters two primary ob-
    generatedsummaryandtheprependedrationale,in jectives: (1) −ϕ β · KL(pD LDA ||pR i,LDA), an term
    avoidscoringhighforlazygenerationbytheLLM that enhances the topical coherence between the
    (i.e.,simplyrepeatthegivenground-truthsummary documentandrationale. (2)KL(pD LDA||pA i,LDA)
    −
    regardlessofthegeneratedrationale). KL(pD pR ),atermwhichencouragesthe
    LDA|| i,LDA
    triples (T R ) to refine this coherence beyond
    i i
    CoherenceScore. Wealsowanttoevaluatehow ∈
    whatisachievedbyaspectsalone.
    theaspectsandrationalealignwiththelatenttopics
    Thefinalselectionofoptimalrationales,denoted
    ofthedocument. Here,weemployaLatentDirich-
    asR = (A ,T ),isbasedonthosethatyieldthe
    ∗ ∗ ∗
    letAllocation(LDA)model(Bleietal.,2003),an
    highestcombinedscoreofEq. (2)andEq. (3),and
    algorithmthatrepresentseachdocumentasablend
    givenbyEq.(4),
    of a certain number of topics. To be specific, we
    representeachdocumentasadistributionoverthe R = argmax ( S +λ C), (4)
    ∗ i i cs i
    entire lexicon. Given a document D, a rationale ∇ ·∇
    R ,andaspectsA R ,weinitiallytrainanLDA whereλ isabalancinghyperparameterthatman-
    i i i cs
    ∈
    modelonthecorpus(alldocumentsinthedataset) ages the relative contributions of the two scores.
    toidentifylatenttopicswithourspecifiednumber Wethenusethegoldrationalesasthesupervisiontotrainourlocallightweightlanguagemodelinthe thebestrationaleR ,alongwiththedocumentD,
    ∗
    followingstep. asthesupervisorysignalforeachtask. Themodel
    istrainedtominimizetheloss:
    3.4 Step3: CurriculumLearning
    (cid:20)
    (cid:88)
    TotrainthestudentSeq2Seqlanguagemodelwith = logp(A D;θ )
    concurrent−early ∗ c
    L − |
    theselectedgoldenrationalesforrationalizedtext D∈D
    (cid:21)
    summarization,weintroduceanapproachreminis-
    +logp(T D,A ;θ )+logp(S D,R ;θ ) .
    cent of curriculum learning (Bengio et al., 2009; ∗ | ∗ c gt | ∗ c
    Hacohen and Weinshall, 2019; Nagatsuka et al.,
    UsingtheLLM’soutputasaformofteacherforc-
    2021; Xu et al., 2020), which facilitates learning
    ing(Bengioetal.,2015)allowsthemodeltofocus
    in stages of increasing complexity. This strategy
    onlearningthestructured(aspect-triple-summary)
    consistsofthefollowingphases: (1)Singular-task
    summarizationintheearlystage,withoutitsown
    learning, (2) Concurrent learning, and (3) Joint
    flawedpredictiondistractingit.
    learning. For the first two phases, we focus on
    LateStage: Self-guidedTraining. Aswetransition
    the tasks of aspect extraction, triple extraction,
    tothelaterstages,ourfocuspivotstotrainingthe
    and summary generation, distinguished by pre-
    modelusingitsownpredictionsasinputsforsubse-
    fixtokens AspExt , TriExt ,and SumGen ,
    ⟨ ⟩ ⟨ ⟩ ⟨ ⟩ quenttasks. Thisstrategyischaracterizedbyacas-
    respectively. We use prefix tokens article ,
    ⟨ ⟩ cading training approach: the model begins with
    aspects , triples , summary tospecify
    ⟨ ⟩ ⟨ ⟩ ⟨ ⟩ aspect extraction, progresses to triple extraction,
    D,A,T,andS,respectively.
    andultimatelyleadstosummarygeneration. The
    Singular-task learning Initially, we train the benefitofthisapproachstemsfromitssequential
    model on each task separately, aiding the model information flow, where the outcome of one task
    in developing a baseline understanding and abil- informs the next. However, a challenge emerges
    itytohandleeachtaskindividually. Forinstance, duetothecomputationaloverheadofdecodingin-
    inaspectextraction,weaimtotrainamodelthat termediateresults,suchasaspectsandtriples. To
    minimizestheloss giventhedocumentD: mitigatethis,whilemaintainingthesequentialin-
    A
    L
    tegrity,weemploygreedydecoding. Thismethod
    (cid:88)
    A = logp(A ∗ D;θ s), acceleratestheprocessbyselectingthemostlikely
    L − |
    D∈D token at each step, eliminating the need for full-
    blowngenerationateveryjuncture. Basedonthis,
    where is the training set of documents,
    p(A D)D = (cid:81)m p(a D,A<j),withmthelength thelossbecomes:
    | j=1 j | (cid:20)
    oftheaspectsintherationale,a thej-thtokenof (cid:88)
    j = logp(A D;θ )
    theaspects,andA<j thepreviousgeneratedaspect Lconcurrent−late − ∗ | c
    D∈D
    tokens. Themodelfollowsasimilarprocedurefor (cid:21)
    tripleextractionandsummarygeneration,focusing +logp(T D,A˜;θ )+logp(S D,A˜,T˜;θ ) ,
    ∗ c gt c
    | |
    onminimizinglosses and ,respectively:
    T S
    L L
    (cid:88) whereA˜andT˜ representtheintermediateaspects
    = logp(T D,A ;θ ),
    T ∗ ∗ s andtriplesobtainedgeneratedthroughgreedyde-
    L − |
    D∈D codingbythemodelitself. Theprimaryaimofthis
    (cid:88)
    S = logp(S gt D,A ∗,T ∗;θ s). phaseistwofold: (1)todiminishthemodel’sdepen-
    L − |
    D∈D dencyonLLM-providedrationalesand,(2)toaug-
    mentthemodel’scapabilityforautonomouslearn-
    Concurrent Learning Once the model has be-
    ing,withtheoverarchingaspirationofenablingit
    comeproficientinperformingindividualtasks,we
    togenerateitsownrationalesandsummaries.
    advancetotheconcurrentlearningphasewherethe
    modelsimultaneouslylearnsthetasks. Thisphase Joint Learning In the final phase, we enhance
    allowsfortaskinterplayandreciprocalreinforce- the model’s ability to concurrently generate both
    mentoflearning. Tofacilitateasmoothtransition, therationaleandthesummaryfromagivendocu-
    wefurthersplitthisphaseintoearlyandlatestages. mentwiththerationale-summarygenerationtask.
    Early Stage: LLM-guided Training. In the early Different from the late stage of concurrent learn-
    phase, weuse the aspectsA and triplesT from ing,thisstagestreamlinestheprocessbycollapsing
    ∗ ∗#Samples #Words n = 15,8,8 times for CNNDM, XSum, and
    Dataset Train Valid Test Doc. Sum. { }
    ClinicalTrialrespectively. Thisgeneratesadiverse
    CNN/DailyMail 287,113 13,368 11,490 766.6 54.8
    setofpotentialrationalecandidates. Theparame-
    XSum 204,045 11,332 11,334 414.5 23.0
    ClinicalTrial 163,088 20,386 20,386 181.4 45.2 tersforthegoldenrationaleselectionaresetasfol-
    Table1: Statisticsofdatasets. lows: ϕ α = 0.6,ϕ β = 1.3,andλ cs = 1.5. Weuse
    cosine similarity to calculate the summary score
    threepairsofencode-decodeprocessesintoasin-
    with the embeddings retrieved from text-davinci-
    gle pair. We use the optimal rationale from the
    003 (a GPT-3.5 model that provides embedding).
    LLMandtheground-truthsummaryasthelabels.
    LDA latent topics are specified at 200, 500, and
    We introduce the prefix token RatGen for this
    300forCNNDM,XSum,andClinicalTrialrespec-
    ⟨ ⟩
    task. The model aims to minimize the following
    tively. Forthejointlearningphase,theparameters
    lossfunction:
    arefixedatλ = 0.8andλ = 1.2.
    R S
    (cid:20)
    (cid:88)
    joint = λ Rlogp(R ∗ D;θ r) Training ForbothCNNDMandXSumdatasets,
    L − |
    D∈D we utilize the BART-Large (Lewis et al., 2019)
    (cid:21)
    +λ logp(S D,R˜;θ ) , checkpointsthathavebeenfine-tunedspecifically
    S gt r
    | for these datasets, as the backbone models. In
    the case of ClinicalTrial, we fine-tune the BART-
    where S is the human-annotated ground-truth
    gt Large CNNDM checkpoint using only the sum-
    summaryinthedataset,R˜isthegeneratedrationale
    marytocreateabackbonemodel. Allmodels,in-
    viagreedydecoding,andλ andλ arehyperpa-
    R S cludingthebaselines,undergofine-tuningforthree
    rametersthatbalancetheimportanceofrationale
    epochs,withanearlystoppingmechanisminplace
    andsummarygenerations.
    tooptimizeperformance. Wetrainmodelswithan
    Throughourstrategicallydesignedcurriculum
    NVIDIARTXA6000GPU.
    learning process, the model progressively gains
    the capability to generate accurate and succinct
    Baselines WecompareTriSumtobaselineab-
    rationalesandsummaries.
    stractivesummarization models includingBERT-
    SumAbs (Liu, 2019), T5 (Raffel et al., 2020),
    4 Experiments
    BART (Lewis et al., 2019), PEGASUS (Zhang
    DataSource OurevaluationofTriSum iscar- etal.,2020),GSum(Douetal.,2021),BigBird(Za-
    ried out using three datasets: CNN/Daily Mail heer et al., 2021), SimCLS (Liu and Liu, 2021),
    (CNNDM) v3.0.0 (Nallapati et al., 2016), XSum SeqCo (Xu et al., 2022), GLM (Du et al., 2022),
    (Narayan et al., 1808), and a bespoke dataset we andGPT-3.5.
    havedevelopedfromClinicalTrial1. Thecompre-
    hensive statistics of these datasets can be found Evaluation We use the following metrics: (1)
    inTable1. ToconstructtheClinicalTrialdataset, ROUGE-F1: measurestheoverlapofn-gramsbe-
    we treat the "detailed description" from Clinical tween the generated summary and the reference
    Trialasthedocumentandthe"briefsummary"as summary. WemeasureROUGE-1(R-1),ROUGE-
    itscorrespondingground-truthsummary. Froman 2 (R-2), and ROUGE-L (R-L). (2) BERTScore
    originaltotalof305,591samples,wehaveselected and BARTScore: measure the semantic similar-
    203,860 (with a splitting ratio of 8:1:1), filtering itybetweenthegeneratedsummaryandtherefer-
    outentrieswheredocumentsexceed1,024tokens encesummaryusingpre-trainedlanguagemodels
    orwheresummariessurpass256tokens. RoBERTa Large andBART Large,respectively.
    Model and Parameters For the rationale gen-
    4.1 PerformanceAnalysis
    eration and the summarization process, we em-
    ployGPT-3.5(specifically,thegpt-3.5-turbo2)as Tables2and3provideanin-depthlookathowour
    TriSumapproachperformscomparedtovarious
    the LLM. In the LLM rationale probing phase,
    baselinemodels. TheresultsincludebothROUGE
    we prompt the LLM differently for each dataset:
    scoresandsemanticsimilaritymetricsacrossdif-
    1https://clinicaltrials.gov/
    ferentdatasets,fromgeneralnewssourcestospe-
    2Weusethecheckpointgpt-3.5-turbo-0613,availableat
    cializeddomain-specificcollections. Ouranalysis
    https://platform.openai.com/docs/models/
    gpt-3-5 revealsseveralkeyinsights:CNN/DailyMail XSum ClinicalTrial
    Model R-1 R-2 R-L ∆ R-1 R-2 R-L ∆ R-1 R-2 R-L ∆
    Baselines
    BERTSumAbs(LiuandLapata,2019) 41.2 18.7 37.2 +13.6% 38.8 16.5 31.0 +28.3% 39.2 19.3 29.6 +19.3%
    T5Large(Raffeletal.,2020) 42.4 20.8 39.9 +7.0% 40.1 17.2 32.3 +23.5% 41.3 22.1 32.5 +9.6%
    BARTLarge(Lewisetal.,2019) 44.0 21.1 40.6 +4.4% 45.4 22.3 37.3 +5.4% 43.5 23.3 33.7 +4.6%
    PEGASUS(Zhangetal.,2020) 44.2 21.6 41.3 +3.0% 46.7 24.4 38.9 +0.6% 41.8 22.9 31.7 +9.0%
    GSum(Douetal.,2021) 45.5 22.3 42.1 +0.4% 45.1 21.5 36.6 +7.3% 43.5 23.1 32.8 +5.7%
    BigBird (Zaheeretal.,2021) 43.8 21.1 40.7 +4.5% 47.1 24.1 38.8 +0.6% 44.2 23.8 34.5 +2.5%
    Large
    SimCLS(LiuandLiu,2021) 45.6 21.9 41.0 +1.7% 46.6 24.2 39.1 +0.7% 43.8 23.3 34.1 +3.9%
    SeqCo(Xuetal.,2022) 45.0 21.8 41.8 +1.6% 45.6 22.4 37.0 +5.4% 42.8 22.5 33.2 +6.7%
    GLMRoBERTa(Duetal.,2022) 43.8 21.0 40.5 +4.7% 45.5 23.5 37.3 +4.1% 43.3 23.0 33.9 +4.9%
    GPT-3.5zero-shot 37.4 13.8 29.1 +37.4% 26.6 6.7 18.8 +112.5% 34.8 12.8 23.5 +47.8%
    OurMethod
    GPT-3.5w/TriSumrationale 46.7 23.5 40.7 −0.5% 34.4 12.6 28.4 +46.8% 44.6 24.5 30.4 +5.6%
    TriSum-S 45.9 22.8 42.3 −0.6% 47.4 24.8 39.4 −1.0% 45.3 24.8 35.0 +0.0%
    TriSum-C 45.5 22.3 41.2 +1.2% 46.5 24.0 38.7 +1.1% 44.2 23.7 34.4 +2.7%
    TriSum-J 45.7 22.7 41.9 — 47.3 24.4 39.0 — 45.3 24.6 35.2 —
    Table 2: Performance comparison of ROUGE Scores across CNN/DailyMail, XSum, and ClinicalTrial
    datasets. ThelabelsTriSum-S,TriSum-C,andTriSum-Jsignifymodelcheckpointsattheendofsingular-
    task,concurrent,andjointlearningstages,respectively. ForTriSum-S,distinctoptimalcheckpoints,eachtailored
    for a specific task, are used in a pipeline of three Seq2Seq models. The symbol ∆ signifies the percentage
    improvementintheaggregateROUGEscoresachievedbyTriSum-J.Thetop-3resultsarehighlighted. Our
    backbonemodelBART isshadedforreference.
    Large
    CNN/DailyMail XSum ClinicalTrial theeffectivenessofincludingtheLLM-generated
    Model BS BAS BS BAS BS BAS rationales as the additional supervision and indi-
    Baselines catesthepotentialofourmethodtobescaledfor
    BERTSumAbs 85.76 -3.81 87.23 -3.66 85.41 -3.79
    T5Large 87.22 -3.71 90.73 -2.70 87.76 -2.89 the enhancement of other summarization models
    BARTLarge 87.98 -3.45 91.62 -2.50 88.30 -2.79
    aswell. Notably, TriSum-Sconsistentlyexcels
    PEGASUS 87.37 -3.64 91.90 -2.44 87.62 -2.80
    GSum 87.83 -3.54 91.23 -2.57 88.41 -2.75 in performance. This heightened effectiveness is
    BigBird 88.03 -3.38 91.97 -2.40 89.45 -2.67
    SimCLSLarge 88.28 -3.39 90.78 -2.93 87.85 -3.15 rootedinitsmodulardesign,whichencompasses
    SeqCo 87.47 -3.56 91.35 -2.56 88.06 -2.93
    threecheckpoints,eachoptimizedforauniquetask.
    GLMRoBERTa 87.33 -3.69 91.87 -2.51 88.55 -2.84
    GPT-3.5zero-shot 87.70 -3.36 87.67 -2.80 87.08 -3.01 Therefore,theimprovedresultsmaybeattributed
    OurMethod toitsthrice-enlargedparameterset,whencompared
    GPT-3.5∗ 89.20 -3.14 89.25 -2.58 89.20 -2.55
    TriSum
    TriSum-S 88.48 -3.22 91.95 -2.38 90.05 -2.47 toTriSum-CorTriSum-J.
    TriSum-C 87.21 -3.76 90.88 -2.84 89.40 -2.59
    TriSum-J 88.50 -3.25 92.17 -2.33 89.97 -2.53
    Optimized Rationale for LLM Interestingly,
    Table 3: Pre-trained language model-evaluated se- the rationales generated by TriSum can sig-
    mantic similarity scores. “*” indicate the inference
    nificantly improve the performance of GPT-3.5
    with TriSum-generated rationale. “BS” and “BAS”
    withinthedataset(+40.9%ROUGEScore,+2.0%
    areBERTScoreandBARTScore, respectively. Top-3
    BERTScore,and+9.9%BARTScorecomparedto
    resultsarehighlighted.
    GPT-3.5 ). For example, in our tests with
    zero-shot
    ConsistentEdgeOverBaselines TheTriSum the CNNDM dataset, the LLM, guided by the
    approachconsistentlyoutperformsmanystate-of- TriSum’s rationale and without any fine-tuning,
    the-artmodelsacrossdifferentdatasets,highlight- outperformalltheotherfine-tunedmodelsinterms
    ing its strength and adaptability. Statistically, in of ROUGE-1 score. This suggests that users can
    termsofoverallROUGEscores,TriSum-Jout- usefine-tunedTriSumtoguidetheLLMincreat-
    performs fine-tuned models (excluding GPT-3.5) ingqualitysummaries.
    by 4.5% on CNNDM, 8.5% on XSum, and 7.4%
    EffectofCurriculumLearning Figure4shows
    onClinicalTrial.
    thebenefitsofcurriculumlearningonthemodel’s
    Gains Over Backbone We use BART as the task performance. Two key comparisons are ev-
    backbone model, which is already known for its ident: the raw model versus one trained with
    performance in summarization tasks. The no- singular-tasklearningintheearlyconcurrentlearn-
    ticeable overall improvement across all datasets ing stage, and the raw model versus one trained
    (+4.8% ROUGE score and +1.0% BERTScore, throughtheprevioustwolearningstages. Theabla-
    and+7.3%BARTScore)whenusingtheTriSum tionstudyfurtherrevealsastep-wiseperformance
    approach over BART is significant. This shows improvement. Notably,whentrainedsolelyonjointArticle:
    (CNN) Four workers died in a massive oil rig fire that raged for hours off the coast of Mexico Wednesday. Mexican state oil company Pemex said 45 workers were injuredin the blaze,
    which began early Wednesday morning. Two of them are in serious condition, the company said. Authorities evacuated about 300 peoplefrom the Abkatun Permanente platform after
    the fire started, Pemex said. At least 10 boats worked to battle the blaze for hours. The fire had been extinguishedby Wednesday night, Pemex said in a Twitter post. The company denied
    rumors that the platform had collapsed and said there was no oil spill as a result of the fire. The state oil company hasn't said what caused the fire on the platform, which is located in the
    Gulf of Mexico's Campeche Sound. The fire began in the platform's dehydration and pumping area, Pemex said. CNN's Mayra Cuevas contributed to this report.
    Ground truth summary: TriSum rationale:
    The fire on a platform in the Gulf of Mexico has been extinguished, <rationale> <aspects> Massive oil rig fire off the coast of Mexico. Four workers died. 45 workers
    Pemex says . 45 workers were injuredin the blaze, according to the injured. Two workers in serious condition. 300 people evacuated. Fire extinguished by Wednesday night.
    state oil company . Four workers were killed in the oil rig fire, which No oil spill. <triples> [Four workers | were died in | oil rig fire], [45 workers | were injured in | the blaze],
    started early Wednesday . [Two workers | are in | serious condition], [300 people | were evacuated from | the platform], [The fire |
    had been extinguished by | Wednesday night], [The fire | did not result in | oil spill].
    BART summary:
    About 300 people were evacuatedfrom the Abkatun Permanente TriSum summary:
    platform. The fire began in the platform's dehydration and pumping Four workers were died in an oil rig fire. 45 workers were injured, two of them in a serious condition, state
    area, Pemex says. The company denies rumors that the platform had oil company Pemex says. About 300 people were evacuatedafter the fire started early Wednesday. The fire
    collapsed and said there was no oil spill as a result of the fire. has been extinguished and it did not result in oil spill, the company says.
    Figure3: AnexampleofabstractivesummarizationonCNN/DailyMaildataset. Wecomparethesummary
    generatedbyourTriSumapproachtotheground-truthsummaryandtheonegeneratedbyBART.Weusedifferent
    colorstoshowthedistincttopicsinthearticleandsummary.
    early late
    Singular-task Learning Concurrent Learning Joint Learning
    ssoL
    noitadilaV
    ROUGE-1 ROUGE-2 ROUGE-L
    47 25 43
    46 24
    42
    45 23
    22 41 44
    21
    43 40
    20
    501002005001K3K5K 501002005001K3K5K 501002005001K3K5K
    # LDA Topics # LDA Topics # LDA Topics
    Figure5: PerformancebydifferentnumbersofLDA
    phase
    0 1 2 3 latenttopicsspecifiedingoldenrationaleselection.
    Singular Concurrent Concurrent Joint R-1 R-2 R-L WecomparetheROUGEscoresofthesummariesgen-
    -Early -Late
    ✓ ✓ ✓ ✓ 45.7 22.7 41.9 eratedbyTriSum-RonCNN/DailyMaildataset.
    ✓ ✓ ✕ ✓ 45.3 (↓0.4) 22.2 (↓0.5) 41.0 (↓0.9)
    ✓ ✕ ✕ ✓ 44.4 (↓1.3) 21.3 (↓1.4) 40.4 (↓1.5)
    ✕ ✕ ✕ ✓ 42.3 (↓3.4) 20.5 (↓2.2) 38.4 (↓3.5) termathintermsoffatalities,injuries,andcontain-
    Figure 4: Validation loss by training steps and ab- ment. BART’srendition,whiledetailedaboutthe
    lation study for curriculum learning on CNN/Dai- evacuationandfire’sorigin,missesoutonpivotal
    lyMail. AspExt, TriExt, and SumGen denote aspect informationlikethedeathtollandinjuryscale. On
    extraction, triple extraction, and summary generation theotherhand,TriSum’srationalebeginsbyitem-
    tasks, respectively. -early/-late denote the early/late
    izing the essential aspects of the incident. These
    stageofconcurrentlearning. -rawdenotestrainingthe
    aspectspresentahigh-leveloverviewoftheevents
    modelfromscratch.
    and their aftermath. Following these aspects, the
    tripleszoomintothespecifics,elucidatingtherela-
    learningfromscratch,themodelunderperformsthe
    tionsbetweentheentitiesinvolved. Thistechnique
    originalBART.Thisemphasizestheindispensable
    used by TriSum ensures a comprehensive sum-
    role of foundational tasks, without which BART
    maryandimprovesclarity. Readerscanfollowthe
    struggleswiththerationale-summarygeneration.
    summary’s content back to its main aspects and
    EffectofGoldenRationaleSelection Figure5 detailedtriples,gainingadeeperunderstandingof
    demonstrates the impact of our golden rationale howthesummarizationprocessworks. Thistrans-
    selection. The performance of the trained model parencyisakeyfeatureofTriSum,allowingusers
    dropssignificantlywhenthenumberoflatenttopics tograspthereasoningbehindthesummarizedcon-
    iseithertoolow(e.g.,50)orhigh(e.g.,5000). On tent. WeprovidemoreexamplesintheAppendix.
    the other hand, choosing an appropriate number
    of topics (e.g., 200) leads to improved outcomes. 5 Conclusion
    Thisunderscorestheimportanceofthequalityof
    WeintroducedTriSum,anapproachaimedatdis-
    rationales; poor-quality rationales can negatively
    tillingsummarizationcapabilitiesfromalargelan-
    impact the model, emphasizing the value of our
    guage model to a small local model. Extensive
    rationaleselectionstrategy.
    experimentsverifieditssuperiorperformanceover
    Case Study Figure 3 compares summaries cre- state-of-the-artmodelsacrossdiversedatasetson
    atedfromaCNNarticlediscussinganoilrigfire theabstractivesummarizationtask. Ourworkhigh-
    in Mexico. The ground truth summary adeptly lights the potential of leveraging large model in-
    encapsulatesthemainevents,emphasizingtheaf- sightsforefficientandnuancedtextsummarization.References Dublin,Ireland.AssociationforComputationalLin-
    guistics.
    SiqiBao,HuangHe,FanWang,HuaWu,HaifengWang,
    WenquanWu,ZhenGuo,ZhibinLiu,andXinchao ZorikGekhman,JonathanHerzig,RoeeAharoni,Chen
    Xu. 2021. PLATO-2: Towards building an open- Elkind,andIdanSzpektor.2023. Trueteacher:Learn-
    domain chatbot via curriculum learning. In Find- ing factual consistency evaluation with large lan-
    ingsoftheAssociationforComputationalLinguis- guagemodels.
    tics: ACL-IJCNLP2021,pages2513–2525,Online.
    AssociationforComputationalLinguistics. Guy Hacohen and Daphna Weinshall. 2019. On the
    power of curriculum learning in training deep net-
    SamyBengio,OriolVinyals,NavdeepJaitly,andNoam works. InInternationalconferenceonmachinelearn-
    Shazeer. 2015. Scheduled sampling for sequence ing,pages2535–2544.PMLR.
    predictionwithrecurrentneuralnetworks. Advances
    inneuralinformationprocessingsystems,28. Geoffrey Hinton, Oriol Vinyals, and Jeff Dean. 2015.
    Distillingtheknowledgeinaneuralnetwork. arXiv
    Yoshua Bengio, Jérôme Louradour, Ronan Collobert, preprintarXiv:1503.02531.
    and Jason Weston. 2009. Curriculum learning. In
    Proceedingsofthe26thannualinternationalconfer- NamgyuHo,LauraSchmid,andSe-YoungYun.2023.
    enceonmachinelearning,pages41–48. Largelanguagemodelsarereasoningteachers.
    David M Blei, Andrew Y Ng, and Michael I Jordan. Cheng-Yu Hsieh, Chun-Liang Li, Chih-Kuan Yeh,
    2003. Latentdirichletallocation. Journalofmachine HootanNakhost,YasuhisaFujii,AlexanderRatner,
    Learningresearch,3(Jan):993–1022. Ranjay Krishna, Chen-Yu Lee, and Tomas Pfister.
    2023. Distillingstep-by-step! outperforminglarger
    ThorstenBrants,AshokCPopat,PengXu,FranzJOch, languagemodelswithlesstrainingdataandsmaller
    andJeffreyDean.2007. Largelanguagemodelsin modelsizes.
    machinetranslation.
    XiaoqiJiao,YichunYin,LifengShang,XinJiang,Xiao
    Tom Brown, Benjamin Mann, Nick Ryder, Melanie Chen, Linlin Li, Fang Wang, and Qun Liu. 2019.
    Subbiah,JaredDKaplan,PrafullaDhariwal,Arvind Tinybert: Distillingbertfornaturallanguageunder-
    Neelakantan,PranavShyam,GirishSastry,Amanda standing. arXivpreprintarXiv:1909.10351.
    Askell,etal.2020. Languagemodelsarefew-shot
    learners. Advancesinneuralinformationprocessing Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
    systems,33:1877–1901. Ghazvininejad,AbdelrahmanMohamed,OmerLevy,
    VesStoyanov,andLukeZettlemoyer.2019. Bart:De-
    Yen-Chun Chen, Zhe Gan, Yu Cheng, Jingzhou Liu, noisingsequence-to-sequencepre-trainingfornatural
    and Jingjing Liu. 2019. Distilling knowledge languagegeneration,translation,andcomprehension.
    learned in bert for text generation. arXiv preprint arXivpreprintarXiv:1910.13461.
    arXiv:1911.03829.
    Ying-JiaLin,DanielTan,Tzu-HsuanChou,Hung-Yu
    AakankshaChowdhery,SharanNarang,JacobDevlin, Kao, and Hsin-Yang Wang. 2020. Knowledge dis-
    Maarten Bosma, Gaurav Mishra, Adam Roberts, tillationonextractivesummarization. In2020IEEE
    Paul Barham, Hyung Won Chung, Charles Sutton, ThirdInternationalConferenceonArtificialIntelli-
    Sebastian Gehrmann, et al. 2022. Palm: Scaling gence and Knowledge Engineering (AIKE), pages
    language modeling with pathways. arXiv preprint 71–76.IEEE.
    arXiv:2204.02311.
    Yang Liu. 2019. Text summarization with pretrained
    Finale Doshi-Velez and Been Kim. 2017. Towards a encoders. InProceedingsofthe2019Conferenceon
    rigorous science of interpretable machine learning. EmpiricalMethodsinNaturalLanguageProcessing
    arXivpreprintarXiv:1702.08608. andthe9thInternationalJointConferenceonNatu-
    ralLanguageProcessing(EMNLP-IJCNLP),pages
    Zi-Yi Dou, Pengfei Liu, Hiroaki Hayashi, Zhengbao
    3730–3740,HongKong,China.AssociationforCom-
    Jiang, and Graham Neubig. 2021. GSum: A gen-
    putationalLinguistics.
    eralframeworkforguidedneuralabstractivesumma-
    rization. InProceedingsofthe2021Conferenceof Yang Liu and Mirella Lapata. 2019. Text summa-
    theNorthAmericanChapteroftheAssociationfor rization with pretrained encoders. arXiv preprint
    ComputationalLinguistics: HumanLanguageTech- arXiv:1908.08345.
    nologies,pages4830–4842,Online.Associationfor
    ComputationalLinguistics. YixinLiu,AlexanderRFabbri,PengfeiLiu,Dragomir
    Radev, and Arman Cohan. 2023. On learning to
    Zhengxiao Du, Yujie Qian, Xiao Liu, Ming Ding, summarizewithlargelanguagemodelsasreferences.
    JiezhongQiu,ZhilinYang,andJieTang.2022. GLM: arXivpreprintarXiv:2305.14239.
    Generallanguagemodelpretrainingwithautoregres-
    siveblankinfilling. InProceedingsofthe60thAn- Yixin Liu and Pengfei Liu. 2021. SimCLS: A sim-
    nualMeetingoftheAssociationforComputational pleframeworkforcontrastivelearningofabstractive
    Linguistics(Volume1:LongPapers),pages320–335, summarization. InProceedingsofthe59thAnnualMeeting of the Association for Computational Lin- SamShleiferandAlexanderM.Rush.2020. Pre-trained
    guisticsandthe11thInternationalJointConference summarizationdistillation.
    onNaturalLanguageProcessing(Volume2: Short
    Papers),pages1065–1072,Online.Associationfor Kumar Shridhar, Alessandro Stolfo, and Mrinmaya
    ComputationalLinguistics. Sachan.2023. Distillingreasoningcapabilitiesinto
    smallerlanguagemodels.
    YixinLiu,PengfeiLiu,DragomirRadev,andGraham
    Neubig.2022. BRIO:Bringingordertoabstractive EmmaStrubell,AnanyaGanesh,andAndrewMcCal-
    summarization. InProceedingsofthe60thAnnual lum. 2019. Energy and policy considerations for
    Meeting of the Association for Computational Lin- deep learning in NLP. In Proceedings of the 57th
    guistics(Volume1: LongPapers),pages2890–2903, AnnualMeetingoftheAssociationforComputational
    Dublin,Ireland.AssociationforComputationalLin-
    Linguistics,pages3645–3650,Florence,Italy.Asso-
    guistics. ciationforComputationalLinguistics.
    Lucie Charlotte Magister, Jonathan Mallinson, Jakub Raphael Tang, Yao Lu, Linqing Liu, Lili Mou, Olga
    Adamek, Eric Malmi, and Aliaksei Severyn. 2023. Vechtomova,andJimmyLin.2019. Distillingtask-
    Teachingsmalllanguagemodelstoreason. specificknowledgefrombertintosimpleneuralnet-
    works. arXivpreprintarXiv:1903.12136.
    Sewon Min, Kalpesh Krishna, Xinxi Lyu, Mike
    Lewis, Wen tau Yih, Pang Wei Koh, Mohit Iyyer, HugoTouvron,ThibautLavril,GautierIzacard,Xavier
    Luke Zettlemoyer, and Hannaneh Hajishirzi. 2023. Martinet,Marie-AnneLachaux,TimothéeLacroix,
    Factscore: Fine-grainedatomicevaluationoffactual Baptiste Rozière, Naman Goyal, Eric Hambro,
    precisioninlongformtextgeneration. Faisal Azhar, et al. 2023. Llama: Open and effi-
    cient foundation language models. arXiv preprint
    Koichi Nagatsuka, Clifford Broni-Bediako, and arXiv:2302.13971.
    MasayasuAtsumi.2021. Pre-trainingaBERTwith
    curriculumlearningbyincreasingblock-sizeofinput Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob
    text. InProceedingsoftheInternationalConference Uszkoreit, Llion Jones, Aidan N Gomez, Ł ukasz
    onRecentAdvancesinNaturalLanguageProcess- Kaiser, and Illia Polosukhin. 2017a. Attention is
    ing (RANLP 2021), pages 989–996, Held Online. all you need. In Advances in Neural Information
    INCOMALtd.
    ProcessingSystems,volume30.CurranAssociates,
    Inc.
    RameshNallapati,BowenZhou,CaglarGulcehre,Bing
    Xiang,etal.2016. Abstractivetextsummarization Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob
    usingsequence-to-sequencernnsandbeyond. arXiv Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz
    preprintarXiv:1602.06023. Kaiser,andIlliaPolosukhin.2017b. Attentionisall
    youneed. Advancesinneuralinformationprocessing
    Shashi Narayan, Shay B Cohen, and Mirella Lapata. systems,30.
    1808. Don’tgivemethedetails,justthesummary!
    Topic-AwareConvolutionalNeuralNetworksforEx- PeifengWang,AaronChan,FilipIlievski,MuhaoChen,
    tremeSummarization.ArXiv,abs. andXiangRen.2022. Pinto: Faithfullanguagerea-
    soning using prompt-generated rationales. arXiv
    OpenAI.2023. Gpt-4technicalreport. preprintarXiv:2211.01562.
    DragomirR.Radev,EduardHovy,andKathleenMcKe- ShuohangWang, YangLiu, YichongXu, Chenguang
    own.2002. Introductiontothespecialissueonsum- Zhu, and Michael Zeng. 2021. Want to reduce la-
    marization. ComputationalLinguistics,28(4):399– beling cost? GPT-3 can help. In Findings of the
    408. AssociationforComputationalLinguistics: EMNLP
    2021,pages4195–4205,PuntaCana,DominicanRe-
    ColinRaffel,NoamShazeer,AdamRoberts,Katherine public.AssociationforComputationalLinguistics.
    Lee,SharanNarang,MichaelMatena,YanqiZhou,
    WeiLi,andPeterJLiu.2020. Exploringthelimits ZifengWang,ChufanGao,CaoXiao,andJimengSun.
    oftransferlearningwithaunifiedtext-to-texttrans- 2023. AnyPredict: Foundation model for tabular
    former. TheJournalofMachineLearningResearch, prediction. arXivpreprintarXiv:2305.12081.
    21(1):5485–5551.
    JasonWei,XuezhiWang,DaleSchuurmans,Maarten
    Marco Tulio Ribeiro, Sameer Singh, and Carlos Bosma,BrianIchter,FeiXia,EdChi,QuocLe,and
    Guestrin.2016. "whyshoulditrustyou?"explaining DennyZhou.2023. Chain-of-thoughtpromptingelic-
    thepredictionsofanyclassifier. InProceedingsof itsreasoninginlargelanguagemodels.
    the22ndACMSIGKDDinternationalconferenceon
    knowledgediscoveryanddatamining,pages1135– Benfeng Xu, Licheng Zhang, Zhendong Mao, Quan
    1144. Wang, Hongtao Xie, and Yongdong Zhang. 2020.
    Curriculumlearningfornaturallanguageunderstand-
    Victor Sanh, Lysandre Debut, Julien Chaumond, and ing. InProceedingsofthe58thAnnualMeetingof
    Thomas Wolf. 2019. Distilbert, a distilled version theAssociationforComputationalLinguistics,pages
    of bert: smaller, faster, cheaper and lighter. arXiv 6095–6104,Online.AssociationforComputational
    preprintarXiv:1910.01108. Linguistics.ShushengXu,XingxingZhang,YiWu,andFuruWei.
    2022. Sequence level contrastive learning for text
    summarization.
    WeiYang,YuqingXie,AileenLin,XingyuLi,Luchen
    Tan, Kun Xiong, Ming Li, and Jimmy Lin. 2019.
    End-to-end open-domain question answering with
    BERTserini. In Proceedings of the 2019 Confer-
    enceoftheNorthAmericanChapteroftheAssocia-
    tionforComputationalLinguistics(Demonstrations),
    pages72–77,Minneapolis,Minnesota.Association
    forComputationalLinguistics.
    XianjunYang,YanLi,XinluZhang,HaifengChen,and
    WeiCheng.2023. Exploringthelimitsofchatgptfor
    queryoraspect-basedtextsummarization.
    Weihao Yu, Zihang Jiang, Yanfei Dong, and Jiashi
    Feng. 2020. Reclor: A reading comprehension
    datasetrequiringlogicalreasoning. arXivpreprint
    arXiv:2002.04326.
    Manzil Zaheer, Guru Guruganesh, Avinava Dubey,
    Joshua Ainslie, Chris Alberti, Santiago Ontanon,
    PhilipPham,AnirudhRavula,QifanWang,LiYang,
    andAmrAhmed.2021. Bigbird: Transformersfor
    longersequences.
    Omar Zaidan and Jason Eisner. 2008. Modeling an-
    notators: A generative approach to learning from
    annotatorrationales. InProceedingsofthe2008con-
    ferenceonEmpiricalmethodsinnaturallanguage
    processing,pages31–40.
    JingqingZhang,YaoZhao,MohammadSaleh,andPe-
    terLiu.2020. Pegasus: Pre-trainingwithextracted
    gap-sentencesforabstractivesummarization. InIn-
    ternationalConferenceonMachineLearning,pages
    11328–11339.PMLR.
    ShengqiangZhang,XingxingZhang,HangboBao,and
    Furu Wei. 2022. Attention temperature matters in
    abstractivesummarizationdistillation. InProceed-
    ingsofthe60thAnnualMeetingoftheAssociation
    forComputationalLinguistics(Volume1: LongPa-
    pers),pages127–141,Dublin,Ireland.Association
    forComputationalLinguistics.A Ethics,Limitations,andRisks
    Given a document and its ground-truth summary, do
    the following tasks:
    A.1 Ethics
    (1) According to the ground-truth summary, extract
    essential aspects of the document.
    Data Privacy and Source: All datasets used in (2) For each essential aspect, retrieve detailed
    triples in the format [ENTITY1 | RELATION |
    thisresearch,namelyCNN/DailyMail,XSum,and
    ENTITY2] used to compose the ground-truth summary.
    ClinicalTrial,arepubliclyavailable345. Thistrans- (3) With the retrieved triples, compose a summary.
    parencyminimizesethicalconcernsrelatedtodata The essential aspects, triples, and composed
    summary should be in the same response, separated
    sourcingandusage. by a new line.
    Interpretability: The transparency and inter-
    All triples [ENTITY1 | RELATION | ENTITY2] should
    pretability of AI models are ethical imperatives be in length 3 (separated by "|").
    inmanyapplications. TriSumnotonlyimproves Example:
    ================Example=================
    summarizationperformancebutalsoenhancesthe Prompt:
    [Document]: [document]
    interpretabilityofthesummarizationprocess,mak-
    [Ground-truth Summary]: [ground-truth summary]
    ingitmoretrustworthy.
    Update:
    Essential Aspects:
    A.2 Limitations [aspects]
    Triples:
    DependenceonLLMs: TriSum’seffectiveness
    - [ENTITY1_1 | RELATION_1 | ENTITY1_2]
    iscontingentonthequalityandcapabilitiesofthe - [ENTITY2_1 | RELATION_2 | ENTITY2_2]
    - [ENTITY3_1 | RELATION_3 | ENTITY3_2]
    LLMs it distills from. If the LLM has biases or - ...
    inaccuracies,thesecouldpotentiallybetransferred Generated Summary:
    [summary]
    tothelocalmodel.
    ========================================
    ScopeofRationales: Theaspect-triplerationales,
    Prompt:
    whileenhancinginterpretability,mightnotcapture [Document]: {doc}
    [Ground-truth Summary]: {gt_summary}
    allnuancesoftheoriginaltext. Someinformation
    Update:
    mightbelostoroversimplifiedduringthedistilla-
    tionprocess.
    Figure 6: Template used for prompting rationale and
    summaryfromLLM
    A.3 Risks
    Overfitting: There’s a potential risk that the lo-
    calmodelmightoverfittotherationalesandsum- Given a document, summarize the document in
    mariesderivedfromtheLLM,leadingtoreduced one sentence: for XSum
    generalizationonunseendata. Given a document, summarize the document in
    three sentence: for CNNDM & ClinicalTrial
    Misinterpretation: Enhancedinterpretabilitycan
    sometimes lead users to place undue trust in the Document: {doc}
    model’s outputs. Users should be cautious and Summary:
    considerthemodel’soutputsasoneofmanytools
    indecision-makingprocesses. Figure7: Templateusedforpromptingsummaryfrom
    Ethical Misuse: Like all summarization tools, LLMinzero-shotsetting.
    there’sariskthatusersmightmisuseTriSum to
    misrepresentcomplexinformation,leadingtomis- to (1) generate essential aspects of the document
    information. withrespecttotheground-truthsummary;(2)ex-
    tract triples from the document that elaborate on
    B TemplatesUsedforPromptingLLM
    thesekeyaspects;(3)generateasummaryreferring
    to both the retrieved triples and the ground-truth
    Inthissection,weshowcasethetemplatesweused
    summary. ThetemplatetheninstructstheLLMto
    forpromptingthelargelanguagemodelfordiffer-
    generateinaspecificformat,toreducetherandom-
    entpurposes.
    nessoftheLLM’soutput. Thedocumentandthe
    Figure 6 shows the template we use for Step 1
    ground-truthsummaryareinputtotheplaceholders
    (LLM Rationale Probing). It instructs the LLM
    tofinalizethepromptingrequest.
    3https://github.com/abisee/
    Figures7and8showthetemplatesweusefortest-
    cnn-dailymail
    4https://github.com/EdinburghNLP/XSum ingtheLLM’ssummarizationabilityinazero-shot
    5https://clinicaltrials.gov/ settingandwithTriSum-generatedrationales,re-• Usage: Duetoitssubstantialsizeandreal-world
    Given a document and the rationale for
    data,CNN/DailyMailhasbeenabenchmarkfor
    summarization, summarize the document in one
    sentence. several state-of-the-art summarization models,
    The rationale contains (1) the essential enabling researchers to compare performances
    aspects of the document; (2) triples of andstrategiesacrossdiversemethods.
    entities and relations in the document that
    compose the summary, in the format of
    [ENTITY1 | RELATION | ENTITY2].
    XSum XSum (Extreme Summarization) dataset
    We use the prefixs <aspects> and <triples> to
    indicate the start of the rationale for providesamorechallengingscenarioforabstrac-
    aspects and triples, respectively.
    tivesummarization. Theoverviewofthisdatasetis
    The generated summary should not longer than describedasfollows:
    one sentence. for XSum
    The generated summary should not longer than
    • Size: It contains 204,045 training examples,
    three sentence. for CNNDM & ClinicalTrial
    11,332validationexamples,and11,334testex-
    Example:
    ================Example================= amples,whicharethearticlescollectedfromthe
    Prompt: BBC(BritishBroadcastingCorporation).
    [Document]: [document]
    [Rationale]: <aspects> + [aspects] +
    <triples> + [triples]
    • Content: Unlike CNN/DailyMail where sum-
    Update: mariesareconstructedfromhighlights,eacharti-
    Summary:
    [summary] cleintheXSumdatasetispairedwithasingle-
    sentencesummary,oftenwritteninastylethatis
    ========================================
    notpresentinthearticlebody.
    Prompt:
    [Document]: {doc}
    [Rationale]: {aspects} {triples} • NatureofSummaries: ThesummariesinXSum
    Update: are more abstractive in nature and are not sim-
    plyextractivesnippetsfromthearticles. Thisde-
    Figure 8: Template used for prompting sum- mandsmodelstotrulyunderstandthecontentand
    mary from LLM given TriSum-generated rationale generateauniquesummarizingsentence,making
    (GPT-3.5 TriSum). it a challenging dataset for abstractive summa-
    rization.
    spectively.
    • Usage: XSum’s distinctive nature has made it
    C DatasetDescription
    a preferred choice for researchers focusing on
    CNN/DailyMail The CNN/DailyMail dataset is advancedabstractivemethodsinsummarization.
    oneofthemostpopulardatasetsforextractiveand Itssummaries, beingcreativelycraftedandnot
    abstractivesummarizationtasks. Originatingfrom directlyextractedfromthetext,testthegenuine
    onlinenewsstories,thedatasetcomprisesarticles abstractingcapabilitiesofmodels.
    fromCNNandDailyMailwebsites. Theoverview
    ofthisdatasetisdescribedasfollows: ClinicalTrialWecollectedtheclinicaltrialproto-
    coldocumentsfromclinicaltrials.govwherethere
    • Size: It contains 287,113 training examples,
    areover400Kregisteredclinicaltrialsacrossthe
    13,368validationexamples,and11,490testex-
    world. Theoverviewofthisdatasetisdescribedas
    amples.
    follows:
    • Content: Each example in the dataset consists
    • Size: Wedownloadedthestaticcopyofthewhole
    ofanewsarticleandseveralaccompanyinghigh-
    clinicaltrialdatabasewhichiswitharound460K
    lightpoints,which,whencombined,formaco-
    clinicaltrialdocuments. 203,860wereselected
    herentsummaryofthemainarticle.
    outofallbasedonthestandard(a)theyareinter-
    • NatureofSummaries: Thehighlights,crafted ventionalclinicaltrials,(b)missingorduplicate
    to engage a reader’s attention, effectively form titles,(c)missingthebriefsummarysection. To
    summaries. Typically,asummaryconsistsof2 fitthecontextwindowofusedlanguagemodels,
    to 3 sentences. They can be approached either we further exclude documents that have more
    extractively or abstractively by summarization than 1024 tokens or the target summaries are
    models. withmorethan256tokens.• Content: Theclinicaltrialdocumentdescribes
    theproposalfortestingtheeffectivenessandthe
    safety of a new treatment, e.g., a drug. The re-
    searchers need to list all the main elements re-
    quiredforFDAregulation,suchasthetitle,pro-
    posed treatment, target condition, primary out-
    comemeasurements,eligibilitycriteria,etc.
    • NatureofSummaries: Aneffectivesummaryof
    clinicaltrialsneedtodeliverthemainmessage
    aboutthemotivationofthestudyaswellasthe
    route planning to reach the target. To make a
    goodsummaryofclinicaltrials,themodelneeds
    acomprehensiveviewof thewholedocuments
    andmaintainthekeyinformation.
    • Usage: We will use the “brief summary" sec-
    tion written by human experts provided in the
    rawclinicaltrialdocumentsasthetargetforall
    models.
    D InterpretabilityofTriSum
    Document
    ____________________________________
    ____________________________________
    ____________________________________
    ____________________________________
    Aspect Extraction
    Essential Aspects
    Triple Extraction
    Detailed Triples
    head relation tail head relation tail head relation tail
    Summary
    ________________________________
    ________________________________
    elanoitaR
    of TriSum, illustrated in Figure 9, is designed
    withthistransparencyinmind.
    Startingwithagivendocument,TriSumiden-
    tifies its essential aspects. This step offers a
    clear insight into what the model perceives as
    the primary themes or topics within the docu-
    ment. Subsequently,usingtheseaspectsasanchors,
    TriSumrevisitsthedocumenttometiculouslyex-
    tract triples, structured as head | relation | tail ,
    ⟨ ⟩ foreachaspect. Thesetriplesprovideastructured,
    detailedrepresentation,offeringgranularinsights
    intothemodel’sunderstandingoftherelationships
    and entities in the text. Finally, TriSum fuses
    these extracted aspects and triples to produce a
    summary. Bycorrelatingthefinalsummarywith
    thepreviouslyidentifiedaspectsandtriples,users
    can trace back the origins of particular summary
    fragments, gaining a clear understanding of how
    TriSumprocessesandabstractsinformation.
    Thisstep-by-stepelucidationofthesummariza-
    tion process significantly enhances the model’s
    transparency,makingitsdecision-makingrationale
    morediscernibleandhencefosteringtrustamong
    itsusers.
    E HyperparameterTuning
    Hyperparameter Values
    GoldenRationaleSelection
    ϕα {0.2,0.4,0.6,0.8,1.0,1.2}
    ϕβ {0.4,0.6,0.8,1.0,1.3,1.5,2.0}
    λcs {0.5,1.0,1.5,2.0}
    LDAlatenttopics {50,100,200,300,500,1000,3000,5000}
    RationaleLearning
    (λR,λS) {(1.0,1.0),(0.8,1.2),(0.5,1.5),(0.3,1.7)}
    Table4: HyperparametersofTriSumwetuned. We
    highlighttheoptimalonesbasedonourexperimentsin
    bold.
    Table4showsourcomprehensivehyperparame-
    terstudytoselecttheoptimalvaluesforTriSum.
    Summary Generation F CaseStudies
    InadditiontoFigure3,Figure10showsothertwo
    examplescomparingourTriSum’sperformance
    with our backbone model BART on XSum and
    Figure9: AbstractivesummarizationwithTriSum. ClinicalTrialdatasets. Wecandrawthefollowing
    Differentcolorsindicatedifferentessentialaspectscov-
    findings:
    ered by the document. We showcase how an aspect-
    triplerationaleisextractedandcontributetothefinal
    F.1 CaseStudyonXSum
    summarygeneration.
    In the given example, we juxtapose the perfor-
    Interpretabilityisparamountinunderstandingand manceofourapproach,TriSum,withBART,our
    trustingAIsystems,especiallyintaskslikeabstrac- backbone model. Upon scrutinizing the sourced
    tivesummarizationwherethederivationofconclu- articledetailingaresearchstudyonjobdiscrimina-
    sionsisn’talwaysovertlyapparent. Theworkflow tionagainstwomenwithTurkishnamesandthoseArticle:
    A university researcher sent 1,500 identical CVs to German firms -except that some bore the name MeryemOzturk and others the name Sandra Bauer. In 18.8% of cases Sandra
    Bauer was invited for interview, whereas the figure for Meryemwas just 13.5%. When the photo of Meryemshowed her in a headscarf only 4.2% invited her. The study was published
    by the Institute for the Study of Labour, in Bonn. The researcher was Doris Weichselbaumerfrom the University of Linz, in Austria. The findings are especially significant in light of
    Germany's current efforts to integrate record numbers of Muslim migrants, many of them refugees from the conflicts in Syria, Iraq and Afghanistan. More than a million asylum
    seekers reached Germany last year, and there has been a backlash from nationalist groups, especially Pegidaand Alternative for Germany (AfD). With an estimated three million
    people of Turkish origin, Germany is home to the largest Turkish diaspora. In her study, MsWeichselbaumersaid that "a very modern binding of the headscarf was chosen to signal
    that the applicant was a young, modern woman who could easily fit into a secular environment". It is normal in Germany to attacha photo to a job application, she pointed out. The
    result of the experiment "implies that the candidate with the headscarf had to send 4.5 times as many applications as an identical applicant with a German name and no headscarf to
    receive the same number of callbacks for interview", she said.…
    Ground truth summary: TriSumrationale:
    An experiment in Germany has found evidence of job discrimination <rationale> <aspects> Job discrimination against women with Turkish names in Germany. Job
    against women with Turkish names -and even more if they wear an discrimination against women wearing an Islamic headscarf in Germany. <triples> [women with
    Islamic headscarf. Turkish names | face discrimination in | job applications in Germany], [women wearing an Islamic
    headscarf | face even more discrimination in | job applications in Germany].
    BART summary: TriSumsummary:
    Women who apply for jobs in Germany wearing headscarves are Women with Turkish names in Germany face discrimination in job applications, and this
    much less likely to be invited for interview, a study suggests. discrimination is intensified for women wearing an Islamic headscarf.
    Article:
    Common indications for adult tonsillectomy include tonsillar hypertrophy, obstructive sleep apnea, and chronic tonsillitis. Although there are many studies looking into how best to
    prevent and treat post-operative pain and nausea, there are very few that give recommendations to the patients pre-operatively. This study's aim is to evaluate if pre-operative oral
    hydration has an impact in reducing post-operative pain, nausea and vomiting after adult tonsillectomies. If pre-operative hydration can reduce the pain associated with the procedure,
    then this could also be an adjunct to help reduce the amount of narcotic pain medication that is required.~Thegoal of this study is to evaluate if the amount of pre-operative oral
    hydration can reduce the amount of pain and nausea/vomiting in patients undergoing adult tonsillectomies. This study will be measuring post-operative pain and nausea scores at
    several points after the adult tonsillectomy procedure for participants that have consumed different amounts of clear fluid in the 24 hours leading up to their nothing by mouth (NPO)
    status. Participants will be randomized to one of three categories of preoperative fluid: 0.5 -1.5 Liters (L), 1.5 -3 L, and 3 -4.5 L, which will correlate to the low, medium and high fluid
    intake groups, respectively. Participants will be given a 1000 mL measuring water bottle that they can use to accurately record their fluid consumption inthe 24 hours prior to their
    pre-operative NPO status. The fluid consumption that they record will include all liquids (i.e., water, flavored water, juice, coffee, tea, soda, milk, alcohol). They will be asked to keep a
    record of the volume of caffeinated beverage versus un-caffeinated beverages.~Aftersurgery the participants will be given a form to record their pain and nausea scores. Participants
    will record their pain and nausea by using two separate 10-point scales at 7 different points after the procedure. These scores will be measured immediately after surgery, and at 4
    hours, 8 hours, 24 hours, 72 hours, 5 days and 7 days postoperative. This form, along with a count of opioid medication used, will be retuned to the physician at the first post-operative
    follow-up visit.
    Ground truth summary: TriSumrationale:
    Tonsillectomy is commonly described as one of the most painful procedures that <rationale> <aspects> Purpose of the study. Concern about tonsillectomy pain. Role of pre-
    an adult can undergo. This study's aim is to evaluate if pre-operative oral operative oral hydration. Randomization of participants into fluid intake groups. Recording of
    hydration has an impact in reducing post-operative pain, nausea and vomiting, fluid intake prior to surgery. Post-operative recording of pain and nausea. Recording of opioid
    and opioid medication use after adult tonsillectomies. Participants will be medication use. <triples> [Study | aims to| evaluate impact of pre-operative hydration on post-
    randomized to a low, medium and high fluid intake groups and will record fluid operative outcomes], [Tonsillectomy | is described as| painful procedure for adults], [Participants
    intake on the day before surgery. After surgery, participants will record their | will be randomized to | fluid intake groups: low, medium, high], [Participants | will record |
    pain and nausea at timepoints up to 7 days post-operative.Medication use will fluid intake before surgery], [Participants | will record | pain and nausea post-operatively],
    be recorded up to the first post-operative follow-up visit with their physician. [Participants | will record | opioid medication use until first follow-up].
    TriSumsummary:
    This study focuses on the possible influence of pre-operative oral hydration on post-operative
    pain, nausea, vomiting, and the use of opioid medication. Individuals taking part in the study will
    BART summary: be divided into low, medium, and high fluid intake categories. On the day before their procedure,
    The goal of this study is to evaluate if the amount of pre-operative oral they will note down their fluid consumption. After undergoing the tonsillectomy, these
    hydration can reduce the amount of pain and nausea/vomiting in patients participants will monitor and record their pain, nausea for up to seven days, and alsotheir opioid
    undergoing adult tonsillectomies. medication intake until their initial post-operative check-up with the doctor.
    Figure10: ExamplesofabstractivesummarizationonXSum(above)andClinicalTrial(below)datasets. We
    comparethesummarygeneratedbyourTriSumapproachtotheground-truthsummaryandtheonegeneratedby
    BART.Weusedifferentcolorstoshowthedistincttopicsinthearticleandsummary.
    wearingIslamicheadscarvesinGermany,wedis- informationissidestepped.
    cerndistinctnuancesinthesummariesrenderedby Moreover,TriSum’ssummarydoesn’tmerely
    bothmethods. reportthefindingsbutemphasizestheintensifica-
    BART’s summary encapsulates a broad under- tionofdiscriminationwhenbothfactors-aTurk-
    standing, highlighting that women wearing head- ishnameandanIslamicheadscarf-arecombined.
    scarves in Germany are at a disadvantage during Suchalayeredinsightisinvaluable,especiallyin
    jobapplications. Whileitsuccessfullyconveysa sensitive subjects such as discrimination, where
    salient point, it omits the specific discrimination capturingtheentirescopeoftheissueiscrucial.
    againstwomenwithTurkishnames. In essence, while BART gives a generalized
    overview, TriSum offers a richer, more compre-
    TriSum, on the other hand, demonstrates its
    hensivenarrativethatmirrorsthedepthandbreadth
    prowessthroughamoreholistic,nuanced,andde-
    oftheoriginalarticle,underscoringthestrengthand
    tailed summary. It distinctly notes both aspects
    precisionofourapproach.
    of the discrimination: one against women with
    Turkishnamesandtheotheragainstthosedonning
    F.2 CaseStudyonClinicalTrial
    anIslamicheadscarf. TriSum’srationalesection
    further accentuates its strength by explicitly pre- In this case study centered around adult tonsil-
    sentingthecoreaspectsandtriplesthatdelineate lectomies, it is evident that the BART primarily
    thefocuspointsofthesummary. Thismethodical graspedthecoregoalofthestudybutmissedouton
    extraction and representation ensure that no vital essentialdetails,particularlythevariedfluidintakegroups and post-operative data recording. Mean- ClinicalTrial-Base
    while,thegroundtruthsummaryoffersacompre- Model R-1 R-2 R-L ∆ BS BAS
    hensiveview,butitremainsrelativelygeneralized. Baselines
    Thestrengthofourapproach,theaspect-triple
    T5Large 53.9 41.7 47.2 −2.0% 90.49 -1.91
    BARTLarge 51.8 38.6 43.6 +4.4% 89.61 -1.99
    rationaled summarization (TriSum), is signifi- PEGASUS 51.8 40.7 44.8 +1.9% 90.16 -1.61
    cantlyhighlightedwhenwedelveintothedetails
    GPT-3.5zero-shot 45.4 23.8 32.5 +37.6% 89.00 -2.44
    OurMethod
    and the rationale-driven structure it adheres to.
    GPT-3.5TriSum 54.1 37.6 42.2 +4.5% 90.84 -1.52
    TriSumoperatesbyidentifyingessentialaspects TriSum-S 53.6 42.2 46.6 −1.8% 90.67 -1.66
    TriSum-C 50.3 37.2 42.8 +7.4% 89.25 -2.14
    ofthetext,followedbyextractingandconstructing
    TriSum-J 52.9 41.8 45.2 — 90.81 -1.64
    triplesthatmaptherelationshipsinthecontent.
    Table6: PerformancecomparisonofROUGEScores
    • Aspect-DrivenUnderstanding: TriSum’sra- andsemanticsimilarityscoresonClinicalTrial-Base
    tionale points out the key aspects such as the Dataset.Thetop-3resultsarehighlighted. Ourback-
    bonemodel,BART ,isshadowedforreference.
    purposeofthestudy,concernsrelatedtotonsil- Large
    lectomypain,theroleofpre-operativehydration,
    among others. By capturing these aspects, the G.2 MoreBaselinesandContrastiveLearning
    modelsetsthestageforasummarythatdoesnot FrameworkAdaptation
    missoutonthediverseelementsoftheoriginal
    text.
    CNN/DailyMail
    • Triple-Based Detail Extraction: The aspect- Model R-1 R-2 R-L BS BAS
    BART 44.0 21.1 40.6 87.98 -3.45
    drivenapproachisfurtherenrichedbythetriples Large
    BART 44.2 21.2 40.9 88.04 -3.47
    12-6-SFT
    TriSum generates. Thesetriples,suchas[Par- PLATE BART12-12,λ=2.0 44.9 22.0 41.4 88.12 -3.34
    BRIO-Mul 47.6 23.5 44.5 88.74 -3.22
    ticipants | will record | pain and nausea post- BART
    LLAMA-2 36.4 14.2 30.4 87.84 -3.31
    zero-shot
    operatively], ensure that the summary remains
    TriSum+BRIO 48.0 24.4 45.3 89.38 -3.07
    Mul
    faithfultothearticlebycapturingnuancedrela- TriSum 45.5 22.7 42.0 88.62 -3.28
    LLAMA-2
    tionships. Itdoesnotjustreiteratewhatthestudy XSum
    does,butalsohowitgoesaboutit,ensuringthe Model R-1 R-2 R-L BS BAS
    BART 45.4 22.3 37.3 91.62 -2.50
    readerunderstandsthemethodology. Large
    BART 44.8 22.2 37.1 91.55 -2.56
    12-3-KD
    PLATE BART12-12,λ=1.5 45.3 22.3 37.2 91.60 -2.52
    • Precision and Brevity: The TriSum sum- BRIO-Mul 47.1 23.5 38.2 91.98 -2.40
    BART
    marycapturesallthekeypoints—rightfromthe LLAMA-2 zero-shot 30.2 10.4 22.3 89.12 -2.53
    study’sfocus,thecategorizationofparticipants, TriSum+BRIO Mul 48.2 25.3 39.9 92.43 -2.21
    TriSum 47.2 24.4 39.3 92.12 -2.35
    LLAMA-2
    tothepost-operativedocumentation—withoutbe-
    Table7: Additionalexperiments.
    comingverbose. Itoffersacondensedyetcom-
    prehensiveviewofthearticle,ensuringthatread-
    In addition to Table 2 and 3, we further tested
    erscanquicklygraspthecoreconceptswithout
    baselinesBART (ShleiferandRush,2020)
    gettingoverwhelmed. 12-3-KD
    and PLATE (Zhang et al., 2022),
    BART12-12,λ=1.5
    G AdditionalEvaluation a general contrastive learning-based framework
    BRIO-Mul (Liuetal.,2022),andanotherlead-
    BART
    G.1 PerformanceonClinicalTrial-Base
    ing LLM LLAMA-2-70B (Touvron et al., 2023)
    InadditiontotheClinicalTrial(Large)dataset,we on CNNDM and XSum datasets. We also tested
    alsoconstructedasimplerversion-ClinicalTrial- TriSum-J(trainedbyGPT-3.5rationale)futher
    Base where we consider the article-summary trained with contrastive learning strategy from
    pairs included in this dataset to be those with a BRIO, denoted as “TriSum+BRIO ”. For a
    Mul
    BARTScore higher than 2.0. The statistics for fair comparison, we use BART as backbone of
    −
    thisdatasetareinTable5shownasfollows. BRIO for both datasets, while original paper of
    BRIO uses Pegasus for XSum. Moreover, we re-
    #Samples #Words
    portTriSumtrainedwiththe“aspect-triple”ratio-
    Dataset Train Valid Test Doc. Sum.
    ClinicalTrial-Base 62,012 7,752 7,752 277.7 76.1 nalesgeneratedbyLLAMA-2-70B.Wecouldnot
    testwithGPT-4’srationalesduetotheexpensive
    Table5: StatisticsofClinicalTrial-Base.
    APIcost. Table7presentsourfindings: (1)BRIO,
    OurevaluationresultsareshowninTable6below. asageneralcontrastivelearningframework,canbeadaptedbyTriSumandimproveitsperformance,
    achievingSOTAresults;(2)Inazero-shotscenario,
    LLAMA-2-70B outperforms GPT-3.5 on XSum;
    (3)TriSumshowscomparableperformancewith
    both LLAMA-2 and GPT-3.5 rationales on the
    datasets.
    G.3 FatualnessImprovementwithTriSum
    BART Trisum-J GPT-3.5zero-shot GPT-3.5TriSum
    FACTSCORE 88.1 92.9 85.3 93.7
    Table8: FactualconsistencyevaluationonCNNDM
    test set. Results will not affect the original paper’s
    contributions.
    We tested the Factual Consistency (FC) by
    FACTSCORE (Minetal.,2023)withtheirNPset-
    tingusingInst-LLAMA,andwiththesourcetextas
    theknowledgesource. Table8showsthatTriSum
    cansubstantiallyenhanceFC,especiallywhenus-
    ing its rationale for GPT-3.5 prompting. This is
    becausetriplesemphasizesthefactscontainedin
    the source text. The result also indicates that, by
    systematicallyextractingthe“aspect-triple”ratio-
    nale,themodelestablishesastructuredframework
    thatconstrainsthegenerationprocess,minimizing
    the likelihood of generating content unsupported
    bythesourcetext.



```python
# MODEL_NAME = "gpt-3.5-turbo-0125"
# MODEL_NAME = "gpt-3.5-turbo-instruct"
MODEL_NAME = "gpt-4-0125-preview"
TEMPERATURE = 0.7
# OpenAIクライアントの初期化
client = OpenAI()
```


```python
def ground_truth_summary(model_name, doc):
    # 文書を要約するプロセスにおける、ゼロショット設定での要約生成のタスク
    prompt = [{'role': 'system', 'content': "Given a document, summarize the document in"}]
    prompt.append({"role" : "system", "content" : 'one sentence: Given a document, summarize the document in'})
    prompt.append({"role" : "system", "content" : f'three sentence: Document: {doc}'})
    prompt.append({"role": "user", "content": f"Summary:"})
    """
    文書を与えられた場合、その文書を1文で要約します。
    文書を与えられた場合、その文書を3文で要約します。
    文書: {doc}
    要約:
    """
    
    # 概要と提案手法名抽出用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        temperature=TEMPERATURE,
    )
    summary_str = response.choices[0].message.content
    
    return summary_str
```


```python
# LLM理由付け探索 (LLM Rationale Probing)
with Timer(prefix="LLM Rationale Probing"):
    gt_summary = ground_truth_summary(MODEL_NAME, paper_text)
```

    LLM Rationale Probing 11.475[s]



```python
print(gt_summary)
```

    TriSum is a framework designed to distill text summarization capabilities from large language models (LLMs) into smaller, local models, enhancing performance and interpretability across various datasets. Through a three-step process involving rationale probing, golden rationale selection, and curriculum learning, TriSum systematically improves summarization quality while offering insights into the rationale behind model decisions. Extensive testing across datasets like CNN/DailyMail, XSum, and ClinicalTrial demonstrates TriSum's superiority over state-of-the-art models and its adaptability to different summarization tasks. Additionally, TriSum's methodology of utilizing aspect-triple rationales not only aids in generating more accurate and factually consistent summaries but also highlights the potential for scaling this approach to other summarization models and tasks.



```python
def rationale_probing(model_name, doc, gt_summary):
    # TriSum: LLM理由付け探索 (LLM Rationale Probing)
    # 与えられた文書に基づいて重要な側面とそれらに関連する三重項（エンティティとその関係）を抽出し、これらを使用して要約を生成
    prompt = [{'role': 'system', 'content': "Given a document and its ground-truth summary, do"}]
    prompt.append({"role" : "system", "content" : 'the following tasks:'})
    prompt.append({"role" : "system", "content" : '(1) According to the Ground-truth Summary, extract essential aspects of the Document.'})
    prompt.append({"role" : "system", "content" : '(2) For each essential aspect, retrieve detailed triples in the format [ENTITY1 | RELATION | ENTITY2] used to compose the ground-truth summary.'})
    prompt.append({"role" : "system", "content" : '(3) With the retrieved triples, compose a summary.The essential aspects, triples, and composed summary should be in the same response, separated by a new line.'})
    prompt.append({"role" : "system", "content" : 'All triples [ENTITY1 | RELATION | ENTITY2] should be in length 3 (separated by "|").'})
    prompt.append({"role" : "system", "content" : 'Example:\n\n================Example=================\nPrompt:\n[Document]: [document]\n[Ground-truth Summary]: [ground-truth summary]\nUpdate:\nEssential Aspects:\n[aspects]\nTriples:\n- [ENTITY1_1 | RELATION_1 | ENTITY1_2]\n- [ENTITY2_1 | RELATION_2 | ENTITY2_2]\n- [ENTITY3_1 | RELATION_3 | ENTITY3_2]\n- ...\nGenerated Summary:\n[summary]\n========================================'})
    
    prompt.append({"role": "system", "content": "Please format the output in Markdown."})
    prompt.append({"role": "system", "content": "Results must be in Japanese."})
    
    prompt.append({"role": "user", "content": f"Prompt:"})
    prompt.append({"role": "user", "content": f"[Document]: {doc}"})
    prompt.append({"role": "user", "content": f"[Ground-truth Summary]: {gt_summary}"})
    prompt.append({"role": "user", "content": f"Update:"})
    """
    システム

    文書とその正確な要約が与えられた場合、以下のタスクを実行してください。
    (1) 正確な要約に基づき、文書の重要な側面を抽出します。
    (2) それぞれの重要な側面について、正確な要約を構成するために使用された[ENTITY1 | RELATION | ENTITY2]の形式で詳細な三つ組を取得します。
    (3) 取得した三つ組を用いて、要約を作成します。重要な側面、三つ組、および作成した要約は、新しい行で区切られ、同じ返答の中に含めてください。
    全ての三つ組[ENTITY1 | RELATION | ENTITY2]は、3つの長さである必要があります（"|"で区切られる）。
    例:
    ================例=================
    プロンプト:
    [文書]: [document]
    [正確な要約]: [ground-truth summary]
    更新:
    重要な側面:
    [aspects]
    三つ組:

    [ENTITY1_1 | RELATION_1 | ENTITY1_2]
    [ENTITY2_1 | RELATION_2 | ENTITY2_2]
    [ENTITY3_1 | RELATION_3 | ENTITY3_2]
    ...
    生成された要約:
    [summary]
    ========================================
    プロンプト:
    [文書]: {doc}
    [正確な要約]: {gt_summary}
    更新:
    """
    
    # 概要と提案手法名抽出用のプロンプトテンプレートを作成
    response = client.chat.completions.create(
        model=model_name, # model = "deployment_name".
        messages=prompt,
        temperature=TEMPERATURE,
    )
    summary_method_name_str = response.choices[0].message.content
    
    return summary_method_name_str
```


```python
# LLM理由付け探索 (LLM Rationale Probing)
with Timer(prefix="LLM Rationale Probing"):
    # summary_method_name = rationale_probing(MODEL_NAME, paper_text, info["summary"])
    summary_method_name = rationale_probing(MODEL_NAME, paper_text, gt_summary)
```

    LLM Rationale Probing 41.289[s]



```python
summary_method_name
```




    'Essential Aspects:\n- TriSum framework\n- Distillation process from LLMs to local models\n- Performance and interpretability enhancement\n- Three-step process: rationale probing, golden rationale selection, curriculum learning\n- Testing across CNN/DailyMail, XSum, and ClinicalTrial datasets\n- Superiority over state-of-the-art models\n- Utilization of aspect-triple rationales for accuracy and factual consistency\n\nTriples:\n- [TriSum | is designed to | distill text summarization capabilities]\n- [TriSum | enhances | performance and interpretability]\n- [Process | involves | rationale probing, golden rationale selection, curriculum learning]\n- [TriSum | tested across | CNN/DailyMail, XSum, and ClinicalTrial]\n- [TriSum | demonstrates | superiority over state-of-the-art models]\n- [TriSum | utilizes | aspect-triple rationales for accuracy and factual consistency]\n\nGenerated Summary:\nTriSumは、大規模な言語モデル（LLM）から小規模なローカルモデルへのテキスト要約能力の蒸留を目的としたフレームワークであり、CNN/DailyMail、XSum、ClinicalTrialなどのさまざまなデータセットでのパフォーマンスと解釈可能性を向上させます。理由の探求、黄金の理由の選択、カリキュラム学習という3つのステップを通じて、TriSumは要約品質を体系的に改善し、モデルの決定背後にある理由に洞察を提供します。また、アスペクト-トリプルの理由を利用することで、より正確で事実に基づいた要約を生成するだけでなく、このアプローチを他の要約モデルやタスクにスケーリングする可能性を示しています。'




```python
print(summary_method_name)
```

    Essential Aspects:
    - TriSum framework
    - Distillation process from LLMs to local models
    - Performance and interpretability enhancement
    - Three-step process: rationale probing, golden rationale selection, curriculum learning
    - Testing across CNN/DailyMail, XSum, and ClinicalTrial datasets
    - Superiority over state-of-the-art models
    - Utilization of aspect-triple rationales for accuracy and factual consistency
    
    Triples:
    - [TriSum | is designed to | distill text summarization capabilities]
    - [TriSum | enhances | performance and interpretability]
    - [Process | involves | rationale probing, golden rationale selection, curriculum learning]
    - [TriSum | tested across | CNN/DailyMail, XSum, and ClinicalTrial]
    - [TriSum | demonstrates | superiority over state-of-the-art models]
    - [TriSum | utilizes | aspect-triple rationales for accuracy and factual consistency]
    
    Generated Summary:
    TriSumは、大規模な言語モデル（LLM）から小規模なローカルモデルへのテキスト要約能力の蒸留を目的としたフレームワークであり、CNN/DailyMail、XSum、ClinicalTrialなどのさまざまなデータセットでのパフォーマンスと解釈可能性を向上させます。理由の探求、黄金の理由の選択、カリキュラム学習という3つのステップを通じて、TriSumは要約品質を体系的に改善し、モデルの決定背後にある理由に洞察を提供します。また、アスペクト-トリプルの理由を利用することで、より正確で事実に基づいた要約を生成するだけでなく、このアプローチを他の要約モデルやタスクにスケーリングする可能性を示しています。



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
    # method_algorithm = explain_method_algorithm(MODEL_NAME, paper_text, str(summary_method_name["method_name"]))
    method_algorithm = explain_method_algorithm(MODEL_NAME, paper_text, summary_method_name)
```

    explain_method_algorithm 26.765[s]



```python
print(method_algorithm["method"])
```

    TriSumは、大規模な言語モデル（LLM）から小規模なローカルモデルへのテキスト要約能力の蒸留を目的としたフレームワークであり、CNN/DailyMail、XSum、ClinicalTrialなどのさまざまなデータセットでのパフォーマンスと解釈可能性を向上させます。理由の探求、黄金の理由の選択、カリキュラム学習という3つのステップを通じて、TriSumは要約品質を体系的に改善し、モデルの決定背後にある理由に洞察を提供します。また、アスペクト-トリプルの理由を利用することで、より正確で事実に基づいた要約を生成するだけでなく、このアプローチを他の要約モデルやタスクにスケーリングする可能性を示しています。



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
      "code": "# TriSumアルゴリズムの実装\n\n# 必要なライブラリのインポート\nimport numpy as np\n\n# TriSumフレームワークの概要\n# TriSumは、大規模な言語モデルから小規模なローカルモデルへのテキスト要約能力の蒸留を目的としたフレームワークです。\n# これは、CNN/DailyMail、XSum、ClinicalTrialなどのさまざまなデータセットでのパフォーマンスと解釈可能性を向上させます。\n\n# TriSumの3つの主要なステップ\n\n# 1. 理由の探求\n# コメント: 大規模な言語モデルを使って、テキストから重要な理由を抽出します。\n\n# 2. 黄金の理由の選択\n# コメント: 抽出した理由の中から最も重要なものを選択します。\n\n# 3. カリキュラム学習\n# コメント: 選択した理由を使って、小規模なローカルモデルを段階的に訓練します。\n\n# コードの具体的な実装は、特定のモデルやデータセットに依存しますが、このフレームワークの概念は、\n# 要約品質を体系的に改善し、モデルの決定背後にある理由に洞察を提供するために使用できます。\n\n# アスペクト-トリプルの理由を利用することで、より正確で事実に基づいた要約を生成することが可能になります。\n# また、このアプローチは他の要約モデルやタスクにもスケーリングする可能性を示しています。\n\n# 注意: このコードは、TriSumフレームワークの概念と主要なステップを説明するものであり、\n# 実際の実装には特定のモデルやデータセット、およびそれらの処理に関する詳細なコードが必要になります。"
    }
    generate_pseudocode_for_method 36.577[s]



```python
print(code_method["code"])
```

    # TriSumアルゴリズムの実装
    
    # 必要なライブラリのインポート
    import numpy as np
    
    # TriSumフレームワークの概要
    # TriSumは、大規模な言語モデルから小規模なローカルモデルへのテキスト要約能力の蒸留を目的としたフレームワークです。
    # これは、CNN/DailyMail、XSum、ClinicalTrialなどのさまざまなデータセットでのパフォーマンスと解釈可能性を向上させます。
    
    # TriSumの3つの主要なステップ
    
    # 1. 理由の探求
    # コメント: 大規模な言語モデルを使って、テキストから重要な理由を抽出します。
    
    # 2. 黄金の理由の選択
    # コメント: 抽出した理由の中から最も重要なものを選択します。
    
    # 3. カリキュラム学習
    # コメント: 選択した理由を使って、小規模なローカルモデルを段階的に訓練します。
    
    # コードの具体的な実装は、特定のモデルやデータセットに依存しますが、このフレームワークの概念は、
    # 要約品質を体系的に改善し、モデルの決定背後にある理由に洞察を提供するために使用できます。
    
    # アスペクト-トリプルの理由を利用することで、より正確で事実に基づいた要約を生成することが可能になります。
    # また、このアプローチは他の要約モデルやタスクにもスケーリングする可能性を示しています。
    
    # 注意: このコードは、TriSumフレームワークの概念と主要なステップを説明するものであり、
    # 実際の実装には特定のモデルやデータセット、およびそれらの処理に関する詳細なコードが必要になります。



```python

```
