import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/effects/Preloader';
import CustomCursor from '@/components/effects/CustomCursor';
import BackToTop from '@/components/ui/BackToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zameer Panhwer — Website Developer',
  description:
    'I build modern, fast and premium websites that help businesses grow. Specializing in custom web development, e-commerce, and high-converting landing pages.',
  keywords: [
    'web developer',
    'website developer',
    'freelance developer',
    'Next.js developer',
    'React developer',
    'frontend developer',
    'web design',
    'e-commerce development',
  ],
  authors: [{ name: 'Zameer Panhwer' }],
  openGraph: {
    title: 'Zameer Panhwer — Website Developer',
    description:
      'I build modern, fast and premium websites that help businesses grow.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zameer Panhwer — Website Developer',
    description:
      'I build modern, fast and premium websites that help businesses grow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-body antialiased">
        <Preloader />
        <CustomCursor />
        
        {/* Atmospheric outer background */}
        <div className="atmospheric-bg" />
        
        {/* Main site container card */}
        <div className="site-container">
          {children}
        </div>

        <BackToTop />
      </body>
    </html>
  );
}
