import React from 'react';
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as THREE from 'three';

const App = () => {
  
  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 3, 2, 6 ]
      }}
    >
      <Experience/>
    </Canvas>
  );
};

export default App;