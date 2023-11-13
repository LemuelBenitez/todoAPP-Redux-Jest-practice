import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import Todo from './todo';

describe('Test for Todo App' , () =>{


test('Todo App Renders', () => {
  render(<App />);
  const linkElement = screen.getByText("Add Todo");
  expect(linkElement).toBeInTheDocument();
});


});