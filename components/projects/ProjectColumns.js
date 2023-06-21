import ProjectCard from "./../ProjectCard/ProjectCard";
import styles from "./ProjectColumns.module.css";

export default function ProjectColumns({ projects, clickHandler }) {
  const column1 = [];
  const column2 = [];

  projects.forEach(
    (
      { id, screenshot, alt, title, shortDescription, technologies, height },
      index
    ) => {
      const currentProject = (
        <ProjectCard
          id={id}
          clickHandler={clickHandler}
          key={index}
          screenshot={screenshot}
          alt={alt}
          title={title}
          shortDescription={shortDescription}
          technologies={technologies}
          height={height}
        />
      );

      index % 2 === 0
        ? column1.push(currentProject)
        : column2.push(currentProject);
    }
  );

  return (
    <>
      <div className={styles["column"]}>{[column1]}</div>
      <div className={styles["column"]}>{[column2]}</div>
    </>
  );
}
