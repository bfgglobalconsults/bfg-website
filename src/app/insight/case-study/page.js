import Image from "next/image";
import React from "react";
import Banner from "../../../../public/assets/case-banner.png";
import Slides from "@/components/Slides";
import Technology from "../../../../public/assets/technology-software.png";
import Business from "../../../../public/assets/business-strategy.png";
import Research from "../../../../public/assets/research-analytics.png";
import Training from "../../../../public/assets/training-development.png";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Case Study
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Case Studies
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Discover how BFG has helped businesses like yours achieve remarkable
            success through our innovative solutions
          </p>
        </div>

        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-fit rounded-3xl"
          />
        </div>
        <div>
          <Slides />
        </div>
        <div className="my-14">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Recent Case Study
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
              Real Solutions,Tangible Results
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] text-lg lg:text-xl my-2">
              Explore our diverse portfolio showcasing how BFG optimizes
              operations & fosters growth for businesses. From strategic
              planning to technology integration, witness the transformative
              impact of our tailored solutions.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="">
              <Image
                src={Technology}
                alt="client"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-[#333] font-semibold my-4">
                Technology & Software Development
              </h4>
            </div>
          </div>
          {/* second item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="">
              <Image
                src={Business}
                alt="innovate"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-[#333] font-semibold my-4">
                Business Strategy & Operations
              </h4>
            </div>
          </div>
          {/* third item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="">
              <Image
                src={Research}
                alt="inclusive"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-[#333] font-semibold my-4">
                Research & Analytics
              </h4>
            </div>
          </div>
          {/* fourth item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="">
              <Image
                src={Training}
                alt="sustain"
                className="w-full h-full object-fit"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-[#333] font-semibold my-4">
                Training & Development
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
