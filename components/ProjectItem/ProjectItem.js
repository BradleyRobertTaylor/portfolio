"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./ProjectItem.module.css";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ProjectCard({
  id,
  clickHandler,
  screenshot,
  alt,
  title,
  description,
  technologies,
  url,
  githubUrl,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 30);

  if (id === 0) {
    return (
      <div
        data-id={id}
        onClick={clickHandler}
        className={`${styles["project-wrapper"]}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 1 }}
          ref={ref}
          style={{ y }}
          className={styles["big-number"]}
        >{`0${id}`}</motion.div>
        <Link as="/about" className={styles["image-link"]} href="/about">
          <div className={styles["coming-soon"]}>Projects Coming Soon</div>
        </Link>
      </div>
    );
  }

  return (
    <div
      data-id={id}
      onClick={clickHandler}
      className={`${styles["project-wrapper"]}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 1 }}
        ref={ref}
        style={{ y }}
        className={styles["big-number"]}
      >{`0${id}`}</motion.div>
      <Link className={styles["image-link"]} target="_blank" href={`${url}`}>
        <Image src={screenshot} alt={alt} />
      </Link>
      <div className={styles["information-wrapper"]}>
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
            }}
            viewport={{ once: true, amount: 1 }}
            className={styles["project-title"]}
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
            }}
            viewport={{ once: true, amount: 1 }}
            className={styles["description"]}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.1, 0.25, 0.3, 1],
            duration: 1,
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 1 }}
          className={styles["links-wrapper"]}
        >
          <div className={styles["project-information__heading"]}>
            Live Site
          </div>
          <Link
            className={styles["project-information__link"]}
            target="_blank"
            href={url}
          >
            {url}
          </Link>
          <div className={styles["project-information__heading"]}>GitHub</div>
          <Link
            className={styles["project-information__link"]}
            target="_blank"
            href={githubUrl}
          >
            {githubUrl}
          </Link>
        </motion.div>
        <div className={styles["project-information"]}>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 1 }}
            className={styles["project-information__text"]}
          >
            <div className={styles["project-information__heading"]}>
              Technologies
            </div>
            <div className={styles["project-information__content"]}>
              {technologies?.join(", ")}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 1,
              delay: 0.3,
            }}
            viewport={{ once: true, amount: 1 }}
            className={styles["project-information__button"]}
          >
            <Link
              target="_blank"
              href={`${url}`}
              className={styles["arrow-button"]}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 19l6-6m-6 6l-6-6m6 6V5"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
