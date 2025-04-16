import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colorVariants = {
  "orange-300": "bg-orange-300/20 text-orange-300",
  "indigo-300": "bg-indigo-300/20 text-indigo-300",
  "green-300": "bg-green-300/20 text-green-300",
};

type colorVariants = keyof typeof colorVariants;

type SkillsProps = {
  skills: string[];
  color: colorVariants;
};

type SkillsHeaderProps = {
  icon: IconDefinition;
  title: string;
  color: colorVariants;
};

export default function Skills({ color, skills }: SkillsProps) {
  return skills.map((skill, index) => (
    <div key={index} className={`${colorVariants[color]} px-2 py-1 rounded-lg`}>
      {skill}
    </div>
  ));
}

export function SkillsHeader({ icon, title, color }: SkillsHeaderProps) {
  return (
    <div
      className={`flex items-center gap-2 mb-3 ${colorVariants[color]} bg-transparent`}
    >
      <FontAwesomeIcon icon={icon} className={`w-5`} />
      <h3 className="font-bold">{title}</h3>
    </div>
  );
}
