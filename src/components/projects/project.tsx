import { RepositoriesGithub } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "./project-elements/Header";
import Description from "./project-elements/Description";
import TechStack from "./project-elements/TechStak";
import ImageModal from "./project-elements/ImageModal";

type ProjectProps = {
  project: RepositoriesGithub;
};

export default function Project({ project }: ProjectProps) {
  const { name, html_url, homepage, image, tech } = project;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("sections.projects");

  return (
    <>
      <div className="text-center rounded-lg h-full flex flex-col">
        <Header
          name={t(`${name}.name`)}
          html_url={html_url}
          homepage={homepage}
        />

        {image && (
          <Image
            src={image}
            alt={name}
            className="rounded-lg mb-2 w-full md:cursor-pointer pointer-events-none md:pointer-events-auto"
            sizes="100%"
            onClick={() => setIsModalOpen(true)}
          />
        )}

        <div className="bg-indigo-400/10 mt-auto h-full flex flex-col rounded-lg px-4 py-2.5">
          <Description description={t(`${name}.description`)} />
          <TechStack tech={tech} />
        </div>
      </div>

      {image &&
        isModalOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <ImageModal
            image={image}
            name={name}
            setIsModalOpen={setIsModalOpen}
          />,
          document.body
        )}
    </>
  );
}
