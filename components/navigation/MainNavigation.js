"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useAnimationControls, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import MainHeader from "./MainHeader";

import styles from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks/SocialLinks";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

export default function Navbar() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const path01Controls = useAnimationControls();
  const path02Controls = useAnimationControls();

  const openDrawerHandler = async () => {
    setDrawerIsOpen(true);

    await path02Controls.start(path02Variants.moving);
    path01Controls.start(path01Variants.open);
    path02Controls.start(path02Variants.open);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    document.body.setAttribute("data-scroll-disabled", true);

    hamburgerButton.setAttribute("aria-expanded", true);
  };

  const closeDrawerHandler = async () => {
    setDrawerIsOpen(false);

    path01Controls.start(path01Variants.closed);
    await path02Controls.start(path02Variants.moving);
    path02Controls.start(path02Variants.closed);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    document.body.removeAttribute("data-scroll-disabled");

    hamburgerButton.setAttribute("aria-expanded", false);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (drawerIsOpen) {
      setDrawerIsOpen((state) => !state);
    }

    return () => {
      document.body.removeAttribute("data-scroll-disabled");
    };
  }, [pathname]);

  return (
    <>
      <MainHeader>
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
        <div className={styles.hidden}>
          <Logo />
        </div>
        <HamburgerMenu
          onClick={drawerIsOpen ? closeDrawerHandler : openDrawerHandler}
          isDrawerOpen={drawerIsOpen}
          path01Variants={path01Variants}
          path02Variants={path02Variants}
          path01Controls={path01Controls}
          path02Controls={path02Controls}
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
