"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme !== "light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light");
      setIsDark(false);
    } else {
      setTheme("dark");
      setIsDark(true);
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <button className={styles["theme-toggle"]} onClick={toggleTheme}>
      <div className={styles["circle-container"]} data-is-dark={isDark}>
        <motion.span
          layout
          transition={spring}
          className={styles["circle"]}
        ></motion.span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24">
        <path d="M10 13a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zm0-15a1 1 0 011 1v2a1 1 0 01-2 0V1a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zM1 9h2a1 1 0 110 2H1a1 1 0 010-2zm16 0h2a1 1 0 010 2h-2a1 1 0 010-2zm.071-6.071a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM5.757 14.243a1 1 0 010 1.414L4.343 17.07a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM4.343 2.929l1.414 1.414a1 1 0 01-1.414 1.414L2.93 4.343A1 1 0 014.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 01-1.414 1.414l-1.414-1.414a1 1 0 111.414-1.414z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 7a7 7 0 0012 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.98 6.98 0 0010 7zm-6 5a8 8 0 0015.062 3.762A9 9 0 018.238 4.938 7.999 7.999 0 004 12z"></path>
      </svg>
    </button>
  );
}
