import './globals.css';
import { inter } from './fonts';

import MainNavigation from '@/components/navigation/MainNavigation';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Portfolio',
  description: "Bradley Taylor's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body data-theme="light">
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
