"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";



const ITEMS_PER_VIEW = 3
const ITEM_HEIGHT = 200 // in pixels

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
      <div className="relative w-full max-w-3xl mx-auto">
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
    </div>
      </>
  );
};

export default AnimatedItems;
