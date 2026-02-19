"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import { useRef } from "react";
import FloatingSphere from "./FloatingSphere";
import Lights from "./Lights";

function CameraRig() {
  const ref = useRef();

  useFrame((state) => {
    const { pointer } = state;

    ref.current.position.x = pointer.x * 2;
    ref.current.position.y = pointer.y * 2;
  });

  return (
    <group ref={ref}>
      <FloatingSphere />
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 2]}>
      <Environment preset="night" />
      <Lights />
      <Stars
        radius={100}
        depth={60}
        count={5000}
        factor={6}
        saturation={0}
        speed={3}
        fade
      />

      <CameraRig />
    </Canvas>
  );
}
