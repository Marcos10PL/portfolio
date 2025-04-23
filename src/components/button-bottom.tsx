"use client";

import { linksIds } from "@/utils/data";
import { useIndex } from "@/utils/scroll-buttons/context";
import useScrollButton from "@/utils/scroll-buttons/useScrollButton";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function ButtonBottom() {
  const { isVisible } = useScrollButton();
  const { index, increment } = useIndex();

  return (
    <Link
      to={linksIds[index]}
      smooth={true}
      duration={500}
      onClick={() => increment()}
      className={`cursor-pointer fixed bottom-12 right-5 md:right-12 w-12 h-12 bg-indigo-900 text-white rounded-full transition-all duration-200 ${!isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} md:hover:bg-indigo-800 flex justify-center items-center border-2 border-indigo-300`}
    >
      <FontAwesomeIcon icon={faArrowDown} className="w-6 h-6 text-indigo-300" />
    </Link>
  );
}
