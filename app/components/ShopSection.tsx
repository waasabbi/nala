'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';

export default function ShopSection() {
  const [hovered, setHovered] = useState(false);
  const isOpen = useCartStore((state) => state.isOpen);
  const setIsOpen = useCartStore((state) => state.setIsOpen);
  const [itemAdded, setItemAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);


  const { addToCart, items, increaseQuantity, decreaseQuantity } = useCartStore();

  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setHovered(true), 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHovered(false);
  };

  const handleAddToCart = () => {
    setItemAdded(true);
    setIsOpen(true);
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: 1,
        name: 'Sunrise Face Mask',
        price: 18,
        image: '/hero-products.jpg',
        quantity: 1,
      });
    }
  };

  return (
    <section id="shop" className="bg-[#fff5f0] py-20 px-8 relative z-10">
      {/* Blurred backdrop when cart is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 text-sm">
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image src={item.image} width={64} height={64} alt={item.name} className="rounded-lg" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#ff8c69] text-white py-2 rounded-full hover:bg-[#ff7f5c] transition"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Shop Section Content */}
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
            <Image
              src="/facemask.jpg"
              alt="Sunrise Face Mask"
              fill
              className={`object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image
              src="/facemask1.jpg"
              alt="Alternate"
              fill
              className={`object-cover transition-opacity duration-500 absolute top-0 left-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="text-left max-w-md space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Sunrise Face Mask</h3>
            <p className="text-gray-600">
              Crafted with dried orange peel and ancient South Asian skincare wisdom, our Sunrise Face Mask revives dull skin with a natural glow.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xl font-semibold text-gray-800">$18</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={itemAdded}
                className={`px-6 py-3 rounded-full transition-colors ${
                  itemAdded
                    ? 'bg-gray-300 text-white cursor-not-allowed'
                    : 'bg-[#ff8c69] text-white hover:bg-[#ff7f5c]'
                }`}
              >
                {itemAdded ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}