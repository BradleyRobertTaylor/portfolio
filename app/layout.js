import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bradley Taylor | Full Stack Web Developer",
  description: "Bradley Taylor's personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
