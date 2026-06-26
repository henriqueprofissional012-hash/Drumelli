import React, { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

function createInfinityCurve(scale = 2.55) {
  const points = [];
  const steps = 220;

  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * Math.PI * 2;
    const x = Math.sin(t) * scale;
    const y = Math.sin(t) * Math.cos(t) * scale * 0.62;
    const z = Math.cos(t) * 0.42;
    points.push(new THREE.Vector3(x, y, z));
  }

  return new THREE.CatmullRomCurve3(points, true, "catmullrom", 0.42);
}

function MovingEnergy({ curve, speed = 0.1, offset = 0, hover }) {
  const lightRef = useRef(null);
  const coreRef = useRef(null);

  useFrame(({ clock }) => {
    const t = (clock.elapsedTime * speed * (hover ? 1.9 : 1) + offset) % 1;
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);

    if (lightRef.current) {
      lightRef.current.position.copy(point);
      lightRef.current.lookAt(point.clone().add(tangent));
      lightRef.current.scale.setScalar(hover ? 1.25 : 1);
    }

    if (coreRef.current) {
      coreRef.current.position.copy(point);
      coreRef.current.intensity = hover ? 3.6 : 2.2;
    }
  });

  return (
    <>
      <mesh ref={lightRef}>
        <sphereGeometry args={[0.105, 22, 22]} />
        <meshBasicMaterial color="#ff3138" toneMapped={false} />
      </mesh>
      <pointLight ref={coreRef} color="#e8121a" distance={4.2} decay={2.4} intensity={2.2} />
    </>
  );
}

function InfinityObject({ scrollProgress }) {
  const groupRef = useRef(null);
  const [hover, setHover] = useState(false);
  const curve = useMemo(() => createInfinityCurve(), []);
  const tube = useMemo(() => new THREE.TubeGeometry(curve, 320, 0.18, 24, true), [curve]);
  const redTube = useMemo(() => new THREE.TubeGeometry(curve, 320, 0.043, 12, true), [curve]);
  const highlightTube = useMemo(() => {
    const shifted = new THREE.CatmullRomCurve3(
      curve.getPoints(180).map((point) => point.clone().add(new THREE.Vector3(0, 0.11, 0.08))),
      true,
      "catmullrom",
      0.42,
    );
    return new THREE.TubeGeometry(shifted, 260, 0.026, 10, true);
  }, [curve]);

  useFrame(({ pointer, clock }) => {
    if (!groupRef.current) return;
    const targetY = pointer.x * (hover ? 0.28 : 0.14) - scrollProgress * 0.2;
    const targetX = -0.18 + pointer.y * (hover ? 0.16 : 0.08) + scrollProgress * 0.22;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.055);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.055);
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.75) * 0.08 - scrollProgress * 0.35;
    groupRef.current.scale.setScalar(1 - scrollProgress * 0.08 + (hover ? 0.025 : 0));
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.18}>
      <group
        ref={groupRef}
        rotation={[-0.18, -0.12, 0.05]}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <mesh geometry={tube}>
          <meshStandardMaterial
            color="#09090b"
            metalness={0.96}
            roughness={0.28}
            envMapIntensity={1.5}
          />
        </mesh>

        <mesh geometry={highlightTube}>
          <meshStandardMaterial
            color="#f5f5f5"
            metalness={1}
            roughness={0.18}
            emissive="#3f3f42"
            emissiveIntensity={0.12}
            envMapIntensity={2.1}
          />
        </mesh>

        <mesh geometry={redTube}>
          <meshStandardMaterial
            color="#3b0005"
            emissive="#e8121a"
            emissiveIntensity={hover ? 2.8 : 1.55}
            metalness={0.25}
            roughness={0.18}
            toneMapped={false}
          />
        </mesh>

        <MovingEnergy curve={curve} speed={0.085} offset={0.04} hover={hover} />
        <MovingEnergy curve={curve} speed={0.065} offset={0.38} hover={hover} />
        <MovingEnergy curve={curve} speed={0.11} offset={0.72} hover={hover} />
      </group>
    </Float>
  );
}

function Scene({ scrollProgress }) {
  return (
    <>
      <ambientLight intensity={0.42} />
      <spotLight position={[-3.5, 4.2, 4.8]} angle={0.42} penumbra={0.9} intensity={2.6} />
      <pointLight position={[3.8, 1.5, 2.4]} color="#e8121a" intensity={3.2} distance={7} />
      <pointLight position={[-2.8, -1.2, 2.4]} color="#5a0008" intensity={1.7} distance={5} />

      <Suspense fallback={null}>
        <Environment preset="night" background={false} />
        <InfinityObject scrollProgress={scrollProgress} />
      </Suspense>

      <EffectComposer multisampling={0}>
        <Bloom intensity={0.55 + scrollProgress * 0.28} luminanceThreshold={0.18} luminanceSmoothing={0.55} mipmapBlur />
      </EffectComposer>
    </>
  );
}

export function InfinityScene({ scrollProgress = 0 }) {
  return (
    <div className="infinity-scene">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0.35, 6.6], fov: 42 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      >
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
      <div className="scene-vignette" />
    </div>
  );
}
