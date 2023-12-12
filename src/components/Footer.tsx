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
          <Link target="_blank" href="mailto:taylorbradleyr@gmail.com">
            taylorbradleyr@gmail.com
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="/resume.pdf"
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-500"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/BradleyRobertTaylor/"
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-500"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://github.com/BradleyRobertTaylor"
            className="font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-500"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
}
