import './globals.css';
import localFont from 'next/font/local';
import Script from 'next/script';

const googleSans = localFont({
  src: [
    {
      path: '../public/GoogleSans/Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/GoogleSans/Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
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
      <Script src="//at.alicdn.com/t/c/font_4094881_zbyvch4tcd.js"></Script>
      <body
        className={`${googleSans.className} min-h-screen overflow-hidden bg-ggreen-xlight`}>
        {children}
      </body>
    </html>
  );
}
