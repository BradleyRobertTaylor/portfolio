import './globals.css';
import { inter } from './fonts';

import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Portfolio',
  description: "Bradley Taylor's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
