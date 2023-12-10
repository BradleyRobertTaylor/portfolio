import MobileNav from "./MobileNav";
import Logo from "./ui/Logo";

export default function Header() {
  return (
    <header className="w-full px-9 py-4 md:px-24 fixed bg-neutral-50 dark:bg-neutral-950 lg:py-0 lg:h-28">
      <MobileNav />
    </header>
  );
}
