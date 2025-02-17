"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Banner from "../../public/assets/bfg1.jpg";
import WaveImage from "../../public/assets/mask-group.jpg";

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
  <div className="bg-white w-full lg:flex items-center my-0 lg:my-0 xl:my-4 py-2">
    <div className="w-full lg:w-[60%]">
      <div className="p-[40px]">
        {/* Award Badge */}
        <div className="inline-flex items-center rounded-2xl lg:rounded-full border border-[#E45F11]  px-4 py-2 backdrop-blur-sm mb-3 lg:mb-0">
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
            and Technology Solutions
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
   <MediaQuery min="lg">
    <div className="w-full lg:w-[40%] overflow-hidden py-10">
      <Image
        src={WaveImage}
        alt="banner"
        className="w-full h-full object-fit"
      />
    </div>
    </MediaQuery>
    {/* small screen */}
    <MediaQuery max="lg">
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
    </MediaQuery>
  </div>
);

const HeroSection2 = () => (
  <div className="w-full lg:flex items-center my-0 lg:my-0 xl:my-4 py-2 lg:py-5">
    <div className="w-full lg:w-[55%]">
      <div className="p-[40px]">
        {/* Award Badge */}
        <div className="inline-flex items-center rounded-2xl lg:rounded-full border border-[#E45F11]  px-4 py-2 backdrop-blur-sm mb-3 lg:mb-0">
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
            Research, Strategy, & Training
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
