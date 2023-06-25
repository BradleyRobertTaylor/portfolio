"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./ProjectCard.module.css";
import TechnologyCards from "../TechnologyCards/TehnologyCards";

export default function ProjectCard({
  id,
  clickHandler,
  screenshot,
  alt,
  title,
  shortDescription,
  technologies,
  height,
  url,
  githubUrl,
}) {
  return (
    <div
      data-id={id}
      onClick={clickHandler}
      className={`${styles["project-wrapper"]}`}
    >
      <div className={styles["big-number"]}>{`0${id}`}</div>
      <Link className={styles["image-link"]} href="#">
        <Image src={screenshot} alt={alt} />
      </Link>
      <div className={styles["information-wrapper"]}>
        <h3 className={styles["project-title"]}>{title}</h3>
        <p className={styles["short-description"]}>{shortDescription}</p>
        <div className={styles["project-information"]}>
          <div className={styles["project-information__text"]}>
            <div className={styles["project-information__url"]}>
              <div className={styles["project-information__heading"]}>Url</div>
              <div className={styles["project-information__content"]}></div>
            </div>
            <div className={styles["project-information__github-url"]}>
              <div className={styles["project-information__heading"]}>
                Github
              </div>
              <div className={styles["project-information__content"]}></div>
            </div>
            <div className={styles["project-information__technologies"]}>
              <div className={styles["project-information__heading"]}>
                Technologies
              </div>
              <div className={styles["project-information__content"]}></div>
            </div>
          </div>
          <div className={styles["project-information__button"]}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
