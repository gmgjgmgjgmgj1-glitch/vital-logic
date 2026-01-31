
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: '私たちの想い' },
    { href: '#services', label: 'サービス' },
    { href: '#program', label: 'プログラム' },
    { href: '#ai-preview', label: 'AI体質診断' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 bg-mauve-500 rounded-full flex items-center justify-center group-hover:bg-mauve-600 transition-colors">
            <i className="fas fa-spa text-white text-sm"></i>
          </div>
          <div className="leading-tight">
            <span className="text-lg font-serif font-bold text-stone-800 tracking-wide">VitalLogic</span>
            <span className="hidden sm:block text-[10px] text-mauve-400 tracking-widest">精密栄養カウンセリング</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 hover:text-mauve-600 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-mauve-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-mauve-600 hover:shadow-lg hover:shadow-mauve-200 transition-all active:scale-95"
          >
            無料相談を予約
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-stone-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-lg border-t border-mauve-100 px-5 py-6 space-y-4 animate-fade-in">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-stone-700 hover:text-mauve-600 py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-mauve-500 text-white text-center px-6 py-3 rounded-full font-bold mt-4"
          >
            無料相談を予約
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
