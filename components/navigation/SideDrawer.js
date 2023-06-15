import { motion, AnimatePresence } from 'framer-motion';

import styles from './SideDrawer.module.css';

export default function SideDrawer(props) {
  return (
    <motion.aside
      className={styles['side-drawer']}
      onClick={props.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.aside>
  );
}
