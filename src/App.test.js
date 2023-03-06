import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about component', () => {
  render(<App />)
  const aboutSection = screen.getByText(/first tech role/i)
  expect(aboutSection).toBeInTheDocument()
})