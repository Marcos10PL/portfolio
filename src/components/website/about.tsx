import { links } from "@/utils/data";
import Section from "../section";

export default function About() {
  return (
    <Section
      id={links.about.to}
      header={links.about.name}
      icon={links.about.icon}
    >
      <div className="mx-5 relative">
        <p className="mb-4 max-w-3xl mx-auto px-2 py-1">
          Aktualnie studiuję informatykę na Uniwersytecie Śląskim w Katowicach.
          Moją specjalizacją jest web development. Swoją przygodę w pogramowaniu
          rozpocząłem w szkole technicznej w Oświęcimiu, którą ukończyłem z
          tytułem Technik Informatyk. Od tamtej pory doskonale swoje
          umiejętności w wielu technologiach, ale głównie specjalizuję się w
          tworzeniu różnych stron oraz aplikacji internetowych, które są
          responsywne i przyjazne dla użytkownika.
        </p>

        {/* border */}
        <div className="absolute top-0 left-[-0.5rem] border-t border-indigo-400 w-20"></div>
        <div className="absolute top-[-1rem] left-0 border-l border-indigo-400 h-20"></div>
      </div>
    </Section>
  );
}
