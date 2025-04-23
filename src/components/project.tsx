import { RepositoriesGithub } from "@/utils/types";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type ProjectProps = {
  project: RepositoriesGithub;
};

export default function Project({ project }: ProjectProps) {
  const { name, html_url, homepage, description, image } = project;
  return (
    <div
      key={name}
      className="text-center w-full lg:w-[calc(50%-.7rem)] px-3 py-2 relative  rounded-lg border-indigo-400/50"
    >
      <NameAndLinks name={name} html_url={html_url} homepage={homepage} />

      {image && (
        <Image
          src={image}
          alt={name}
          className="rounded-lg mb-4 w-full"
          sizes="100%"
        />
      )}

      <Description description={description} />
    </div>
  );
}

function NameAndLinks({
  name,
  html_url,
  homepage,
}: {
  name: string;
  html_url: string;
  homepage: string | null;
}) {
  return (
    <div className="bg-indigo-400/10 rounded-lg p-2 mb-2">
      <h3 className="uppercase font-bold pb-3">{name}</h3>
      <div className="uppercase flex justify-center gap-4 *:flex *:items-center *:gap-1 *:transition-colors *:text-indigo-300">
        {homepage && (
          <a href={homepage} target="_blank" className="hover:text-indigo-400">
            <LinkIcon className="w-5 h-5 " />
            <p>strona</p>
          </a>
        )}
        <a href={html_url} target="_blank" className="hover:text-indigo-400">
          <CodeBracketIcon className="w-5 h-5" />
          <p>kod</p>
        </a>
      </div>
    </div>
  );
}

function Description({ description }: { description: string }) {
  return (
    <div className="relative text-justify border-t-2 border-indigo-400/50 pt-2 pb-4">
      {description}
    </div>
  );
}
