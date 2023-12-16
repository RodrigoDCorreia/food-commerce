import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Teste', () => {
  render(<App />)
  const linkElement = screen.getByText(/Teste/i)
  expect(linkElement).toBeInTheDocument()
})
