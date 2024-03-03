質問に対して、Research Report(調査報告書), Resource Report(資料報告書), Outline Report(概要報告書) のいずれかの項目を選択することでそのタスクを Tavily で web 検索を行い、結果をブラウザ上に出力。内容は clipboard と pdf にも出力できるようになっています。 
"planner"（プランナー）と"execution"（実行）エージェントを動かすことで動作します。
gpt3.5-turboとgpt-4-turboを使用して、平均的なリサーチタスクは約3分で完了し、コストは約$0.1らしいです。

![overview](./1.png)

- Refarence
    - https://github.com/assafelovic/gpt-researcher
    - https://docs.tavily.com/

Tavily Search APIは、一回のAPIコールで20以上のサイトを集約し、独自のAIを使用して、タスク、クエリ、または目標に最も関連性の高いソースとコンテンツをスコアリング、フィルタリング、ランキングします。開発者はカスタムフィールド（例えば、コンテキストやレスポンストークンの制限）を追加することで、LLM向けの最適な検索体験を実現できるらしい。


検索のやり方や結果の使い方など検索に関わる部分で圧倒的に負けている感じ+結果の出力方法をある程度強制して出力方法を限定することでやりたいことをうまく出せている印象
