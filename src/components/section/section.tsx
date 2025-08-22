"use client";

import { linksIds } from "@/data/data";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "./next-link";
import {
  BackgroundBottom,
  BackgroundHeader,
  BackgroundTop,
} from "./backgrounds";

type linksIdsType = (typeof linksIds)[number];

type SectionProps = {
  children: Readonly<React.ReactNode>;
  id: string;
  header: string;
  icon?: IconDefinition;
  to?: linksIdsType;
};

export default function Section({
  children,
  id,
  header,
  icon,
  to,
}: SectionProps) {
  return (
    <section
      id={id}
      className="w-full md:w-[90%] xl:w-[70%] mx-auto text-center relative min-h-svh flex flex-col items-center justify-center"
    >
      <BackgroundTop />

      {/* header */}
      <header className="uppercase text-[1.6rem] xl:text-[2.3rem] mx-auto relative w-fit flex px-5 py-2 gap-2 items-center">
        {icon && <FontAwesomeIcon icon={icon} className="w-5 xl:w-7" />}

        <h2> {header}</h2>

        <BackgroundHeader />

        <div className="absolute -right-14 mt-0.5">
          <NextLink id={to} />
        </div>
      </header>

      <div className="text-justify md:text-xl xl:text-2xl relative px-3 md:px-4 py-2 my-2">
        {children}
      </div>

      <BackgroundBottom />
    </section>
  );
}
