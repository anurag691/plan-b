"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const palette = [
      [0.486, 0.227, 0.929],
      [0.925, 0.282, 0.6],
      [0.024, 0.714, 0.831],
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
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function FloatingOrb({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
}

function FloatingCard3D({
  position,
  rotation,
  color1,
  color2,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color1: string;
  color2: string;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        rotation[1] + Math.sin(state.clock.elapsedTime * 0.4 + position[0]) * 0.15;
      ref.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[2]) * 0.2;
    }
  });

  return (
    <RoundedBox ref={ref} args={[1.4, 2, 0.05]} radius={0.1} smoothness={4} position={position} rotation={rotation}>
      <meshStandardMaterial
        color={color1}
        transparent
        opacity={0.25}
        roughness={0.1}
        metalness={0.8}
      />
    </RoundedBox>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#ec4899" />
      <pointLight position={[0, 0, -5]} intensity={0.4} color="#06b6d4" />

      <Particles count={300} />

      <FloatingOrb position={[-4, 2, -3]} color="#7c3aed" scale={2} />
      <FloatingOrb position={[4, -1, -4]} color="#ec4899" scale={1.5} />
      <FloatingOrb position={[0, -3, -5]} color="#06b6d4" scale={1.8} />

      <FloatingCard3D position={[-3, 1, -2]} rotation={[0.2, 0.3, 0.1]} color1="#7c3aed" color2="#ec4899" />
      <FloatingCard3D position={[3, -0.5, -3]} rotation={[-0.1, -0.4, 0.2]} color1="#ec4899" color2="#06b6d4" />
      <FloatingCard3D position={[1, 2.5, -4]} rotation={[0.3, 0.5, -0.1]} color1="#06b6d4" color2="#7c3aed" />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark pointer-events-none" />
    </div>
  );
}
