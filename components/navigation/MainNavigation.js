'use client';

import Link from 'next/link';
import { useState } from 'react';
// import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import HamburgerMenu from './HamburgerMenu';
import MainHeader from './MainHeader';

import styles from './MainNavigation.module.css';
import NavLinks from './NavLinks';
import Logo from '../Logo/Logo';
import SideDrawer from './SideDrawer';

export default function Navbar() {
  // const { scrollYProgress } = useScroll();
  // const [atTop, setAtTop] = useState(true);

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   latest === 0 ? setAtTop(true) : setAtTop(false);
  // });

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    hamburgerButton.setAttribute('aria-expanded', true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    hamburgerButton.setAttribute('aria-expanded', false);
  };

  return (
    <>
      <AnimatePresence>
        {drawerIsOpen && (
          <SideDrawer>
            <nav className={styles['main-navigation-drawer-nav']}>
              <NavLinks />
            </nav>
          </SideDrawer>
        )}
      </AnimatePresence>
      <HamburgerMenu
        onClick={drawerIsOpen ? closeDrawerHandler : openDrawerHandler}
      />
      <MainHeader>
        <Logo />
        <nav className={styles['main-navigation']} id="primary-navigation">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
