import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import "./globals.css";

import MainNavigation from "@/components/navigation/MainNavigation";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Bradley Taylor's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body data-theme="">
        {children}
        <Footer />
      </body>
    </html>
  );
}
