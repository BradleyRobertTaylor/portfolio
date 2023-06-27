"use client";

import { motion } from "framer-motion";
import TechnologyItems from "../TechnologyItems/TechnologyItems";
import technologies from "../../data/technologiesUsed";

import styles from "./TechnologyCarousel.module.css";

export default function TechnologyCarousel() {
  return (
    <section className={styles["technology-carousel"]}>
      <h3 className={styles["carousel-title"]}>Technologies I've used</h3>
      <div className={styles["carousel-wrapper"]}>
        <motion.ul
          animate={{ x: -2285 }}
          initial={{ x: 0 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className={styles.carousel}
        >
          <TechnologyItems items={technologies} />
          <TechnologyItems items={technologies} />
        </motion.ul>
      </div>
    </section>
  );
}
