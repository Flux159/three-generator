import { render } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import { vi } from 'vitest'
import House from '../client/src/components/House'

// Mock the @react-three/drei module
vi.mock('@react-three/drei', () => ({
  useGLTF: Object.assign(vi.fn(() => ({
    scene: {
      position: { set: vi.fn() },
      scale: { set: vi.fn() },
      rotation: { set: vi.fn() }
    }
  })), {
    preload: vi.fn()
  })
}))

describe('House', () => {
  it('renders without crashing', () => {
    render(
      <Canvas>
        <House />
      </Canvas>
    )
  })

  it('renders with custom position', () => {
    render(
      <Canvas>
        <House position={[1, 2, 3]} />
      </Canvas>
    )
  })

  it('renders with custom scale', () => {
    render(
      <Canvas>
        <House scale={2} />
      </Canvas>
    )
  })

  it('renders with custom rotation', () => {
    render(
      <Canvas>
        <House rotation={[0.5, 1, 0.2]} />
      </Canvas>
    )
  })
})