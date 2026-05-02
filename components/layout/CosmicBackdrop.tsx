"use client";

import { Line, Stars, Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useReducedMotion } from "framer-motion";
import { Suspense, useMemo, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";

function subscribe() {
  return () => {};
}

function subscribeScroll(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

function getWebGLSnapshot() {
  if (typeof document === "undefined") {
    return false;
  }

  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
}

function getServerSnapshot() {
  return false;
}

function getScrollSnapshot() {
  if (typeof window === "undefined") {
    return 0;
  }

  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (documentHeight <= 0) {
    return 0;
  }

  return Math.min(1, Math.max(0, window.scrollY / documentHeight));
}

function seededUnit(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

function EventHorizon({
  morphProgress,
  reduceMotion,
}: {
  morphProgress: number;
  reduceMotion: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  const compact = size.width < 720;
  const baseX = compact ? 0.42 : 0.92;
  const baseY = compact ? 0.9 : 0.62;
  const singularityStrength = Math.max(0.2, 1 - morphProgress * 0.82);
  const bands = useMemo(
    () =>
      Array.from({ length: 9 }, (_, bandIndex) => {
        const points: Array<[number, number, number]> = [];
        const radius = 1.08 + bandIndex * 0.115;
        const tilt = 0.24 + bandIndex * 0.015;

        for (let step = 0; step <= 260; step += 1) {
          const t = (step / 260) * Math.PI * 2;
          const ripple = Math.sin(t * 3 + bandIndex * 0.72) * 0.025;
          points.push([
            Math.cos(t) * (radius + ripple),
            Math.sin(t * 2 + bandIndex) * 0.018,
            Math.sin(t) * radius * tilt,
          ]);
        }

        return {
          color: bandIndex % 3 === 0 ? "#9af5ed" : bandIndex % 3 === 1 ? "#ffd29a" : "#d8ccff",
          opacity: 0.2 - bandIndex * 0.011,
          points,
        };
      }),
    [],
  );
  const photonPaths = useMemo(
    () =>
      Array.from({ length: 14 }, (_, pathIndex) => {
        const points: Array<[number, number, number]> = [];
        const lane = (pathIndex - 6.5) * 0.105;
        const twist = pathIndex * 0.31;

        for (let step = 0; step <= 220; step += 1) {
          const progress = step / 220;
          const x = -3.25 + progress * 6.5;
          const gravity = Math.exp(-Math.pow((progress - 0.5) * 5.2, 2));
          const curl = (progress - 0.5) * Math.PI * 5.6 + twist;
          points.push([
            x,
            lane + Math.sin(curl) * gravity * 0.46,
            Math.cos(curl) * gravity * 0.62 + (pathIndex % 2 === 0 ? 0.12 : -0.12),
          ]);
        }

        return {
          color: pathIndex % 3 === 0 ? "#fff7ea" : pathIndex % 3 === 1 ? "#9af5ed" : "#ffd29a",
          opacity: 0.16 + (pathIndex % 4) * 0.024,
          points,
        };
      }),
    [],
  );
  const lensArcs = useMemo(
    () =>
      Array.from({ length: 7 }, (_, arcIndex) => {
        const points: Array<[number, number, number]> = [];
        const radius = 1.35 + arcIndex * 0.26;
        const start = -0.74 + arcIndex * 0.045;
        const end = 0.86 - arcIndex * 0.035;

        for (let step = 0; step <= 120; step += 1) {
          const t = start + ((end - start) * step) / 120;
          const angle = t * Math.PI;
          points.push([
            Math.cos(angle) * radius,
            0.22 + Math.sin(angle) * radius * 0.33,
            Math.sin(angle) * radius * 0.58 - 0.34,
          ]);
        }

        return points;
      }),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    group.current.rotation.z = reduceMotion ? -0.12 : elapsed * 0.035 - 0.12;
    group.current.rotation.y = reduceMotion ? -0.28 : -0.28 + pointer.x * 0.08;
    group.current.rotation.x = reduceMotion ? 0.72 : 0.72 - pointer.y * 0.045;
    group.current.position.x =
      baseX +
      morphProgress * (compact ? -0.34 : -0.72) +
      (reduceMotion ? 0 : Math.sin(elapsed * 0.09) * 0.46);
    group.current.position.y =
      baseY +
      morphProgress * (compact ? -0.08 : 0.22) +
      (reduceMotion ? 0 : Math.cos(elapsed * 0.075) * 0.22);
    const scale = (compact ? 0.7 : 1) * (1 - morphProgress * 0.2);
    group.current.scale.setScalar(scale);
  });

  return (
    <group
      ref={group}
      position={compact ? [baseX, baseY, -2.6] : [baseX, baseY, -2.8]}
      scale={compact ? 0.7 : 1}
    >
      <mesh>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshBasicMaterial color="#010105" transparent opacity={0.98 * singularityStrength} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.74, 64, 64]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#45b7ad"
          depthWrite={false}
          transparent
          opacity={0.13 * singularityStrength}
        />
      </mesh>
      <mesh rotation={[1.36, 0.12, 0.16]}>
        <torusGeometry args={[1.02, 0.032, 16, 180]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#ffd29a"
          depthWrite={false}
          transparent
          opacity={0.24 * singularityStrength}
        />
      </mesh>
      <mesh rotation={[1.28, -0.16, -0.12]}>
        <torusGeometry args={[1.22, 0.014, 12, 180]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#9af5ed"
          depthWrite={false}
          transparent
          opacity={0.18 * singularityStrength}
        />
      </mesh>

      <mesh position={[0, 1.78, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[0.12, 4.1, 36, 1, true]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#9af5ed"
          depthWrite={false}
          transparent
          opacity={0.15 * singularityStrength}
        />
      </mesh>
      <mesh position={[0, -1.78, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.12, 4.1, 36, 1, true]} />
        <meshBasicMaterial
          blending={THREE.AdditiveBlending}
          color="#ffb0bd"
          depthWrite={false}
          transparent
          opacity={0.1 * singularityStrength}
        />
      </mesh>

      {photonPaths.map((path, index) => (
        <Line
          key={`photon-${index}`}
          points={path.points}
          color={path.color}
          lineWidth={index % 5 === 0 ? 1.2 : 0.72}
          transparent
          opacity={(path.opacity + 0.05) * singularityStrength}
        />
      ))}
      {lensArcs.map((points, index) => (
        <Line
          key={`lens-${index}`}
          points={points}
          color={index % 2 === 0 ? "#f7efe2" : "#9af5ed"}
          lineWidth={1.6 - index * 0.12}
          transparent
          opacity={(0.2 - index * 0.014) * singularityStrength}
        />
      ))}
      {bands.map((band, index) => (
        <Line
          key={index}
          points={band.points}
          color={band.color}
          lineWidth={index < 2 ? 1.25 : 0.9}
          transparent
          opacity={(band.opacity + 0.04) * singularityStrength}
        />
      ))}
    </group>
  );
}

function NeuralConstellation({
  reduceMotion,
  strength,
}: {
  reduceMotion: boolean;
  strength: number;
}) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const shell = index % 3;
        const theta = (index / 18) * Math.PI * 2;
        const row = Math.floor(index / 3) - 2.5;
        return {
          glyph: ["fn", "AI", "db", "UX", "λ", "io"][index % 6],
          position: [
            Math.cos(theta) * (0.7 + shell * 0.52),
            row * 0.28 + Math.sin(theta * 1.7) * 0.2,
            Math.sin(theta) * (0.58 + shell * 0.38),
          ] as [number, number, number],
          tone: index % 3 === 0 ? "#9af5ed" : index % 3 === 1 ? "#ffd29a" : "#d8ccff",
        };
      }),
    [],
  );
  const links = useMemo(
    () => [
      [0, 3],
      [0, 6],
      [1, 4],
      [1, 7],
      [2, 5],
      [2, 8],
      [3, 9],
      [4, 10],
      [5, 11],
      [6, 12],
      [7, 13],
      [8, 14],
      [9, 15],
      [10, 16],
      [11, 17],
      [12, 15],
      [13, 16],
      [14, 17],
      [3, 4],
      [6, 7],
      [9, 10],
      [12, 13],
    ],
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) {
      return;
    }

    const elapsed = clock.getElapsedTime();
    group.current.rotation.y = (reduceMotion ? 0.18 : elapsed * 0.065) + pointer.x * 0.08;
    group.current.rotation.x = -0.18 - pointer.y * 0.045;
    group.current.scale.setScalar(0.78 + strength * 0.68);
  });

  if (strength <= 0.01) {
    return null;
  }

  return (
    <group ref={group} position={[-0.42, -0.18, -1.46]}>
      {links.map(([from, to], index) => (
        <Line
          key={`${from}-${to}`}
          points={[nodes[from].position, nodes[to].position]}
          color={index % 2 === 0 ? "#9af5ed" : "#ffd29a"}
          lineWidth={0.86}
          transparent
          opacity={0.1 + strength * 0.28}
        />
      ))}

      {nodes.map((node, index) => (
        <group key={`${node.glyph}-${index}`} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.07 + (index % 4) * 0.007, 24, 24]} />
            <meshBasicMaterial
              blending={THREE.AdditiveBlending}
              color={node.tone}
              depthWrite={false}
              transparent
              opacity={0.32 + strength * 0.68}
            />
          </mesh>
          <Text
            position={[0, -0.16, 0]}
            fontSize={0.058}
            anchorX="center"
            anchorY="middle"
            color="#fff7ea"
            outlineWidth={0.002}
            outlineColor="#050506"
            fillOpacity={strength}
          >
            {node.glyph}
          </Text>
        </group>
      ))}
    </group>
  );
}

