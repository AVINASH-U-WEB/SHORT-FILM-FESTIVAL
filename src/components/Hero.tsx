import React from 'react';
import { Camera, Film, Play, Star, Award, Users } from 'lucide-react';
import FilmReel from './FilmReel';
import CameraLens from './CameraLens';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-10 bg-film-grain animate-film-grain" />
      
      {/* Floating film reels */}
      <FilmReel 
        size="large" 
        speed="slow" 
        className="absolute top-16 left-16 opacity-20 animate-float" 
      />
      <FilmReel 
        size="medium" 
        speed="normal" 
        className="absolute bottom-16 right-16 opacity-25 animate-float-delayed" 
      />
      <FilmReel 
        size="small" 
        speed="fast" 
        className="absolute top-1/3 right-1/4 opacity-15 animate-float-slow" 
      />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <CameraLens className="rounded-3xl">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/98 backdrop-blur-md 
              rounded-3xl p-16 lg:p-20 border border-gray-700/30 shadow-2xl">
              
              {/* Professional badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 
                border border-amber-500/30 rounded-full px-6 py-2 mb-8">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-300 tracking-wide">PROFESSIONAL NETWORK</span>
              </div>
            
              {/* Main title */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r 
                from-white via-gray-100 to-amber-200 bg-clip-text text-transparent
                font-serif tracking-wide cinema-title leading-tight">
                CINEMA
                <span className="block text-4xl md:text-6xl lg:text-7xl mt-4 bg-gradient-to-r 
                  from-amber-300 via-amber-200 to-white bg-clip-text text-transparent">
                  PROFESSIONALS
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto 
                leading-relaxed font-light">
                Connecting <span className="text-amber-400 font-medium">emerging talent</span> with 
                <span className="text-white font-medium"> industry opportunities</span> in the world of cinema.
                <span className="block mt-2 text-base md:text-lg text-gray-400">
                  Your professional journey in film starts here.
                </span>
              </p>

              {/* Professional stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">5,000+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">1,200+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">Opportunities Posted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">850+</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wide">Success Stories</div>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/20">
                  <Camera className="w-8 h-8 text-amber-400" />
                  <span className="text-lg font-medium text-white">Professional Network</span>
                  <span className="text-sm text-gray-400">Connect with industry professionals</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/20">
                  <Film className="w-8 h-8 text-emerald-400" />
                  <span className="text-lg font-medium text-white">Career Opportunities</span>
                  <span className="text-sm text-gray-400">Access exclusive job postings</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl 
                  bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/20">
                  <Star className="w-8 h-8 text-blue-400" />
                  <span className="text-lg font-medium text-white">Skill Development</span>
                  <span className="text-sm text-gray-400">Enhance your craft with experts</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r 
                    from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                    text-black font-bold py-4 px-8 rounded-full text-lg
                    transform hover:scale-105 transition-all duration-300
                    shadow-lg hover:shadow-amber-500/25 min-w-[200px] justify-center"
                >
                  <Users className="w-5 h-5" />
                  <span>Join Network</span>
                </a>
                
                <a
                  href="#opportunities"
                  className="inline-flex items-center space-x-3 bg-transparent border-2 border-white/20
                    hover:border-white/40 text-white font-semibold py-4 px-8 rounded-full text-lg
                    transform hover:scale-105 transition-all duration-300
                    backdrop-blur-sm min-w-[200px] justify-center"
                >
                  <Play className="w-5 h-5" />
                  <span>Explore Platform</span>
                </a>
              </div>
              
              <p className="text-sm text-gray-400 mt-8">
                Trusted by emerging professionals worldwide • Free to join
              </p>
            </div>
          </CameraLens>
        </div>
      </div>

      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b 
          from-transparent via-amber-400/10 to-transparent transform rotate-12 animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b 
          from-transparent via-emerald-400/10 to-transparent transform -rotate-12 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default Hero;