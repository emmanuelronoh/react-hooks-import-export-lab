import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App'; // Updated path

test('it renders without crashing', () => {
  try {
    render(<App />);
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
