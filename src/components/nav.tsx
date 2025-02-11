"use client";

import { Link } from "react-scroll";

const links = [
  { name: "O mnie", to: "about", content: "O mnie" },
  { name: "Projekty", to: "projects", content: "Projekty" },
  { name: "Kontakt", to: "contact", content: "Kontakt" },
];

export default function Nav() {
  let duration = 1100;

  return (
    <nav className="flex justify-center items-center px-3 pt-1 border-b border-indigo-400 md:gap-3 uppercase *:cursor-pointer *:md:tracking-widest w-fit mx-auto *:transition-colors *:p-2 rounded-lg relative">
      {links.map(({ name, to, content }) => {
        duration = duration - 100;
        return (
          <Link
            key={name}
            to={to}
            smooth={true}
            duration={duration}
            className="hover:text-indigo-300"
          >
            {content}
          </Link>
        );
      })}

      {/* border */}
      <div className="absolute bottom-0 left-0 border-l-2 rounded-lg border-indigo-400"></div>
      <div className="absolute bottom-0 right-0 border-r-2 rounded-lg border-indigo-400"></div>
    </nav>
  );
}