function BraneSheets({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const sheets = useMemo(
    () =>
      Array.from({ length: 11 }, (_, sheetIndex) => {
        const points: Array<[number, number, number]> = [];
        for (let step = 0; step <= 120; step += 1) {
          const x = -4.6 + step * 0.075;
          const phase = sheetIndex * 0.46;
          points.push([
            x,
            -1.45 + sheetIndex * 0.24 + Math.sin(step * 0.095 + phase) * 0.05,
            -2.8 + Math.cos(step * 0.05 + phase) * 0.22,
          ]);
        }

        return points;
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current || reduceMotion) {
      return;
    }

    group.current.position.x = Math.sin(clock.getElapsedTime() * 0.16) * 0.16;
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.11) * 0.045;
  });

  return (
    <group ref={group} position={[-1.35, -0.18, -0.4]} rotation={[0.1, -0.22, -0.08]}>
      {sheets.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index % 2 === 0 ? "#45b7ad" : "#e8a55e"}
          lineWidth={0.42}
          transparent
          opacity={0.11}
        />
      ))}
    </group>
  );
}

function StarStratum({
  count,
  color,
  radius,
  size,
  speed,
  reduceMotion,
}: {
  color: string;
  count: number;
  radius: number;
  reduceMotion: boolean;
  size: number;
  speed: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const theta = seededUnit(index, radius) * Math.PI * 2;
      const phi = Math.acos(2 * seededUnit(index, radius + 11) - 1);
      const distance = radius * (0.42 + seededUnit(index, radius + 23) * 0.58);
      values[index * 3] = Math.sin(phi) * Math.cos(theta) * distance;
      values[index * 3 + 1] = Math.sin(phi) * Math.sin(theta) * distance * 0.58;
      values[index * 3 + 2] = Math.cos(phi) * distance - 2.4;
    }

    return values;
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (!pointsRef.current || reduceMotion) {
      return;
    }

    pointsRef.current.rotation.y = clock.getElapsedTime() * speed;
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.7) * 0.035;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        color={color}
        depthWrite={false}
        opacity={0.62}
        size={size}
        sizeAttenuation
        transparent
      />
    </points>
  );
}

