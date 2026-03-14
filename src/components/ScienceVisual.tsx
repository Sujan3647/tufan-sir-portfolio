"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);

  // Constants for DNA structure
  const basePairs = 24;
  const radius = 2.5;
  const height = 12;
  const turns = 2;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Slow rotation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5; // Slight floating
    }
  });

  const nodes = useMemo(() => {
    const tempNodes = [];
    for (let i = 0; i < basePairs; i++) {
      const t = i / (basePairs - 1);
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;

      // Backbone 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      // Backbone 2
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      tempNodes.push({
        p1: new THREE.Vector3(x1, y, z1),
        p2: new THREE.Vector3(x2, y, z2),
      });
    }
    return tempNodes;
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <group key={i}>
          {/* Base pair connection */}
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[new Float32Array([...node.p1.toArray(), ...node.p2.toArray()]), 3]}
                count={2}
                array={new Float32Array([...node.p1.toArray(), ...node.p2.toArray()])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#00ffff" transparent opacity={0.6} />
          </line>

          {/* Node 1 */}
          <mesh position={node.p1}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color="#00ffff"
              emissive="#0088ff"
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>

          {/* Node 2 */}
          <mesh position={node.p2}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color="#ff00ff"
              emissive="#8800ff"
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      {/* Backbone curved lines would go here, simplified as points for now */}
    </group>
  );
}

function FloatingMolecules() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.001;
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={20} depth={50} count={1000} factor={4} saturation={1} fade speed={1} />
      
      {/* Some abstract background nodes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20 - 10
          ]}
        >
          <sphereGeometry args={[Math.random() * 0.5 + 0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#0891b2" 
            transparent 
            opacity={0.3} 
            emissive="#00ffff" 
            emissiveIntensity={0.5} 
          />
        </mesh>
      ))}
    </group>
  );
}

interface ScienceVisualProps {
  transparent?: boolean;
}

export default function ScienceVisual({ transparent = false }: ScienceVisualProps) {
  return (
    <div className={`w-full h-full min-h-125 ${transparent ? 'bg-transparent' : 'bg-linear-to-br from-slate-900 via-[#0f172a] to-blue-950'} relative`}>
      <div className="absolute inset-0 pointer-events-none z-10 hidden" /> {/* To prevent overlap issues if needed */}
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />
        <pointLight position={[10, -10, 10]} intensity={1} color="#ff00ff" />
        
        <DNAHelix />
        <FloatingMolecules />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false} 
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
