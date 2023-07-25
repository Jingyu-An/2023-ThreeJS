import * as THREE from 'three'
import { Center, OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshMatcapMaterial()

export default function Experience() {
  const donutsRef = useRef([])
  
  const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
  
  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true
    
    material.matcap = matcapTexture
    material.needsUpdate = true
  }, []);
  
  
  const tempArray = [ ...Array(100) ]
  
  return <>
    <Perf position="top-left"/>
    <OrbitControls makeDefault/>
    
    <Center>
      <Text3D
        font={'./fonts/helvetiker_regular.typeface.json'}
        size={0.75}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Hello World!
        <meshMatcapMaterial matcap={matcapTexture}/>
      </Text3D>
    </Center>
    
    {tempArray.map(( _, index ) =>
      <mesh
        key={index}
        ref={ (el) => donutsRef.current[index] = el }
        geometry={torusGeometry}
        material={material}
        position={[ Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5 ]}
        scale={Math.random() * 0.2 + 0.2}
        rotation={[ Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI ]}
      />
    )}
  </>
}