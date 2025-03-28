import './globals.css';
import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

export const metadata = {
  title: 'Nala Essence',
  description: 'Organic skincare products for the modern woman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-serif bg-[#fff5f0] text-gray-800">{children}</body>
    </html>
  )
}




