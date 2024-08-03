import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home'; // Updated path

test('it renders without crashing', () => {
  try {
    render(<Home />);
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
