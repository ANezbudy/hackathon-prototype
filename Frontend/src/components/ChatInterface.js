import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatInterface({ messages, addMessage }) {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (message) => {
    addMessage(message, true);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      addMessage(data.response, false);
    } catch (error) {
      console.error('Error:', error);
      addMessage('An error occurred. Please try again.', false);
    }

    setIsLoading(false);
  };

  return (
    <div className="chat-interface">
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}

export default ChatInterface;