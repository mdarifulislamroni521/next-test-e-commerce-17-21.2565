"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import "swiper/css";

const HomeSlider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const sliderData = [
    {
      id: 1,
      title: "best deal !",
      boldTitle: "Smart Watch Bracelet",
      description: "Get up to 50%  off Today Only",
      imageUrl:
        "https://themebeyond.com/html/venam/img/slider/slider_img01.png",
      button: {
        label: "Shop Now",
        url: "/product/123",
      },
    },
    {
      title: "Only Today !",
      boldTitle: "43 inch SMART Tv with Discount",
      description: "Get up to 70%  off Today Only",
      imageUrl:
        "https://themebeyond.com/html/venam/img/slider/slider_img02.png",
      button: {
        label: "Shop Now",
        url: "/product/123456789",
      },
    },
  ];
  return (
    <div className="w-full bg-[#006fbb1a]">
      <div className="w-full relative bg-[url('/assets/slider/slider_bg.jpg')]">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            // console.log(swiper);
            setSwiperRef(swiper);
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
            disabledClass: "text-color-grey-light",
          }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {sliderData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SliderCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="arrow-left arrow absolute left-16 top-1/2 z-10 select-none bg-color-primary rounded-full shadow text-color-grey-light p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="arrow-right arrow absolute right-16 top-1/2 z-10 select-none bg-color-primary rounded-full shadow p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
