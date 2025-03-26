'use client';
import Image from 'next/image';

export default function ShopSection() {
  return (
    <section id="shop" className="py-20 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Discover our collection of premium skincare products designed to nourish and rejuvenate your skin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[#f8e3dd] group-hover:bg-[#ffd6c9] transition-colors"></div>
                <Image
                  src={`/product-${item}.jpg`}
                  alt={`Product ${item}`}
                  fill
                  className="object-cover scale-90 group-hover:scale-95 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Body Lotion</h3>
              <p className="text-gray-600 mb-4">
                Enriched with natural oils and vitamins to deeply moisturize and nourish your skin.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">$49.99</p>
                <button className="px-4 py-2 bg-[#ff8c69] text-white rounded-full hover:bg-[#ff7f5c] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 