"use client";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavLinksProps {
  variant: "mobile" | "desktop";
  onCloseDrawer?: () => void;
}

export function NavLinks({ variant, onCloseDrawer }: NavLinksProps) {
  const router = useRouter();

  const mobileListStyles =
    "p-9 sm:p-24 flex h-full flex-col items-center justify-center gap-4";

  const mobileListItemStyles =
    "w-full text-right text-2xl uppercase text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors";

  const desktopListStyles = "flex gap-12";

  const desktopListItemStyles =
    "font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white";

  const drawerLink = {
    drawerIsOpen: {
      opacity: 1,
    },
    drawerIsClosed: {
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  const handleMobileNavigation = (href: string) => {
    router.push(href);
    onCloseDrawer!();
  };

  return (
    <nav className={cn(variant === "mobile" && "h-full")}>
      <ul
        className={cn(
          variant === "mobile" ? mobileListStyles : desktopListStyles,
        )}
      >
        {navigation.map(({ href, title }) => {
          return (
            <motion.li
              key={title}
              className={cn(
                variant === "mobile"
                  ? mobileListItemStyles
                  : desktopListItemStyles,
                "transition-colors duration-300",
              )}
              variants={drawerLink}
            >
              {variant === "mobile" ? (
                <Link
                  href={href}
                  onClick={() => {
                    handleMobileNavigation(href);
                  }}
                >
                  {title}
                </Link>
              ) : (
                <a href={href}>{title}</a>
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
