"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import enFlag from "./../images/languages/en.png";
import plFlag from "./../images/languages/pl.png";
import { useLocale } from "next-intl";

export default function SwitchLanguage() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-4 right-4 md:right-10 md:bottom-10 flex items-center z-50 bg-indigo-950 rounded-full gap-2"
    >
      {open && (
        <div className="rounded-full bg-indigo-800 hover:bg-indigo-700 transition-all px-1 py-1">
          <Link
            href="/"
            locale={locale === "en" ? "pl" : "en"}
            onClick={() => setOpen(false)}
          >
            <Image
              src={locale === "en" ? plFlag : enFlag}
              alt={locale === "en" ? "Polski" : "English"}
              width={40}
              height={40}
            />
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors"
      >
        <Image
          src={locale === "en" ? enFlag : plFlag}
          alt={locale === "en" ? "English" : "Polski"}
          width={40}
          height={40}
        />
      </button>
    </div>
  );
}
