"use client";

import { motion } from "framer-motion";

import styles from "./HeroHome.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <motion.div className={styles["hero__wrapper"]}>
          <h1 className={styles.title}>
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
                delay: 0.3,
              }}
            >
              Hello <span className={styles["short-dash"]}>-</span>
              <span className={styles["long-dash"]}>&#8212;</span> I'm Brad.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 1,
                delay: 0.6,
              }}
            >
              <br />A Las Vegas - based Software Engineer.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
              delay: 0.9,
            }}
            className={styles.paragraph}
          >
            I develop web applications that are robust and scalable while
            providing an intuitive user interface.
          </motion.p>
        </motion.div>
      </div>
      <motion.a
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 1, delay: 1.2 }}
        href="#projects"
        className={styles["arrow-button"]}
      >
        <motion.svg
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.5, delay: 1.5 }}
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
