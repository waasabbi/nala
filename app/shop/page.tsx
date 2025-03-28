'use client';
import Image from 'next/image';

export default function ShopPage() {
  return (
    <main className="bg-[#fff5f0] min-h-screen py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-semibold text-gray-800 mb-12">
          Our First Star Product
        </h2>

        <div className="flex flex-col items-center gap-8">
          <Image
            src="/hero-products.jpg"
            alt="Sunrise Face Mask"
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />

          <div className="text-center max-w-lg space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sunrise Face Mask</h3>
            <p className="text-gray-600 text-base">
              Crafted with dried orange peel and ancient South Asian skincare wisdom, our Sunrise Face Mask revives dull skin with nature’s glow.
            </p>

            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="text-xl font-semibold text-gray-800">$16</span>
              <button className="px-6 py-2 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
