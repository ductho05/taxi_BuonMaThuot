import './globals.css'
import './Grid.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/layouts/navbar/Navbar'
import Footer from '@/components/layouts/footer/Footer'
import CallButton from '@/components/CallButton/CallButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taxi Buôn Ma Thuật'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/favicon.jpg" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <CallButton />
        {children}
        <Footer />
        </body>
    </html>
  )
}
