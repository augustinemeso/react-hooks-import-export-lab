// src/__tests__/Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('<Home />', () => {
  test('renders username and city', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Welcome, Augustine Meso!/i)).toBeInTheDocument(); // Ensure this matches exactly
    expect(getByText(/Location: Nairobi, Kenya/i)).toBeInTheDocument(); // Ensure this matches exactly
  });
});
