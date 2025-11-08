import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface RockProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

export default function Rock({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: RockProps) {
  const rockRef = useRef<Mesh>(null)
  const { scene } = useGLTF('/uploads/rock.glb')
  
  return (
    <primitive 
      ref={rockRef}
      object={scene} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  )
}

useGLTF.preload('/uploads/rock.glb')