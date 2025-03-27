// components/Hero.tsx
'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full bg-[#f8e3dd] overflow-hidden">
      <div className="grid md:grid-cols-2 items-center px-8 py-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-[#ff8c69] font-medium">Made By Nature. Not In A Lab</p>
          <h1 className="text-4xl md:text-4xl font-serif leading-tight text-gray-800">
            Your Skin Deserves The Truth
          </h1>
          <p className="text-gray-540 max-w-md text-lg">
            Our skincare line is crafted with pure, high-quality ingredients for visible results. Organic, natural, and rich in Vitamin C.
          </p>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 px-8 py-3 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors"
          >
            Discover More
          </button>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center relative">

          <div className="absolute w-full h-full bg-[#ff8c69] opacity-10 rounded-[6.5rem] transform scale-10"></div>
          <Image
            src="/hero-picture.jpg"
            alt="Product group"
            width={420}
            height={450}
            className="rounded-[6.5rem] object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
