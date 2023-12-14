import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArrowButtonProps extends React.ComponentProps<"a"> {
  arrowRotationDeg?: string;
  href: string;
  size: "base" | "large";
}

export function ArrowButton({
  className,
  arrowRotationDeg,
  href,
  size,
  target,
}: ArrowButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "grid place-items-center w-[70px] aspect-square bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full transition-colors duration-500",
        className,
      )}
    >
      <svg
        className={cn(
          "block",
          size === "base" ? "w-7" : "w-8",
          arrowRotationDeg,
        )}
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
