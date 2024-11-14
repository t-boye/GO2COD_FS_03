// src/components/Chat/Chat.jsx
import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import Message from './Message';
import MessageInput from './MessageInput';

const Chat = () => {
  const { messages } = useContext(ChatContext);

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default Chat;