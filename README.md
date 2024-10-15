# OpenAI Chatbot Application

This application is a simple chatbot that uses the OpenAI GPT-4 model to respond to user queries. It consists of a Python Flask backend and a React frontend.

## Prerequisites

- Python 3.7+
- Node.js 14+
- npm 6+
- An OpenAI API key

## Setup

### Backend Setup

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the Backend directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

### Frontend Setup

1. Navigate to the Frontend directory:
   ```
   cd Frontend
   ```

2. Install the required npm packages:
   ```
   npm install
   ```

## Running the Application

### Start the Backend

1. Ensure you're in the Backend directory and your virtual environment is activated (if you created one).

2. Start the Flask server:
   ```
   python app.py
   ```

   The backend should now be running on `http://localhost:5000`.

### Start the Frontend

1. Open a new terminal window and navigate to the Frontend directory.

2. Start the React development server:
   ```
   npm start
   ```

   The frontend should now be running on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to use the chatbot application.

## Usage

- Type your message in the input field at the bottom of the page and press Enter or click the Send button.
- The chatbot will respond using the GPT-4 model.
- The conversation history will be displayed in the chat window.

## Troubleshooting

- If you encounter any CORS issues, ensure that the backend URL in `Frontend/src/components/ChatInterface.js` matches the URL where your Flask server is running.
- If you get an error related to the OpenAI API, double-check that your API key is correctly set in the `.env` file and that you have access to the GPT-4 model.
- If you encounter any Node.js related errors when starting the frontend, try updating to a more recent LTS version of Node.js.

## Note

This application uses the GPT-4 model, which may have associated costs when using the OpenAI API. Make sure you're aware of the pricing and any usage limits on your OpenAI account.
