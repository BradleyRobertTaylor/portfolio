import { StaticImport } from "next/dist/shared/lib/get-img-props";
import forRequestsScreenshot from "../../public/for-requests-light.png";
import portfolioScreenshot from "../../public/portfolio-light.png";
import todosScreenshot from "../../public/todos-screenshot.png";
import musicLessonPlannerScreenshot from "../../public/music-lesson-planner.png";

export interface Project {
  id: number;
  img: StaticImport;
  alt: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    img: forRequestsScreenshot,
    alt: "ForRequests dashboard screenshot",
    title: "ForRequests",
    description:
      "A RequestBin like web application for testing and debugging webhooks and HTTP requests. Built using TypeScript, React, Express, and PostgreSQL. Deployed to DO Droplet.",
  },
  {
    id: 2,
    img: portfolioScreenshot,
    alt: "Personal portfolio screenshot",
    title: "Personal Portfolio",
    description:
      "This is my personal portfolio site for showcasing my projects. Built with Next.js, TypeScript, Framer Motion, and Shadcn UI.",
  },
  {
    id: 3,
    img: todosScreenshot,
    alt: "Todos project screenshot",
    title: "Todos",
    description:
      "Your classic application for creating, updating, and deleting todos with dynamic filtering by date and completed. Built with Node.js, Express, Handlebars, and SQLite.",
  },
  {
    id: 4,
    img: musicLessonPlannerScreenshot,
    alt: "Music lesson planner screenshot",
    title: "Music Lesson Planner",
    description:
      "A web application for scheduling music lessons with a private teacher. Each Built with Ruby, Sinatra, ERB, and PostgreSQL.",
  },
];
