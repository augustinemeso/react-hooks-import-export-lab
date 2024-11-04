// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Check if the import path is correct

function Home() {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Location: {city}</p>
    </div>
  );
}

export default Home;
