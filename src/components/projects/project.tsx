import { RepositoriesGithub } from "@/types"
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"

type ProjectProps = {
  project: RepositoriesGithub
}

export default function Project({ project }: ProjectProps) {
  const { name, html_url, homepage, image } = project
  const [isModalOpen, setIsModalOpen] = useState(false)
  const t = useTranslations("sections.projects")

  return (
    <>
      <div className="text-center rounded-lg border-indigo-400/50">
        <NameAndLinks
          name={t(`${name}.name`)}
          html_url={html_url}
          homepage={homepage}
        />

        {image && (
          <Image
            src={image}
            alt={name}
            className="rounded-lg mb-4 w-full md:cursor-pointer pointer-events-none md:pointer-events-auto"
            sizes="100%"
            onClick={() => setIsModalOpen(true)}
          />
        )}

        <Description description={t(`${name}.description`)} />
      </div>

      {image &&
        isModalOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-[90vw] h-[90vh]"
              onClick={() => setIsModalOpen(false)}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

function NameAndLinks({
  name,
  html_url,
  homepage,
}: {
  name: string
  html_url: string
  homepage: string | null
}) {
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
  )
}

function Description({ description }: { description: string }) {
  return (
    <div className="relative text-justify border-t-2 border-indigo-400/50 pt-2 pb-4">
      {description}
    </div>
  )
}
