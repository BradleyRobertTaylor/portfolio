import { EMAIL, GITHUB_URL, LINKED_IN_URL } from "@/data/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-9 md:p-24 flex flex-col gap-20 xl:flex-row xl:items-end">
      <h2 className="text-5xl md:text-7xl xl:text-[5rem] font-extrabold xl:leading-tight">
        Let&apos;s work
        <br /> together.
      </h2>
      <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12 md:flex-1 xl:justify-end">
        <li className="text-xl font-semibold flex-1 xl:flex-none">
          <Link target="_blank" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="/resume.pdf"
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={LINKED_IN_URL}
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href={GITHUB_URL}
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
