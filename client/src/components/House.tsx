import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface HouseProps {
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

export default function House({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }: HouseProps) {
  const houseRef = useRef<Mesh>(null)
  const { scene } = useGLTF('/uploads/house.glb')
  
  return (
    <primitive 
      ref={houseRef}
      object={scene} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  )
}

useGLTF.preload('/uploads/house.glb')