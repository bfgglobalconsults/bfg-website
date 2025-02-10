"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Banner from "../../public/assets/new_banner.png";
import NewBanner from "../../public/assets/new-banner.png";
import ImageBanner from "../../public/assets/banner-image1.jpg";
import ImageBanner2 from "../../public/assets/banner-image2.jpg";
import ImageBanner3 from "../../public/assets/case-study-banner.jpg";
import MidBanner from "../../public/assets/midbanner.jpg";
import HeadGrowth from "../../public/assets/moses-sunday.jpg";
import Marketer from "../../public/assets/ifeoma.jpg";
import Appetizer from "../../public/assets/appetiza.jpg";
import Careerfun from "../../public/assets/careerfun.jpg";

import Microsoft from "../../public/assets/microsoft-banner.png";
import Qualitrics from "../../public/assets/qualitrics-banner.png";
import Netline from "../../public/assets/netline-banner.png";
import IBM from "../../public/assets/ibm-banner.png";
import Apex from "../../public/assets/apexgroup-banner.png";

import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

import Picture1 from "/public/assets/picture-1.png";
import Picture2 from "/public/assets/picture-2.png";
import Picture3 from "/public/assets/picture-3.png";

import SliderImage1 from "../../public/assets/sliderimage1.png";
import SliderImage2 from "../../public/assets/sliderimage2.png";
import SliderImage3 from "../../public/assets/sliderimage3.png";
import SliderImage4 from "../../public/assets/sliderimage4.png";
import SliderImage5 from "../../public/assets/consumer-img.png";

import CaseImage1 from "../../public/assets/caseimage1.png";
import CaseImage2 from "../../public/assets/caseimage2.png";
import CaseImage3 from "../../public/assets/caseimage3.png";

import STTravel from "../../public/assets/News-ST.jpg";
import AwardNews from "../../public/assets/bfg-award.jpg";
import FirstNews from "../../public/assets/first-news.png";
import SecondNews from "../../public/assets/second-news.png";

import ContentBanner from "../../public/assets/middle-content-banner.png";

