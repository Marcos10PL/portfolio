"use client"

import Project from "./project"
import { RepositoriesGithub } from "@/types"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Button from "./button"
import Dots from "./dots"
import useProjectsCarousel from "@/hooks/useProjectsCarousel"

type ProjectsCarouselProps = {
  projects: RepositoriesGithub[]
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const {
    swiperInstance,
    setSwiperInstance,
    activeSlides,
    setActiveSlides,
    slidesPerView,
    handleClick,
  } = useProjectsCarousel()

  return (
    <>
      <Button
        swiper={swiperInstance}
        direct="left"
        slidesPerView={slidesPerView}
      />
      <Button
        swiper={swiperInstance}
        direct="right"
        slidesPerView={slidesPerView}
      />

      <Swiper
        spaceBetween={20}
        onSwiper={setSwiperInstance}
        scrollbar={{ draggable: true }}
        onSlideChange={swiper => setActiveSlides(swiper.activeIndex)}
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
        activeSlides={activeSlides}
        handleClick={handleClick}
        slidesPerView={slidesPerView}
      />
    </>
  )
}
