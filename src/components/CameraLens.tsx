import React, { useState } from 'react';

interface CameraLensProps {
  children: React.ReactNode;
  className?: string;
}

const CameraLens: React.FC<CameraLensProps> = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Camera aperture overlay */}
      <div className={`absolute inset-0 transition-all duration-700 z-10 pointer-events-none
        ${isHovered 
          ? 'bg-black/20 backdrop-blur-[1px]' 
          : 'bg-black/40 backdrop-blur-[2px]'
        }`}>
        
        {/* Aperture blades */}
        <div className={`absolute inset-0 transition-all duration-700
          ${isHovered ? 'scale-150 opacity-30' : 'scale-100 opacity-60'}`}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <clipPath id="aperture">
                <polygon
                  points="50,15 75,35 75,65 50,85 25,65 25,35"
                  className={`transition-all duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}
                  style={{ transformOrigin: '50% 50%' }}
                />
              </clipPath>
            </defs>
            
            {/* Aperture blades */}
            {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
              <g key={index} transform={`rotate(${rotation} 50 50)`}>
                <path
                  d="M50,50 L50,15 L60,25 Z"
                  fill="rgba(212, 175, 55, 0.3)"
                  stroke="rgba(212, 175, 55, 0.6)"
                  strokeWidth="0.5"
                  className="transition-all duration-700"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Focus indicator */}
        <div className={`absolute top-4 right-4 w-8 h-8 border border-emerald-400 
          transition-all duration-500 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}>
          <div className="w-full h-full border border-emerald-400 scale-75"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className={`transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default CameraLens;