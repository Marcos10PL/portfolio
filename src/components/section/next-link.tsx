"use client";

import { linksIds } from "@/data/data";
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

type linksIdsType = (typeof linksIds)[number];

type NextLinkProps = {
  id?: linksIdsType;
};

export default function NextLink({ id }: NextLinkProps) {
  if (!id) return null;

  return (
    <Link
      to={id}
      smooth={true}
      duration={1000}
      className="hover:text-slate-500 cursor-pointer p-14"
    >
      <ArrowDownCircleIcon
        className={`w-10 h-10 ${id === linksIds[0] ? "animate-bounce" : "animate-pulse"} transition-colors`}
      />
    </Link>
  );
}
