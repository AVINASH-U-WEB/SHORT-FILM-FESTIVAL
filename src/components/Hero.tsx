import React from 'react';
import { Link } from 'react-router-dom';
// Import the background and logo images
import bg from './assest/bg.jpg';
import logo1 from './assest/logo1.png';
import logo2 from './assest/logo2.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-start overflow-hidden text-dark-slate">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Film festival background with a camera, film reels, and a clapperboard"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay to make text pop */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      {/* Logos - Equal sized & responsive */}
      <img
        src={logo1}
        alt="NS Factory Logo"
        className="absolute top-6 left-6 w-32 sm:w-40 md:w-52 lg:w-64 h-auto z-20"
      />
      <img
        src={logo2}
        alt="Cartel 24 Logo"
        className="absolute top-6 right-6 w-32 sm:w-40 md:w-52 lg:w-64 h-auto z-20"
      />

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 md:pt-40">
        
        <p className="font-serif text-xl md:text-3xl font-bold tracking-[0.1em] text-white">
          NS FACTORY & CARTEL 24
        </p>
        
        <p className="text-sm md:text-base tracking-[0.1em] mt-2 font-semibold text-slate-200">
          PROUDLY PRESENTS
        </p>

        <p className="font-serif text-2xl md:text-3xl mt-16 font-semibold tracking-wider text-white">
         CARTEL 24
        </p>

        {/* Title with subtle white glow */}
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider my-1 text-white"
          style={{ textShadow: '0px 0px 8px rgba(255,255,255,0.8)' }}
        >
          SHORT FILM AWARDS
        </h1>
        
        <p className=" text-white text-sm sm:text-base md:text-lg italic mt-4 tracking-wide">
          "DEADLINE -14TH NOV,2025"
        </p>
      </div>

      {/* CTA Button placed inside film reel hole */}
      <Link
        to="/terms">
      <div
        className="absolute z-30"
        style={{
          bottom: '22%',   // adjust vertical placement
          left: '48.3%',     // adjust horizontal placement
          transform: 'translate(-50%, 50%)'
        }}
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScVFiy7lHw--Ig3T_OngiFgpb8Zi43ebTS2VOW2gFXIen638w/viewform"
          className="flex flex-col items-center justify-center 
                     w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 
                     bg-dark-slate text-white rounded-full shadow-xl
                     transition-transform transform hover:scale-105
                     border-4 border-slate-300/50"
        >
          <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider">REGISTER</span>
          <span className="text-[10px] sm:text-xs md:text-sm font-medium">YOUR</span>
          <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider">JOURNEY</span>
        </a>
      </div>
      </Link>
    </section>
  );
};

export default Hero;