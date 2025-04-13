"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Scrollbar } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

const AnimatedItems = ({slides}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[500px] md:h-[600px] rounded-xl shadow-sm">
        <Swiper
          modules={[Navigation, Autoplay, Scrollbar]}
          spaceBetween={20}
          slidesPerView="auto"
          direction="vertical"
          scrollbar={{
            draggable: true,
            hide: false,
            el: ".swiper-scrollbar",
            dragSize: 100,
          }}
          mousewheel={true}
          freeMode={true}
          breakpoints={{
            0: {
              slidesPerView: 2, 
              direction: "vertical",
              spaceBetween: 20,
              autoplay: false,
              mousewheel: true, // Keep mousewheel for potential desktop interaction
            },
            768: {
              slidesPerView: "auto",
              direction: "vertical",
              spaceBetween: 20,
              autoplay: false,
            },
            1024: {
              slidesPerView: "auto",
              direction: "vertical",
              spaceBetween: 20,
              autoplay: false,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          className="mySwiper h-full overflow-y-auto"
          style={{
            "--swiper-scrollbar-drag-bg-color": "#E26015",
            "--swiper-scrollbar-bg-color": "#e0e0e0",
          }}
        >
          <div className="pr-4">
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="!h-auto mb-4"
                style={{ height: "auto" }}
              >
                <div className="w-full flex-shrink-0 ml-2">
                  <div className="w-[95%] mx-auto p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black">
                          {slide.title}
                        </h3>
                        <p className="text-md text-gray-600 mt-1">
                          {slide.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-scrollbar !left-0 !w-[8px] !bg-gray-200 "></div>
        </Swiper>
      </div>
    </div>
  );
};

export default AnimatedItems;