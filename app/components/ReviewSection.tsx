'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Xenia Aamya",
      avatar: "/hero-products.jpg",
      rating: 5,
      text: "I have been using NALA products for 3 months now and my skin has never looked better! The face mask is my absolute favorite - it keeps my skin hydrated all day.",
      location: "Texas, USA"
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/hero-products.jpg",
      rating: 5,
      text: "As someone with sensitive skin, I've always struggled to find products that don't cause irritation. NALA's natural ingredients are gentle yet effective. Highly recommend!",
      location: "Toronto, Canada"
    },
    {
      id: 3,
      name: "Emma Williams",
      avatar: "/hero-products.jpg",
      rating: 4,
      text: "The scent of these products is divine - subtle and natural, not overwhelming like many other brands. The packaging is also eco-friendly which I really appreciate.",
      location: "London, UK"
    },
    {
      id: 4,
      name: "David Rodriguez",
      avatar: "/hero-products.jpg",
      rating: 5,
      text: "I bought the complete set as a gift for my wife and she absolutely loves it. The quality is exceptional and worth every penny. Will definitely purchase again!",
      location: "Miami, USA"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#f8e3dd]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-3">Customer Reviews</h2>
        <p className="section-subtitle text-sm md:text-base text-center text-gray-600 max-w-2xl mx-auto mb-10 md:mb-12 px-4">
          Don't just take our word for it. Here's what our customers have to say about their NALA experience.
        </p>
        
        <div className="relative px-2 md:px-8">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-3 sm:mb-0 sm:mr-4 border-2 border-[#ff8c69] mx-auto sm:mx-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="font-serif text-lg">{review.name}</h3>
                        <p className="text-gray-500 text-sm">{review.location}</p>
                        <div className="flex mt-1 justify-center sm:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-4 w-4 ${i < review.rating ? 'text-[#ff8c69]' : 'text-gray-300'}`}
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-sm md:text-base text-center sm:text-left">&ldquo;{review.text}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-[#ff8c69]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full mx-1.5 ${
                index === activeIndex ? 'bg-[#ff8c69]' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 