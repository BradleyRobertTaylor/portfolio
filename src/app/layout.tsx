import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Bradley Taylor | Full Stack Web Developer",
  description: "Bradley Taylor's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // className="scroll-pt-10 lg:scroll-pt-28"
    >
      <body
        suppressHydrationWarning
        className={cn(
          "max-w-[1980px] mx-auto min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
