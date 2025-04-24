import { fetchRepositories } from "@/git-projects/action";
import Section from "../components/section";
import ProjectsCarousel from "../components/projectsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { links, linksIds } from "@/utils/data";

export default async function Projects() {
  const projects = await fetchRepositories();

  return (
    <Section
      id={links.projects.to}
      header={links.projects.name}
      icon={faProjectDiagram}
      to={linksIds[3]}
    >
      <div className="block w-[calc(100vw-3rem)] mx-auto relative md:text-lg xxl:text-2xl lg:px-14">
        <ProjectsCarousel projects={projects} />
      </div>
      <div className="w-full flex justify-center items-center gap-2 mt-6">
        <Link />
      </div>
    </Section>
  );
}

function Link() {
  return (
    <a
      href="https://github.com/Marcos10PL"
      target="_blank"
      className="hover:bg-indigo-950 transition-colors border border-indigo-400 p-2 mx-auto rounded-lg"
    >
      <div className="flex justify-center items-center gap-2">
        <FontAwesomeIcon icon={faGithub} width={20} />
        <p>Więcej na moim githubie</p>
      </div>
    </a>
  );
}
