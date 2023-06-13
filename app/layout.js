import './globals.css';
import { inter } from './fonts';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Portfolio',
  description: "Bradley Taylor's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body data-theme="light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
