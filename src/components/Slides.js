"use client";
import { data } from "@/app/data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slides = () => {
  return (
    <>
      <hr className="my-8" />
      <div className="p-[40px]">
        <div className="w-full flex flex-col lg:flex-row gap-1 items-center">
          <div className="w-[100%] lg:w-[30%]">
            <h3 className="text-2xl font-semibold">
              Trusted by Top Partners <br />& Clients
            </h3>
          </div>
          <div className="w-[100%] lg:w-[70%]">
            <Swiper
              style={{ "--swiper-navigation-size": "20px" }}
              slidesPerView={2}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 4,
                },
              }}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false,
                reverseDirection: false,
              }}
              speed={3000}
              loop={true}
              spaceBetween={5}
              navigation={false}
              modules={[Autoplay]}
              className="w-full flex justify-center"
            >
              {data.map(({ id, image, name }, index) => {
                return (
                  <SwiperSlide className="flex justify-center" key={index}>
                    <div className="text-center">
                      <div className="p-4">
                        <div className="inline-block text-center">
                          <Image
                            src={image}
                            alt={name}
                            className="w-[200px] h-[70px] object-fit"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Slides;
