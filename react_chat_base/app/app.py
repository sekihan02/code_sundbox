from flask import Flask, request, jsonify, send_from_directory
import os
from flask_cors import CORS

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

# 仮のメッセージ保存用リスト
messages = []

@app.route('/api/messages', methods=['GET'])
def get_messages():
    return jsonify(messages)

@app.route('/api/messages', methods=['POST'])
def post_message():
    message = request.json
    messages.append(message)
    return jsonify(message), 201

# Reactアプリケーションの静的ファイルを提供するためのルート
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, port=5000, threaded=True)
