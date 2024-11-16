import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bender Force Saga title', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { level: 1, name: /Bender Force Saga/i });
  expect(titleElement).toBeInTheDocument();
});
