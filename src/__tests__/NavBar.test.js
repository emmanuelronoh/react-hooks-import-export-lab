// import React from 'react';
// import { render } from '@testing-library/react';
// import NavBar from '../components/NavBar'; // Adjust the path according to your project structure

// test('it renders without crashing', () => {
//   try {
//     render(<NavBar />);
//   } catch (e) {
//     throw new Error("Make sure to export this component!");
//   }
// });

import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar'; // Updated path

test('it renders without crashing', () => {
  try {
    render(<NavBar />);
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
