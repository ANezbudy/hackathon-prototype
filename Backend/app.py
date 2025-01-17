from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import Chatbot

app = Flask(__name__)
CORS(app)

chatbot = Chatbot()

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    response = chatbot.get_response(user_message)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)