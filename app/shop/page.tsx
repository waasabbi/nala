'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ShopPage() {
  const [hovered, setHovered] = useState(false);

  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setHovered(true);
    }, 150); // .5 second delay
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
  };

  return (
    <main className="bg-[#fff5f0] min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-8">
          Pure. Loved. Trusted.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div 
            className="relative w-[300px] h-[300px] rounded-xl shadow-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Default image */}
            <Image
              src="/hover-product1.jpg"
              alt="Sunrise Face Mask"
              fill
              className={`object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Hover image */}
            <Image
              src="/hover-product2.jpg"
              alt="Sunrise Face Mask Alternate"
              fill
              className={`object-cover transition-opacity duration-500 absolute top-0 left-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="text-left max-w-md space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sunrise Face Mask</h3>
            <p className="text-gray-600">
              Crafted with dried orange peel and ancient South Asian skincare wisdom, our Sunrise Face Mask revives dull skin with nature’s glow.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl font-semibold text-gray-800">$16</span>
              <button className="px-6 py-3 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
