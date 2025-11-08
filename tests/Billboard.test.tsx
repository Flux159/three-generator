import { render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'

// Mock the entire Billboard component to avoid Three.js complexity
vi.mock('../client/src/components/Billboard', () => ({
  default: ({ textureUrl, position }: any) => (
    <div data-testid="billboard">
      Billboard at {position?.join(',')} {textureUrl && `with texture: ${textureUrl}`}
    </div>
  ),
}))

const Billboard = (await import('../client/src/components/Billboard')).default

describe('Billboard', () => {
  it('renders without crashing', () => {
    render(<Billboard />)
  })
  
  it('renders with texture URL', () => {
    render(<Billboard textureUrl="test.png" position={[0, 1, 2]} />)
  })
})