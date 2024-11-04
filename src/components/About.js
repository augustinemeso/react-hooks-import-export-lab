// src/components/About.js
import React from 'react';
import { image } from '../data/user'; // Adjust the import path as necessary

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={image} alt="Profile" />
    </div>
  );
};

export default About;
