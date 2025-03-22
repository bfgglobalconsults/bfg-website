"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Scrollbar } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"



const ITEMS_PER_VIEW = 3
const ITEM_HEIGHT = 250 // in pixels

const AnimatedItems = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handlePrevClick = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const handleNextClick = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(0)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

 
  return (
    <>
       <div className="container mx-auto px-4 py-8">
        <div className="relative h-[300px] md:h-[650px] rounded-xl shadow-sm">
          <Swiper
            modules={[Navigation, Autoplay, Scrollbar]}
            spaceBetween={20}
            slidesPerView={3}
            direction="vertical"
            scrollbar={{
              draggable: true,
              hide: false,
              el: ".swiper-scrollbar",
            }}
            breakpoints={{
              // When screen width is less than 768px
              0: {
                slidesPerView: 1,
                direction: "horizontal",
                scrollbar: false,
              },
              // When screen width is >= 768px
              768: {
                slidesPerView: 2,
                direction: "vertical",
              },
              // When screen width is >= 1024px
              1024: {
                slidesPerView: 3,
                direction: "vertical",
                scrollbar: true,
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
            className="mySwiper h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="h-[200px]">
                <div className="w-full h-full flex-shrink-0">
                  <div className="w-[95%] mx-auto h-full p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex h-full gap-4">
                      <div className="flex-1 overflow-hidden">
                        <h3 className="text-lg font-semibold text-black truncate">{slide.title}</h3>
                        <p className="text-md text-gray-600 mt-1">{slide.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-white !bg-[#E26015]/80 !w-[35px] !h-[35px] !rounded-full after:!text-[20px] !left-1/2 !top-[20px] !transform !-translate-x-1/2 !z-10 md:block"></div>
            <div className="swiper-button-next !text-white !bg-[#E26015]/80 !w-[35px] !h-[35px] !rounded-full after:!text-[20px] !left-1/2 !bottom-[20px] !top-auto !transform !-translate-x-1/2 !z-10 md:block"></div>
            <div className="swiper-scrollbar !right-1 !w-[8px] !bg-gray-200/50 md:!block hidden"></div>
          </Swiper>
        </div>
      </div>
      {/* <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex gap-2 justify-end">
                <button
                  onClick={handlePrevClick}
                  className="p-2 bg-[#FEFCFB] rounded-full"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,1)"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></svg>
                </button>
                <button
                  onClick={handleNextClick}
                  className="p-2 bg-[#FEFCFB] rounded-full"
                >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(173,184,194,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
                </button>
              </div>
     <div className="relative w-full overflow-hidden" style={{ height: `${ITEM_HEIGHT * ITEMS_PER_VIEW}px` }}>
        <motion.div
          className="flex flex-col"
          animate={{
            y: `${-currentIndex * ITEM_HEIGHT}px`,
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
          }}
        >
        {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="shadow-lg bg-white rounded-xl p-5 flex flex-col justify-center my-2" style={{ height: `${ITEM_HEIGHT - 16}px` }}>
                <h4 className="font-semibold text-xl text-[#333333] mb-2">{slide.title}</h4>
                <p className="text-[#999] text-sm overflow-hidden">{slide.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-[#E26015]' : 'bg-gray-300'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div> */}
      </>
  );
};

export default AnimatedItems;
