// import localFont from "next/font/local";
import Footer from "@/components/footer/footer";
import { inter } from "./fonts";
import "./globals.css";

import MainNavigation from "@/components/navigation/MainNavigation";

export const metadata = {
  title: "Portfolio",
  description: "Bradley Taylor's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
