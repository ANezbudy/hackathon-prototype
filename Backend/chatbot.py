import os
from openai import OpenAI
from dotenv import load_dotenv

class Chatbot:
    def __init__(self):
        load_dotenv()
        self.client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

    def get_response(self, user_message, model="gpt-4"):
        try:
            response = self.client.chat.completions.create(
                model=model,
                messages=[
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_message}
                ]
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"An error occurred: {str(e)}"
