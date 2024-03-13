"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Banner from "../../public/assets/header-banner.png";
import ImageBanner from "../../public/assets/banner-image1.jpg";
import ImageBanner2 from "../../public/assets/banner-image2.jpg";


import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { partners_links } from "@/constants/partners-constants";
import Link from "next/link";
import Statistics from "@/components/Statistics";
import { card_links } from "@/constants/card-constant";

export default function Main() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [toggle, setToggle] = useState(false);

 
  const handleClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id);
    setToggle(!toggle);
  };

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
  ];

  const currentDate = new Date();

  const fixedDate = new Date('2018-03-26');

  const differenceInMillis = currentDate - fixedDate;

  const differenceInYears = differenceInMillis / (1000 * 60 * 60 * 24 * 365);
  return (
    <>
      <div className="py-[30px]">
        <div className="w-full lg:flex items-center my-4">
          <div className="w-full lg:w-[50%]">
            <div className="p-[40px]">
              <h3 className="font-bold text-3xl lg:text-4xl text-[#E45F11]">
                Your Partner in Research, Strategy, Training and Technology
              </h3>
              <p className="text-xl text-[#656565] my-2">
                With expertise in research and analytics, business strategy and
                operations, training and development, and information
                technology, we empower companies to thrive in todays dynamic
                business landscape.{" "}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src={Banner}
              alt="banner"
              className="w-full h-full object-fit"
            />
          </div>
        </div>
        <div className="bg-[#faf8f8bd] p-[40px]">
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
              Our Solutions
            </span>
          </h3>
          <p className="text-xl text-[#656565] text-center my-3">
            We offer a bespoke broad spectrum of consulting practice within a
            four-product line of service for all businesses across sectors.
            Either as a startup, SME or as a large enterprise{" "}
          </p>
          <div>
            <div className="w-full flex flex-wrap gap-[20px] justify-center">
              {card_links.map((card) => (
                <div
                  key={card.id}
                  className="w-[40%] h-[500px] shadow-lg rounded-md  p-[20px] cursor-pointer text-center hover:border hover:border-black transition-all duration-300 ease-in-out"
                >
                  <div className="w-full h-[250px]">
                    {" "}
                    <Image
                      src={card.logo}
                      alt="card.title"
                      className="w-full h-full object-fit rounded-md"
                    />
                  </div>

                  <h2 className="text-xl font-bold my-2 text-[#016EF8]">{card.title}</h2>
                  <p className="text-[14px] p-2">{card.content}</p>
                  <Link href={card.link}>
                    <p className="text-black hover:text-[#016EF8] font-semibold">Read more ...</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-[40px]">
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
              Featured insights
            </span>
          </h3>
          <div className="w-full flex flex-wrap gap-[40px]">
            {banner.map((item, index) => (
              <div
                className="relative w-[30%] h-[500px] bg-cover bg-center"
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-[400px] h-[100%] object-fit"
                />
                <div>
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{" "}
                  {/* Transparent overlay */}
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

          <Statistics y={differenceInYears} e={104} l={2} t={70000}  />
          
          {/* <div className="bg-[#F5F5F5] py-28 my-14">
            <div className="w-full flex gap-8 justify-center">
              <div className="w-[20%] text-center">
                 <h3 className="font-bold text-6xl">6</h3>
                 <p className="my-2">Years in Business</p>
              </div>
              <div className="w-[20%] text-center">
              <h3 className="font-bold text-6xl">104+</h3>
                 <p className="my-2">Served enterprises from tech start-up to growing brands</p>
              </div>
              <div className="w-[20%] text-center">
              <h3 className="font-bold text-6xl">2</h3>
                 <p className="my-2">Country Locations</p>
              </div>
              <div className="w-[20%] text-center">
              <h3 className="font-bold text-6xl">$70K+</h3>
                 <p className="my-2">Total transactions up from 2018 - 2023</p>
              </div>
            </div>

          </div> */}

          <div className="py-28">
            <h3 className="my-4 flex justify-center text-lg font-bold">
              <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
                Our Partners
              </span>
            </h3>
            <Swiper
              style={{ "--swiper-navigation-size": "20px" }}
              slidesPerView={2}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 6,
                },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={1}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="w-full flex justify-center items-center"
            >
              {partners_links.map(({ image, name }, index) => {
                return (
                  <SwiperSlide className="flex justify-center" key={index}>
                    <div className="w-[400px] h-[200px] text-center">
                      <div className="p-4">
                        <div className="w-[150px] h-[100px]">
                          <Image
                            src={image}
                            alt={name}
                            className="w-full h-full object-fit"
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
    </>
  );
}
