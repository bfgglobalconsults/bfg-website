"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Banner from "../../public/assets/bfg1.jpg";
import WaveImage from "../app/bfg-whitelogo.png";

// Import the CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaQuery from "./media-query";

const SliderHeroPage = () => {
  
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden max-w-[100vw]">
      <Slider {...settings}>
        <div>
          <HeroSection2 />
        </div>
        <div>
          <HeroSection1 />
        </div>
      </Slider>
    </div>
  );
};

const HeroSection1 = () => (
  <div className="bg-white w-full lg:flex items-center my-0 lg:my-[10px] py-2">
    <div className="w-full lg:w-[60%]">
      <div className="p-[40px]">
        {/* Award Badge */}
        <div className="inline-flex items-center rounded-2xl  border border-[#E45F11]  px-4 py-2 backdrop-blur-sm mb-3 lg:mb-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(228, 95, 17, 1)"
            >
              <path d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"></path>
            </svg>
          </span>
          <span className="text-sm font-medium text-[#E45F11]">
            MEA Business Award: Best Start-Up & SME Consultancy Firm in West
            Africa, 2024
          </span>
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-[#333] sm:text-5xl md:text-6xl">
            <span className="block text-4xl md:text-6xl font-light mb-2">
              Democratizing{" "}
            </span>
            Management Consulting
            <br />
            and Technology Solutions Across Borders
          </h1>
          <p className="text-xl text-[#333] max-w-3xl">
            We provide research, strategy, workforce training, and software
            development services for individuals, businesses and organizations.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#E45F11] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black hover:text-white transition-colors duration-200"
            >
              Request your Custom Solution
            </Link>
          </div>
        </div>
        {/* Slider dots (decorative) */}
        <div className="flex gap-2 my-6">
          <div className="h-2 w-2 rounded-full border border-[#E45F11] bg-white/30"></div>
          <div className="h-2 w-8 rounded-full bg-[#E45F11]"></div>
        </div>
      </div>
    </div>
   

      

    <div className="w-full lg:w-[40%]  overflow-hidden py-10">
      <div className="relative w-[370px] h-[550px] lg:h-[550px] lg:w-[500px] ml-0">
    {/* Center logo */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E45F11] rounded-full w-52 h-52 flex items-center justify-center z-20">
      <div className="relative w-28 h-28">
        <Image
          src={WaveImage}
          alt="banner"
          fill
          className="object-contain z-30"
          priority
        />
      </div>
    </div>

          {/* Navigation icons */}
          <Link href="/solutions/information-technology">
        <button
          title="Technology and Software Development"
          className=" absolute top-24 left-14 rounded-full p-7 lg:p-11 text-white bg-[#000] transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM12.1779 7.17624C11.8055 7.06167 11.41 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15C13.2091 15 15 13.2091 15 11C15 10.59 14.9383 10.1945 14.8238 9.82212C14.5102 10.5166 13.8115 11 13 11C11.8954 11 11 10.1046 11 9C11 8.18846 11.4834 7.48982 12.1779 7.17624Z"></path></svg>
        </button>
          </Link>
                    <Link href="/solutions/training-development">

         <button
          title="Training and Development"
          className=" absolute top-[44px] right-6 rounded-full p-10 lg:p-16 text-white bg-[#041926] transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="42" height="42" fill="rgba(255,255,255,1)"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
            </button>
          </Link>
          <Link href="/solutions/business-strategy">
        <button
          title="Strategy and Operations Transformation"
          className=" absolute bottom-12 left-9 rounded-full p-9 lg:p-14 text-white bg-[#127DC0] transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(255,255,255,1)"><path d="M11 2.04938V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM13 2.04938C17.7244 2.51845 21.4816 6.27559 21.9506 11H13V2.04938Z"></path></svg>
            </button>
          </Link>
          <Link href="/solutions/research-analytics">
         <button
          title="Research and Analytics"
          className=" absolute bottom-12 right-0 rounded-full p-12 lg:p-16 text-white bg-[#5A2608] transition-transform hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(255,255,255,1)"><path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM9 17H7V19H9V17ZM9 14H7V16H9V14ZM9 11H7V13H9V11ZM16 2V6H8V2H16Z"></path></svg>
            </button>
            </Link>
    </div>
        {/* <Image
        src={WaveImage}
        alt="banner"
        className="w-full h-full object-fit"
      /> */}
    </div>
    
   
  </div>
);

const HeroSection2 = () => (
  <div className="w-full lg:flex items-center my-0 lg:my-0 xl:my-4 py-2 lg:py-5">
    <div className="w-full lg:w-[55%]">
      <div className="p-[40px]">
        {/* Award Badge */}
        <div className="inline-flex items-center rounded-2xl  border border-[#E45F11]  px-4 py-2 backdrop-blur-sm mb-3 lg:mb-0">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(228, 95, 17, 1)"
            >
              <path d="M12 7.00002C16.4183 7.00002 20 10.5817 20 15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15C4 10.5817 7.58172 7.00002 12 7.00002ZM12 10.5L10.6775 13.1797L7.72025 13.6094L9.86012 15.6953L9.35497 18.6406L12 17.25L14.645 18.6406L14.1399 15.6953L16.2798 13.6094L13.3225 13.1797L12 10.5ZM13 1.99902L18 2.00002V5.00002L16.6366 6.13758C15.5305 5.55773 14.3025 5.17887 13.0011 5.04951L13 1.99902ZM11 1.99902L10.9997 5.04943C9.6984 5.17866 8.47046 5.55738 7.36441 6.13706L6 5.00002V2.00002L11 1.99902Z"></path>
            </svg>
          </span>
          <span className="text-sm font-medium text-[#E45F11]">
            MEA Business Award: Best Start-Up & SME Consultancy Firm in West
            Africa, 2024
          </span>
        </div>
        <div className="max-w-4xl space-y-6">
          <h1 className="font-sans text-4xl font-bold tracking-tight text-[#333] sm:text-5xl md:text-6xl">
            <span className="block text-4xl lg:text-6xl font-light mb-2">
              Tailored expertise in{" "}
            </span>
            Software Development,
            <br />
            Market Research, Strategy, & Training
          </h1>
          <p className="text-xl text-[#333] max-w-3xl">
            Driving transformative solutions that empower innovation, growth,
            efficiency, and success for Startups, SMEs and Large corporations.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#E45F11] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black hover:text-white transition-colors duration-200"
            >
              Request your Custom Solution
            </Link>
          </div>
        </div>
        {/* Slider dots (decorative) */}
        <div className="flex gap-2 my-6">
          <div className="h-2 w-8 rounded-full bg-[#E45F11]"></div>
          <div className="h-2 w-2 rounded-full border border-[#E45F11] bg-white/30"></div>
        </div>
      </div>
    </div>

     <div className="w-full lg:w-[40%] overflow-hidden py-10 z-10">
      <motion.div
        animate={{
          rotate: [0, 200, 400, 600, 800, 800, 600, 400, 200, 0],
        }}
        transition={{ repeat: Infinity, duration: 50 }}
      >
       <Image 
      src={Banner} 
      alt="banner" 
      className="w-full h-full object-contain scale-125"
      priority 
    />
      </motion.div>
    </div>
  </div>
);
export default SliderHeroPage;
