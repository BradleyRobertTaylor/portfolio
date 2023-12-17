import type { Metadata } from "next";
import { Inter as FontSans, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MenuAnimationProvider } from "@/providers/MenuAnimationProvider";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});

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
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "relative max-w-[1980px] mx-auto min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans antialiased",
          fontSans.variable,
          raleway.variable,
        )}
      >
        <ThemeProvider>
          <MenuAnimationProvider>
            <Header />
            {children}
            <Toaster />
            <Footer />
          </MenuAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
