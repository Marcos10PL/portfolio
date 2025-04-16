import { fetchRepositories } from "@/git-projects/action";
import Section from "../section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "../project";

export default async function Projects() {
  const projects = await fetchRepositories();

  return (
    <Section id="projects" header="projekty">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
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
