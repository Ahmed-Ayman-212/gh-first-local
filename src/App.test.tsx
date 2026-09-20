import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('shows the getting-started content', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Get started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore vite/i })).toHaveAttribute(
      'href',
      'https://vite.dev/',
    )
  })

  it('increments the counter when clicked', () => {
    render(<App />)
    const counter = screen.getByRole('button', { name: 'Count is 0' })

    fireEvent.click(counter)

    expect(screen.getByRole('button', { name: 'Count is 1' })).toBeInTheDocument()
  })
})
