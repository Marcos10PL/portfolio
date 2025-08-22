import { Swiper as SwiperType } from "swiper";
import { useEffect, useState } from "react";

export default function useProjectsCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeSlides, setActiveSlides] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (swiperInstance)
        setSlidesPerView(Number(swiperInstance.params.slidesPerView) || 1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiperInstance?.params.slidesPerView, swiperInstance]);

  const handleClick = (slides: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(slides * slidesPerView);
      setActiveSlides(slides * slidesPerView);
    }
  };

  return {
    swiperInstance,
    setSwiperInstance,
    activeSlides,
    setActiveSlides,
    slidesPerView,
    handleClick,
  } as const;
}
