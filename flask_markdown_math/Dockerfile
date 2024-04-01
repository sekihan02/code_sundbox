# Node.jsベースイメージを選択
FROM node:14-slim

# Pythonをインストール
RUN apt-get update && apt-get install -y python3 python3-pip

# 作業ディレクトリを設定
WORKDIR /app

# Python依存関係をコピー＆インストール
COPY requirements.txt ./
RUN pip3 install --no-cache-dir -r requirements.txt

# npmを使って直接markedをインストール
RUN npm install marked

# アプリケーションの残りの部分をコピー
COPY . .

# Flaskアプリケーションを実行
CMD ["python3", "run.py"]
