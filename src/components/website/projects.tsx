import { fetchRepositories } from "@/git-projects/action";
import Section from "../section";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default async function Projects() {
  const project = await fetchRepositories();

  return (
    <Section id="projects" header="projekty">
      <div className="flex flex-wrap justify-center gap-8">
        {project.map(({ name, html_url, homepage, description, tech }) => (
          <div
            key={name}
            className="text-left lg:w-[calc(50%-1rem)] rounded-lg rounded-ss-none shadow-[0_0_0.4rem_rgba(129,140,248)] px-3 py-2 flex-grow relative"
          >
            <h3 className="font-bold pb-3">{name}</h3>

            <p className="pb-5">{description}</p>

            <div className="flex flex-wrap items-center gap-2 pb-12">
              {tech.map((item, index) => (
                <p key={index}>
                  {item === tech[tech.length - 1] ? item : item + ", "}
                </p>
              ))}
            </div>

            <div className="uppercase flex gap-4 absolute bottom-0 left-0 px-3 py-2 *:flex *:items-center *:gap-1 *:transition-colors">
              <a
                href={homepage}
                target="_blank"
                className="hover:text-indigo-400"
              >
                <p>page</p>
                <LinkIcon className="w-5 h-5 " />
              </a>
              <a
                href={html_url}
                target="_blank"
                className="hover:text-indigo-400"
              >
                <p>Code</p>
                <CodeBracketIcon className="w-5 h-5" />
              </a>
            </div>

            {/* border */}
            <div className="absolute top-[-1px] left-[-0.5rem] border-t border-indigo-400 w-20"></div>
            <div className="absolute top-[-1rem] left-[-1px] border-l border-indigo-400 h-20"></div>
          </div>
        ))}
        <a
          href="https://github.com/Marcos10PL"
          target="_blank"
          className="hover:bg-indigo-950 transition-colors w-full md:w-fit  border border-indigo-400 p-2  mx-auto rounded-lg"
        >
          <div className="flex justify-center gap-2">
            <FontAwesomeIcon icon={faGithub} width={20} />
            <p>Więcej projktów na moim githubie</p>
          </div>
        </a>
      </div>
    </Section>
  );
}
