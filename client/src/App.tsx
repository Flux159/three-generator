import { Canvas } from '@react-three/fiber'
import SpinningCube from './components/SpinningCube'
import Landscape from './components/Landscape'
import Skybox from './components/Skybox'
import Billboard from './components/Billboard'
import FlyControls from './components/FlyControls'

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
        <FlyControls />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontSize: '12px',
        pointerEvents: 'none'
      }}>
        <div>Click to lock mouse</div>
        <div>WASD/Arrows: Move</div>
        <div>Space: Up | Shift: Down</div>
      </div>
    </div>
  )
}

export default App