// components/Header.tsx
'use client';
import { useState, useEffect } from 'react';
import { FaHeart, FaUser, FaShoppingBag, FaSearch } from 'react-icons/fa';

export default function Header() {
  const [language, setLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left side - Navigation */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide font-medium">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-gray-800 hover:text-[#ff8c69] transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-800 hover:text-[#ff8c69] transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="text-gray-800 hover:text-[#ff8c69] transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-800 hover:text-[#ff8c69] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Brand Name in Center */}
        <div className="text-2xl font-serif tracking-wider font-bold text-gray-900">NALA</div>

        {/* Right side - Icons */}
        <div className="flex items-center gap-6 text-gray-800">
          <FaSearch className="cursor-pointer hover:text-[#ff8c69] transition-colors" />
          <span className="cursor-pointer hover:text-[#ff8c69] transition-colors hidden md:inline-block text-sm font-medium tracking-wide">{language} ▾</span>
          <FaHeart className="cursor-pointer hover:text-[#ff8c69] transition-colors" />
          <FaUser className="cursor-pointer hover:text-[#ff8c69] transition-colors" />
          <div className="relative">
            <FaShoppingBag className="cursor-pointer hover:text-[#ff8c69] transition-colors" />
            <span className="absolute -top-2 -right-2 text-xs bg-[#ff8c69] text-white w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-center mt-3 pb-3 border-b border-gray-100">
        <nav className="flex gap-8 text-xs font-medium text-gray-800">
          <button onClick={() => scrollToSection('hero')} className="hover:text-[#ff8c69] transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#ff8c69] transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-[#ff8c69] transition-colors">
            Reviews
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#ff8c69] transition-colors">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
