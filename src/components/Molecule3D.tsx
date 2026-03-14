"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function Atom({ position, color, radius = 1 }: { position: [number, number, number], color: string, radius?: number }) {
  return (
    <Sphere position={position} args={[radius, 32, 32]}>
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
    </Sphere>
  );
}

function Bond({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const startVec = new THREE.Vector3(...start);
  const endVec = new THREE.Vector3(...end);
  const direction = new THREE.Vector3().subVectors(endVec, startVec);
  const length = direction.length();
  
  // Midpoint position
  const position = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  
  // Calculate orientation (quaternion)
  const up = new THREE.Vector3(0, 1, 0); // Default cylinder orientation is Y-up
  const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction.normalize());

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[0.2, 0.2, length, 16]} />
      <meshStandardMaterial color="#cbd5e1" roughness={0.4} metalness={0.1} />
    </mesh>
  );
}

export default function Molecule() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Example: Methane (CH4) structure roughly represented
  // Central Carbon at [0,0,0]
  // 4 Hydrogens in tetrahedral arrangement
  // Let d = bond length ~ 2
  const d = 2.5;
  const s = d / Math.sqrt(3);

  const carbonPos: [number, number, number] = [0, 0, 0];
  const h1Pos: [number, number, number] = [s, s, s];
  const h2Pos: [number, number, number] = [s, -s, -s];
  const h3Pos: [number, number, number] = [-s, s, -s];
  const h4Pos: [number, number, number] = [-s, -s, s];

  return (
    <group ref={groupRef}>
      {/* Carbon Atom */}
      <Atom position={carbonPos} color="#334155" radius={0.8} /> {/* Dark Grey/Blue */}

      {/* Hydrogen Atoms */}
      <Atom position={h1Pos} color="#e2e8f0" radius={0.5} />
      <Atom position={h2Pos} color="#e2e8f0" radius={0.5} />
      <Atom position={h3Pos} color="#e2e8f0" radius={0.5} />
      <Atom position={h4Pos} color="#e2e8f0" radius={0.5} />

      {/* Bonds */}
      <Bond start={carbonPos} end={h1Pos} />
      <Bond start={carbonPos} end={h2Pos} />
      <Bond start={carbonPos} end={h3Pos} />
      <Bond start={carbonPos} end={h4Pos} />
    </group>
  );
}
