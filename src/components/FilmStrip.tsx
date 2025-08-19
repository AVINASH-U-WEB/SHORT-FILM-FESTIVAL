import React from 'react';

interface FilmStripProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  animate?: boolean;
}

const FilmStrip: React.FC<FilmStripProps> = ({ 
  orientation = 'horizontal', 
  className = '',
  animate = true 
}) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} 
        ${animate ? (isHorizontal ? 'animate-scroll-x' : 'animate-scroll-y') : ''}`}>
        
        {/* Film strip segments */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 
              border-l border-r border-gray-600 relative
              ${isHorizontal ? 'w-16 h-full' : 'w-full h-16'}`}
          >
            {/* Perforations */}
            <div className={`absolute ${isHorizontal ? 'top-0 bottom-0 left-1' : 'left-0 right-0 top-1'} 
              flex ${isHorizontal ? 'flex-col justify-evenly' : 'flex-row justify-evenly'}`}>
              {Array.from({ length: isHorizontal ? 8 : 8 }).map((_, perfIndex) => (
                <div
                  key={perfIndex}
                  className={`bg-black ${isHorizontal ? 'w-3 h-2' : 'w-2 h-3'} rounded-sm`}
                />
              ))}
            </div>

            {/* Right side perforations for horizontal */}
            {isHorizontal && (
              <div className="absolute top-0 bottom-0 right-1 flex flex-col justify-evenly">
                {Array.from({ length: 8 }).map((_, perfIndex) => (
                  <div key={perfIndex} className="w-3 h-2 bg-black rounded-sm" />
                ))}
              </div>
            )}

            {/* Bottom perforations for vertical */}
            {!isHorizontal && (
              <div className="absolute left-0 right-0 bottom-1 flex flex-row justify-evenly">
                {Array.from({ length: 8 }).map((_, perfIndex) => (
                  <div key={perfIndex} className="w-2 h-3 bg-black rounded-sm" />
                ))}
              </div>
            )}

            {/* Frame content area */}
            <div className={`absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 
              border border-gray-500 ${index % 3 === 0 ? 'opacity-60' : 'opacity-30'}`}>
              {index % 5 === 0 && (
                <div className="w-full h-full bg-gradient-to-br from-amber-900/20 to-transparent" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmStrip;