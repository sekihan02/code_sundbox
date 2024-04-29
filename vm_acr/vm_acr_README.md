# Azure Virtual MachinesにTeraTermで接続

## Azure Virtual Machinesから必要な情報を取得

Virtual Machinesをsundbox-vmとして
ユーザー名 sundbox_admin パスワードをSundbox_adminとして作成しました
「Virtual Machines」を選択し、対象のVM「sundbox-vm」をクリックします。
左側のメニューから「Networking」を選び、関連するネットワークインターフェースをクリックします。
ネットワークインターフェースの詳細ページでパブリックIPアドレスを確認します。

例では、51.8.107.58でした

## Tera Termで接続

1. 「ファイル」メニューから「新しい接続」を選択します。
2. 「TCP/IP」タブを選び、「ホスト」に先ほど確認したパブリックIPアドレスを入力します。
3. 「サービス」で「SSH」を選びます。
4. 「OK」をクリックして接続を開始します
5. ユーザー名とパスワードをSundbox_adminを入力

## AzureCLIとDocker,Gitをインストール pythonのプロジェクトが入ったディレクトリを送り、Dockerをビルド

Azure Virtual MachineにAzure CLI、Docker、Gitをインストールし、Pythonプロジェクトを設定してDockerでビルドする手順をご説明します。

## ファイルの送信

### Azure CLI のインストール

Azure CLIをインストールするには、以下のコマンドを実行します。

```
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

### Docker のインストール

Dockerをインストールするには、以下の手順に従います。

```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce
sudo usermod -aG docker $USER
```

再ログインが必要になることがあります。これにより、ユーザーがDockerグループに追加され、sudoなしでDockerコマンドを実行できます。

### Git のインストール

Gitをインストールするには、以下のコマンドを使用します。

```
sudo apt-get install -y git
```

### WinSCPのダウンロードとファイルの送信

コマンドなら`scp`で`scp -r /path/to/your/project/ sundbox_admin@`
だけど面倒なので

[winscp](https://winscp.net/download/WinSCP-6.3.3-Setup.exe/download)をダウンロードしTeratermと同じように接続

ファイルをドラックアンドドロップで渡す

### Docker Compose のインストール

まずは、Docker Compose をインストールする必要があります。以下のコマンドを使用して、docker-compose をインストールできます。

```
sudo apt update
sudo apt install docker-compose
```

### Docker パーミッションエラーの解決

Dockerデーモンへの接続エラーは、通常、ユーザーが docker グループに追加されていないために発生します。ユーザーを docker グループに追加し、新しいグループ設定を適用するには、次のコマンドを実行します。

```
sudo usermod -aG docker $USER
```

このコマンドを実行した後、変更を有効にするためにシステムからログアウトして再ログインするか、次のコマンドを実行して新しいグループ設定を適用することができます。

```
newgrp docker
```

#### Docker と Docker Compose のテスト

上記の設定が完了した後、以下のコマンドを使用してDockerとDocker Composeが正しく機能するかを確認します。

```
docker run hello-world
docker-compose --version
```

これで、必要なツールがすべて正しく設定され、エラーなく使用できるようになるはずです。

```
docker-compose up --build
```

#### 依存関係の再インストール

エラーが出て再インストールが必要そうならプロジェクトディレクトリで以下のコマンドを実行して、すべての依存関係をクリーンアップして再インストールします。

```
rm -rf node_modules
rm package-lock.json
npm install
```

#### コンテナの停止と削除

```
docker stop react_typescript_chat_base_web_1
docker rm react_typescript_chat_base_web_1
```

#### ポートマッピング付きでのコンテナ起動

```
docker run -p 5000:5000 react_flask_app
```

#### ネットワーク設定

poartalからVMにアクセスし、`ネットワーク`にある`ネットワーク設定`を選択
`ネットワーク インターフェイス`を選択して表示します。
概要の接続先にあるネットワーク セキュリティ グループの内容を選択してNSGにアクセスします

#### NSGに新しいインバウンドルールを追加する手順

このままではアクセスできないので外部からアクセスするためには、ネットワークセキュリティグループ(NSG)に新しいインバウンドルールを追加します


#### 受信セキュリティ規則

設定の受信セキュリティ規則を選択し、追加
- ソース: 「任意」または特定のIPアドレス（必要に応じて）
- ソースポート範囲: *
- 宛先: 「任意」
- 宛先ポート範囲: 5000
- プロトコル: 「TCP」
- アクション: 「許可」

追加すると今回の場合なら5000で接続ができます
変更が適用されるまで数分かかる場合があります。

#### 変更後の確認

NSGの設定変更後、コンテナを再起動し、ブラウザで `http://[VMのパブリックIPアドレス]:5000` にアクセスしてください。ここで、VMのパブリックIPアドレスは 51.8.107.58 ですので、以下のURLを使用します。

`http://51.8.107.58:5000`

# GitHubアクセス

## Gitのインストールの確認

ターミナルを開いて、以下のコマンドを実行してGitがインストールされているか確認します。

```
$ git --version
git version 2.25.1
```

## Gitのインストール

Gitがインストールされていない場合、以下のコマンドでインストールできます（Ubuntuの場合）。

```
sudo apt update
sudo apt install git
```

## リポジトリのクローン

Gitのインストール後、次のコマンドを使用してGitHubからリポジトリをクローンします。

```
git clone https://github.com/sekihan02/code_sundbox.git
```

# Azure Container Registry にデータを渡す


sundboxcresitryという名称でAzure Container Registryを作成
Azure Container Registryにログインするためには、まず az acr login コマンドを使用して認証を行います。

```
$ az login
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code BWVRBVYLW to authenticate.
```

リンクにアクセスし、enter the codeを入力することでログインできました

- Azure Container Registryへのログイン

これでログインできるはず

`
az acr login --name レジストリ名
az acr login --name sundboxcresitry
`

## Azure CLIを使用してACRにイメージをビルドする

まず、ローカルで Dockerfile を含むディレクトリに移動してください。次に、以下のコマンドを使用して Azure Container Registry で直接イメージをビルドし、プッシュします。

`az acr build --registry sundboxcresitry --image test:1.0.0 .`
