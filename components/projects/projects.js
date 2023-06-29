"use client";
import DisplayProjects from "./DisplayProjects";

import { projects } from "../../data/projects";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles["projects-section"]}>
      <DisplayProjects projects={projects} />
    </section>
  );
}
