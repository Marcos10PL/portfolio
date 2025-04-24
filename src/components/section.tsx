"use client";

import { linksIds } from "@/utils/data";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "./next-link";

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
      {/* background */}
      <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />

      <header
        className="uppercase text-[1.6rem] xl:text-[2.3rem] mx-auto relative w-fit
      flex px-5 py-2 gap-2 items-center"
      >
        {icon && <FontAwesomeIcon icon={icon} className="w-5 xl:w-7" />}
        <h2> {header}</h2>

        {/* border */}
        <div
          className={`absolute top-0 left-[-1.1rem] border-b border-dashed border-indigo-900 w-1/2`}
        />
        <div
          className={`absolute top-[-0.6rem] left-0 border-r border-dashed border-indigo-900 h-10`}
        />

        {/* button to go to the next id-section */}
        <div className="absolute -right-14 mt-0.5">
          <NextLink id={to} />
        </div>
      </header>

      <div className="text-justify md:text-xl xl:text-2xl relative px-3 md:px-4 py-2 my-2">
        {children}
      </div>

      {/* background */}
      <div className="border-t ml-24 border-dashed border-indigo-900 w-24" />
      <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />
    </section>
  );
}
