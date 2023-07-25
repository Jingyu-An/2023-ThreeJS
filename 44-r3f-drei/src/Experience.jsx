import { MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls, PivotControls } from '@react-three/drei';
import { useRef } from "react";

export default function Experience() {
  const sphereRef = useRef();
  const cubeRef = useRef();
  const planeRef = useRef();
  
  return <>
    <OrbitControls makeDefault/>
    
    <directionalLight position={[ 1, 2, 3 ]} intensity={1.5}/>
    <ambientLight intensity={0.5}/>
    
    <PivotControls
      anchor={[ 0, 0, 0 ]}
      depthTest={false}
      lineWidth={1}
      axisColors={[ 'red', 'green', 'blue' ]}
      scale={100}
      opacity={0.3}
      fixed={true}
    >
      <mesh ref={sphereRef} position-x={-2}>
        <sphereGeometry/>
        <meshStandardMaterial color="orange"/>
        <Html
          position={[ 0, 1.5, 0 ]}
          wrapperClass={'label'}
          center
          distanceFactor={6}
          occlude={[ sphereRef, cubeRef ]}
        >
          Test Label
        </Html>
      </mesh>
    </PivotControls>
    
    <mesh ref={cubeRef} position-x={2} scale={1.5}>
      <boxGeometry/>
      <meshStandardMaterial color="mediumpurple"/>
    </mesh>
    <TransformControls object={cubeRef}/>
    
    <mesh ref={planeRef} position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry/>
      {/*<meshStandardMaterial color="greenyellow"/>*/}
      <MeshReflectorMaterial
        resolution={512}
        blur={[ 1000, 1000 ]}
        mixBlur={0.5}
        mirror={0.75}
        color={'greenyellow'}
      />
    </mesh>
    
    <Float>
      <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={1}
        color={'salmon'}
        position-y={2}
        maxWidth={2}
        textAlign={'center'}
      >
        I LOVE R3F
      </Text>
    </Float>
  </>
}