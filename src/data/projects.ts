import { StaticImport } from "next/dist/shared/lib/get-img-props";
import smoothSailDashboard from "../../public/smoothsail-dashboard.png";

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
    img: smoothSailDashboard,
    alt: "SmoothSail dashboard screenshot",
    title: "SmoothSail",
    description:
      "is a feature flag management tool designed for decoupling deployment from release. It enables developers to target specific demographics of users in order to limit the impact of unforeseen bugs in production.",
  },
];
