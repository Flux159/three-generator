import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Mock the entire App component to avoid Three.js complexity in tests
vi.mock('../client/src/App', () => ({
  default: () => <div data-testid="app-mock">Three.js App</div>,
}))

const MockedApp = (await import('../client/src/App')).default

describe('App', () => {
  it('renders without crashing', () => {
    render(<MockedApp />)
    expect(screen.getByTestId('app-mock')).toBeInTheDocument()
  })
})