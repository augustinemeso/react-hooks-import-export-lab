// src/__tests__/NavBar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar'; // Adjust the import path as necessary

describe('NavBar', () => {
  test('it renders without crashing', () => {
    render(<NavBar />);
  });
});
