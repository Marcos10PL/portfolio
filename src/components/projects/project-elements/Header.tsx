import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";

type HeaderProps = {
  name: string;
  html_url: string;
  homepage: string | null;
};

export default function Header({ name, html_url, homepage }: HeaderProps) {
  return (
    <div className="bg-indigo-400/10 rounded-lg p-2 mb-2">
      <h3 className="font-bold pb-3">{name}</h3>
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
