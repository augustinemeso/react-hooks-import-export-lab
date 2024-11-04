// src/__tests__/About.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this import for jest-dom matchers
import About from '../components/About';

describe('<About />', () => {
  test('renders an image', () => {
    const { getByAltText } = render(<About />);
    expect(getByAltText(/profile/i)).toBeInTheDocument(); // Ensure alt text is "Profile"
  });
});
