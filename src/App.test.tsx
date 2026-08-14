import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /welcome dear visitor/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /access my portfolio/i })).toBeInTheDocument();
});
