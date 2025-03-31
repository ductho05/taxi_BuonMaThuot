import './globals.css';
import './Grid.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import CallButton from '@/components/CallButton/CallButton';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Taxi Buôn Ma Thuột',
    description: 'Đặt taxi Buôn Ma Thuột nhanh nhất, rẻ nhất. Gọi 5 phút sau có mặt liền',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="favicon.ico" />
                <meta name="google-site-verification" content="NO_6HAJKFv46eiesQ5vr8ggWZpzR4MbxpCOK6xLz92I" />
            </head>
            <body className={inter.className}>
                <Navbar />
                <CallButton />
                {children}
                <Footer />
            </body>
            <GoogleAnalytics gaId="AW-16518729039" />
            {/* Google Tag Manager */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=AW-16683454853"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16683454853');
        `}
            </Script>
        </html>
    );
}
