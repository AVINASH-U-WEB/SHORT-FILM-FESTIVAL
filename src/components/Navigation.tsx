// import React, { useState, useEffect } from 'react';
// import { Menu, X, Users } from 'lucide-react';
// import Clapperboard from './Clapperboard';

// const Navigation: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
//       ${isScrolled ? 'bg-dark-slate/80 backdrop-blur-lg shadow-md border-b border-white/10' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Changed to flex container with justify-between for better alignment */}
//         <div className="flex items-center justify-between h-20">

//           {/* Logo - Stays on the left */}
//           <a href="#" className="flex items-center space-x-3 flex-shrink-0"> {/* Added flex-shrink-0 to prevent shrinking */}
//             <Clapperboard size={32} />
//             <span className="text-xl font-bold tracking-wider leading-none font-serif text-white">
//               CINEMA<span className="text-sunset">PRO</span>
//             </span>
//           </a>

//           {/* Desktop Navigation - Centered */}
//           {/* Wrapped navigation links in a div to center them */}
//           <div className="hidden lg:flex flex-1 items-center justify-center">
//             <div className="flex items-center space-x-10">
//               {['About', 'Opportunities', 'Community', 'Success Stories'].map(item => (
//                 <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-medium group text-white hover:text-sunset transition-colors duration-300">
//                   {item}
//                   <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sunset mt-0.5"></span>
//                 </a>
//               ))}
//             </div>
//           </div>


//           {/* Right side actions - Stays on the right */}
//           <div className="hidden lg:flex items-center">
//             <a href="#" className="btn-primary">
//               <Users className="w-5 h-5 mr-2" />
//               <span>Join Network</span>
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white p-2"
//             >
//               {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (No changes here) */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-dark-slate shadow-xl">
//           <div className="px-6 py-6 space-y-4">
//             {['About', 'Opportunities', 'Community', 'Success Stories'].map(item => (
//               <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 text-slate-200 font-medium text-lg hover:text-sunset transition-colors">
//                 {item}
//               </a>
//             ))}
//             <div className="pt-4">
//               <a href="#" className="btn-primary w-full">
//                 <Users className="w-5 h-5 mr-2" />
//                 <span>Join Professional Network</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;