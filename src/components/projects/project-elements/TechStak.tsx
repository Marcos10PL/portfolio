export default function TechStack({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1 mt-auto">
      {tech.map((item, index) => (
        <div
          key={index}
          className="border py-1 px-1.5 rounded-lg border-indigo-400/50 text-[0.95rem] bg-indigo-800/10"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
