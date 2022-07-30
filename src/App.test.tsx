import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders gap button', () => {
    render(<App />);
    const linkElement = screen.getByText(/Add Home here/i);
    expect(linkElement).toBeInTheDocument();
  });
});
