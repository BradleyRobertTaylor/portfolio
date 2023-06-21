"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Button/Button";

import styles from "./HeroHome.module.css";

const main = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delayChildren: 0.7 },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function HeroHome() {
  return (
    <motion.section
      variants={main}
      animate="visible"
      initial="hidden"
      className={styles.hero}
    >
      <div className={styles["hero-text"]}>
        <motion.div variants={container}>
          <motion.p variants={item} className={styles.title}>
            Software Engineer
          </motion.p>
          <motion.p variants={item} className={styles.title}>
            Front End & Back End Developer
          </motion.p>

          <motion.div className={styles["button-container"]} variants={item}>
            <Link href="/projects">
              <Button text="Resume" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
