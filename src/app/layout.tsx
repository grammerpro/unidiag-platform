import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Noto_Sans } from 'next/font/google';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '700'],
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'LabTech App',
  description: 'A modern laboratory information system.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${beVietnamPro.variable} ${notoSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
