// components/Header.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Header() {
  // const [language] = useState('EN');
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
            className="text-gray-800 font-bold hover:text-[#ff8c69] transition-colors"
          >
            HOME
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-800 font-bold hover:text-[#ff8c69] transition-colors"
          >
            ABOUT US
          </button>
          <Link 
              href="/shop" 
            className="text-gray-800 font-bold hover:text-[#ff8c69] transition-colors"
            >
           SHOP
          </Link>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-800 font-bold hover:text-[#ff8c69] transition-colors"
          >
            CONTACT
          </button>
        </nav>

        <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-serif tracking-wider font-bold text-gray-800">NALA</div>

      
      </div>
      
      <div className="md:hidden flex justify-center mt-3 pb-3 border-b border-gray-100">
        <nav className="flex gap-8 text-xs font-bold text-gray-800">
          <button onClick={() => scrollToSection('hero')} className="hover:text-[#ff8c69] transition-colors">
            HOME
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#ff8c69] transition-colors">
            ABOUT
          </button>
          <Link href="/shop" className="hover:text-[#ff8c69] transition-colors">
            SHOP
          </Link>

          <button onClick={() => scrollToSection('contact')} className="hover:text-[#ff8c69] transition-colors">
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
