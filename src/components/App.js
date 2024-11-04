// src/components/App.js
import React from 'react';
import Navbar from './NavBar';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
