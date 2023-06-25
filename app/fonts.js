import {
  Roboto_Mono,
  Poppins,
  Space_Mono,
  Plus_Jakarta_Sans,
  Inter,
} from "next/font/google";

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  style: ["normal", "italic"],
  weight: ["200", "400", "600", "700", "800"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
