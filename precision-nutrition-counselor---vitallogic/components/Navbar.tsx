
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <i className="fas fa-microscope text-white text-sm"></i>
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            VitalLogic
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#philosophy" className="hover:text-emerald-600 transition-colors">Concept</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
          <a href="#roadmap" className="hover:text-emerald-600 transition-colors">Roadmap</a>
          <a href="#ai-preview" className="hover:text-emerald-600 transition-colors text-emerald-600 font-bold underline decoration-emerald-200 underline-offset-4">AI Analysis</a>
        </div>

        <a 
          href="#contact"
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-900/20 transition-all active:scale-95"
        >
          ご予約・お問合せ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;