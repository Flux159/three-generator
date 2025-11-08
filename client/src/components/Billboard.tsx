import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'
import * as THREE from 'three'

interface BillboardProps {
  textureUrl?: string
  position?: [number, number, number]
  width?: number
  height?: number
}

function Billboard({ 
  textureUrl, 
  position = [0, 0, 0], 
  width = 2, 
  height = 3 
}: BillboardProps) {
  const meshRef = useRef<Mesh>(null)
  const textureRef = useRef<THREE.Texture | null>(null)

  // Load texture when URL changes
  useEffect(() => {
    if (textureUrl) {
      const loader = new TextureLoader()
      loader.load(textureUrl, (texture) => {
        textureRef.current = texture
        if (meshRef.current) {
          const material = meshRef.current.material as THREE.MeshStandardMaterial
          material.map = texture
          material.needsUpdate = true
          material.transparent = true
        }
      })
    }
  }, [textureUrl])

  // Make billboard always face the camera
  useFrame(({ camera }) => {
    if (meshRef.current) {
      meshRef.current.quaternion.copy(camera.quaternion)
    }
  })

  return (
    <mesh 
      ref={meshRef} 
      position={position}
    >
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial 
        color="#ffffff" 
        transparent={true}
        opacity={textureUrl ? 1 : 0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Billboard