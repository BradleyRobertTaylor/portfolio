import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import styles from "./MainHeader.module.css";

export default function MainHeader(props) {
  const [navIsHidden, setNavIsHidden] = useState(false);

  const { scrollY } = useScroll();

  const update = () => {
    if (scrollY?.current < scrollY?.prev) {
      setNavIsHidden(false);
    } else if (scrollY?.current > 10 && scrollY?.current > scrollY?.prev) {
      setNavIsHidden(true);
    }
  };

  useMotionValueEvent(scrollY, "change", update);

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { pointerEvents: "none", opacity: 0, y: -25 },
  };

  return (
    <motion.header
      variants={navVariants}
      animate={navIsHidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={styles.header}
    >
      {props.children}
    </motion.header>
  );
}
