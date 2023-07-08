// import projectGif from "../public/screen-recording.gif";
import todosGif from "../public/todos.gif";
import familyMatters from "../public/images/family-matters.png";

export const projects = [
  // {
  //   id: 1,
  //   screenshot: projectGif,
  //   alt: "Placefiller project",
  //   title: "Placefiller",
  //   description:
  //     "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.",
  //   technologies: ["JavaScript", "React", "Next.js", "MongoDB"],
  //   url: "https://github.com/BradleyRobertTaylor",
  //   githubUrl: "https://github.com/BradleyRobertTaylor",
  // },
  {
    id: 1,
    screenshot: todosGif,
    alt: "Gif of the Todos application",
    title: "Todos",
    description:
      "Todos is an application to for managing todos with dynamic filtering based on dates and completed todos. It was written with vanilla JS, Handlebars, and SQLite. Todos are sorted and grouped together based on the month and year. They are also sorted with the completed todos at the end of the list. Express was used with SQLite3 to persist todo data.",
    technologies: ["JavaScript", "Express", "Handlebars", "SQLite", "Node"],
    url: "",
    githubUrl: "https://github.com/BradleyRobertTaylor/todos-project",
  },
  {
    id: 2,
    screenshot: familyMatters,
    alt: "Screenshot of home image of Family Matters and Mentors website",
    title: "Family Matters & Mentors",
    description:
      "Family Matters & Mentors is a website that allows users to schedule appointments and purchase an online 12 week course. It's built with React and Next.js.",
    technologies: ["Next.js", "React", "JavaScript"],
    url: "https://family-matters-mentors-gh9hvgrmd-bradleyroberttaylor.vercel.app/",
    githubUrl: "https://github.com/BradleyRobertTaylor/family-matters-mentors",
  },
];
