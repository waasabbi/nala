import Image from 'next/image';

export default function StoresSection() {
  return (
    <section id="stores" className="py-20 bg-[#f5f0eb]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title">Our Stores</h2>
        <p className="section-subtitle">
          Visit one of our stores to experience our products in person and receive personalized skincare advice.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[#f8e3dd] opacity-50 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/store-1.jpg"
                alt="New York Store"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-serif mb-2">New York</h3>
            <p className="text-gray-600 mb-4">
              Our flagship store offers the full NALA experience with skincare consultations and exclusive products.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Fifth Avenue, New York, NY 10160</span>
            </div>
            <button className="mt-6 px-6 py-2 border border-[#ff8c69] text-[#ff8c69] rounded-full hover:bg-[#fff5f2] transition-colors w-full">
              Get Directions
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[#f8e3dd] opacity-50 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/store-2.jpg"
                alt="Los Angeles Store"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-serif mb-2">Los Angeles</h3>
            <p className="text-gray-600 mb-4">
              Our West Coast location features a spa area where you can enjoy treatments using our premium products.
            </p>
            <div className="flex items-center gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>456 Rodeo Drive, Beverly Hills, CA 90210</span>
            </div>
            <button className="mt-6 px-6 py-2 border border-[#ff8c69] text-[#ff8c69] rounded-full hover:bg-[#fff5f2] transition-colors w-full">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 