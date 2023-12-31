import { GITHUB_URL, LINKED_IN_URL } from "@/data/constants";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex gap-8 items-center">
      <Link
        target="_blank"
        href={LINKED_IN_URL}
        className="hidden min-[1124px]:block"
      >
        <svg
          className="w-6 fill-neutral-500 hover:fill-black dark:fill-neutral-400 dark:hover:fill-white transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M6.94 5a2 2 0 11-4-.002 2 2 0 014 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
        </svg>
      </Link>
      <Link
        className="hidden min-[1124px]:block"
        target="_blank"
        href={GITHUB_URL}
      >
        <svg
          className="w-6 fill-neutral-500 hover:fill-black dark:fill-neutral-400 dark:hover:fill-white transition-colors duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
        </svg>
      </Link>
      <Link target="_blank" href="/resume.pdf">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 stroke-neutral-500 fill-neutral-50 hover:stroke-black dark:stroke-neutral-400 dark:fill-neutral-950 dark:hover:stroke-white transition-colors duration-300"
          viewBox="0 0 24 24"
        >
          <g fill="none" strokeLinejoin="round" strokeWidth="2">
            <path d="M5 20V4a1 1 0 0 1 1-1h6.172a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 19 9.828V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
            <path d="M12 3v6a1 1 0 0 0 1 1h6" />
          </g>
        </svg>
      </Link>
    </div>
  );
}
