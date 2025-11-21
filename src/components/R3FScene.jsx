// src/components/R3FScene.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Molecule({ seed = 1 }) {
  const ref = useRef();
  const count = 200;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.4 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr[i * 3 + 0] = x + (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 1] = y + (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 2] = z + (Math.random() - 0.5) * 0.2;
    }
    return arr;
  }, [count, seed]);

  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 7) * 0.04;
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled>
        <PointMaterial size={0.05} sizeAttenuation depthWrite={false} color="#9FF4E0" />
      </Points>

      <mesh scale={1.6}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial color="#0b1020" metalness={0.2} roughness={0.9} transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

export default function R3FScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* make canvas clear to transparent */}
        <color attach="background" args={[0,0,0,0]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={0.6} />
        <Suspense fallback={null}>
          <Molecule seed={2} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate rotateSpeed={0.2} />
      </Canvas>
    </div>
  );
}
