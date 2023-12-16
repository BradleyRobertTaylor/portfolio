import { AnimatePresence } from "framer-motion";
import { HamburgerButton } from "./ui/HamburgerButton";
import { Logo } from "./ui/Logo";
import { SideDrawer } from "./SideDrawer";
import { useEffect, useState } from "react";
import { useMenuContext } from "@/providers/MenuAnimationProvider";

export function MobileNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openBurger, closeBurger } = useMenuContext();

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    closeBurger();
  };

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
    openBurger();
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("lg:overflow-y-auto");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("lg:overflow-y-auto");
    }
  }, [isDrawerOpen]);

  return (
    <div className="lg:hidden flex justify-between items-center">
      <Logo />
      <HamburgerButton
        onCloseDrawer={handleCloseDrawer}
        onOpenDrawer={handleOpenDrawer}
        isOpen={isDrawerOpen}
      />
      <AnimatePresence>
        {isDrawerOpen && <SideDrawer onCloseDrawer={handleCloseDrawer} />}
      </AnimatePresence>
    </div>
  );
}
