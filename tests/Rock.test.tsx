import { render } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import { vi } from 'vitest'
import Rock from '../client/src/components/Rock'

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

describe('Rock', () => {
  it('renders without crashing', () => {
    render(
      <Canvas>
        <Rock />
      </Canvas>
    )
  })

  it('renders with custom position', () => {
    render(
      <Canvas>
        <Rock position={[1, 2, 3]} />
      </Canvas>
    )
  })

  it('renders with custom scale', () => {
    render(
      <Canvas>
        <Rock scale={2} />
      </Canvas>
    )
  })

  it('renders with custom rotation', () => {
    render(
      <Canvas>
        <Rock rotation={[0.5, 1, 0.2]} />
      </Canvas>
    )
  })
})