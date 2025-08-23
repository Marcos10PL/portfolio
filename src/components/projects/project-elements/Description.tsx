export default function Description({ description }: { description: string }) {
  return (
    <div className="relative text-justify border-t-2 border-indigo-400/50 pt-2 pb-4 text-base">
      {description}
    </div>
  );
}
