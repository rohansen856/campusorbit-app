"use client"

import { PresentationControls, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model(props) {
  const { scene, animations } = useGLTF("/animations/campusorbit.glb")

  return <primitive object={scene} {...props}></primitive>
}

export function Logo3d() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 40 }}
      shadows
      className="animate-scroll direction-alternate overflow-visible"
    >
      <PresentationControls speed={1.5} zoom={0.5} polar={[0, Math.PI / 4]}>
        <Stage environment={"dawn"}>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  )
}
