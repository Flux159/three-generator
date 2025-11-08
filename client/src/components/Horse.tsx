import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface HorseProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

export default function Horse({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: HorseProps) {
  const horseRef = useRef<Mesh>(null)
  const { scene } = useGLTF('/uploads/horse.glb')
  
  return (
    <primitive 
      ref={horseRef}
      object={scene} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  )
}

useGLTF.preload('/uploads/horse.glb')