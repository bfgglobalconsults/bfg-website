"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Banner from "../../public/assets/header-banner.png";
import ImageBanner from "../../public/assets/banner-image1.jpg";
import ImageBanner2 from "../../public/assets/banner-image2.jpg";

import Logo from "./bfg-logo.png";
import Animation from "../../public/office_banner.jpg";

export default function Main() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [toggle, setToggle] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Research & Analytics",
      content:
        "We provide startups, and SMEs with valuable insights and information that can inform business strategies, decision-making processes, and problem-solving efforts. We serve as an impartial partner for businesses in the process of gathering, analyzing and interpreting data in order to make informed decisions",
    },
    {
      id: 2,
      title: "Business Strategy & Operations",
      content:
        "Earn your business the ability to achieve desired goals through the development and implementation of plans and processes aimed at improving competitiveness. Through this service, we help startups and SMEs align their operations with their overall business objectives, streamline processes and optimise resources.",
    },
    {
      id: 3,
      title: "Training & Development",
      content:
        "Improve job performance through employee training. Win the process of enhancing the skills, knowledge and abilities of employees to perform their jobs more  effectively. Through this solution, we help startups and SMEs improve their overall performance by investing in the development of their employees. ",
    },
    {
      id: 4,
      title: "Information Technology",
      content:
        "Boost your business growth with digital tools. We take you through the process of designing and developing cutting-edge technology to enhance business effectiveness, ranging from web development and artificial intelligence to machine learning and block chain technology.  ",
    },
  ];

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
  return (
    <>
      <div className="py-[30px]">
        <div className="w-full lg:flex items-center">
          <div className="w-full lg:w-[50%]">
            <div className="p-[40px]">
              <h3 className="font-bold text-3xl lg:text-4xl text-[#E45F11]">
                We Grow Your Business & Organization with the Latest Technology
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
        <div className="p-[40px]">
          <h3 className="my-4 text-3xl  font-bold text-center">Our Solutions</h3>
          <p className="text-xl text-[#656565] text-center my-3">
            We offer a bespoke broad spectrum of consulting practice within a
            four-product line of service for all businesses across sectors.
            Either as a startup, SME or as a large enterprise{" "}
          </p>
          <div>
            <div className="w-full flex flex-wrap gap-[20px] justify-center">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`w-[30%] h-[300px] border-2 rounded-md border-[#ccc] p-[20px] cursor-pointer text-center hover:border-[#016EF8] transition-all duration-300 ease-in-out  ${
                    selectedCard === card.id
                      ? toggle
                        ? "bg-[#016EF8] text-white"
                        : "bg-[#E45F11] text-white"
                      : ""
                  } flex flex-col justify-center`}
                  onClick={() => handleClick(card.id)}
                >
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  {selectedCard === card.id && (
                    <p className="text-lg p-2">{card.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-[40px]">
          <h3 className="my-4 text-3xl font-bold text-center">
            Featured Insights
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
        </div>
      </div>
    </>
  );
}
