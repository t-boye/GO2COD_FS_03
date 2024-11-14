// src/components/Chat/Message.jsx
import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="mb-2">
      <strong className="text-blue-600">{message.sender}</strong>: <span>{message.text}</span>
    </div>
  );
};

export default Message;