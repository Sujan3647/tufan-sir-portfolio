import React from 'react';

export default function ChemicalBackground() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-slate-50 pointer-events-none overflow-hidden select-none">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg  xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
             {/* Complex Chemical Pattern */}
             <pattern id="chemical-pattern" width="400" height="400" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
               {/* --- Group 1: Benzene Ring Cluster (Top Left) --- */}
               <path d="M50 50 L70 50 L80 67.32 L70 84.64 L50 84.64 L40 67.32 Z" fill="none" stroke="currentColor" strokeWidth="2" />
               <circle cx="60" cy="67.32" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
               <line x1="80" y1="67.32" x2="100" y2="67.32" stroke="currentColor" strokeWidth="2" />
               
               <text x="105" y="70" fontFamily="serif" fontSize="14" fill="currentColor">OH</text>
               
               {/* --- Group 2: Skeleton Structure (Center) --- */}
               <polyline points="150,150 170,130 190,150 210,130 230,150" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
               <line x1="170" y1="130" x2="170" y2="100" stroke="currentColor" strokeWidth="2" />
               <text x="165" y="95" fontFamily="serif" fontSize="14" fill="currentColor">NH₂</text>
               <line x1="175" y1="132" x2="175" y2="105" stroke="currentColor" strokeWidth="1" /> {/* Double bond hint */}
               
               {/* --- Group 3: Hexagon Network (Bottom Right) --- */}
               <path d="M300 300 L320 300 L330 317.32 L320 334.64 L300 334.64 L290 317.32 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
               <path d="M330 317.32 L350 317.32 L360 334.64 L350 351.96 L330 351.96 L320 334.64" fill="none" stroke="currentColor" strokeWidth="1.5" />
               
               {/* --- Group 4: Abstract Coordination (Top Right) --- */}
               <circle cx="350" cy="50" r="4" fill="currentColor" />
               <line x1="350" y1="50" x2="330" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
               <line x1="350" y1="50" x2="370" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
               <line x1="350" y1="50" x2="350" y2="20" stroke="currentColor" strokeWidth="2" />
               <text x="345" y="15" fontFamily="serif" fontSize="12" fill="currentColor">Ln³⁺</text>
               
               {/* --- Group 5: Decorative Equations --- */}
               <text x="40" y="250" fontFamily="serif" fontSize="16" fill="currentColor" fontStyle="italic">hν</text>
               <path d="M70 245 Q 90 230 110 245" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" />

               {/* --- Group 6: DNA/Helix Abstract (Bottom Left) --- */}
               <path d="M20 350 C 40 330, 60 370, 80 350" fill="none" stroke="currentColor" strokeWidth="2" />
               <path d="M20 360 C 40 340, 60 380, 80 360" fill="none" stroke="currentColor" strokeWidth="2" />
               
             </pattern>
             
             {/* Arrow Marker Definition */}
             <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
               <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
             </marker>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#chemical-pattern)" />
        </svg>
      </div>
    </div>
  );
}
