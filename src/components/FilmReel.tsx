import React from 'react';

interface FilmReelProps {
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const FilmReel: React.FC<FilmReelProps> = ({ 
  size = 'medium', 
  speed = 'normal', 
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const speedClasses = {
    slow: 'animate-spin-slow',
    normal: 'animate-spin',
    fast: 'animate-spin-fast'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`${speedClasses[speed]} w-full h-full`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="filmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="50%" stopColor="#2d2d2d" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
          </defs>
          
          {/* Main reel body */}
          <circle cx="50" cy="50" r="45" fill="url(#filmGradient)" stroke="#d4af37" strokeWidth="2"/>
          
          {/* Center hub */}
          <circle cx="50" cy="50" r="15" fill="#d4af37" stroke="#1a1a1a" strokeWidth="1"/>
          
          {/* Film perforations */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => (
            <g key={index}>
              <rect
                x="47"
                y="20"
                width="6"
                height="3"
                fill="#1a1a1a"
                transform={`rotate(${angle} 50 50)`}
              />
              <rect
                x="47"
                y="25"
                width="6"
                height="3"
                fill="#1a1a1a"
                transform={`rotate(${angle} 50 50)`}
              />
            </g>
          ))}
          
          {/* Spokes */}
          {[0, 72, 144, 216, 288].map((angle, index) => (
            <line
              key={index}
              x1="50"
              y1="15"
              x2="50"
              y2="35"
              stroke="#d4af37"
              strokeWidth="2"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default FilmReel;