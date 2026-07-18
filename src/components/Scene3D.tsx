"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 150 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const palette = [
      [0.788, 0.659, 0.298], // gold
      [0.961, 0.776, 0.816], // blush
      [0.545, 0.620, 0.545], // sage
    ];
    for (let i = 0; i < count; i++) {
      const c = palette[i % 3];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return col;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.2;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <MeshDistortMaterial color={color} transparent opacity={0.08} distort={0.2} speed={1} roughness={0.5} />
      </mesh>
    </Float>
  );
}

function FloatingCard3D({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.25 + position[0]) * 0.1;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.2 + position[2]) * 0.15;
    }
  });
  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.3}>
      <group ref={ref} position={position} rotation={rotation}>
        <RoundedBox args={[1.2, 1.7, 0.04]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color={color} transparent opacity={0.15} roughness={0.3} metalness={0.5} />
        </RoundedBox>
        <RoundedBox args={[1.1, 1.6, 0.03]} radius={0.06} smoothness={4} position={[0, 0, 0.03]}>
          <meshStandardMaterial color="#faf8f5" transparent opacity={0.2} roughness={0.2} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#c9a84c" />
      <pointLight position={[-5, -3, 5]} intensity={0.3} color="#f5c6d0" />
      <pointLight position={[0, 0, -5]} intensity={0.2} color="#8b9e8b" />

      <Particles count={120} />
      <FloatingOrb position={[-4, 1, -3]} color="#c9a84c" scale={1.8} />
      <FloatingOrb position={[4, -1, -4]} color="#f5c6d0" scale={1.5} />
      <FloatingOrb position={[0, -2, -5]} color="#8b9e8b" scale={1.2} />

      <FloatingCard3D position={[-3, 0.5, -2]} rotation={[0.1, 0.2, 0.05]} color="#c9a84c" />
      <FloatingCard3D position={[3, -0.5, -3]} rotation={[-0.05, -0.3, 0.1]} color="#f5c6d0" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-ivory/80 pointer-events-none" />
    </div>
  );
}
