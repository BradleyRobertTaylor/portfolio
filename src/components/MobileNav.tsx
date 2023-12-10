"use client";

import { useState } from "react";
import HamburgerButton from "./ui/HamburgerButton";
import Logo from "./ui/Logo";
import SideDrawer from "./SideDrawer";
import Backdrop from "./ui/Backdrop";

export default function MobileNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="lg:hidden flex justify-between items-center">
      <Logo />
      <HamburgerButton handleDrawer={() => setIsDrawerOpen(!isDrawerOpen)} />
      {isDrawerOpen && <Backdrop closeDrawer={handleCloseDrawer} />}
      {isDrawerOpen && <SideDrawer />}
    </div>
  );
}
