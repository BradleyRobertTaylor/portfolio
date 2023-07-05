"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AboutCoverPhoto.module.css";
import headshot from "../../public/images/headshot.png";

export default function AboutCoverPhoto() {
  return (
    <section id="about-cover" className={styles["photo-section"]}>
      <motion.div
        className={styles["image-wrapper"]}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image src={headshot} alt="Headshot of Bradley Taylor" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 1,
          delay: 0.5,
        }}
        viewport={{ once: true, amount: 0.2 }}
        className={styles["titles-section"]}
      >
        <p>Bradley Taylor</p>
        <p>Full-stack Developer</p>
        <p>Based in Las Vegas</p>
      </motion.div>
    </section>
  );
}
