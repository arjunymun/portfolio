"use client";

import { Line } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function SignalPlane({
  color,
  position,
  rotation,
  scale,
}: {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[1, 0.018, 0.64]} />
        <meshStandardMaterial
          color="#11100f"
          emissive={color}
          emissiveIntensity={0.18}
          metalness={0.62}
          roughness={0.28}
          transparent
          opacity={0.78}
        />
      </mesh>
      <mesh position={[0, 0.014, 0]}>
        <planeGeometry args={[0.86, 0.48, 1, 1]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color={color}
          depthWrite={false}
          transparent
          opacity={0.09}
        />
      </mesh>
    </group>
  );
}

function SignalLanes() {
  const lanes = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const points: Array<[number, number, number]> = [];
        const y = -1.2 + index * 0.3;
        const z = -2.2 + (index % 3) * 0.42;

        for (let step = 0; step <= 90; step += 1) {
          const progress = step / 90;
          const x = -4.2 + progress * 8.4;
          const bend = Math.sin(progress * Math.PI * 2 + index * 0.68) * 0.08;
          points.push([x, y + bend, z + Math.cos(progress * Math.PI + index) * 0.16]);
        }

        return {
          color: index % 3 === 0 ? "#9af5ed" : index % 3 === 1 ? "#ffd29a" : "#d8ccff",
          opacity: 0.13 + (index % 4) * 0.025,
          points,
        };
      }),
    [],
  );

  return (
    <>
      {lanes.map((lane, index) => (
        <Line
          key={index}
          points={lane.points}
          color={lane.color}
          lineWidth={index % 4 === 0 ? 1.4 : 0.86}
          transparent
          opacity={lane.opacity}
        />
      ))}
    </>
  );
}

function ProductSignalScene({ reduceMotion }: { reduceMotion: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const { size } = useThree();
  const compact = size.width < 720;
  const planeScale = compact ? 0.72 : 1;

  useFrame(({ camera, clock, pointer }) => {
    const elapsed = clock.getElapsedTime();

    if (rig.current) {
      rig.current.rotation.y = reduceMotion ? -0.24 : -0.24 + Math.sin(elapsed * 0.16) * 0.12;
      rig.current.rotation.x = reduceMotion ? 0.22 : 0.22 - pointer.y * 0.08;
      rig.current.position.x = reduceMotion ? 0.12 : 0.12 + pointer.x * 0.18;
    }

    if (!reduceMotion) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, 0.25 + pointer.x * 0.36, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.08 + pointer.y * 0.22, 0.04);
      camera.lookAt(0, 0.05, -0.8);
    }
  });

  return (
    <group ref={rig} position={[0.1, 0.02, -0.7]} scale={planeScale}>
      <SignalLanes />

      <mesh position={[0, 0, -0.65]}>
        <sphereGeometry args={[0.54, 64, 64]} />
        <meshBasicMaterial color="#020205" transparent opacity={0.92} />
      </mesh>
      <mesh position={[0, 0, -0.65]}>
        <sphereGeometry args={[0.86, 64, 64]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#45b7ad"
          depthWrite={false}
          transparent
          opacity={0.11}
        />
      </mesh>

      <mesh position={[0, 0, -0.65]} rotation={[1.16, 0.1, -0.18]}>
        <torusGeometry args={[1.18, 0.018, 12, 180]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#ffd29a"
          depthWrite={false}
          transparent
          opacity={0.38}
        />
      </mesh>
      <mesh position={[0, 0, -0.65]} rotation={[1.32, -0.18, 0.18]}>
        <torusGeometry args={[1.72, 0.009, 10, 180]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#9af5ed"
          depthWrite={false}
          transparent
          opacity={0.24}
        />
      </mesh>

      <SignalPlane
        color="#45b7ad"
        position={[-1.35, 0.52, 0.15]}
        rotation={[0.42, -0.34, -0.1]}
        scale={[1.38, 1, 1.05]}
      />
      <SignalPlane
        color="#a78bfa"
        position={[1.15, -0.02, -0.02]}
        rotation={[0.18, 0.42, 0.08]}
        scale={[1.12, 1, 0.92]}
      />
      <SignalPlane
        color="#e8a55e"
        position={[0.08, -0.78, 0.34]}
        rotation={[-0.28, 0.18, 0.16]}
        scale={[1.26, 1, 0.86]}
      />
    </group>
  );
}

export function HeroSignalCanvas({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <Canvas
      camera={{ position: [0.2, 0.1, 5.2], fov: 43 }}
      dpr={[1, 1.45]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
      }}
    >
      <ambientLight intensity={0.54} />
      <pointLight color="#9af5ed" intensity={3.4} position={[2.4, 2.2, 2.4]} />
      <pointLight color="#ffd29a" intensity={2.2} position={[-2.2, -1.8, 2.6]} />
      <Suspense fallback={null}>
        <ProductSignalScene reduceMotion={reduceMotion} />
      </Suspense>
      <EffectComposer multisampling={0}>
        <Bloom intensity={0.48} luminanceThreshold={0.16} luminanceSmoothing={0.6} />
        <Vignette eskil={false} offset={0.08} darkness={0.7} />
      </EffectComposer>
    </Canvas>
  );
}
