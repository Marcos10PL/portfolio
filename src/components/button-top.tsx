"use client";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ButtonTop() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 md:bottom-10 md:right-10 p-3 bg-indigo-900 text-white rounded-full transition-all duration-200 ${!isVisible ? "opacity-100" : "opacity-0"} md:hover:bg-indigo-800`}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
