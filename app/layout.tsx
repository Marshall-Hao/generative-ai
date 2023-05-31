import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Generative AI',
  description: 'Generative AI for Advertisers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="//at.alicdn.com/t/c/font_4094881_mhqh7hw4t7m.js"></Script>
      <body
        className={`${inter.className} min-h-screen overflow-hidden bg-ggreen-xlight`}>
        {children}
      </body>
    </html>
  );
}
