"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type ModelType = "drone" | "airship" | "radio" | "laptop" | "robot" | "poster";

function Shape({ type }: { type: ModelType }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.6;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  const color = {
    drone: "#CC0000",
    airship: "#4488FF",
    radio: "#44BB88",
    laptop: "#8844FF",
    robot: "#FF8844",
    poster: "#FFCC00",
  }[type];

  return (
    <mesh ref={meshRef}>
      {type === "drone" && <octahedronGeometry args={[1, 0]} />}
      {type === "airship" && <sphereGeometry args={[0.8, 16, 16]} />}
      {type === "radio" && <boxGeometry args={[0.8, 1.4, 0.4]} />}
      {type === "laptop" && <boxGeometry args={[1.4, 0.9, 0.08]} />}
      {type === "robot" && <torusGeometry args={[0.7, 0.25, 8, 20]} />}
      {type === "poster" && <cylinderGeometry args={[0.7, 0.7, 0.15, 6]} />}
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

export default function MiniModel({ type = "drone" }: { type?: ModelType }) {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#CC0000" />
      <Shape type={type} />
    </Canvas>
  );
}
