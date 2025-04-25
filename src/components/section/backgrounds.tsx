export function BackgroundTop() {
  return (
    <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />
  );
}

export function BackgroundBottom() {
  return (
    <>
      <div className="border-t ml-24 border-dashed border-indigo-900 w-24" />
      <div className="border-l border-r px-14 border-indigo-900 border-dashed z-[-1] flex-grow" />
    </>
  );
}

export function BackgroundHeader() {
  return (
    <>
      <div
        className={`absolute top-0 left-[-1.1rem] border-b border-dashed border-indigo-900 w-1/2`}
      />
      <div
        className={`absolute top-[-0.6rem] left-0 border-r border-dashed border-indigo-900 h-10`}
      />
    </>
  );
}
