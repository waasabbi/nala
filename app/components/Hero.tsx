// components/Hero.tsx
'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-[#f8e3dd] overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff8c69] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff8c69] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="grid md:grid-cols-2 items-center px-8 py-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-[#ff8c69] font-medium">Made by nature. Not in a lab.</p>
          <h1 className="text-4xl md:text-4xl font-serif leading-tight text-gray-800">
            Your Skin Deserves The Truth
          </h1>
          <p className="text-gray-600 max-w-md text-lg">
            Our skincare line is crafted with pure, high-quality ingredients for visible results. Organic, natural, and rich in ein nature’s old secrets.
          </p>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 px-8 py-3 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors"
          >
            Discover More
          </button>
        </div>
        <div className="mt-12 md:mt-0 relative">
          <div className="absolute w-full h-full bg-[#ff8c69] opacity-10 rounded-6xl transform scale-0"></div>
          <Image
            src="/hero-picture.jpg"
            alt="Product group"
            width={400}
            height={400}
            className="rounded-[90px] object-cover object-[70%] relative z-10"

          />
        </div>
      </div>
    </section>
  );
}
