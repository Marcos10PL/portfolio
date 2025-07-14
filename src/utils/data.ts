import {
  faCode,
  faEnvelope,
  faProjectDiagram,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import yourMoviesImage from "../images/your-movies.png";
import moneyMateImage from "../images/money-mate.png";
import websiteForTheCompanyImage from "../images/website-for-the-company.png";
import gamesImage from "../images/games.png";
import toDoListImage from "../images/to-do-list.png";
import miniAppsImage from "../images/mini-apps.png";
import projexHubImage from "../images/projex-hub.png";
import { RepositoriesData } from "./types";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

export const frontEndSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "RTK Query",
] as const;

export const backEndSkills = [
  "PHP",
  "Laravel",
  "WordPress",
  "MySQL",
  "Oracle",
  "Node.js",
  "Express.js",
  "MongoDB",
  "mongoose",
  "sequelize",
  "REST API",
] as const;

export const otherSkills = [
  "Java",
  "C++",
  "MySQL Workbench",
  "Git",
  "GitHub",
  "Jira",
  "Postman",
  "Figma",
  "Vite",
  "Docker",
  "pnpm",
  "npm",
] as const;

export const links = {
  about: { to: "about", icon: faUser },
  skills: { to: "skills", icon: faCode },
  projects: {
    to: "projects",
    icon: faProjectDiagram,
  },
  contact: {
    to: "contact",
    icon: faEnvelope,
  },
} as const;

export const linksArray = Object.values(links);
export const linksIds = linksArray.map(link => link.to);

export const repositories: RepositoriesData = {
  "your-movies": {
    name: "your-movies",
    image: yourMoviesImage,
  },
  MoneyMate: {
    name: "money-mate",
    image: moneyMateImage,
  },
  "projex-hub": {
    name: "projex-hub",
    image: projexHubImage,
  },
  "website-for-the-company": {
    name: "website-for-the-company",
    image: websiteForTheCompanyImage,
  },
  games: {
    name: "games",
    image: gamesImage,
  },
  "to-do-list": {
    name: "to-do-list",
    image: toDoListImage,
  },
  "mini-apps": {
    name: "mini-apps",
    image: miniAppsImage,
  },
};

export const ContactLinks = [
  {
    name: "marek.krama@gmail.com",
    url: "mailto:marek:krama@gmail.com",
    icon: faEnvelope,
  },
  {
    name: "504-955-917",
    url: "tel:+48504955917",
    icon: faPhone,
  },
  { name: "GitHub", url: "https://github.com/Marcos10PL", icon: faGithub },
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100013527426866",
    icon: faFacebook,
  },
];
