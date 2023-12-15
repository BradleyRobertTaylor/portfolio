"use client";

import { useState } from "react";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Backdrop } from "./ui/Backdrop";
import { SideDrawer } from "./SideDrawer";

export function Header() {
  const [navIsHidden, setNavIsHidden] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { scrollY } = useScroll();

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "-100%" },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 50) {
      setNavIsHidden(true);
    } else {
      setNavIsHidden(false);
    }
  });

  const handleCloseDrawer = () => setIsDrawerOpen(false);
  const handleOpenDrawer = () => setIsDrawerOpen(true);

  return (
    <>
      <motion.header
        variants={navVariants}
        animate={navIsHidden ? "hidden" : "visible"}
        transition={{ ease: "easeOut", duration: 1 }}
        className="w-full max-w-[1980px] z-30 px-9 py-4 md:px-24 md:py-10 fixed bg-neutral-50 dark:bg-neutral-950"
      >
        <DesktopNav />
        <MobileNav
          handleDrawer={isDrawerOpen ? handleCloseDrawer : handleOpenDrawer}
        />
        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <Backdrop closeDrawer={handleCloseDrawer} />
              <SideDrawer />
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
