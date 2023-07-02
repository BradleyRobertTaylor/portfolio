import { motion } from "framer-motion";
import styles from "./HamburgerMenu.module.css";

export default function HamburgerMenu({
  onClick,
  path01Variants,
  path02Variants,
  path01Controls,
  path02Controls,
}) {
  return (
    <button
      className={styles["hamburger-button"]}
      aria-controls="primary-navigation"
      aria-expanded="false"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </button>
  );
}
