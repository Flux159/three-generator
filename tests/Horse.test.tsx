import { render } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import Horse from '../client/src/components/Horse'
import { vi } from 'vitest'

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

describe('Horse', () => {
  it('renders without crashing', () => {
    render(
      <Canvas>
        <Horse />
      </Canvas>
    )
  })

  it('renders with custom position, scale, and rotation', () => {
    render(
      <Canvas>
        <Horse 
          position={[1, 2, 3]} 
          scale={1.5} 
          rotation={[0, 1, 0]} 
        />
      </Canvas>
    )
  })
})