import React from 'react';
import { Users, Award, Briefcase, Globe, Camera, Star, TrendingUp, Shield } from 'lucide-react';
import CameraLens from './CameraLens';
import FilmStrip from './FilmStrip';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Network",
      description: "Connect with industry veterans, emerging talent, and creative collaborators from around the globe.",
      stats: "5,000+ Members"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Opportunities",
      description: "Access exclusive job postings, casting calls, and project collaborations tailored for emerging professionals.",
      stats: "1,200+ Jobs Posted"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Skill Development",
      description: "Enhance your craft with masterclasses, workshops, and mentorship programs from industry leaders.",
      stats: "500+ Workshops"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Creative Showcase",
      description: "Display your portfolio, get feedback, and gain recognition for your creative work and achievements.",
      stats: "10,000+ Portfolios"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Growth",
      description: "Track your progress, set goals, and receive personalized recommendations for career advancement.",
      stats: "85% Success Rate"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Opportunities",
      description: "All opportunities are verified and vetted to ensure legitimacy and professional standards.",
      stats: "100% Verified"
    }
  ];

  return (
    <section id="opportunities" className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background film strips */}
      <div className="absolute top-0 left-0 w-full h-16 opacity-5">
        <FilmStrip orientation="horizontal" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-5">
        <FilmStrip orientation="horizontal" />
      </div>
      <div className="absolute top-0 left-0 w-16 h-full opacity-5">
        <FilmStrip orientation="vertical" />
      </div>
      <div className="absolute top-0 right-0 w-16 h-full opacity-5">
        <FilmStrip orientation="vertical" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 
            border border-amber-500/20 rounded-full px-6 py-2 mb-8">
            <Globe className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-300 tracking-wide">PLATFORM FEATURES</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r 
            from-white via-gray-100 to-amber-200 bg-clip-text text-transparent
            font-serif tracking-wide leading-tight">
            Professional Tools for
            <span className="block text-amber-400">Cinema Success</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Everything you need to build a successful career in the film industry, 
            from networking to skill development and career opportunities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <CameraLens key={index} className="h-full">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md 
                rounded-2xl p-8 border border-gray-700/30 shadow-xl h-full
                hover:border-amber-500/30 transition-all duration-500 group">
                
                <div className="text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <span className="text-sm font-medium text-amber-400">{feature.stats}</span>
                  <div className="flex space-x-1">
                    {Array.from({ length: 3 }).map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-500 
                          ${dotIndex === 0 ? 'bg-amber-400' : 
                            dotIndex === 1 ? 'bg-emerald-400' : 'bg-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CameraLens>
          ))}
        </div>

        {/* Professional CTA section */}
        <div className="text-center">
          <CameraLens>
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-md
              rounded-3xl p-12 lg:p-16 border border-gray-700/30 max-w-4xl mx-auto">
              
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 
                border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300 tracking-wide">JOIN TODAY</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to Advance Your
                <span className="block text-amber-400">Cinema Career?</span>
              </h3>
              
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of emerging cinema professionals who are already building 
                successful careers through our platform. Start your journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r 
                    from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                    text-black font-bold py-4 px-8 rounded-full text-lg
                    transform hover:scale-105 transition-all duration-300
                    shadow-lg hover:shadow-amber-500/25 min-w-[220px] justify-center"
                >
                  <Users className="w-5 h-5" />
                  <span>Join Professional Network</span>
                </a>
                
                <div className="text-center">
                  <p className="text-sm text-gray-400">
                    Free membership • Instant access • No commitments
                  </p>
                </div>
              </div>
            </div>
          </CameraLens>
        </div>
      </div>
    </section>
  );
};

export default Features;