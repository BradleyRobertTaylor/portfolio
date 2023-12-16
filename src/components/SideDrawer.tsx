"use client";

import { motion } from "framer-motion";

import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

const drawerVariants = {
  drawerIsOpen: {
    x: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
  drawerIsClosed: {
    x: "100%",
  },
};

export function SideDrawer({ onCloseDrawer }: { onCloseDrawer: () => void }) {
  return (
    <motion.aside
      className="fixed right-0 top-0 max-w-[400px] w-[70%] z-30 h-screen bg-zinc-200 dark:bg-zinc-800"
      initial="drawerIsClosed"
      animate="drawerIsOpen"
      variants={drawerVariants}
      exit={{ x: "100%", transition: { duration: 0.3 } }}
    >
      <NavLinks onCloseDrawer={onCloseDrawer} variant="mobile" />
      <div className="absolute bottom-3 right-3">
        <ThemeToggle />
      </div>
    </motion.aside>
  );
}
