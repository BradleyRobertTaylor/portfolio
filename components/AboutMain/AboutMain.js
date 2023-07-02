"use client";

import { motion } from "framer-motion";
import TechnologyCarousel from "../TechnologyCarousel/TechnologyCarousel";

import styles from "./AboutMain.module.css";

export default function AboutMain() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
        className={styles["text-block"]}
      >
        <p>
          I'm a professional musician, educator, and now full-stack software
          engineer. While learning to program, I focused on the fundamentals and
          how to approach problem solving. I draw upon my experience as a
          musician and educator to bring a unique perspective to my work,
          infusing my creativity to find scalable solutions with my passion for
          learning new technologies.
        </p>
      </motion.section>
      <TechnologyCarousel />
    </>
  );
}
