import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SpinningCube from './components/SpinningCube'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App