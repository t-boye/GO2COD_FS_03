// src/components/Sidebar/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-300 p-4">
      <h2 className="text-lg font-semibold mb-4">Chat Rooms</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Room 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Room 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">Room 3</a>
        </li>
        {/* Add more rooms as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;