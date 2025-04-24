// "use client";

import { linksIds } from "@/utils/data";
import NextLink from "../components/next-link";

export default function Home() {
  return (
    <section
      id="home"
      className="h-[calc(100svh-2rem)] relative flex items-center justify-center px-5"
    >
      <div className="flex flex-col items-center justify-center gap-y-5 uppercase mb-16 relative">
        <div className="flex flex-wrap justify-center gap-x-5 tracking-widest text-[2.4rem] md:text-[3rem] lg:text-[5rem] xl:text-[5.8rem] font-bold">
          <p className="mb-[-0.7rem]">Marek</p>
          <p>Kramarczyk</p>
        </div>

        <div className="text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold space-y-1">
          <p className="text-center text-indigo-400">
            Student informatyki II roku
          </p>
          <p className="text-center text-indigo-400">Web development</p>
        </div>
      </div>

      <div className="absolute bottom-6 flex flex-col items-center">
        <NextLink id={linksIds[0]} />
      </div>

      {/* background */}
      <div className="absolute border-l border-r p-14 border-indigo-900 left-1/2 -translate-x-1/2 h-full border-dashed z-[-1]" />
    </section>
  );
}
