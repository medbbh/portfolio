/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas, events } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF, } from '@react-three/drei'
// import { CanvasLoader } from '../Loader'


const Computers = (isMobile) => {
  const computer = useGLTF('../../../public/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"></hemisphereLight>
      <pointLight intensity={1} />
      <spotLight 
      position={[-20, 50, 10]}
        ongle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.5}
        position={isMobile ? [0, -3.9, -2.2] : [0, -3.25, -1.5]}
        rotation = {[-0.01, -0.1, -0.1]}
        
      />

    </mesh>

  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }
  },[])

  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers  isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas