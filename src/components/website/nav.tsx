"use client";

import { Link } from "react-scroll";
import { HomeIcon } from "@heroicons/react/24/solid";

const links = [
  { name: "Home", to: "#", content: HomeIcon },
  { name: "O mnie", to: "about", content: "O mnie" },
  { name: "Projekty", to: "projects", content: "Projekty" },
  { name: "Kontakt", to: "contact", content: "Kontakt" },
];

export default function Nav() {
  return (
    <nav className="flex justify-center items-center px-3 pt-1 border-b border-indigo-400 md:gap-3 uppercase *:cursor-pointer *:md:tracking-widest w-fit mx-auto *:transition-colors *:p-2 rounded-lg relative">
      {links.map(({ name, to, content }) => {
        return (
          <Link
            key={name}
            to={to}
            smooth={true}
            duration={500}
            className="hover:text-slate-500"
          >
            {typeof content === "string" ? (
              content
            ) : (
              <HomeIcon className="w-6 h-6" />
            )}
          </Link>
        );
      })}

      {/* border */}
      <div className="absolute bottom-0 left-0 border-l-2 rounded-lg border-indigo-400"></div>
      <div className="absolute bottom-0 right-0 border-r-2 rounded-lg border-indigo-400"></div>
    </nav>
  );
}
