"use client";

import Link from "next/link";
import { onClick } from "react";
import { motion } from "framer-motion";

import styles from "./NavLinks.module.css";

const links = [
  { link: "/", title: "Home" },
  { link: "/projects", title: "Projects" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
];

const linkActive = {
  hover: { width: "100%" },
  inactive: {
    width: "0px",
  },
};

const drawerLink = {
  drawerIsOpen: {
    opacity: 1,
  },
  drawerIsClosed: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export default function NavLinks(props) {
  return (
    <ul className={styles["nav-list"]}>
      {links.map(({ link, title }, index) => {
        if (props.inSideDrawer) {
          return (
            <motion.li key={index} variants={drawerLink}>
              <Link onClick={props.onClick} href={link}>
                {title}
              </Link>
            </motion.li>
          );
        } else {
          return (
            <motion.li key={index} whileHover="hover" initial="inactive">
              <Link href={link}>
                {title}
                <motion.div
                  className={styles["active-hover"]}
                  variants={linkActive}
                />
              </Link>
            </motion.li>
          );
        }
      })}
    </ul>
  );
}
