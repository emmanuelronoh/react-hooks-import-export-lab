import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers
import App from '../components/App'; // Ensure this path is correct

test('it renders without crashing', () => {
  const { container } = render(<App />);
  
  // Check if the component renders by asserting that the container is in the document
  expect(container).toBeInTheDocument();
});
