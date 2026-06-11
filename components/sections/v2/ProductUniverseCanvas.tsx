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
  const isFlagship = index < 2;

  return (
    <Float speed={1.05 + index * 0.11} rotationIntensity={0.18} floatIntensity={0.34}>
      <group position={position}>
        <mesh position={[0, -0.02, -0.02]} rotation={[0.08, index % 2 ? 0.22 : -0.22, 0]}>
          <boxGeometry args={[isFlagship ? 0.72 : 0.54, 0.03, isFlagship ? 0.42 : 0.32]} />
          <meshStandardMaterial
            color="#14120f"
            emissive={tone.color}
            emissiveIntensity={isFlagship ? 0.22 : 0.13}
            metalness={0.72}
            roughness={0.24}
            transparent
            opacity={0.92}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[isFlagship ? 0.23 : 0.17, 48, 48]} />
          <meshStandardMaterial
            color={tone.color}
            emissive={tone.glow}
            emissiveIntensity={isFlagship ? 0.9 : 0.7}
            metalness={0.48}
            roughness={0.22}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[isFlagship ? 0.45 : 0.32, 0.008, 10, 112]} />
          <meshBasicMaterial color={tone.glow} transparent opacity={isFlagship ? 0.52 : 0.36} />
        </mesh>
        <mesh rotation={[1.28, 0.18, index * 0.38]}>
          <torusGeometry args={[isFlagship ? 0.62 : 0.43, 0.004, 8, 112]} />
          <meshBasicMaterial
            blending={THREE.AdditiveBlending}
            color={tone.glow}
            depthWrite={false}
            transparent
            opacity={isFlagship ? 0.26 : 0.14}
          />
        </mesh>
        <Text
          position={[0, isFlagship ? -0.55 : -0.48, 0]}
          fontSize={isFlagship ? 0.155 : 0.13}
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

function SingularityCore() {
  const core = useRef<THREE.Group>(null);
  const glyphs = ["type", "fn", "sum", "0x", "io"];

  useFrame(({ clock }) => {
    if (!core.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    core.current.rotation.y = elapsed * 0.2;
    core.current.rotation.z = Math.sin(elapsed * 0.18) * 0.14;
  });

  return (
    <group ref={core}>
      <mesh>
        <sphereGeometry args={[0.34, 64, 64]} />
        <meshBasicMaterial color="#020206" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.47, 64, 64]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#45b7ad"
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.68, 0.025, 16, 160]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#ffd29a"
          transparent
          opacity={0.48}
          depthWrite={false}
        />
      </mesh>
      <mesh rotation={[1.18, 0.36, 0.2]}>
        <torusGeometry args={[0.92, 0.01, 12, 160]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#9af5ed"
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, 0.92, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.055, 1.72, 36, 1, true]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#d8ccff"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, -0.92, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.055, 1.72, 36, 1, true]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#ffb0bd"
          transparent
          opacity={0.14}
          depthWrite={false}
        />
      </mesh>

      {glyphs.map((glyph, index) => {
        const angle = (index / glyphs.length) * Math.PI * 2;
        return (
          <Text
            key={glyph}
            position={[Math.cos(angle) * 1.18, Math.sin(angle) * 0.22, Math.sin(angle) * 1.18]}
            rotation={[0, -angle + Math.PI / 2, 0]}
            fontSize={0.082}
            anchorX="center"
            anchorY="middle"
            color="#f7efe2"
            outlineWidth={0.002}
            outlineColor="#050506"
          >
            {glyph}
          </Text>
        );
      })}
    </group>
  );
}

function CinematicRig() {
  const rig = useRef<THREE.Group>(null);
  const lightSweep = useMemo(
    () =>
      Array.from({ length: 8 }, (_, laneIndex) => {
        const points: Array<[number, number, number]> = [];
        const y = -1.55 + laneIndex * 0.42;

        for (let step = 0; step <= 120; step += 1) {
          const progress = step / 120;
          points.push([
            -3.6 + progress * 7.2,
            y + Math.sin(progress * Math.PI * 2 + laneIndex * 0.6) * 0.06,
            -1.9 + Math.cos(progress * Math.PI + laneIndex) * 0.34,
          ]);
        }

        return {
          color: laneIndex % 2 === 0 ? "#9af5ed" : "#ffd29a",
          points,
        };
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!rig.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    rig.current.rotation.z = Math.sin(elapsed * 0.08) * 0.035;
    rig.current.position.y = Math.cos(elapsed * 0.12) * 0.05;
  });

  return (
    <group ref={rig} position={[0, -0.05, -0.2]} rotation={[0.04, -0.14, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.34, -0.06]}>
        <ringGeometry args={[1.04, 2.92, 192]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#45b7ad"
          depthWrite={false}
          side={THREE.DoubleSide}
          transparent
          opacity={0.055}
        />
      </mesh>
      <mesh rotation={[1.16, 0.1, 0.42]} position={[0, -0.04, -0.42]}>
        <ringGeometry args={[1.82, 3.44, 192]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#e8a55e"
          depthWrite={false}
          side={THREE.DoubleSide}
          transparent
          opacity={0.035}
        />
      </mesh>
      {lightSweep.map((lane, index) => (
        <Line
          key={index}
          points={lane.points}
          color={lane.color}
          lineWidth={index % 3 === 0 ? 1.1 : 0.68}
          transparent
          opacity={0.09 + (index % 3) * 0.03}
        />
      ))}
    </group>
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
      <SingularityCore />

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[0.68, 2.2, 128]} />
        <meshBasicMaterial
          color="#45b7ad"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[1.25, 0.12, 0.4]} position={[0, -0.06, 0]}>
        <ringGeometry args={[1.08, 2.62, 160]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#e8a55e"
          transparent
          opacity={0.035}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
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
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
      }}
    >
      <ambientLight intensity={0.92} />
      <pointLight position={[2.4, 3.2, 3.2]} intensity={4.8} color="#45b7ad" />
      <pointLight position={[-3.2, -2.2, 2.4]} intensity={2.6} color="#e8a55e" />
      <Stars radius={7} depth={3} count={460} factor={2.8} saturation={0} fade speed={0.45} />
      <CinematicRig />
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
