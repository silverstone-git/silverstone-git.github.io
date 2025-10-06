
import React from 'react';

// Import the new assets
import BlackHole from '../assets/black_hole.png';
import Galaxy1 from '../assets/galaxy1_red.png';
import Galaxy2 from '../assets/galaxy2_spiral_plane.png';
import Galaxy3 from '../assets/galaxy3_edge_blue.png';
import Galaxy4 from '../assets/galaxy4_purple_edge.png';
import Galaxy5 from '../assets/galaxy5_blue_ring.png';
import Galaxy6 from '../assets/galaxy6_spiral-4-arm.png';
import Galaxy7 from '../assets/galaxy7_spiral-slant.png';


interface CelestialObjectsProps {
  scrollY: number;
}

export const CelestialObjects: React.FC<CelestialObjectsProps> = ({ scrollY }) => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Replace the divs with img tags using the imported assets */}
      
      <img
        src={Galaxy1}
        alt="Red galaxy"
        className="absolute w-32 h-32 opacity-70"
        style={{ 
          top: '15%', 
          left: '10%', 
          transform: `translateY(-${scrollY * 0.05}px) rotate(15deg)` 
        }}
      />
      
      <img
        src={Galaxy2}
        alt="Spiral plane galaxy"
        className="absolute w-48 h-24 opacity-60"
        style={{ 
          top: '40%', 
          left: '80%', 
          transform: `translateY(-${scrollY * 0.03}px) rotate(-25deg)` 
        }}
      />

      <img
        src={Galaxy3}
        alt="Blue edge galaxy"
        className="absolute w-40 h-20 opacity-80"
        style={{ 
          top: '75%', 
          left: '15%',
          transform: `translateY(-${scrollY * 0.06}px)`
        }}
      />

       <img
        src={Galaxy4}
        alt="Purple edge galaxy"
        className="absolute w-36 h-36 opacity-70"
        style={{ 
          top: '85%', 
          left: '70%',
          transform: `translateY(-${scrollY * 0.02}px) rotate(20deg)`
        }}
      />

      <img
        src={BlackHole}
        alt="Black hole"
	width="200px"
	height="200px"
        className="absolute opacity-80"
        style={{ 
          top: '80%', 
          left: '40%',
          transform: `translateY(-${scrollY * 0.04}px)`
        }}
      />

      <img
        src={Galaxy7}
        alt="Slanted spiral galaxy"
        className="absolute w-20 h-20 opacity-60"
        style={{ 
          top: '10%', 
          left: '65%',
          transform: `translateY(-${scrollY * 0.07}px) rotate(-10deg)`
        }}
      />
    </div>
  );
};
