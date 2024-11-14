// src/components/Sidebar/UserList.jsx
import React from 'react';
import './User List.css'; // Optional: Add your styles here

const UserList = () => {
  const users = ['Alice', 'Bob', 'Charlie']; // Example user list

  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;