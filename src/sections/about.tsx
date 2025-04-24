import { aboutMe, links, linksIds } from "@/utils/data";
import Section from "../components/section";

export default function About() {
  return (
    <Section
      id={links.about.to}
      header={links.about.name}
      icon={links.about.icon}
      to={linksIds[1]}
    >
      <div className="mx-5 relative">
        <p className="mb-4 max-w-3xl mx-auto px-2 py-1">{aboutMe}</p>

        {/* border */}
        <div className="absolute top-0 left-[-0.5rem] border-t border-indigo-400 w-20"></div>
        <div className="absolute top-[-1rem] left-0 border-l border-indigo-400 h-20"></div>
      </div>
    </Section>
  );
}
