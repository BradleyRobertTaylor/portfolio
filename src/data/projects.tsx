import { StaticImport } from "next/dist/shared/lib/get-img-props";
import forRequestsLight from "../../public/for-requests-light.png";
import portfolioLight from "../../public/portfolio-light.png";
import todosScreenshot from "../../public/todos-screenshot.png";

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
    img: forRequestsLight,
    alt: "ForRequests dashboard screenshot",
    title: "ForRequests",
    description:
      "A RequestBin clone for testing and debugging webhooks and HTTP requests. Built using TypeScript, React, Express, and MongoDB.",
  },
  {
    id: 2,
    img: portfolioLight,
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
];
