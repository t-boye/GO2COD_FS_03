// src/components/Chat/MessageInput.jsx
import React, { useState, useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
        Send
      </button>
    </form>
  );
};

export default MessageInput;