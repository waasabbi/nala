'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription (would connect to backend in a real app)
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 bg-[#ff8c69]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Join Our Newsletter</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-3 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#ff8c69] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-3 text-white">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
} 