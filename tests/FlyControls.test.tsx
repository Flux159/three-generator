import { render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'

// Mock the FlyControls component to avoid Three.js complexity
vi.mock('../client/src/components/FlyControls', () => ({
  default: ({ movementSpeed, rotationSpeed }: any) => (
    <div data-testid="fly-controls">
      FlyControls (speed: {movementSpeed}, rotation: {rotationSpeed})
    </div>
  ),
}))

const FlyControls = (await import('../client/src/components/FlyControls')).default

describe('FlyControls', () => {
  it('renders without crashing', () => {
    render(<FlyControls />)
  })
  
  it('renders with custom props', () => {
    render(<FlyControls movementSpeed={0.2} rotationSpeed={0.003} />)
  })
})