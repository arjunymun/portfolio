"use client";

import { Float, Line, Stars, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

import type { UniverseNode } from "@/lib/content";

interface ProductUniverseCanvasProps {
  nodes: UniverseNode[];
}

const toneMap = {
  teal: { color: "#45b7ad", glow: "#9af5ed" },
  amber: { color: "#e8a55e", glow: "#ffd29a" },
  rose: { color: "#ff6b81", glow: "#ffb0bd" },
  violet: { color: "#a78bfa", glow: "#d8ccff" },
  steel: { color: "#b8c7d9", glow: "#f4f8ff" },
} as const;

const positions: Array<[number, number, number]> = [
  [-1.72, 0.62, 0.1],
  [1.72, 0.54, -0.25],
  [-1.08, -0.56, 0.82],
  [1.08, -0.48, 0.62],
  [0, 1.22, -0.68],
  [0, 0.18, 1.12],
];

function DataNode({
  node,
  position,
  index,
}: {
  node: UniverseNode;
  position: [number, number, number];
  index: number;
}) {
  const tone = toneMap[node.tone];

  return (
    <Float speed={1.2 + index * 0.12} rotationIntensity={0.25} floatIntensity={0.42}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.2, 48, 48]} />
          <meshStandardMaterial
            color={tone.color}
            emissive={tone.glow}
            emissiveIntensity={0.78}
            metalness={0.48}
            roughness={0.22}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.34, 0.008, 10, 96]} />
          <meshBasicMaterial color={tone.glow} transparent opacity={0.42} />
        </mesh>
        <Text
          position={[0, -0.48, 0]}
          fontSize={0.14}
          anchorX="center"
          anchorY="middle"
          color="#fff7ea"
          outlineWidth={0.004}
          outlineColor="#120f0d"
        >
          {node.label}
        </Text>
        <Text
          position={[0, -0.68, 0]}
          fontSize={0.062}
          anchorX="center"
          anchorY="middle"
          color="#c7bfb4"
        >
          {node.detail}
        </Text>
      </group>
    </Float>
  );
}

function ProductGraph({ nodes }: ProductUniverseCanvasProps) {
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  const graphScale = size.width < 640 ? 0.72 : 1;
  const connectionPairs = useMemo(
    () => [
      [0, 2],
      [0, 3],
      [0, 5],
      [1, 4],
      [1, 5],
      [2, 3],
      [3, 5],
      [4, 5],
    ],
    [],
  );

  useFrame(({ clock, pointer, camera }) => {
    const elapsed = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(elapsed * 0.18) * 0.18 + pointer.x * 0.16;
      group.current.rotation.x = Math.cos(elapsed * 0.14) * 0.08 - pointer.y * 0.09;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.65, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.1 + pointer.y * 0.35, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group} scale={graphScale}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[0.68, 2.2, 128]} />
        <meshBasicMaterial color="#45b7ad" transparent opacity={0.09} side={THREE.DoubleSide} />
      </mesh>

      {connectionPairs.map(([from, to]) => (
        <Line
          key={`${from}-${to}`}
          points={[positions[from], positions[to]]}
          color="#f7efe2"
          lineWidth={1.15}
          transparent
          opacity={0.2}
        />
      ))}

      {nodes.map((node, index) => (
        <DataNode
          key={node.label}
          node={node}
          position={positions[index % positions.length]}
          index={index}
        />
      ))}
    </group>
  );
}

export function ProductUniverseCanvas({ nodes }: ProductUniverseCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.1, 5.7], fov: 45 }}
      dpr={[1, 1.55]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      }}
    >
      <color attach="background" args={["#0d0b0a"]} />
      <ambientLight intensity={0.92} />
      <pointLight position={[2.4, 3.2, 3.2]} intensity={4.8} color="#45b7ad" />
      <pointLight position={[-3.2, -2.2, 2.4]} intensity={2.6} color="#e8a55e" />
      <Stars radius={7} depth={3} count={460} factor={2.8} saturation={0} fade speed={0.45} />
      <Suspense fallback={null}>
        <ProductGraph nodes={nodes} />
      </Suspense>
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.55} luminanceThreshold={0.25} luminanceSmoothing={0.55} />
        <Vignette eskil={false} offset={0.18} darkness={0.72} />
      </EffectComposer>
    </Canvas>
  );
}
