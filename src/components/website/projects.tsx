import { fetchRepositories } from "@/git-projects/action";

export default async function Projects() {
  const project = await fetchRepositories();

  return (
    <section
      id="projects"
      className="relative flex items-center justify-center px-5 py-10"
    >
      <header className="uppercase text-[1.6rem] xl:text-[2.3rem] mx-auto relative w-fit my-[7.5rem]">
        <h2 className="px-5 py-2"> Projekty</h2>

        <div className="flex flex-wrap">
          {project.map(({ name, html_url, homepage }) => (
            <div key={name} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-indigo-900 rounded-lg p-3 hover:bg-indigo-900 hover:text-[#f8f8f8] transition-colors"
              >
                <h3 className="text-lg font-bold">{name}</h3>
              </a>
              <a href={homepage}>Link</a>
            </div>
          ))}
        </div>

        {/* border */}
        <div className="absolute top-0 left-[-1rem] border-b border-dashed border-indigo-900 w-1/2"></div>
        <div className="absolute top-[-0.5rem] left-0 border-r border-dashed border-indigo-900 h-10"></div>
      </header>

      {/* background */}
      <div className="absolute border-l border-r px-14 border-indigo-900 left-1/2 -translate-x-1/2 border-dashed top-0 z-[-1] h-40" />
    </section>
  );
}
