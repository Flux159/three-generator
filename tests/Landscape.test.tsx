import { render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import Landscape from '../client/src/components/Landscape'

// Mock Three.js components for testing
vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn(),
}))

describe('Landscape', () => {
  it('renders without crashing', () => {
    render(<Landscape />)
  })
})