import ProjectItem from "../ProjectItem/ProjectItem";

export default function DisplayProjects({ projects, clickHandler }) {
  return projects.map(
    (
      {
        id,
        screenshot,
        alt,
        title,
        description,
        technologies,
        height,
        url,
        githubUrl,
      },
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
        height={height}
        url={url}
        githubUrl={githubUrl}
      />
    )
  );
}
