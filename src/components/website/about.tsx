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
    <section
      id="about"
      className="w-full md:w-[80%] xl:w-[60%] mx-auto rounded-lg px-5 text-center relative"
    >
      <header className="uppercase text-[1.6rem] xl:text-[2.3rem] mx-auto relative w-fit">
        <h2 className="px-5 py-2"> trochę o mnie</h2>

        {/* border */}
        <div className="absolute top-0 right-[-1rem] border-b border-dashed border-indigo-900 w-1/2"></div>
        <div className="absolute top-[-0.5rem] right-0 border-r border-dashed border-indigo-900 h-10"></div>
      </header>
      <div className="text-justify md:text-xl xl:text-2xl relative px-3 md:px-4 py-2 my-2">
        <p>
          Aktualnie studiuję informatykę na Uniwersytecie Śląskim w Katowicach.
          Moją specjalizacją jest web development. Swoją przygodę w pogramowaniu
          rozpocząłem w szkole technicznej w Oświęcimiu, którą ukończyłem z
          tytułem Technik Informatyk. Od tamtej pory zdobyłem doświadczenie, a
          także dalej doskonale swoje umiejętności w wielu technologiach, takich
          jak:
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-center gap-0 my-3 relative">
          {skills.map(skill => (
            <div
              key={skill}
              className="border-r border-b border-indigo-400 p-2"
            >
              {skill}
            </div>
          ))}

          {/* removing outer border */}
          <div className="absolute inset-0 border border-[var(--background)]" />
        </div>

        {/* border */}
        <div className="absolute top-0 left-[-0.5rem] border-t border-indigo-400 w-20"></div>
        <div className="absolute top-[-1rem] left-0 border-l border-indigo-400 h-20"></div>
      </div>
      {/* background */}
    </section>
  );
}
