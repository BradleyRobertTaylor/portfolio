import ProjectCard from "./../ProjectCard/ProjectCard";
import styles from "./ProjectColumns.module.css";

export default function ProjectColumns({ projects, clickHandler }) {
  const column1 = [];

  projects.forEach(
    (
      {
        id,
        screenshot,
        alt,
        title,
        shortDescription,
        technologies,
        height,
        url,
        githubUrl,
      },
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
          url={url}
          githubUrl={githubUrl}
        />
      );

      column1.push(currentProject);
    }
  );

  return column1;
}
