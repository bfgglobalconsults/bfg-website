import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/award-banner.png";
import GovernanceImg from "../../../public/assets/governance-image.png";
import Slides from "@/components/Slides";
import FirstAward from "../../../public/assets/award-1.png";
import SecondAward from "../../../public/assets/award-2.png";
import ThirdAward from "../../../public/assets/award-3.png";
import FourthAward from "../../../public/assets/award-4.png";

import OurStand from "@/components/OurStand";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Awards
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Awards & Recognition
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
          Celebrating Excellence, Innovation, and Impact
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
             At BFG Global Consult, we take pride in being recognized for our dedication to excellence, industry leadership, and transformative solutions. Our awards and accolades reflect our commitment to driving innovation, empowering businesses, and delivering measurable impact across multiple sector
            </p>
          </div>
          <div className="my-4">
            <Slides />
          </div>
          <div className="my-14">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Achievements
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Our Achievements
              </h3>
              
            </div>
            
        
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
                <div className="bg-[#F7F7F8] w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="">
                    <Image
                      src={FirstAward}
                      alt="client"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold my-4">
                     Wealth and Finance International Award (2023, UK)
                    </h4>
                    <p className="text-[#999]">
                     Best International Business Research & Analytics Specialists – Recognized for outstanding contributions to global business research and data-driven consulting.
                    </p>
                  </div>
                </div>
                {/* second item */}
                <div className="bg-[#F7F7F8] w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="">
                    <Image
                      src={SecondAward}
                      alt="innovate"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold my-4">
                     MEA Business Award (2024, West Africa)
                    </h4>
                    <p className="text-[#999]">
                     Best International Business Research & Analytics Specialists – Recognized for outstanding contributions to global business research and data-driven consulting.
                    </p>
                  </div>
                </div>
                {/* third item */}
                <div className="bg-[#F7F7F8] w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="">
                    <Image
                      src={ThirdAward}
                      alt="inclusive"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold my-4">
                      UK Chartered Management Institute (CMI)
                    </h4>
                    <p className="text-[#999]">
                      Our team includes internationally certified managers, accredited by the UK Chartered Management Institute (CMI) ensuring world-class service delivery and leadership.
                    </p>
                  </div>
                </div>
                {/* fourth item */}
                <div className="bg-[#F7F7F8] w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="">
                    <Image
                      src={FourthAward}
                      alt="sustain"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold my-4">
                      Nigerian Institute of Management Consultants (NIMC)
                    </h4>
                    <p className="text-[#999]">
                     Our team includes internationally certified managers, accredited by  the Nigerian Institute of Management Consultants (NIMC) ensuring world-class service delivery and leadership.
                    </p>{" "}
                  </div>
                </div>
                          </div>
                          {/* stands */}
                           <div className="my-20">
              <OurStand />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
