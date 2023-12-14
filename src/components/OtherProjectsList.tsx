import { projects } from "@/data/projects";
import ProjectItem from "./ProjectItem";

export function OtherProjectsList() {
  return (
    <section className="flex flex-col p-9 gap-40 lg:flex-row md:p-24 md:gap-16">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </section>
  );
}
