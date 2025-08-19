import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-t from-black to-gray-900 border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <FilmReel size="small" speed="slow" className="opacity-80" />
                <span className="text-xl font-bold text-white tracking-wider">
                  CINEMA<span className="text-amber-400">PRO</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connecting emerging cinema professionals with industry opportunities worldwide.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <div className="space-y-2">
                <a href="#opportunities" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Opportunities
                </a>
                <a href="#community" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Community
                </a>
                <a href="#showcase" className="block text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Success Stories
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors text-sm"
              >
                <span>Join Network</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Cinema Professionals Platform. Empowering emerging talent in the film industry.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;