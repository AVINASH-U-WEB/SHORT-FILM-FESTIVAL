import React, { useState } from 'react';

interface ViewfinderProps {
  children: React.ReactNode;
  className?: string;
}

const Viewfinder: React.FC<ViewfinderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden transition-all duration-500 rounded-2xl group ${className}`}>
      {/* Content with parallax effect on hover */}
      <div className="transition-all duration-700 ease-out group-hover:scale-105">
        {children}
      </div>

      {/* Viewfinder Overlay */}
      <div className="absolute inset-0 transition-all duration-500 z-10 pointer-events-none">
        
        {/* Corner Brackets with drawing animation */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 transition-all duration-300 opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 border-slate" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 transition-all duration-300 opacity-0 translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 border-slate" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 transition-all duration-300 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 border-slate" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 transition-all duration-300 opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 border-slate" />
        
        {/* REC dot */}
        <div className="absolute top-5 right-5 flex items-center space-x-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-sm text-white font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">REC</span>
        </div>

        {/* Focus Reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-16 transition-all duration-300 opacity-0 scale-125 group-hover:opacity-50 group-hover:scale-100">
          <div className="w-full h-full border-2 border-slate/80 rounded" />
          <div className="absolute top-1/2 -translate-y-1/2 left-2 w-2 h-px bg-slate/80" />
          <div className="absolute top-1/2 -translate-y-1/2 right-2 w-2 h-px bg-slate/80" />
        </div>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 rounded-xl transition-all duration-700 shadow-[inset_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
};

export default Viewfinder;