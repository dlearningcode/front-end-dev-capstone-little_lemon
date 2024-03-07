import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reservations heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Reserve Your Table/i);
  expect(headingElement).toBeInTheDocument();
});
