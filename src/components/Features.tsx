import React from 'react';
import { Users, Briefcase, Award, Star, TrendingUp, Shield, Camera } from 'lucide-react';
import Viewfinder from './Viewfinder';
import Clapperboard from './Clapperboard';

// A simple hook to detect if an element is in view - for scroll animations
const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if(ref.current) observer.unobserve(ref.current);
    }
  }, [ref]);
  return inView;
}


const Features: React.FC = () => {
  const features = [
    { icon: <Users className="w-10 h-10" />, title: "Professional Network", description: "Connect with industry veterans, emerging talent, and creative collaborators from around the globe." },
    { icon: <Briefcase className="w-10 h-10" />, title: "Career Opportunities", description: "Access exclusive job postings, casting calls, and project collaborations tailored for emerging professionals." },
    { icon: <Award className="w-10 h-10" />, title: "Skill Development", description: "Enhance your craft with masterclasses, workshops, and mentorship programs from industry leaders." },
    { icon: <Star className="w-10 h-10" />, title: "Creative Showcase", description: "Display your portfolio, get feedback, and gain recognition for your creative work and achievements." },
    { icon: <TrendingUp className="w-10 h-10" />, title: "Career Growth", description: "Track your progress, set goals, and receive personalized recommendations for career advancement." },
    { icon: <Shield className="w-10 h-10" />, title: "Verified Opportunities", description: "All opportunities are verified and vetted to ensure legitimacy and professional standards." }
  ];

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <section id="opportunities" className="relative py-24 bg-cream overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 mb-8 border border-slate-200 shadow-sm">
            <Clapperboard size={20} />
            <span className="text-sm font-bold text-slate tracking-wide">PLATFORM FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-dark-slate font-serif leading-tight">
            Tools for Your
            <span className="block text-sunset">Director's Cut</span>
          </h2>
          <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
            Everything you need to build a successful career in the film industry, from networking to skill development and career opportunities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const cardRef = React.useRef(null);
            const isCardInView = useInView(cardRef);
            return (
              <div ref={cardRef} key={index} className={`transition-all duration-700 ease-out ${isCardInView ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm'}`} style={{transitionDelay: `${index * 100}ms`}}>
                <Viewfinder className="h-full">
                  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg h-full group-hover:border-sunset/50 transition-all duration-500">
                    <div className="text-sunset mb-6 transition-transform duration-300 group-hover:scale-110 animate-subtle-float">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-slate mb-4 font-serif">
                      {feature.title}
                    </h3>
                    <p className="text-slate leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Viewfinder>
              </div>
            )
          })}
        </div>

        {/* CTA section */}
        <div className="text-center">
            <div className="bg-white rounded-3xl p-12 lg:p-16 border border-slate-200 max-w-4xl mx-auto shadow-xl">
              <div className="inline-flex items-center space-x-2 bg-cream rounded-full px-6 py-2 mb-8 border border-slate-200">
                <Camera className="w-4 h-4 text-sky" />
                <span className="text-sm font-bold text-slate tracking-wide">TAKE ACTION</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6 leading-tight font-serif">
                Ready to Advance Your
                <span className="block text-sunset">Cinema Career?</span>
              </h3>
              <p className="text-lg text-slate mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of cinema professionals building their careers. Your next big break is just a click away.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScVFiy7lHw--Ig3T_OngiFgpb8Zi43ebTS2VOW2gFXIen638w/viewform" className="btn-primary">
                 <Users className="w-5 h-5 mr-2" />
                 <span>REGISTER YOUR JOURNEY</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;