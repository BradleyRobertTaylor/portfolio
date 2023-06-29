import { motion } from "framer-motion";

import styles from "./Button.module.css";

const buttonVariants = {
  // inactive: {
  //   color: "white",
  // },
  // hover: {
  //   color: "black",
  // },
};

const hoverVariants = {
  hover: {
    rotate: -45,
  },
};

export default function Button({ type, text }) {
  return (
    <motion.button
      whileHover="hover"
      whileFocus="hover"
      className={styles.button}
      type={type}
    >
      <span>{text}</span>
      <motion.svg
        variants={hoverVariants}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </motion.svg>
    </motion.button>
  );
}
