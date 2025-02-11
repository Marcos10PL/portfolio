import Section from "../section";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "jQuery",
  "TypeScript",
  "React.js",
  "Next.js",
  "PHP",
  "Java",
  "C++",
  "MySQL",
  "Oracle",
];

export default function About() {
  return (
    <Section id="about" header="trochę o mnie">
      <p>
        Aktualnie studiuję informatykę na Uniwersytecie Śląskim w Katowicach.
        Moją specjalizacją jest web development. Swoją przygodę w pogramowaniu
        rozpocząłem w szkole technicznej w Oświęcimiu, którą ukończyłem z
        tytułem Technik Informatyk. Od tamtej pory doskonale swoje umiejętności w wielu technologiach, takich
        jak:
      </p>

      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-0 my-3 relative">
        {skills.map(skill => (
          <div key={skill} className="border-r border-b border-indigo-400 p-2">
            {skill}
          </div>
        ))}

        {/* removing outer border */}
        <div className="absolute inset-0 border-2 border-[var(--background)]" />
      </div>

      {/* border */}
      <div className="absolute top-0 left-[-0.5rem] border-t border-indigo-400 w-20"></div>
      <div className="absolute top-[-1rem] left-0 border-l border-indigo-400 h-20"></div>
    </Section>
  );
}
