```python
import collections

# ROUGE-Nの計算関数（英語版）
def rouge_n_english(reference, candidate, n=1):
    # n-gramの生成
    def ngrams(words, n):
        return zip(*[words[i:] for i in range(n)])

    reference_ngrams = collections.Counter(ngrams(reference.split(), n))
    candidate_ngrams = collections.Counter(ngrams(candidate.split(), n))
    
    # 共通のn-gramのカウント
    overlap = sum((reference_ngrams & candidate_ngrams).values())
    
    # Recallの計算
    return overlap / max(len(reference_ngrams), 1)

# 英語の例文
example_text_english = "The cat sat on the mat. It was a sunny day."
example_summary_english = "The cat was on the mat on a sunny day."

# ROUGE-1スコアの計算
rouge_1_score_english = rouge_n_english(example_text_english, example_summary_english, n=1)
print(f"rouge-1:{rouge_1_score_english}")

```

    rouge-1:0.7272727272727273



```python
!pip3 install mecab-python3 unidic-lite  # または unidic
```

    Requirement already satisfied: mecab-python3 in /usr/local/lib/python3.10/dist-packages (1.0.8)
    Requirement already satisfied: unidic-lite in /usr/local/lib/python3.10/dist-packages (1.0.8)
    [33mWARNING: Running pip as the 'root' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv[0m[33m
    [0m


```python
# テキストとその要約
original_text = "ここに元のテキストを入れます"
summary_text = "ここに要約されたテキストを入れます"


# ユーザーが提供した日本語のテキストとその要約
original_text = """
禁闕の変（きんけつのへん）は、室町時代の嘉吉3年9月23日（1443年10月16日）夜に京都で起こった後花園天皇の禁闕（皇居内裏）への襲撃事件である。吉野朝廷（南朝）復興を唱える勢力（後南朝）が御所に乱入し、三種の神器のうち剣璽の二つを奪い比叡山へ逃れたが、26日までに鎮圧された。幕府は宝剣の奪還には成功したが、神璽はそのまま奪い去られ、長禄元年（1457年）に赤松氏が後南朝より奪い返し北朝の手に戻る（長禄の変）まで15年に渡って後南朝の下にあった。嘉吉の変（かきつのへん）という呼び方もあるが、嘉吉元年（1441年）の守護赤松満祐による6代将軍足利義教の殺害事件「嘉吉の変」と混同を招くため、避けられる傾向にある[1]。
"""

summary_text = """
「禁闕の変」は、室町時代の嘉吉3年（1443年）に起こった、後花園天皇の禁闕（皇居内裏）への襲撃事件です。この事件は、吉野朝廷（南朝）復興を目指す後南朝の勢力によって引き起こされました。彼らは御所に乱入し、三種の神器のうち剣と璽を奪い、比叡山へ逃れましたが、26日までに鎮圧されました。
"""
```


```python
import MeCab
```


```python
# MeCabの初期化
mecab = MeCab.Tagger()

# 名詞を抽出する関数
def extract_nouns(text):
    mecab.parse('')  # 空文字列でパースを初期化
    node = mecab.parseToNode(text)
    nouns = []
    while node:
        if node.feature.split(',')[0] == '名詞':
            nouns.append(node.surface)
        node = node.next
    return nouns


```

- N-gramの生成関数定義:

    - ngramsという名の関数を定義します。この関数は、与えられた単語のリスト（words）とn-gramのサイズ（n）を入力として受け取ります。
    - この関数は、入力された単語リストからn-gramを生成し、それらを返します。
- 参照テキストのn-gramカウント:

    - reference_ngramsという変数を作成し、参照テキスト（reference）から生成されたn-gramのカウントを保持します。
    - ngrams関数を使用して参照テキストからn-gramを生成し、それらの出現回数をカウントします。
- 候補テキストのn-gramカウント:

    - candidate_ngramsという変数を作成し、候補テキスト（candidate）から生成されたn-gramのカウントを保持します。
    - 同じくngrams関数を使用して候補テキストからn-gramを生成し、それらの出現回数をカウントします。
- n-gramの重複カウント:

    - overlapという変数を作成し、参照テキストと候補テキストのn-gramのうち、両者に共通するn-gramの合計カウントを計算します。
    - この計算では、&演算子を使用して二つのカウンター（reference_ngramsとcandidate_ngrams）の共通要素のみを取り出し、その数を合計します。
- Recallの計算:

    - 最終的に、共通するn-gramの数（overlap）を参照テキストのn-gramの総数で割ることにより、ROUGE-Nのスコア（Recall）を計算します。
    - このスコアは、候補テキストが参照テキストのどれだけをカバーしているかを示します。


```python
# ROUGE-Nスコアを計算する関数
def rouge_n(reference, candidate, n=1):
    # n-gramの生成
    def ngrams(words, n):
        return zip(*[words[i:] for i in range(n)])

    reference_ngrams = collections.Counter(ngrams(reference, n))
    candidate_ngrams = collections.Counter(ngrams(candidate, n))
    
    # 共通のn-gramのカウント
    overlap = sum((reference_ngrams & candidate_ngrams).values())
    
    # Recallの計算
    return overlap / max(len(reference_ngrams), 1)

# 名詞の抽出
nouns_original = extract_nouns(original_text)
nouns_summary = extract_nouns(summary_text)
```


```python
nouns_original[:8]
```




    ['禁闕', '変', 'けつ', 'へん', '室町', '時代', '嘉吉', '3']




```python
nouns_summary[:8]
```




    ['禁闕', '変', '室町', '時代', '嘉吉', '3', '年', '1443']




```python
# ROUGE-1スコアの計算
rouge_1_score = rouge_n(nouns_original, nouns_summary, n=1)
print(f"rouge-1:{rouge_1_score}")
rouge_2_score = rouge_n(nouns_original, nouns_summary, n=2)
print(f"rouge-2:{rouge_2_score}")
```

    rouge-1:0.4927536231884058
    rouge-2:0.28735632183908044


- N-gramの抽出：参照テキストと候補テキストからn-gramを抽出します。
- 重複カウント：候補テキストのn-gramが参照テキストにどれだけ現れるかカウントします。
- 精度の計算：各n-gramレベルでの精度を計算します（重複カウント/候補テキストのn-gram数）。
- 文の長さによる修正：候補テキストが参照テキストより短い場合、ペナルティを適用します。
- 最終スコアの計算：各n-gramレベルの精度の幾何平均を取り、文の長さに基づいた修正を加えます。


```python
# BLEUスコアを計算するための関数を定義
def calculate_bleu_manual(reference, candidate, max_n=4):
    """
    Calculate BLEU score manually without using NLTK.

    :param reference: Reference text (list of words)
    :param candidate: Candidate text (list of words)
    :param max_n: Maximum size of n-gram
    :return: BLEU score
    """
    def ngram_counts(words, n):
        return Counter(zip(*[words[i:] for i in range(n)]))

    def modified_precision(reference, candidate, n):
        ref_ngrams = ngram_counts(reference, n)
        cand_ngrams = ngram_counts(candidate, n)

        overlap = sum(min(count, cand_ngrams[gram]) for gram, count in ref_ngrams.items())
        total_cand_ngrams = sum(cand_ngrams.values())

        return (overlap / total_cand_ngrams) if total_cand_ngrams > 0 else 0

    precisions = [modified_precision(reference, candidate, n) for n in range(1, max_n+1)]
    p_n = [max(min(precision, 1.0), 0.0) for precision in precisions]

    # Calculate geometric mean of precisions
    p_geom_mean = math.exp(sum(math.log(p) for p in p_n) / max_n) if all(p_n) else 0

    # Calculate brevity penalty
    ref_length = len(reference)
    cand_length = len(candidate)
    brevity_penalty = math.exp(1 - ref_length / cand_length) if cand_length < ref_length else 1

    # Calculate BLEU score
    bleu_score = brevity_penalty * p_geom_mean
    return bleu_score


```


```python
# BLEUスコアの計算
bleu_score = calculate_bleu_manual(nouns_original, nouns_summary, max_n=4)
bleu_score
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    Cell In[11], line 2
          1 # BLEUスコアの計算
    ----> 2 bleu_score = calculate_bleu_manual(nouns_original, nouns_summary, max_n=4)
          3 bleu_score


    Cell In[10], line 23, in calculate_bleu_manual(reference, candidate, max_n)
         19     total_cand_ngrams = sum(cand_ngrams.values())
         21     return (overlap / total_cand_ngrams) if total_cand_ngrams > 0 else 0
    ---> 23 precisions = [modified_precision(reference, candidate, n) for n in range(1, max_n+1)]
         24 p_n = [max(min(precision, 1.0), 0.0) for precision in precisions]
         26 # Calculate geometric mean of precisions


    Cell In[10], line 23, in <listcomp>(.0)
         19     total_cand_ngrams = sum(cand_ngrams.values())
         21     return (overlap / total_cand_ngrams) if total_cand_ngrams > 0 else 0
    ---> 23 precisions = [modified_precision(reference, candidate, n) for n in range(1, max_n+1)]
         24 p_n = [max(min(precision, 1.0), 0.0) for precision in precisions]
         26 # Calculate geometric mean of precisions


    Cell In[10], line 15, in calculate_bleu_manual.<locals>.modified_precision(reference, candidate, n)
         14 def modified_precision(reference, candidate, n):
    ---> 15     ref_ngrams = ngram_counts(reference, n)
         16     cand_ngrams = ngram_counts(candidate, n)
         18     overlap = sum(min(count, cand_ngrams[gram]) for gram, count in ref_ngrams.items())


    Cell In[10], line 12, in calculate_bleu_manual.<locals>.ngram_counts(words, n)
         11 def ngram_counts(words, n):
    ---> 12     return Counter(zip(*[words[i:] for i in range(n)]))


    NameError: name 'Counter' is not defined



```python

```
