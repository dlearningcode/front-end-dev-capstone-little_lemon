import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reservations heading', () => {
  render(<App />);
  const headigElement = screen.getByText(/Reserve Your Table/i);
  expect(headigElement).toBeInTheDocument();
});
