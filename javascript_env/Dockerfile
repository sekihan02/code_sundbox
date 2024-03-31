FROM node:latest

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# package.json と package-lock.json をコピー
COPY package*.json ./

RUN npm install
# 本番環境用の場合は、npm ci --only=production を使用する

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]
