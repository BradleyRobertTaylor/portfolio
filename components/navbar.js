'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import { space_mono } from '../app/fonts';
import styles from './navbar.module.css';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    latest === 0 ? setAtTop(true) : setAtTop(false);
  });

  const handleToggleNav = (event) => {
    setIsOpen(!isOpen);

    const hamburgerButton = document.querySelector(
      '[aria-controls="primary-navigation"]'
    );

    hamburgerButton.setAttribute('aria-expanded', !isOpen);
  };

  const topVariant = {
    open: {
      rotate: -45,
      y: 19.6,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  const bottomVariant = {
    open: {
      rotate: 45,
      y: -19.6,
    },
    closed: {
      rotate: 0,
      y: 0,
    },
  };

  return (
    <header
      styles={
        {
          // backgroundColor: atTop ? 'transparent' : 'rgb(26, 25, 29, 0.9)',
        }
      }
      className={styles.header}
    >
      <Link href="/">
        <div className={`${styles.logo}`}>
          {/* <span>
          <span className={styles.bold}>
            T<span className={styles['upside-down']}>v</span>y
          </span>
          lor
        </span>
        <div className={styles['bottom']}>MADE</div> */}
          <span>
            <span className={styles['letter-spacing']}>
              T<span className={styles['upside-down']}>v</span>
            </span>
            y<span className={styles['not-bold']}>lor</span>{' '}
            <span className={styles.made}>Made</span>
          </span>
        </div>
      </Link>
      <button
        className={styles['hamburger-button']}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleToggleNav}
      >
        <svg className="hamburger" viewBox="0 0 100 100">
          <motion.rect
            variants={topVariant}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            width="80"
            height="10"
            x="10"
            y="25"
            className="line line__top"
            rx="5"
          ></motion.rect>
          <motion.rect
            animate={{ opacity: isOpen ? 0 : 1 }}
            width="80"
            height="10"
            x="10"
            y="45"
            className="line line__middle"
            rx="5"
          ></motion.rect>
          <motion.rect
            variants={bottomVariant}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.5 }}
            width="80"
            height="10"
            x="10"
            y="65"
            className="line line__bottom"
            rx="5"
          ></motion.rect>
        </svg>
      </button>
      <nav className={styles['primary-navigation']} id="primary-navigation">
        <motion.ul
          className={styles['nav-list']}
          animate={{ x: isOpen ? '-100%' : 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}
