import React from 'react';
import { Clone, useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF('./hamburger-draco.glb');
  
  return (
    <>
      <Clone object={model.scene} scale={0.30} position-x={-5}/>
      <Clone object={model.scene} scale={0.35} position-x={0}/>
      <Clone object={model.scene} scale={0.40} position-x={5}/>
    </>
  );
};

export default Model;

useGLTF.preload('./hamburger-draco.glb');