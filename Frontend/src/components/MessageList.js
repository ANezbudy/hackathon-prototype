import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;