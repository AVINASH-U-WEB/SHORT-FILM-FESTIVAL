import React from 'react';

interface ClapperboardProps {
  className?: string;
  size?: number;
}

const Clapperboard: React.FC<ClapperboardProps> = ({ className = '', size = 24 }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The top part is now in a group with a class for animation */}
        <g className="origin-bottom-left animate-clap">
          <path d="M20.9992 8.99902H3.00076C2.44848 8.99902 2 8.55054 2 7.99826V5.99996C2 4.8954 2.89543 4 4.00076 4H19.9992C21.1038 4 22 4.89543 22 5.99996V7.99826C22 8.55054 21.5515 8.99902 20.9992 8.99902Z" fill="#2c363f"/>
          <path d="M6.34277 5.34277L4.65685 7.02869" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10.3428 5.34277L8.65686 7.02869" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14.3428 5.34277L12.6569 7.02869" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M18.3428 5.34277L16.6569 7.02869" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round"/>
        </g>
        {/* The bottom part remains static */}
        <path d="M2.99951 10.9989H21L20 20H4L2.99951 10.9989Z" fill="#FDF8F0" stroke="#2c363f" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default Clapperboard;