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
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M11 2.04935V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81462 5.94668 2.55107 11 2.04935ZM13 0.542847C18.5535 1.02121 22.9788 5.4465 23.4571 11H13V0.542847Z"></path>
        </svg>
      ),
      content:
        "We provide startups, and SMEs with valuable insights and information that can inform business strategies, decision-making processes, and problem-solving efforts. We serve as an impartial partner for businesses in the process of gathering, analyzing and interpreting data in order to make informed decisions",
    },
    {
      id: 2,
      title: "Business Strategy & Operations",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
        </svg>
      ),
      content:
        "Earn your business the ability to achieve desired goals through the development and implementation of plans and processes aimed at improving competitiveness. Through this service, we help startups and SMEs align their operations with their overall business objectives, streamline processes and optimise resources.",
    },
    {
      id: 3,
      title: "Training & Development",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path>
        </svg>
      ),
      content:
        "Improve job performance through employee training. Win the process of enhancing the skills, knowledge and abilities of employees to perform their jobs more  effectively. Through this solution, we help startups and SMEs improve their overall performance by investing in the development of their employees. ",
    },
    {
      id: 4,
      title: "Information Technology",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M14.3685 4.39807L10.8842 10.433L12.6163 11.433L16.1006 5.39807C20.27 8.17002 22.4058 12.4771 20.6605 15.5C18.8003 18.7221 13.4717 18.8551 8.75027 16.1292C4.0289 13.4033 1.47976 8.72208 3.34002 5.50001C5.08527 2.47715 9.88324 2.17321 14.3685 4.39807ZM15.8842 1.77277L17.6163 2.77277L16.1163 5.37084L14.3842 4.37084L15.8842 1.77277ZM6.73233 20H17.0003V22H5.01761C4.94008 22.0014 4.86194 21.9938 4.78481 21.9768C4.77025 21.9735 4.7558 21.97 4.74147 21.9662C4.6589 21.944 4.57784 21.9108 4.50028 21.866C4.47106 21.8492 4.44301 21.831 4.41616 21.8118C4.30161 21.7292 4.20524 21.623 4.1342 21.5003C4.06328 21.3772 4.01939 21.2404 4.00518 21.0997C4.00446 21.0924 4.00381 21.085 4.00325 21.0777C3.98786 20.883 4.02924 20.6819 4.13425 20.5L6.38425 16.6029L8.1163 17.6029L6.73233 20Z"></path>
        </svg>
      ),
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
          <h3 className="my-4 text-3xl  font-bold text-center text-[#016EF8]">
            OUR SOLUTIONS
          </h3>
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
                  className={`w-[40%] h-[300px] shadow-lg rounded-md  p-[20px] cursor-pointer text-center hover:border hover:border-black transition-all duration-300 ease-in-out  ${
                    selectedCard === card.id
                      ? toggle
                        ? "bg-[#016EF8] text-white"
                        : "bg-[#E45F11] text-white"
                      : ""
                  } flex flex-col justify-center`}
                  onClick={() => handleClick(card.id)}
                >
                  {selectedCard !== card.id && (
                    <span className="my-4 mx-auto">{card.logo}</span>
                  )}{" "}
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  {selectedCard === card.id && (
                    <p className="text-[14px] p-2">{card.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-[40px]">
          <h3 className="my-4 text-3xl font-bold text-center text-[#016EF8]">
            FEATURED INSIGHTS
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
