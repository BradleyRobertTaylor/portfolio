"use client";

import { projects } from "@/data/projects";
import { ProjectItem } from "./ProjectItem";

export function OtherProjectsList() {
  return (
    <section className="p-9 md:p-24">
      <h2 className="text-center font-extrabold text-4xl md:text-5xl pb-9">
        Other Projects
      </h2>
      <div className="grid grid-cols-1 gap-16 md:gap-24 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
