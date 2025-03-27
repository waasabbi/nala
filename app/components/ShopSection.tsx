// components/Shop.tsx
'use client';
import Image from 'next/image';

export default function ShopSection() {
  return (
    <section id="shop" className="bg-[#fff5f0] py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-8">
          Our First Star Product
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Image
            src="/hero-products.jpg" // make sure this image exists in /public
            alt="Sunrise Face Mask"
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-md space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sunrise Face Mask</h3>
            <p className="text-gray-600">
              Crafted with dried orange peel and ancient South Asian skincare wisdom, our Sunrise Face Mask revives dull skin with nature’s glow.
            </p>
            <button className="px-6 py-3 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
