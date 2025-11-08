import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SpinningCube from './components/SpinningCube'
import Landscape from './components/Landscape'
import Skybox from './components/Skybox'
import Billboard from './components/Billboard'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
        <Skybox />
        <Landscape />
        <Billboard position={[0, 1, -5]} />
        <SpinningCube position={[3, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App