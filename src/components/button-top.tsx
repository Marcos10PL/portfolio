import { useIndex } from "@/utils/scroll-buttons/context";
import useScrollButton from "@/utils/scroll-buttons/useScrollButton";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonTop() {
  const { isVisible } = useScrollButton();
  const { reset } = useIndex();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    reset();
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer fixed bottom-28 right-5 md:right-12 w-12 h-12 bg-indigo-900 text-white rounded-full transition-all duration-200 ${!isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} md:hover:bg-indigo-800 flex justify-center items-center border-2 border-indigo-300`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 text-indigo-300" />
    </button>
  );
}
