// src/pages/Home.jsx
import React from 'react';
import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { ChatProvider } from '../context/ChatContext';

const Home = () => {
  return (
    <ChatProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </ChatProvider>
  );
};

export default Home;