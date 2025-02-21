import Image from "next/image";
import React from "react";
import EntertainmentImg from "../../../../../public/assets/entertainment-banner.png";
import EntertainmentImage from "../../../../../public/assets/entertainment-card.png";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Empowering Creativity
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
           Entertainment & Creative Industry
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
                      Empowering Creativity, Expanding Global Reach
                  </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={EntertainmentImg}
            alt="telecom-media"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
                          The Entertainment & Creative Industry is at the heart of cultural influence, storytelling, and innovation. BFG Global Consult provides strategic solutions to help artists, production houses, and media companies optimize their creative output, expand their reach, and capitalize on emerging opportunities in the digital age.
                      </p>
          </div>

          <div className="my-6">
            <Slides />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-8 p-10 bg-[#041926] rounded-xl">
            <div className="w-[100%] lg:w-[50%]  rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                              Our Expertise in Entertainment & Creative Industry
                          </h3>
              <p className="text-white my-2">
                              We provide a comprehensive suite of services tailored to the unique challenges of the Entertainment & Creative Industry
                          </p>
              <div className="w-full">
                <Image
                  src={EntertainmentImage}
                  alt="telecom-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Intellectual Property & Rights Management
                              </h4>
                <p className="my-2 text-[#999]">
                                  Helping creators protect their work, secure licensing, and manage copyright issues.
                              </p>
              </div>
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Digital Content Monetization
                              </h4>
                <p className="my-2 text-[#999]">
Developing revenue models for streaming, branding, and sponsorship opportunities.                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Production & Distribution Strategy
                              </h4>
                <p className="my-2 text-[#999]">
                                  Assisting in content creation, marketing, and international expansion for films, music, and digital content.
                              </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
