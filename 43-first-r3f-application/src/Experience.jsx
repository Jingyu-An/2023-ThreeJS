import React, { useRef } from 'react';
import { extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject.jsx";

extend({ OrbitControls });

const Experience = () => {
  const { camera, gl } = useThree();
  
  const cubeRef = useRef();
  const groupRef = useRef();
  
  useFrame(( state, delta ) => {
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.x += delta;
    
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin( angle ) * 5;
    // state.camera.position.z = Math.cos( angle ) * 5;
    // state.camera.lookAt( 0, 0, 0 );
  })
  
  return (
    <>
      <orbitControls args={[ camera, gl.domElement ]}/>
      
      <directionalLight position={[ 1, 2, 3 ]} intensity={1.5}/>
      <ambientLight intensity={0.5}/>
      
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry/>
          <meshStandardMaterial color="hotpink"/>
        </mesh>
        
        <mesh ref={cubeRef} scale={1.5} position-x="2" rotation-y={Math.PI / 2}>
          <boxGeometry scale={1.5}/>
          <meshStandardMaterial color="mediumpurple"/>
        </mesh>
      </group>
      
      <mesh scale={10} position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry/>
        <meshStandardMaterial color="greenyellow"/>
      </mesh>
      
      <CustomObject/>
    </>
  );
};

export default Experience;