import {
  faCodeFork,
  faPalette,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Skills, { SkillsHeader } from "../skills";
import {
  backEndSkills,
  frontEndSkills,
  links,
  linksIds,
  otherSkills,
} from "@/utils/data";
import Section from "../section/section";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
  const t = useTranslations("nav");

  return (
    <Section
      id={links.skills.to}
      header={t(links.skills.to)}
      icon={links.skills.icon}
      to={linksIds[2]}
    >
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        <div className="flex gap-10 justify-center w-full">
          <SkillsHeader icon={faPalette} title="Frontend" color="orange-300" />
          <SkillsHeader
            icon={faScrewdriverWrench}
            title="Backend"
            color="indigo-300"
          />
          <SkillsHeader icon={faCodeFork} title="Inne" color="green-300" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Skills skills={frontEndSkills} color="orange-300" />
          <Skills skills={backEndSkills} color="indigo-300" />
          <Skills skills={otherSkills} color="green-300" />
        </div>
      </div>
    </Section>
  );
}
