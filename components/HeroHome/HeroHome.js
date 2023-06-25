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
    <section className={styles.hero}>
      <div className={styles["hero-text"]}>
        <div className={styles["hero__wrapper"]}>
          <h1 className={styles.title}>
            Hello &#8212; I'm Brad. A Las Vegas-based Software Engineer.
          </h1>
          <p className={styles.paragraph}>
            I develop web applications that are robust and scalable while
            providing an intuitive user interface.
          </p>
        </div>
      </div>
      <a href="#projects" className={styles["arrow-button"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l6-6m-6 6l-6-6m6 6V5"
          ></path>
        </svg>
      </a>
    </section>
  );
}
