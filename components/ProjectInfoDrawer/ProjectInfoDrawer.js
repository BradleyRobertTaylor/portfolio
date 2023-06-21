import { motion } from "framer-motion";

import styles from "./ProjectInfoDrawer.module.css";

const drawerVariants = {
  drawerIsOpen: {
    x: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
  drawerIsClosed: {
    x: "100%",
  },
};

export default function ProjectInfoDrawer(props) {
  return (
    <motion.aside
      id="project-drawer"
      className={styles["side-drawer"]}
      initial="drawerIsClosed"
      animate="drawerIsOpen"
      variants={drawerVariants}
      exit={{ x: "100%", transition: { duration: 0.3 } }}
    >
      {props.children}
    </motion.aside>
  );
}