import "swiper/css";
import "swiper/css/navigation";
import { partners_links } from "@/constants/partners-constants";
import Link from "next/link";
import Statistics from "@/components/Statistics";
import { card_links } from "@/constants/card-constant";
import { data } from "./data";
import { SlideIn, SlideLeft, Transition } from "@/components/ui/Transitions";
import SliderHeroPage from "@/components/SliderHeroPage";

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedCard, setSelectedCard] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
    setToggle(!toggle);
  };

  const slides = [
    {
      id: 1,
      title: "Information & Communication Technology",
      description:
        "BFG propels tech companies forward, from startup to established players, with strategic guidance for navigating the evolving landscape, enhancing product development, & driving innovation.",
      imageAlt: "slider1-img",
      imageSrc: SliderImage1,
    },
    {
      id: 2,
      title: "Consumer & Retail Market",
      description:
        "Driving Growth, BFG empowers consumer and retail brands to innovate, optimize customer experiences, and expand market presence with data-driven strategies and tailored solutions.",
      imageAlt: "slider5-img",
      imageSrc: SliderImage5,
    },
    {
      id: 3,
      title: "Real Estate",
      description:
        "Building success, BFG guides construction companies to navigate complex projects, enhance efficiency, & drive innovation.",
      imageAlt: "slider2-img",
      imageSrc: SliderImage2,
    },
    {
      id: 4,
      title: "Traveling (Tourism)",
      description:
        "Transforming travel, BFG helps tourism companies navigate change, enhance clients experiences, & drive innovation.",
      imageAlt: "slider3-img",
      imageSrc: SliderImage3,
    },
    {
      id: 5,
      title: "NGO (Non-Governmental Organization)",
      description:
        "Amplifying impact, BFG guides NGOs to navigate social landscapes, enhance program effectiveness, & drive innovation.",
      imageAlt: "slider4-img",
      imageSrc: SliderImage4,
    },
  ];

  const cases = [
    {
      id: 1,
      image: CaseImage1,
      img_name: "banner",
      title: "Case Studies A",
      link: "https://businessday.ng/life/article/how-festus-bello-catalyse-nigerias-entrepreneurship-ecosystem/",
    },
    {
      id: 2,
      image: CaseImage2,
      img_name: "banner",
      title: "Case Studies B",
      link: "https://businessday.ng/life/article/how-festus-bello-catalyse-nigerias-entrepreneurship-ecosystem/",
    },
    {
      id: 3,
      image: CaseImage3,
      img_name: "banner",
      title: "Case Studies C",
      link: "https://businessday.ng/life/article/how-festus-bello-catalyse-nigerias-entrepreneurship-ecosystem/",
    },
  ];

  const banner = [
    {
      id: 1,
      image: ImageBanner,
      img_name: "banner",
      title: "The BFG Story",
      link: "https://businessday.ng/life/article/how-festus-bello-catalyse-nigerias-entrepreneurship-ecosystem/",
    },
    {
      id: 2,
      image: ImageBanner2,
      img_name: "banner2",
      title: "BFG Consults bags UK Award for Research",
      link: "https://guardian.ng/news/bfg-consults-bags-uk-award-for-research-others/",
    },
    {
      id: 3,
      image: ImageBanner3,
      img_name: "banner3",
      title: "Case Studies",
      link: "",
    },
  ];
  const solutions = [
   {
      id: 1,
      href: "/solutions/information-technology",
      title: "Technology & Software",
      description:
        "Boost your business growth with digital tools. We take you through the process of designing & developing cutting-edge technology to enhance business effectiveness, ranging from web development & artificial intelligence to machine learning & block chain technology.",
      svgPath:
        "M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z",
    },
    {
      id: 2,
      href: "/solutions/research-analytics",
      title: "Research & Analytics",
      description:
        "We provide startups, & SMEs with valuable insights & information that can inform business strategies, decision-making processes, & problem-solving efforts. We serve as an impartial partner for businesses in the process of gathering, analyzing & interpreting data in order to make informed decisions.",
      svgPath:
        "M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM9 17H7V19H9V17ZM9 14H7V16H9V14ZM9 11H7V13H9V11ZM16 2V6H8V2H16Z",
    },
    {
      id: 3,
      href: "/solutions/business-strategy",
      title: "Business Strategy & Operations",
      description:
        "Earn your business the ability to achieve desired goals through the development & implementation of plans & processes aimed at improving competitiveness. Through this service, we help startups & SMEs align their operations.",
      svgPath:
        "M11 2.04938V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM13 2.04938C17.7244 2.51845 21.4816 6.27559 21.9506 11H13V2.04938Z",
    },
    {
      id: 4,
      href: "/solutions/training-development",
      title: "Training & Development",
      description:
        "Improve job performance through employee training. Win the process of enhancing the skills, knowledge & abilities of employees to perform their jobs more effectively. Through this solution, we help startups & SMEs improve their overall performance.",
      svgPath:
        "M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z",
    }
  ];

  const currentDate = new Date();

  const fixedDate = new Date("2018-03-26");

  const differenceInMillis = currentDate - fixedDate;

  const differenceInYears = differenceInMillis / (1000 * 60 * 60 * 24 * 365);

  return (
    <>
      <div className="py-[0px] lg:py-[0px] xl:py-[40px]">
        {/* slider hero */}
        <SliderHeroPage />
        {/* slider hero end */}
        <div className="bg-[#faf8f8bd] p-[40px]">
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
                autoplay={{ delay: 5000, disableOnInteraction: false }}
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
                              className="h-[70px] object-fit"
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

        <div className="w-full h-full lg:h-[800px] flex flex-col lg:flex-row items-center flex-wrap">
          <div className="w-[100%] h-full xl:w-[40%] relative lg:flex lg:items-center lg:justify-center">
            <SlideIn>
              <div className="p-12">
                <span className="p-3 rounded-3xl border-2 border-[#E26015] font-semibold">
                  Our Solution
                </span>
                <h3 className="my-6 text-[#333] text-2xl lg:text-4xl font-semibold">
                  Customized Services for Exceptional Results
                </h3>
                <p className="text-[#999] text-lg">
                  Every project we execute is shaped by our fundamental beliefs,
                  which guarantee outstanding quality, creativity, and client
                  pleasure at every turn.
                </p>
                <button className="bg-black hover:bg-[#e26015] flex gap-2 p-3 rounded-2xl my-3">
                  <span className="text-white font-semibold">
                    View All Services
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </SlideIn>
            <div className="absolute bottom-10 left-0 w-[400px] h-[200px] bg-no-repeat bg-cover bg-center bg-[url('../../public/assets/bottom-ring.png')]"></div>
          </div>
          <div className="p-2 w-[100%] xl:w-[60%] xl:h-[800px] relative bg-[url('../../public/assets/middle-banner.png')] bg-no-repeat">
            <div className="w-[100%] lg:w-[800px] md:relative lg:absolute bottom-6 right-0 flex flex-row flex-wrap gap-3">
              {solutions.map((solution, index) => (
                <Transition
                  transition={{ delay: 1 + index * 0.4 }}
                  viewport={{ once: true }}
                  key={solution.id}
                  layoutId={solution.id}
                >
                  <Link href={solution.href}>
                    <div className="w-[300px] md:w-[500px] lg:w-[350px] bg-white hover:bg-[#E26015] hover:text-white shadow-2xl rounded-md cursor-pointer group">
                      <div className="p-5">
                        <div className="flex gap-2 items-center">
                          <span className="p-2 bg-[#E26015] group-hover:bg-white rounded-md">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="text-white group-hover:text-[#E26015]"
                              >
                                <path d={solution.svgPath}></path>
                              </svg>
                            </span>
                          </span>
                          <span className="text-black group-hover:text-white text-lg font-semibold">
                            {solution.title}
                          </span>
                        </div>
                        <p className="text-[#999] group-hover:text-white text-sm my-4">
                          {solution.description}
                        </p>
                        <div className="flex justify-center">
                          <button className="flex gap-3 items-center text-sm">
                            <span>See More</span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="text-[#333] group-hover:text-white"
                              >
                                <path d="M1.99974 12.9999L1.9996 11L15.5858 11V5.58582L22 12L15.5858 18.4142V13L1.99974 12.9999Z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Transition>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#041926] relative py-6 px-2 lg:p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Industries We Cover
          </span>
          <div className="w-[100%] relative flex flex-col lg:flex-row items-center flex-wrap">
            <div className="w-[100%] lg:w-[50%]">
              <h3 className="my-6 text-white text-3xl lg:text-4xl font-semibold">
                Serving Diverse Industries
              </h3>
              <p className="text-white text-lg w-full lg:w-[80%]">
                Discover success across tech, finance, healthcare,
                manufacturing, retail, energy, professional services, &
                hospitality with BFG Global Consults tailored
                consulting expertise.{" "}
              </p>
            </div>

            <div className="w-[100%] lg:w-[50%] relative">
              {/* <div className="absolute top-0 right-10 w-[400px] h-[250px] bg-no-repeat bg-cover bg-center bg-[url('../../public/assets/bottom-ring.png')]"></div> */}

              <div className="flex gap-2 justify-end">
                <button
                  onClick={handlePrevClick}
                  disabled={currentIndex === 0}
                  className="p-2 bg-[#FEFCFB] rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-[#999999]"
                  >
                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                  </svg>
                </button>
                <button
                  onClick={handleNextClick}
                  disabled={currentIndex === 2}
                  className="p-2 bg-[#FEFCFB] rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-[#E26015]"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="my-4 relative overflow-hidden">
              <div
                className="flex gap-2 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <>
                    <div
                      key={index}
                      className="w-full lg:w-1/2 flex-shrink-0 flex flex-wrap"
                    >
                      <div className="w-[100%] lg:w-[95%]  p-5 bg-white rounded-2xl">
                        <Image
                          alt={slide.imageAlt}
                          className="w-full h-[250px] object-fit"
                          src={slide.imageSrc}
                        />

                        <div>
                          <h3 className="text-xl lg:text-2xl my-2 font-semibold text-black">
                            {slide.title}
                          </h3>
                          <p className="text-md text-lg text-[#999]">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* case studies */}
        <div className="my-20 p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Case Studies
          </span>
          <div className="w-[100%] flex flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[50%]">
              <h3 className="my-6 text-black text-4xl font-semibold">
                Featured Case Studies
              </h3>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <div className="flex gap-2 justify-end">
                <p className="text-[#999] text-lg lg:w-[80%]">
                  Unlock success secrets with our Featured Case Studies.
                  Real-world insights to inform, inspire, & drive your
                  business forward.
                </p>
              </div>
              <div className="flex justify-center my-2">
                <button className="bg-[#041926] hover:bg-[#E26015] p-3 rounded-3xl flex gap-1 items-center">
                  <Link href="/insight/case-study">
                    <span className="text-white font-semibold">See More</span>
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="text-white"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* case images */}
          <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-[40px] my-14">
            {cases.map((item, index) => (
              <div
                className="relative w-[100%] md:w-[50%] lg:w-[30%] h-[500px] bg-cover bg-center"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[100%] object-fit"
                />
                <div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl"></div>{" "}
                  {/* Transparent overlay */}
                  <div className="absolute bottom-14 left-10 w-[80%] flex gap-2 items-center justify-between">
                    <p className="text-white text-xl my-4">{item.title}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="p-4 font-semibold my-4 rounded-2xl border-2 border-white hover:border-none hover:bg-[#333] text-white text-lg"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(255,255,255,1)"
                        >
                          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* banner section */}
        <div>
          <div className="w-full lg:h-[600px] relative bg-[url('../../public/assets/female-middle-banner.png')] bg-no-repeat flex  items-center">
            <div className="w-[100%] lg:w-[50%] p-12 ">
              <p className="text-lg text-white font-semibold my-2 border-l-4 border-[#999] p-2">
                Unlock your business potential with BFG, your partner in
                success. Combine the wisdom of today, the innovation of
                tomorrow, & our expert guidance to achieve exceptional results.
                At BFG, success is not just a goal - its our standard.
              </p>
              <Link href="/contact">
                <button className="bg-[#041926] text-white hover:bg-[#E26015] py-3 px-6 rounded-3xl">
                  <span className="text-white font-bold">Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* values */}
        <div className="my-4 p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Our Value
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-2 my-4">
            <div className="w-[100%] lg:w-[50%]">
              <h3 className="text-[#333] font-semibold text-[25px] lg:text-[40px]">
                The Impact of Our Values
              </h3>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <p className="text-lg lg:text-xl text-[#999]">
                Every project is shaped by our fundamental beliefs, which
                guarantee outstanding quality, creativity, & clients pleasure at
                every turn.
              </p>
            </div>
          </div>
          {/* content */}

          <div className="w-full flex flex-col lg:flex-row gap-2 my-4">
            <div className="w-[100%]  xl:w-[50%]">
              <Image src={ContentBanner} alt="content-img" className="w-full" />
            </div>
            <div className="w-[100%]  xl:w-[50%] p-2 overflow-hidden">
              <SlideLeft>
                <div className="w-full flex flex-wrap gap-4">
                  <div className="w-[100%] lg:w-[45%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                    <h3 className="text-lg text-[#222] font-semibold my-2">
                      Exceptional Quality
                    </h3>
                    <p className="text-[#999]">
                      We strive for excellence in every project we undertake.
                      Our team of experts is dedicated to delivering
                      high-quality solutions that exceed our clients
                      expectations.
                    </p>
                  </div>
                  <div className="w-[100%] lg:w-[45%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                    <h3 className="text-lg text-[#222] font-semibold my-2">
                      Embracing Innovation
                    </h3>
                    <p className="text-[#999]">
                      Innovation is key to staying ahead in todays fast-paced
                      business environment. Our team is always looking for new &
                      better ways to solve problems & deliver value to our
                      client.{" "}
                    </p>
                  </div>
                  <div className="w-[100%] lg:w-[45%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                    <h3 className="text-lg text-[#222] font-semibold my-2">
                      Building Trust through Transparency
                    </h3>
                    <p className="text-[#999]">
                      We operate with the highest level of integrity,
                      transparency, & honesty. Our clients trust us to deliver
                      on our promises.{" "}
                    </p>
                  </div>
                  <div className="w-[100%] lg:w-[45%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                    <h3 className="text-lg text-[#222] font-semibold my-2">
                      Client-Centricity
                    </h3>
                    <p className="text-[#999]">
                      Our clients are at the center of everything we do. We
                      listen to their needs, understand their challenges, &
                      deliver solutions that meet their goals & objectives.{" "}
                    </p>
                  </div>
                </div>
              </SlideLeft>
            </div>
          </div>
        </div>

        {/* latest news */}
        <div className="my-4 p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Our Recent Post
          </span>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333] my-4">
            Latest News
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-3">
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative h-[300px]">
                <Image
                  src={STTravel}
                  alt="first-news"
                  className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">January 15, 2025</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  Celebrating Success: ST Travels CEO Visits BFG Consults to
                  Strengthen Partnership
                </h3>
                <p className="text-[#999] text-lg">
                  The CEO and Founder of ST Travels, Mr. Stanley Chidozie
                  Igboanugo, recently visited BFG Consult&apos;s office in Abuja
                  to celebrate its partnership.
                </p>
                <Link href="/insight/news/st-travels-partnership">
                  <button className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-[#E26015] hover:bg-[#222] my-4">
                    <span className="text-white">Read More</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative h-[300px]">
                <Image
                  src={AwardNews}
                  alt="first-news"
                  className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">December 17, 2023</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  BFG Consults bags UK Award for Research
                </h3>
                <p className="text-[#999] text-lg">
                  Dive into the world of operational efficiency & learn
                  strategies to boost productivity effortlessly.
                </p>
                 <Link href="/insight/news/bfg-bags-award">
                <button className="flex gap-2 items-center py-2 px-4 rounded-3xl bg-[#E26015] hover:bg-[#222] my-4">
                  <span className="text-white">Read More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-4 flex justify-center">
            <button className="py-3 px-4 border border-[#E26015] rounded-3xl flex gap-2 hover:bg-[#E26015] group">
              <span className="text-[#E26015] font-semibold group-hover:text-white">
                See More
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-[#E26015] group-hover:text-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* featured insights */}
        {/* <div className="p-[40px]">
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="p-2 text-2xl lg:text-[36px] text-[#016EF8] rounded-xl">
              Featured Insights
            </span>
          </h3>
          <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-[40px] my-14">
            {banner.map((item, index) => (
              <div
                className="relative w-[100%] md:w-[50%] lg:w-[30%] h-[500px] bg-cover bg-center"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[100%] object-fit"
                />
                <div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
                  <div className="absolute bottom-14 left-10">
                    <p className="text-white text-xl my-4">{item.title}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="p-2 font-semibold my-4 rounded-md border-2 border-white hover:border-none hover:bg-[#016EF8] text-white text-lg"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Statistics y={differenceInYears} e={104} l={2} t={1549} />
          </div>
          <div className="relative py-12 bg-[#f8f5f5] my-8">
            <div className="w-full flex flex-wrap gap-4">
              <div className="w-[100%] md:w-[100%] lg:w-[30%] h-full p-6">
                <h3 className="my-4 text-lg font-bold">
                  <span className="bg-[#abcaf1] p-2 text-[#016EF8] rounded-xl">
                    Meet With Our
                  </span>
                </h3>{" "}
                <h3 className="text-2xl font-bold">Management Team</h3>
                <p className="text-[#656565] my-3">
                  Meet the dedicated team of people who make our business what
                  it is today. They represent our primary point of contact with
                  our target market and audience.
                </p>
                <button className="p-2 rounded-md bg-[#016EF8] hover:bg-black text-white text-md font-semibold">
                  <Link href="/team">View All</Link>
                </button>
              </div>

              <div className="w-[100%] md:w-[50%] lg:w-[25%] xl:w-[23%] h-[300px] p-6 my-3">
                <Image
                  src={HeadGrowth}
                  alt=""
                  className="w-full h-full object-fit"
                />
                <p className="font-bold">Sunday Moses</p>
                <p className="text-[#656565] font-semibold">
                  Head of Growth and Consulting
                </p>
              </div>
              <div className="w-[100%] md:w-[50%] lg:w-[25%] xl:w-[23%] h-[300px] p-6 my-3">
                <Image
                  src={Marketer}
                  alt=""
                  className="w-full h-full object-fit"
                />
                <p className="font-bold">Ifeoma Ezeamama</p>
                <p className="text-[#656565] font-semibold">
                  Associate, Business Strategy and Operation Transformation
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[500px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={MidBanner}
              alt="mid-banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                Securing Industry Relevance for Individuals and Businesses
              </h3>
              <p className="text-[#ffffff9a] my-2 text-lg lg:text-xl">
                Our growth services are designed to help you either as an
                individual, startup, or SME secure industry relevance.
              </p>
              <div>
                <button className="p-2 border-2 border-white text-white text-xl my-4">
                  <Link href="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="py-10">
            <h3 className="my-4 flex justify-center text-lg font-bold">
              <span className="text-3xl lg:text-[36px] p-2 text-[#016EF8] rounded-xl">
                Our Partners
              </span>
            </h3>

            <div>
              <div className="w-[70%] md:w-full flex flex-wrap justify-center gap-8 items-center mx-auto md:mx-8">
                <div className="w-[150px] lg:w-[200px]">
                  <Image
                    src={Microsoft}
                    alt="microsoft"
                    className="w-full h-full object-fit"
                  />
                </div>

                <div className="w-[150px] lg:w-[200px]">
                  <Image
                    src={Qualitrics}
                    alt="qualitrics"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[150px] lg:w-[200px]">
                  <Image
                    src={Netline}
                    alt="netline"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[150px] lg:w-[200px]">
                  <Image
                    src={IBM}
                    alt="ibm"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[150px] lg:w-[200px]">
                  <Image
                    src={Apex}
                    alt="Apex"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
