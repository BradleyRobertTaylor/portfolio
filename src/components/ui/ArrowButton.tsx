import Link from "next/link";

export function ArrowButton() {
  return (
    <Link
      href="#projects"
      className="grid place-items-center w-16 aspect-square bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full transition-colors duration-500"
    >
      <svg
        className="block w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 19l6-6m-6 6l-6-6m6 6V5"
        ></path>
      </svg>
    </Link>
  );
}
