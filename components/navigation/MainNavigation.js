"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import MainHeader from "./MainHeader";

import styles from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    hamburgerButton.setAttribute("aria-expanded", true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    hamburgerButton.setAttribute("aria-expanded", false);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (drawerIsOpen) {
      setDrawerIsOpen((state) => !state);
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {drawerIsOpen && (
          <>
            <Backdrop
              classes={styles["drawer-backdrop"]}
              onClick={closeDrawerHandler}
            />
            <SideDrawer>
              <nav className={styles["main-navigation-drawer-nav"]}>
                <NavLinks inSideDrawer={true} />
              </nav>
            </SideDrawer>
          </>
        )}
      </AnimatePresence>
      <MainHeader>
        <div className={styles.hidden}>
          <Logo />
        </div>
        <HamburgerMenu
          onClick={drawerIsOpen ? closeDrawerHandler : openDrawerHandler}
          isOpen={drawerIsOpen}
        />
        <nav className={styles["main-navigation"]} id="primary-navigation">
          <Logo />
          <NavLinks />
        </nav>
        <SocialLinks />
      </MainHeader>
    </>
  );
}
