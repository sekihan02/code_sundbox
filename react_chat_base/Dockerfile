# フロントエンドビルドのステージ
FROM node:16 as build-stage
WORKDIR /app
# フロントエンドの依存関係をコピーしてインストール
COPY frontend/package.json ./
RUN npm install
# 必要な型定義をインストール
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object @types/react @types/react-dom
# フロントエンドのソースコードをコピーしてビルド
COPY frontend/ ./
RUN npm run build

# バックエンドのステージ
FROM python:3.8-slim
WORKDIR /app
# バックエンドの依存関係をコピーしてインストール
COPY app/requirements.txt ./
RUN pip install -r requirements.txt
# フロントエンドビルドの成果物をコピー
COPY --from=build-stage /app/build /app/frontend/build
# Flaskアプリケーションのコードをコピー
COPY app/ ./
# 環境変数の設定
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
# アプリケーションの起動コマンド
CMD ["flask", "run"]
