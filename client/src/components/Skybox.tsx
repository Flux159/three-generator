import { useRef } from 'react'
import { Mesh } from 'three'

function Skybox() {
  const meshRef = useRef<Mesh>(null)

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[100, 32, 32]} />
      <meshBasicMaterial color="#87CEEB" side={2} />
    </mesh>
  )
}

export default Skybox