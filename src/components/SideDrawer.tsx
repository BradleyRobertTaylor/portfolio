import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export function SideDrawer() {
  return (
    <aside className="fixed right-0 top-0 max-w-[400px] w-[70%] z-30 h-full bg-zinc-200 dark:bg-zinc-800">
      <NavLinks variant="mobile" />
      <div className="absolute bottom-3 right-3">
        <ThemeToggle />
      </div>
    </aside>
  );
}