function CosmicScene({
  reduceMotion,
  scrollProgress,
}: {
  reduceMotion: boolean;
  scrollProgress: number;
}) {
  const group = useRef<THREE.Group>(null);
  const morphProgress = THREE.MathUtils.smoothstep(scrollProgress, 0.1, 0.6);

  useFrame(({ camera, clock, pointer }) => {
    if (group.current && !reduceMotion) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.06) * 0.06;
      group.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.052) * 0.025;
    }

    if (!reduceMotion) {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.42, 0.025);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.22, 0.025);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5.8 - morphProgress * 0.54, 0.025);
      camera.lookAt(0, 0, -2);
    }
  });

  return (
    <group ref={group}>
      <Stars radius={12} depth={7} count={720} factor={3.2} fade saturation={0} speed={0.12} />
      <StarStratum
        color="#9af5ed"
        count={420}
        radius={9.5}
        reduceMotion={reduceMotion}
        size={0.012}
        speed={0.018}
      />
      <StarStratum
        color="#ffd29a"
        count={220}
        radius={7.5}
        reduceMotion={reduceMotion}
        size={0.018}
        speed={-0.012}
      />
      <BraneSheets reduceMotion={reduceMotion} />
      <EventHorizon morphProgress={morphProgress} reduceMotion={reduceMotion} />
      <NeuralConstellation reduceMotion={reduceMotion} strength={morphProgress} />
    </group>
  );
}

export function CosmicBackdrop() {
  const supportsWebGL = useSyncExternalStore(subscribe, getWebGLSnapshot, getServerSnapshot);
  const scrollProgress = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => 0);
  const prefersReducedMotion = Boolean(useReducedMotion());

  if (!supportsWebGL) {
    return <div className="cosmic-backdrop cosmic-backdrop-fallback" aria-hidden />;
  }

  return (
    <div className="cosmic-backdrop" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 46 }}
        dpr={[1, 1.35]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
      >
        <ambientLight intensity={0.36} />
        <pointLight position={[1.8, 2.4, 1.6]} intensity={2.6} color="#9af5ed" />
        <pointLight position={[-2.4, -1.4, 1.8]} intensity={1.8} color="#ffd29a" />
        <Suspense fallback={null}>
          <CosmicScene reduceMotion={prefersReducedMotion} scrollProgress={scrollProgress} />
        </Suspense>
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.62} luminanceThreshold={0.08} luminanceSmoothing={0.6} />
          <Vignette eskil={false} offset={0.08} darkness={0.78} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
