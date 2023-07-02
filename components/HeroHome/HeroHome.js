"use client";

import { motion } from "framer-motion";

import styles from "./HeroHome.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 0.5,
          }}
          className={styles["hero__wrapper"]}
        >
          <h1 className={styles.title}>
            Hello <span className={styles["short-dash"]}>-</span>
            <span className={styles["long-dash"]}>&#8212;</span> I'm Brad.
            <br />A Las Vegas - based Software Engineer.
          </h1>
          <p className={styles.paragraph}>
            I develop web applications that are robust and scalable while
            providing an intuitive user interface.
          </p>
        </motion.div>
      </div>
      <motion.a
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1, delay: 1 }}
        href="#projects"
        className={styles["arrow-button"]}
        tabIndex="0"
      >
        <motion.svg
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5, delay: 1.3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l6-6m-6 6l-6-6m6 6V5"
          ></path>
        </motion.svg>
      </motion.a>
    </section>
  );
}
