import {
  faCode,
  faEnvelope,
  faFolder,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import yourMoviesImage from "../images/your-movies.png";
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
] as const;

export const backEndSkills = [
  "PHP",
  "WordPress",
  "MySQL",
  "Oracle",
  "Node.js",
  "Express.js",
  "MongoDB",
] as const;

export const otherSkills = [
  "Java",
  "C++",
  "Git",
  "GitHub",
  "Figma",
  "Vite",
  "Docker",
] as const;

export const links = {
  about: { name: "O mnie", to: "about", content: "O mnie", icon: faUser },
  skills: { name: "Skills", to: "skills", content: "Skills", icon: faCode },
  projects: {
    name: "Projekty",
    to: "projects",
    content: "Projekty",
    icon: faFolder,
  },
  contact: {
    name: "Kontakt",
    to: "contact",
    content: "Kontakt",
    icon: faEnvelope,
  },
} as const;

export const linksArray = Object.values(links);
export const linksIds = linksArray.map(link => link.to);

export const repositories: RepositoriesData = {
  "projex-hub": {
    name: "Projex Hub",
    description:
      "Aplikacja z logowaniem, która umożliwia zarządzanie projektami. Użytkownicy mogą też filtorwać i wyszukiwać swoje projekty. W każdym projekcie można tworzyć zadania i dodawać innych użytkowników. Strona stworzona w oparciu o MERN stack z dodatkiem TypeScriptu oraz Reduxa (wciąż w rozbudowie - brak podstrony home)",
    image: projexHubImage,
  },
  "your-movies": {
    name: "Your Movies",
    description:
      "Aplikacja napisana w Next.js (TypeScript) służąca do wyszukiwania filmów i seriali. Pozwala sprawdzać szczegółowe informacje o tytułach i śledzić premiery kinowe. Możliwe jest także obejrzenie traileru danego tytułu oraz zapoznanie się z jego obsadą. Strona pobiera dane z API TMDB.",
    image: yourMoviesImage,
  },
  "website-for-the-company": {
    name: "Strona dla firmy",
    description:
      "Kompletny szablon strony internetowej dla przykładowej firmy. Strona wykorzystuje Bootstrapa i animacje CSS.",
    image: websiteForTheCompanyImage,
  },
  games: {
    name: "Gry",
    description:
      "Strona z grami takimi jak: kółko i krzyżyk, memory, wisielec, kamień-papier-nożyce. Gry mają różne tryby. Aplikacja napisana w React.js (TypeScript).",
    image: gamesImage,
  },
  "to-do-list": {
    name: "To-Do List",
    description:
      "Interaktywna lista to-do, którą można dowolnie zarządzać. Lista jest zapisywana na bieżąco w plikach cookies. Napisana w czystym TypeScripcie.",
    image: toDoListImage,
  },
  "mini-apps": {
    name: "Mini aplikacje",
    description:
      "Strona internetowa z zegarem, prognozą pogody i stoperem. Strona korzysta z prostego API umożliwiającego pobranie aktualnej pogody. Strona stworzona w czystym JavaScripcie.",
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
  { name: "github", url: "https://github.com/Marcos10PL", icon: faGithub },
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100013527426866",
    icon: faFacebook,
  },
];
