import { Canvas } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import SpinningCube from "./components/SpinningCube";
import Landscape from "./components/Landscape";
import Skybox from "./components/Skybox";
// import Billboard from './components/Billboard'
import FlyControls from "./components/FlyControls";
import Rock from "./components/Rock";
import House from "./components/House";

function GrassPlane() {
  const grassTexture = useTexture("/uploads/grass_texture.png");

  return (
    <mesh position={[0, 0.1, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} />
      <meshStandardMaterial map={grassTexture} />
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
        <Skybox />
        <Landscape />
        {/* <Billboard position={[0, 1, -5]} textureUrl="/uploads/grass_texture.png" /> */}
        <GrassPlane />
        <SpinningCube position={[3, 0, 0]} />
        {/* <Rock position={[-2, -1.8, 3]} scale={0.4} /> */}
        <Rock position={[-3, -1.8, 4]} scale={0.3} rotation={[0, 0.5, 0]} />
        {/* <Rock position={[-1.5, -1.8, 2]} scale={0.5} rotation={[0, -0.3, 0]} /> */}
        <House position={[5, -0.5, -2]} scale={0.8} />
        <FlyControls />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "5px",
          fontFamily: "monospace",
          fontSize: "12px",
          pointerEvents: "none",
        }}
      >
        <div>Click to lock mouse</div>
        <div>WASD/Arrows: Move</div>
        <div>Space: Up | Shift: Down</div>
      </div>
    </div>
  );
}

export default App;
