"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__wrapper"]}>
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 0.5,
          }}
          className={styles.title}
        >
          I develop web applications that are robust and scalable while
          providing an intuitive user interface.
        </motion.h1>
      </div>
      <motion.a
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
          delay: 1,
        }}
        href="/about#about-cover"
        className={styles["arrow-button"]}
      >
        <motion.svg
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 1.3,
          }}
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
