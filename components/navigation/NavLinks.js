'use client';

import Link from 'next/link';
import { onClick } from 'react';
import { motion } from 'framer-motion';

import styles from './NavLinks.module.css';

const links = [
  { link: '/', title: 'Home' },
  { link: '/projects', title: 'Projects' },
  { link: '/about', title: 'About' },
  { link: '/contact', title: 'Contact' },
];

const linkActive = {
  hover: { width: '100%' },
  inactive: {
    width: '0px',
  },
};

export default function NavLinks() {
  const handleThemeToggle = (event) => {
    const dataset = document.body.dataset;
    dataset.theme = dataset.theme === 'light' ? 'dark' : 'light';
  };

  return (
    <ul className={styles['nav-list']}>
      {links.map(({ link, title }, index) => {
        return (
          <motion.li key={index} whileHover="hover" initial="inactive">
            <Link href={link}>
              {title}
              <motion.div
                className={styles['active-hover']}
                variants={linkActive}
              ></motion.div>
            </Link>
          </motion.li>
        );
      })}
      <li>
        <button onClick={handleThemeToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0 0 5.373 0 12zm2 0C2 6.486 6.486 2 12 2v20C6.486 22 2 17.514 2 12z"></path>
          </svg>
        </button>
      </li>
    </ul>
  );
}
