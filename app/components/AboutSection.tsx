import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-fit">
            <div className="absolute -top-5 -left-6 w-[400px] h-[300px] bg-[#fff1f0] rounded-[2rem]"></div>
            <Image
              src="/hero-products.jpg"
              alt="About Us"
              width={300}
              height={400}
              className="relative z-10 rounded-[2rem] object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-[#ff8c69] font-medium mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">The ultimate guide to radiant beauty</h2>
            <p className="text-gray-600 mb-4">
              At NALA, we believe that healthy skin starts with pure, effective ingredients and a simple routine. Our mission is to create products that enhance your natural beauty.
            </p>
            <p className="text-gray-600 mb-4">
            We combine the best of nature with thoughtful formulation to deliver exceptional results. Powered by honored ingredients like orange peel and almond, our products are cruelty-free and made using sustainable practices.            </p>
            <p className="text-gray-600 mb-8">
            Our team has developed gentle yet effective blends that nourish your skin daily—rooted in tradition, made for modern life.            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#f5f0eb] p-4 rounded-xl text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold">Clean Ingredients</h3>
              </div>
              
              <div className="bg-[#f5f0eb] p-4 rounded-xl text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold">Sustainable Beauty</h3>
              </div>
              
              <div className="bg-[#f5f0eb] p-4 rounded-xl text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold">Client-Approved</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 