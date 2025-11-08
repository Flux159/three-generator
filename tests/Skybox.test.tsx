import { render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import Skybox from '../client/src/components/Skybox'

// Mock Three.js components for testing
vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn(),
}))

describe('Skybox', () => {
  it('renders without crashing', () => {
    render(<Skybox />)
  })
})