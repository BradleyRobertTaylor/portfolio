import { HamburgerButton } from "./ui/HamburgerButton";
import { Logo } from "./ui/Logo";

interface MobileNavProps {
  handleDrawer: () => void;
}

export function MobileNav({ handleDrawer }: MobileNavProps) {
  return (
    <div className="lg:hidden flex justify-between items-center">
      <Logo />
      <HamburgerButton handleDrawer={handleDrawer} />
    </div>
  );
}
