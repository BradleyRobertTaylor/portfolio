import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinksProps {
  variant: "mobile" | "desktop";
}

export default function NavLinks({ variant }: NavLinksProps) {
  const mobileListStyles =
    "p-9 sm:p-24 flex h-full flex-col items-center justify-center gap-4";

  const mobileListItemStyles =
    "w-full text-right text-2xl uppercase text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors";

  const desktopListStyles = "flex gap-12";

  const desktopListItemStyles =
    "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white";

  return (
    <nav className={cn(variant === "mobile" && "h-full")}>
      <ul
        className={cn(
          variant === "mobile" ? mobileListStyles : desktopListStyles,
        )}
      >
        {navigation.map(({ href, title }) => {
          return (
            <li
              key={title}
              className={cn(
                variant === "mobile"
                  ? mobileListItemStyles
                  : desktopListItemStyles,
                "transition-colors duration-300",
              )}
            >
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
