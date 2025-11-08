import { useRef } from 'react'
import { Mesh } from 'three'

function Landscape() {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#4a5d23" />
    </mesh>
  )
}

export default Landscape