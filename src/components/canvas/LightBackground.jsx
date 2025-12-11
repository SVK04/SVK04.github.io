import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Preload } from '@react-three/drei';

const Bubble = ({ position, scale, speed, color }) => {
  return (
    <Float
      speed={speed} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.5, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <Sphere position={position} scale={scale} args={[1, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.3} roughness={0.1} metalness={0.1} />
      </Sphere>
    </Float>
  );
};

// Move random generation outside to avoid "impure render" and allow static usage
const generateBubbles = () => {
  const temp = [];
  for (let i = 0; i < 30; i++) {
    const x = (Math.random() - 0.5) * 20; // Spread x
    const y = (Math.random() - 0.5) * 20; // Spread y
    const z = (Math.random() - 0.5) * 10; // Depth
    const scale = Math.random() * 0.5 + 0.2; // Size
    const speed = Math.random() * 2 + 1; // Animation speed
    // Random pastel colors: blue, purple, pinkish
    const colors = ['#a5b4fc', '#c4b5fd', '#fbcfe8', '#bae6fd'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    temp.push({ position: [x, y, z], scale, speed, color, key: i });
  }
  return temp;
};

// Generate once to act as static data for the session
const bubblesData = generateBubbles();

const LightBackground = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <group>
          {bubblesData.map(bubble => (
            <Bubble
              key={bubble.key}
              position={bubble.position}
              scale={bubble.scale}
              speed={bubble.speed}
              color={bubble.color}
            />
          ))}
        </group>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default LightBackground;
