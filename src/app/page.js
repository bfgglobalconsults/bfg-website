"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "../../public/assets/header-banner.png";
import ImageBanner from "../../public/assets/banner-image1.jpg";
import ImageBanner2 from "../../public/assets/banner-image2.jpg";

import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

export default function Main() {
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
  return (
    <>
      <div className="py-[30px]">
        <div className="w-full lg:flex items-center">
          <div className="w-full lg:w-[50%]">
            <div className="p-[40px]">
              <h3 className="font-bold text-3xl lg:text-4xl text-[#E45F11]">
                We Grow Your Business & Organization with the Latest Technology
              </h3>
              <p className="text-xl my-2">
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
        <div className="p-[40px]">
          <h3 className="my-4 text-2xl font-bold">Featured Insights</h3>
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
                 
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Transparent overlay */}

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

            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
