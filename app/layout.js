import "./globals.css";
import { inter, poppins, roboto, space_mono } from "./fonts";

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
      </body>
    </html>
  );
}
