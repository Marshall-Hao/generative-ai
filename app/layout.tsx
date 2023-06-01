import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Script from 'next/script';

const inter = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
});

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
      <Script src="//at.alicdn.com/t/c/font_4094881_x3hwqppuud.js"></Script>
      <body
        className={`${inter.className} min-h-screen overflow-hidden bg-ggreen-xlight`}>
        {children}
      </body>
    </html>
  );
}
