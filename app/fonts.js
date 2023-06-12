import {
  Roboto_Mono,
  Poppins,
  Space_Mono,
  Space_Grotesk,
  Inter,
} from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  weight: ['200', '400', '600', '700', '800'],
  display: 'swap',
});

export const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
  display: 'swap',
});
