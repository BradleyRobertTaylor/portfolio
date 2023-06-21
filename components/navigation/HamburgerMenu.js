import { motion } from "framer-motion";

import styles from "./HamburgerMenu.module.css";

const hamburgerVariants = {
  drawerIsOpen: {
    fill: "white",
    rotate: -90,
    transition: { delayChildren: 0.2 },
  },
  drawerIsClosed: {
    fill: "var(--primary-black)",
    rotate: 0,
    transition: { delayChildren: 0.2 },
  },
};

// const topLineVariant = {
//   drawerIsOpen: {
//     rotate: -60,
//     y: 8,
//     x: -17,
//     transition: {
//       duration: 0.2,
//     },
//   },
//   drawerIsClosed: {
//     rotate: 0,
//     y: 0,
//     x: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };
//
// const middleLineVariant = {
//   drawerIsOpen: {
//     rotate: 60,
//     y: -11,
//     x: 20,
//     transition: {
//       duration: 0.2,
//     },
//   },
//   drawerIsClosed: {
//     rotate: 0,
//     y: 0,
//     x: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

export default function HamburgerMenu(props) {
  return (
    <button
      className={styles["hamburger-button"]}
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={props.onClick}
    >
      <motion.svg
        variants={hamburgerVariants}
        animate={props.isOpen ? "drawerIsOpen" : "drawerIsClosed"}
        className="hamburger"
        viewBox="0 0 100 100"
      >
        <motion.rect
          width="80"
          height="10"
          x="10"
          y="25"
          className="line line__top"
          rx="5"
        ></motion.rect>
        <motion.rect
          width="80"
          height="10"
          x="10"
          y="45"
          className="line line__middle"
          rx="5"
        ></motion.rect>
        <motion.rect
          width="80"
          height="10"
          x="10"
          y="65"
          className="line line__bottom"
          rx="5"
        ></motion.rect>
      </motion.svg>
    </button>
  );
}
