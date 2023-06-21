"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/globals.css";
import { slideRecoil } from "../atoms/recoil/slideRecoil";
import { useRecoilValue } from "recoil";

export default function Slide({ children }: any) {
  let num = useRecoilValue(slideRecoil);
  const slide = children
  num = slide
  const [slider, setSlider] = useState([""]);
  useEffect(() => {
    setSlider([slide]);
  }, [slide]);
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={96}
        mousewheel={true}
        scrollbar={{
          el: ".swiper-scrollbar",
        }}
        centeredSlides={false}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper w-full h-screen min-h-max"
      >
        {slide.map((x: any, index: number) => (
          <div key={index}>
            <SwiperSlide>
              {x}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
