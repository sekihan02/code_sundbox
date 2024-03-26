from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(debug=True)
