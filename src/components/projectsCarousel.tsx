"use client";

import Project from "./project";
import { RepositoriesGithub } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsCarousel({
  projects,
}: {
  projects: RepositoriesGithub[];
}) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <>
      <Button swiper={swiperInstance} direct="left" />
      <Button swiper={swiperInstance} direct="right" />

      <Swiper
        spaceBetween={20}
        onSwiper={setSwiperInstance}
        scrollbar={{ draggable: true }}
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {projects.map(project => (
          <SwiperSlide key={project.id}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Dots
        swiper={swiperInstance}
        activeIndex={activeIndex}
        handleClick={handleClick}
      />
    </>
  );
}

type ButtonProps = {
  swiper: SwiperType | null;
  direct: "right" | "left";
};

function Button({ swiper, direct }: ButtonProps) {
  const className = {
    left: "left-2",
    right: "right-2",
  };

  if (swiper)
    return (
      <button
        className={`absolute ${className[direct]} top-0 lg:top-1/3 bg-indigo-400/30 hover:bg-indigo-400/20 text-indigo-400 rounded-lg p-2 mt-4 z-40 border border-indigo-400 ${
          swiper.isEnd && direct == "right"
            ? "opacity-30 pointer-events-none"
            : "opacity-100"
        } ${
          swiper.isBeginning && direct == "left"
            ? "opacity-30 pointer-events-none"
            : "opacity-100"
        }`}
        onClick={() => {
          if (direct === "right") swiper.slideNext();
          else swiper.slidePrev();
        }}
      >
        {direct === "left" ? (
          <FontAwesomeIcon icon={faAnglesLeft} />
        ) : (
          <FontAwesomeIcon icon={faAnglesRight} />
        )}
      </button>
    );
}

type DotsProps = {
  swiper: SwiperType | null;
  activeIndex: number;
  handleClick: (index: number) => void;
};

function Dots({ swiper, activeIndex, handleClick }: DotsProps) {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {swiper &&
        Array.from({ length: swiper.slides.length }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-3 h-3 rounded-full hover:bg-indigo-400 ${
              activeIndex === i ? "bg-indigo-400" : "bg-gray-500"
            }`}
          />
        ))}
    </div>
  );
}
