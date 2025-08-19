import React from 'react';
// import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';

// Import the logos to be used in the footer
import logo1 from './components/assest/logo1.png';
import logo2 from './components/assest/logo2.png';


function App() {
  return (
    <div className="relative antialiased">
  
      
      <main>
        <Hero />
        <Features />
      </main>

      <footer className="bg-white border-t border-slate/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* MODIFIED: Brand section now uses the two logos */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                {/* NS Factory Logo */}
                <img src={logo1} alt="NS Factory Logo" className="h-14 w-auto" />
                {/* Cartel 24 Logo */}
                <img src={logo2} alt="Cartel 24 Logo" className="h-14 w-auto" />
              </div>
              <p className="text-slate/80 text-sm leading-relaxed">
                "FRAME YOUR FUTURE IN THE FILM INDUSTRY"
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-slate font-bold mb-4 uppercase tracking-wider">Navigate</h4>
              <div className="space-y-2">
                {['About', 'Opportunities', 'Community'].map(item => (
                   <a key={item} href={`#${item.toLowerCase()}`} className="block text-slate hover:text-sunset transition-colors text-sm">
                     {item}
                   </a>
                ))}
              </div>
            </div>
            
            {/* Connect */}
            <div className="text-center md:text-right">
              <h4 className="text-slate font-bold mb-4 uppercase tracking-wider">Get Started</h4>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScVFiy7lHw--Ig3T_OngiFgpb8Zi43ebTS2VOW2gFXIen638w/viewform" className="text-sunset hover:underline transition-colors text-sm font-semibold">
                REGISTER YOUR JOURNEY
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate/10 pt-8 mt-8 text-center">
            <p className="text-slate/60 text-sm">
              © 2025 International Short Film Festival. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;