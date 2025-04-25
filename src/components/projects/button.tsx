import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper as SwiperType } from "swiper";

type ButtonProps = {
  swiper: SwiperType | null;
  direct: "right" | "left";
  slidesPerView: number;
};

export default function Button({ swiper, direct, slidesPerView }: ButtonProps) {
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
          if (direct === "right")
            swiper.slideTo(swiper.activeIndex + slidesPerView);
          else swiper.slideTo(swiper.activeIndex - slidesPerView);
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
