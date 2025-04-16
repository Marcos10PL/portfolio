import {
  faCode,
  faCodeFork,
  faPalette,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Skills, { SkillsHeader } from "../skills";
import { backEndSkills, frontEndSkills, otherSkills } from "@/utils/data";
import Section from "../section";

export default function SkillsSection() {
  return (
    <Section id="skills" header="Skills" icon={faCode}>
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
