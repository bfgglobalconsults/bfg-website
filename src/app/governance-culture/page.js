import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/governance-images.png";
import GovernanceImg from "../../../public/assets/governance-image.jpg";
import Slides from "@/components/Slides";
import { SlideLeft } from "@/components/ui/Transitions";
import ClientCentric from "../../../public/assets/client-centric.png";
import Innovative from "../../../public/assets/innovative-learning.png";
import Inclusivity from "../../../public/assets/inclusivity.png";
import Sustain from "../../../public/assets/sustain.png";
import OurStand from "@/components/OurStand";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Governance & Culture
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Governance & Culture
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            A Foundation Built on Leadership, Integrity, and Innovation
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
              At BFG Global Consult, we take pride in being recognized for our
              dedication to excellence, industry leadership, and transformative
              solutions. Our awards and accolades reflect our commitment to
              driving innovation, empowering businesses, and delivering
              measurable impact across multiple sector
            </p>
          </div>
          <div className="my-4">
            <Slides />
          </div>
          <div className="my-14">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Governance
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Our Governance System
              </h3>
              <p className="text-[#999] text-xl my-2">
                BFG Global Consult operates on a structured governance model
                designed to ensure transparency, efficiency, and accountability
                across all levels. Our leadership is guided by
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[40%]">
                <div className="w-full h-full">
                  <Image
                    src={GovernanceImg}
                    alt=""
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <div className="p-2 overflow-hidden">
                  <SlideLeft>
                    <div className="w-full flex flex-wrap gap-8">
                      <div className="w-[100%] lg:w-[40%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                        <h3 className="text-lg text-[#222] font-semibold my-2">
                          A Clear Organizational Structure
                        </h3>
                        <p className="text-[#999]">
                          A well-defined hierarchy ensures seamless
                          communication and decision-making, from the Managing
                          Partner & CEO to department heads, unit leaders, and
                          staff.
                        </p>
                      </div>
                      <div className="w-[100%] lg:w-[40%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                        <h3 className="text-lg text-[#222] font-semibold my-2">
                          An Expert Advisory Board
                        </h3>
                        <p className="text-[#999]">
                          Comprising seasoned industry leaders, our board
                          provides strategic insights and governance oversight
                          to align with best practices and emerging market
                          trends.
                        </p>
                      </div>
                      <div className="w-[100%] lg:w-[40%] p-2 border border-[#F7F7F8] bg-[#FCFCFD] rounded-lg shadow-md">
                        <h3 className="text-lg text-[#222] font-semibold my-2">
                          Ethical Standards & Compliance
                        </h3>
                        <p className="text-[#999]">
                          We uphold strict ethical guidelines, prioritizing
                          transparency, compliance, and integrity in every
                          aspect of our business.
                        </p>
                      </div>
                      <div className="w-[100%] lg:w-[40%] p-2 flex items-center">
                         <a href="/bfg-organogram.pdf" target="_blank"  rel="noopener noreferrer" className="">
                        <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                          <span className="text-white text-md font-semibold">
                            View Our Structure
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
                          </a>
                      </div>
                    </div>
                  </SlideLeft>
                </div>
              </div>
            </div>
            <div className="my-20">
              <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                Our Culture
              </span>
              <div>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Our Culture: Driven by Innovation & People
                </h3>
                <p className="text-[#999] text-xl my-2">
                  At BFG Global Consult, we cultivate a work environment that
                  fosters creativity, collaboration, and continuous growth.
                </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
                <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="w-full">
                    <Image
                      src={ClientCentric}
                      alt="client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold">
                      Client-Centric Excellence
                    </h4>
                    <p className="text-[#999]">
                      We believe in building lasting relationships by providing
                      tailored solutions that address real business challenges.
                    </p>
                  </div>
                </div>
                {/* second item */}
                <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="w-full">
                    <Image
                      src={Innovative}
                      alt="innovate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold">
                      Innovation & Continuous Learning
                    </h4>
                    <p className="text-[#999]">
                      Our team is encouraged to explore new ideas, backed by
                      training programs that keep us at the forefront of
                      industry advancements.
                    </p>
                  </div>
                </div>
                {/* third item */}
                <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="w-full">
                    <Image
                      src={Inclusivity}
                      alt="inclusive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold">
                      Diversity & Inclusivity
                    </h4>
                    <p className="text-[#999]">
                      We are committed to an inclusive workforce, reflected in
                      initiatives like Women in Technology Programs that drive
                      gender equality in the industry.
                    </p>
                  </div>
                </div>
                {/* fourth item */}
                <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                  <div className="w-full">
                    <Image
                      src={Sustain}
                      alt="sustain"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[100%]">
                    <h4 className="text-xl text-[#333] font-semibold">
                      Social Impact & Sustainability
                    </h4>
                    <p className="text-[#999]">
                      We go beyond business by supporting local entrepreneurs,
                      advocating sustainable practices, and investing in
                      community development projects—because success is
                      meaningful when it creates lasting impact.
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
      </div>
    </>
  );
};

export default page;
