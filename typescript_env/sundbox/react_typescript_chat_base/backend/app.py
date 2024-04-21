from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'secret!'
app.config['UPLOAD_FOLDER'] = 'uploads'  # アップロードされたファイルを保存するフォルダ
socketio = SocketIO(app)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    return jsonify(message=data['message'])  # ここで受け取ったメッセージをそのまま返す


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
