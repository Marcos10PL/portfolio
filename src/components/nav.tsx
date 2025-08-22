"use client";

import { linksArray } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { Link } from "react-scroll";

export default function Nav() {
  const t = useTranslations("nav");

  let duration = 1100;

  return (
    <nav className="relative flex flex-wrap justify-center items-center px-3 pt-1 border-b border-indigo-400 md:gap-3 *:cursor-pointer *:md:tracking-widest w-fit mx-auto *:transition-colors *:p-2">
      {linksArray.map(({ to, icon }) => {
        duration = duration - 100;
        return (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={duration}
            className="hover:text-indigo-300 flex flex-col justify-center items-center gap-1"
          >
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            <span className="text-xs md:text-sm">{t(to)}</span>
          </Link>
        );
      })}

      {/* border */}
      <div className="absolute bottom-0 left-0 border-l-2 border-indigo-400"></div>
      <div className="absolute bottom-0 right-0 border-r-2 border-indigo-400"></div>
    </nav>
  );
}
