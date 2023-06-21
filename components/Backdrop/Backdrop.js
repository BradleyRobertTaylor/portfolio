import { motion } from "framer-motion";

import styles from "./Backdrop.module.css";

export default function Backdrop(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${styles.backdrop} ${props.classes}`}
      onClick={props.onClick}
    ></motion.div>
  );
}
