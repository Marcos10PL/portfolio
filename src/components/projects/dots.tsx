import { Swiper as SwiperType } from "swiper";

type DotsProps = {
  swiper: SwiperType | null;
  activeSlides: number;
  handleClick: (index: number) => void;
  slidesPerView: number;
};

export default function Dots({
  swiper,
  activeSlides,
  handleClick,
  slidesPerView,
}: DotsProps) {
  return (
    <div className="flex gap-2 justify-center mt-2">
      {swiper &&
        Array.from({
          length: Math.ceil(swiper.slides.length / slidesPerView),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`w-3 h-3 rounded-full hover:bg-indigo-400 ${
              Math.ceil(activeSlides / slidesPerView) === i
                ? "bg-indigo-400"
                : "bg-gray-500"
            }`}
          />
        ))}
    </div>
  );
}
