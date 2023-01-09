import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // import needed to display App

// test('renders learn react link', () => {
//   render(<App />); // Render method creates a virtual dom,
//   const linkElement = screen.getByText(/learn react/i); // Will find the element that is displayed,
//   // (i)--> Case insensitive
//   // /learn react/i regular expression that is case-insensitive
//   // could use 'Learn React'
//   expect(linkElement).toBeInTheDocument(); // assertion that causes test to succeed or fail -- Jest-Dom
//   // .toBeInTheDocument() is a function that can be used to find the variable you defined earlier
// });

// Section 2: Simple App Tests
test ('Correct initial color for Butotn', () => {
  render(<App />);
  // Will test to seee if that the button will have the string Change to blue
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  // expect the background color to be red
  expect(colorButton).toHaveStyle({background: 'red'})
})
test('button action turns  it blue when clicked', ()=>{
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to red'})

})

