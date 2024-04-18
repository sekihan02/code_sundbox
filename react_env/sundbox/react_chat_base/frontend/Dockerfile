# frontend/Dockerfile
FROM node:14

# アプリケーションディレクトリを作成
WORKDIR /app

# アプリケーションの依存ファイルをインストール
COPY package.json ./
RUN npm install

# アプリケーションのソースをバンドル
COPY . .

# アプリを起動
CMD ["npm", "start"]
