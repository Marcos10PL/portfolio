type SectionProps = {
  children: Readonly<React.ReactNode>;
  id: string;
  header: string;
};

export default function Section({ children, id, header }: SectionProps) {
  return (
    <section
      id={id}
      className="w-full md:w-[90%] xl:w-[70%] mx-auto px-5 text-center relative min-h-svh flex flex-col items-center justify-center"
    >
      {/* background */}
      <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />

      <header className="uppercase text-[1.6rem] xl:text-[2.3rem] mx-auto relative w-fit">
        <h2 className="px-5 py-2"> {header}</h2>

        {/* border */}
        <div
          className={`absolute top-0 left-[-1rem] border-b border-dashed border-indigo-900 w-1/2`}
        />
        <div
          className={`absolute top-[-0.5rem] left-0 border-r border-dashed border-indigo-900 h-10`}
        />
      </header>

      <div className="text-justify md:text-xl xl:text-2xl relative px-3 md:px-4 py-2 my-2">
        {children}
      </div>

      {/* background */}
      <div className="border-t ml-24 border-dashed border-indigo-900 w-24" />
      <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />
    </section>
  );
}
