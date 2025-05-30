import Section from "../section/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactLinks, links } from "@/utils/data";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("nav");

  return (
    <Section
      id={links.contact.to}
      header={t(links.contact.to)}
      icon={links.contact.icon}
    >
      <div className="flex flex-wrap justify-center gap-8 max-w-96">
        {ContactLinks.map(({ name, url, icon }) => {
          const isTelLink = url.startsWith("tel");

          return (
            <a
              key={name}
              href={url}
              target={!isTelLink ? "_blank" : undefined}
              className={`block ${isTelLink && "cursor-default"} hover:${!isTelLink ? "bg-indigo-950" : "none"} p-5 border border-indigo-400 rounded-lg transition-colors`}
            >
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={icon} width={20} />
                <p>{name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
