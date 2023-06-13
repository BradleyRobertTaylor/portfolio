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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M57.931 20.028c1.732-1.752 2.727-4.077 2.727-6.51 0-5.256-4.521-9.532-10.078-9.532-4.459 0-8.332 2.818-9.62 6.707a49.242 49.242 0 00-1.327-.161c-1.929-3.824-5.758-6.142-5.935-6.247L29.867 2l.548 2.887a10.473 10.473 0 00-1.774-.597l-5.852-1.32 3.187 3.665h-.073c-.312 0-.487.018-.487.018l-4.586.432a10.345 10.345 0 00-7.407-3.099c-5.557 0-10.078 4.276-10.078 9.532 0 2.433.994 4.757 2.725 6.509C3.334 24.285 2 30.06 2 37.603 2 54.844 21.539 62 32 62s30-7.156 30-24.397c0-7.543-1.334-13.317-4.069-17.575m-33.55-9.907c.143.104.279.228.41.369-.602.06-1.185.127-1.752.203a9.287 9.287 0 00-1.279-2.499l2.621 1.927M32 60.066c-9.127 0-28-6.181-28-22.464C4 29.325 5.64 23.6 8.733 19.697c-2.048-1.378-3.388-3.629-3.388-6.179 0-4.196 3.617-7.598 8.078-7.598 4.239 0 7.709 3.073 8.044 6.98 1.982-.363 4.125-.583 6.408-.699-.444-1.458-1.153-2.795-2.288-3.624 0 0 .114-.009.316-.009.538 0 1.704.066 3.026.556 0 0 .268-1.791-.742-2.952 0 0 2.625.592 3.943 2.298 0 0 .785-1.128.518-2.54 0 0 4.17 2.488 5.605 6.411 1.496.129 2.924.312 4.278.56.335-3.907 3.808-6.98 8.048-6.98 4.459 0 8.078 3.401 8.078 7.598 0 2.551-1.342 4.802-3.391 6.18C58.36 23.6 60 29.326 60 37.603c0 16.283-18.872 22.463-28 22.463"></path>
            <path d="M10.925 17.436c2.031-1.723 4.487-2.944 7.339-3.777.001-.048.015-.092.015-.14 0-2.534-2.173-4.588-4.856-4.588-2.684 0-4.858 2.054-4.858 4.588-.001 1.669.951 3.114 2.36 3.917m42.15.001c1.408-.804 2.36-2.249 2.36-3.918 0-2.534-2.175-4.588-4.856-4.588-2.686 0-4.857 2.054-4.857 4.588 0 .048.013.092.014.14 2.853.833 5.308 2.054 7.339 3.778M32.038 54.105c-2.295 0-4.156.547-4.156 1.22 0 .092.033.265.099.265h8.096c.077 0 .118-.168.118-.265-.001-.672-1.86-1.22-4.157-1.22m-8.664-8.612c0 2.755 6.865 5.198 8.626 5.198s8.626-2.443 8.626-5.198c0-3.46-3.861-4.127-8.626-4.127-4.761 0-8.626.667-8.626 4.127"></path>
            <path d="M57.323 31.613c-4.23.063-8.443.237-12.665.324-4.22.094-8.444.139-12.663.131a424.25 424.25 0 01-12.663-.159 393.251 393.251 0 01-6.327-.231 317.682 317.682 0 01-6.322-.323c-.043-.004-.089.026-.098.068a.086.086 0 00.069.109l.015.003c2.358.526 4.734.916 7.119 1.23a1.089 1.089 0 00-.187.654c0 1.463 1.522 2.65 3.398 2.65 1.864 0 3.373-1.173 3.393-2.622 2.409.184 4.822.302 7.236.371-4.183 1.525-8.63 5.14-8.63 11.426 0 11.505 5.217 13.862 13.05 13.862 7.831 0 13.047-2.357 13.047-13.862 0-6.281-4.438-9.895-8.617-11.422a163.5 163.5 0 007.134-.35c.038 1.438 1.538 2.597 3.392 2.597 1.873 0 3.396-1.188 3.396-2.65 0-.248-.059-.426-.141-.578.256-.029.514-.054.77-.086 1.049-.139 2.104-.277 3.15-.443l1.574-.248 1.572-.268.02-.004a.094.094 0 00.078-.09c-.002-.049-.046-.089-.1-.089M43.595 45.245c0 10.381-4.234 12.412-11.547 12.412-7.315 0-11.55-2.031-11.55-12.412 0-7.665 7.522-10.846 11.55-10.846 4.025 0 11.547 3.181 11.547 10.846"></path>
          </svg>
          <span>
            <div>
              <span className={styles.purple}>
                <span className={styles['letter-spacing']}>
                  T<span className={styles['upside-down']}>v</span>
                </span>
                y<span className={styles['not-bold']}>lor</span>
              </span>
            </div>
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
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
}
