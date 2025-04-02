import Image from "next/image";
import React from "react";
import TelecomMediaImg from "../../../../../public/assets/telecom-banner.png";
import TelecomImage from "../../../../../public/assets/telecom-img-card.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Telecommunication
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl text-justify">
           Telecommunication<br/> & Media
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
               Innovating Connectivity, Transforming Digital Experiences
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TelecomMediaImg}
            alt="telecom-media"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
             The Telecommunications & Media industry is evolving at an unprecedented pace, shaping how people connect, communicate, and consume content. BFG Global Consult helps businesses in this sector navigate technological disruptions, regulatory shifts, and digital transformations to remain competitive and deliver superior services.
            </p>
          </div>
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
              Our Expertise in Telecommunications and Media
            </h3>
              <p className="text-white my-2">
                We provide a comprehensive suite of services tailored to the unique challenges of the Telecommunications & Media industry
              </p>
              <div className="w-full">
                <Image
                  src={TelecomImage}
                  alt="telecom-image"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Network Infrastructure & 5G Integration
                              </h4>
                <p className="my-2 text-[#999]">
                 Supporting telecom providers in scaling their networks for next-generation connectivity.
                </p>
              </div>
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Digital Content & Streaming Solutions
                              </h4>
                <p className="my-2 text-[#999]">
                  Helping media companies optimize content distribution and monetization strategies.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                                  Cybersecurity & Data Protection
                              </h4>
                <p className="my-2 text-[#999]">
                  Ensuring robust security measures to protect user data and maintain regulatory compliance.
                </p>
              </div>{" "}
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default page;
