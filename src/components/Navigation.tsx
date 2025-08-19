import React, { useState } from 'react';
import { Menu, X, Film, ExternalLink, Users } from 'lucide-react';
import FilmReel from './FilmReel';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <FilmReel size="small" speed="slow" className="opacity-90" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wider leading-none">
                CINEMA<span className="text-amber-400">PRO</span>
              </span>
              <span className="text-xs text-gray-400 tracking-wide">PROFESSIONALS</span>
            </div>
          </div>

          {/* Center Navigation - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              About Platform
            </a>
            <a href="#opportunities" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Opportunities
            </a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Community
            </a>
            <a href="#showcase" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Success Stories
            </span>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Registration Link */}
            <a
              href="https://forms.google.com/your-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r 
                from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                text-black font-bold py-3 px-6 rounded-full text-sm
                transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-amber-500/25 tracking-wide"
            >
              <Users className="w-4 h-4" />
              <span>JOIN NETWORK</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-6 py-6 space-y-4">
            <a href="#about" className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-800/50">
              About Platform
            </a>
            <a href="#opportunities" className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-800/50">
              Opportunities
            </a>
            <a href="#community" className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-800/50">
              Community
            </a>
            <a href="#showcase" className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium border-b border-gray-800/50">
              Success Stories
            </a>
            <div className="pt-4">
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r 
                  from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                  text-black font-bold py-4 px-6 rounded-full text-sm
                  transform hover:scale-105 transition-all duration-300
                  shadow-lg hover:shadow-amber-500/25 tracking-wide w-full"
              >
                <Users className="w-4 h-4" />
                <span>JOIN PROFESSIONAL NETWORK</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;