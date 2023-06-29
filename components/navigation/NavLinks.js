"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./NavLinks.module.css";

const links = [
  { link: "/", title: "Home" },
  { link: "#projects", title: "Projects" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
];

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
        return (
          <motion.li key={index} variants={drawerLink}>
            <Link onClick={props.onClick} href={link}>
              {title}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
