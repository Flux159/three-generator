import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import SpinningCube from '../client/src/components/SpinningCube'

// Mock Three.js related modules for testing
vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn(),
}))

describe('SpinningCube', () => {
  it('renders without crashing', () => {
    render(<SpinningCube />)
  })
})