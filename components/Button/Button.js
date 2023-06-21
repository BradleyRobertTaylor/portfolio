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
  inactive: { height: "0px" },
  hover: {
    height: "100px",
    transition: { duration: 0.2 },
  },
};

export default function Button({ type, text }) {
  return (
    <motion.button
      type={type}
      whileHover="hover"
      initial="inactive"
      variants={buttonVariants}
      className={styles["button"]}
    >
      {text}
      <motion.div className={styles.hover} variants={hoverVariants} />
    </motion.button>
  );
}
