import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./ui/Logo";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex gap-12 text-sm justify-between items-center uppercase font-medium">
      <div className="flex gap-12 items-center">
        <Logo />
        <NavLinks variant="desktop" />
      </div>
      <div className="flex items-center gap-12">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </nav>
  );
}
