import DisplayProjects from "./DisplayProjects";

import projectGif from "../../public/screen-recording.gif";
import screenShot1 from "../../public/Dribbble-shot-HD-ss-1.webp";
import screenShot2 from "../../public/Screen-Shot-2019-11-23-at-2-15-47-PM.webp";
import screenShot3 from "../../public/Screenshot-2020-05-04-at-4-34-31-AM.webp";

import styles from "./projects.module.css";

const projects = [
  {
    id: 1,
    screenshot: projectGif,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is the short description for these placefillers before I enter my own projects in. I'm sure once this project is actually uploaded it will be amazing!",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 2,
    screenshot: screenShot1,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is the short description for these placefillers before I enter my own projects in. I'm sure once this project is actually uploaded it will be amazing!",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 3,
    screenshot: screenShot2,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is the short description for these placefillers before I enter my own projects in. I'm sure once this project is actually uploaded it will be amazing!",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
  {
    id: 4,
    screenshot: screenShot3,
    alt: "Placefiller project",
    title: "Placefiller",
    shortDescription:
      "This is the short description for these placefillers before I enter my own projects in. I'm sure once this project is actually uploaded it will be amazing!",
    longDescription:
      "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
    technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
    url: "https://github.com/BradleyRobertTaylor",
    githubUrl: "https://github.com/BradleyRobertTaylor",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles["projects-section"]}>
      <DisplayProjects projects={projects} />
    </section>
  );
}
