"use client";

import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import projectGif from "../../public/screen-recording.gif";
import screenShot1 from "../../public/Dribbble-shot-HD-ss-1.webp";
import screenShot2 from "../../public/Screen-Shot-2019-11-23-at-2-15-47-PM.webp";
import screenShot3 from "../../public/Screenshot-2020-05-04-at-4-34-31-AM.webp";
import ProjectInfoDrawer from "../ProjectInfoDrawer/ProjectInfoDrawer";
import ProjectColumns from "./ProjectColumns";
import Backdrop from "../Backdrop/Backdrop";

import styles from "./projects.module.css";
import ProjectInfo from "../ProjectInfo/ProjectInfo";
import Button from "../Button/Button";

const projects = [
  {
    id: 1,
    screenshot: projectGif,
    height: 500,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is here to fill the place for projects until I update them.",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 2,
    screenshot: screenShot1,
    height: 400,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is here to fill the place for projects until I update them.",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 3,
    screenshot: screenShot2,
    height: 450,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is here to fill the place for projects until I update them.",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 4,
    screenshot: screenShot3,
    height: 400,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is here to fill the place for projects until I update them.",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
];

export default function Projects() {
  const [projectDrawerIsOpen, setProjectDrawerIsOpen] = useState(false);
  const [currentProjectInfo, setCurrentProjectInfo] = useState(null);

  useEffect(() => {
    if (projectDrawerIsOpen) {
      document.body.dataset.hidden = "hidden";
    } else {
      document.body.dataset.hidden = "";
    }
  }, [projectDrawerIsOpen]);

  const openProjectInfoDrawer = (event) => {
    const id = event.currentTarget.dataset.id;
    setCurrentProjectInfo(
      projects.find((project) => project.id.toString() === id)
    );
    setProjectDrawerIsOpen(true);
  };

  const closeProjectInfoDrawer = () => {
    setProjectDrawerIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {projectDrawerIsOpen && (
          <>
            <Backdrop onClick={closeProjectInfoDrawer} />
            <ProjectInfoDrawer>
              <ProjectInfo
                onClick={closeProjectInfoDrawer}
                currentProjectInfo={currentProjectInfo}
              />
            </ProjectInfoDrawer>
          </>
        )}
      </AnimatePresence>
      <section id="projects" className={styles["projects-section"]}>
        <div className={styles.container}>
          <div className={styles["section-head"]}>
            <span>Take a look at my</span>
            <h2 className={`${styles.title}`}>Projects</h2>
          </div>
          <div className={styles["project-grid"]}>
            <ProjectColumns
              projects={projects}
              clickHandler={openProjectInfoDrawer}
            />
          </div>
          <Link href="/about">
            <Button text="About Me" />
          </Link>
        </div>
      </section>
    </>
  );
}
