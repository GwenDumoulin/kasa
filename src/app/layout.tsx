import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Kasa',
  description: 'Chez vous, partout et ailleurs',
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      sizes: '32x32',
      url: '/kasa/favicon.ico',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-['Montserrat',sans-serif]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
