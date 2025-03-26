import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
