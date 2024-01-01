import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toHTMLParagraphs(text: string) {
  return text
    .split("\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}
