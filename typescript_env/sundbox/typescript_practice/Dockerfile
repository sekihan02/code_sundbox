# Node.jsの公式イメージをベースにする
FROM node:latest

# アプリケーションディレクトリを作成
WORKDIR /src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# @babel/plugin-proposal-private-property-in-object を追加
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install --save-dev @types/react @types/react-dom

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]
