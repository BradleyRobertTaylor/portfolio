import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="w-full max-w-[1980px] z-30 px-9 py-4 md:px-24 md:py-14 fixed bg-neutral-50 dark:bg-neutral-950 lg:h-28">
      <DesktopNav />
      <MobileNav />
    </header>
  );
}
