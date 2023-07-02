import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./EmptyProjects.module.css";

export default function DisplayProjects({ projects, clickHandler }) {
  if (projects.length === 0) {
    return <ProjectItem id={0} />;
  }

  return projects.map(
    (
      { id, screenshot, alt, title, description, technologies, url, githubUrl },
      index
    ) => (
      <ProjectItem
        id={id}
        clickHandler={clickHandler}
        key={index}
        screenshot={screenshot}
        alt={alt}
        title={title}
        description={description}
        technologies={technologies}
        url={url}
        githubUrl={githubUrl}
      />
    )
  );
}
