import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, isUser) => {
    setMessages(prevMessages => [...prevMessages, { text: message, isUser }]);
  };

  return (
    <div className="App">
      <h1>OpenAI Chatbot</h1>
      <ChatInterface messages={messages} addMessage={addMessage} />
    </div>
  );
}

export default App;