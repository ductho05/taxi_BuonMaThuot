import './globals.css'
import './Grid.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/navbar/Navbar'
import Footer from '@/components/layouts/footer/Footer'
import CallButton from '@/components/CallButton/CallButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taxi Buôn Ma Thuột',
  description: 'Đặt taxi Buôn Ma Thuột nhanh nhất, rẻ nhất. Gọi 5 phút sau có mặt liền'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="google-site-verification" content="oyZKGfWq3_JK_esth-rDJyV4eqOBnm7W1BMVLGhYTXw" />
        {/* Start of AutoAds Tracking Code */}
        <script id='autoAdsMaxLead-widget-script' src='https://cdn.autoads.asia/scripts/autoads-maxlead-widget.js?business_id=E556BC2F4E0D43C3A470396842702899' type='text/javascript' charset='UTF-8' async></script>
        {/* End of AutoAds Tracking Code */}
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
