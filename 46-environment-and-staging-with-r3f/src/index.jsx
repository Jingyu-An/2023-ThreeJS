import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

// const created = (state) => {
//   // state.gl.setClearColor('lightblue', 1)
//   state.scene.background = new THREE.Color('lightblue')
// }

root.render(
  <Canvas
    shadows={ false }
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [ -4, 3, 6 ]
    }}
    // onCreated={ created }
  >
    <color
      args={ ['ivory'] }
      attach="background"
    />
    <Experience/>
  </Canvas>
)