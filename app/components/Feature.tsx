// components/Feature.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Feature() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div>
          <Image
            src="/feature-dropper.jpg" // Replace with your image
            alt="Dropper Bottle"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-400 uppercase">Skin Care</p>
          <h2 className="text-2xl font-semibold text-gray-800">
            Potent Solutions for Demanding Skin
          </h2>
          <p className="text-gray-600">
            Discover products tailored for mature skin and urban lifestyles, offering daily hydration and the added advantage of powerful vitamins and antioxidants.
          </p>
          <Link href="/products">
            <button className="mt-2 px-6 py-3 border border-gray-700 text-gray-700 hover:bg-gray-100 rounded-full text-sm">
              Read More →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
