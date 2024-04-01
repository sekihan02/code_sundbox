import os
from flask import Blueprint, render_template
from flask import Flask, request, jsonify
from flask import current_app as app

chat_bp = Blueprint('chat', __name__)

# Making Recommendationsのチェック取得
should_recommend = False  # Initial value

@chat_bp.route("/")
def index():
    return render_template('index.html')

@chat_bp.route('/update_settings', methods=['POST'])
def update_settings():
    # data = request.json
    # settings['model'] = data['model']
    # temperature = float(data['temperature'])
    # if 0.0 <= temperature <= 1.0:
    #     settings['temperature'] = temperature
    # else:
    #     return jsonify({'status': 'error', 'message': 'Temperature must be between 0.0 and 1.0'})

    # settings['api_key'] = data['api_key']
    return jsonify({'status': 'success'})

@chat_bp.route('/update_recommendation', methods=['POST'])
def update_recommendation():
    global should_recommend
    data = request.json
    should_recommend = data['should_recommend']
    app.logger.info(f"Updated should_recommend: {should_recommend}")  # Debugging statement
    return jsonify({'status': 'success'})

@chat_bp.route('/get_response', methods=['POST'])
def get_response():
    global should_recommend
    app.logger.info(f"In get_response, should_recommend: {should_recommend}")  # Debugging statement

    # get the user's message from the POST request
    message = request.get_json()['message']
    
    return jsonify({'response': message})
