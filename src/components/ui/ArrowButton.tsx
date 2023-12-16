"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArrowButtonProps extends React.ComponentProps<"a"> {
  rotateArrow?: boolean;
  href: string;
  size: "base" | "large";
  animate?: boolean;
}

export function ArrowButton({
  className,
  rotateArrow,
  href,
  size,
  target,
  animate,
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
      {animate ? (
        <motion.svg
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5, delay: 1.5 }}
          className={cn(
            "block",
            size === "base" ? "w-7" : "w-8",
            rotateArrow && "rotate-[225deg]",
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
        </motion.svg>
      ) : (
        <svg
          className={cn(
            "block",
            size === "base" ? "w-7" : "w-8",
            rotateArrow && "rotate-[225deg]",
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
      )}
    </Link>
  );
}
