"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const renderSample = () => {
  return <div></div>;
};

const Shortslider = ({
  backCls = "slide-left",
  rightCls = "slide-right",
  data = [],
  RenderItem = renderSample,
}) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="w-full h-full overflow-hidden">
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
          nextEl: `.${backCls}`,
          prevEl: `.${rightCls}`,
          disabledClass: "text-color-grey-light",
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <RenderItem data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Shortslider;
