import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/business-meeting.jpg";
const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-10">
        <div className="inline-block bg-white border-2 border-[#E26015] p-2 rounded-3xl">
          <Link href="/industry/projects">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Back</span>
            </div>
          </Link>
        </div>
        <div className="w-full my-4">
          <h3 className="w-[100%]  text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
            MECEN&apos;s Sustainable Expansion: Establishing a PET Recycling
            Facility in Nigeria
          </h3>
        </div>
        <div className="relative w-full h-[300px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FirstNews}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="my-4">
          <Slides />
        </div>
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Project Overview
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                MECEN aimed to enter the Nigerian market by establishing PET
                recycling facilities in Abuja, Port Harcourt, and Lagos.
                Leveraging its advanced Pyrolysis technology and recycling
                expertise, the company sought to transform PET waste into
                high-value products. This initiative was designed to support
                Nigeria&apos;s environmental sustainability efforts by tackling
                plastic pollution and promoting a circular economy.
              </p>
              <br />

             
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Aug 09, 2023</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Research</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 2 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">
                    BFG Product
                    <br /> Team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* problem statement */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Problem Statement
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
               Nigeria faces significant challenges due to inadequate PET recycling infrastructure, resulting in widespread plastic pollution, resource inefficiencies, and missed economic opportunities. MECEN sought to address these issues by introducing its proven advanced recycling technology to the Nigerian market.
              </p>
                          <br />
                          <p className="text-lg text-[#9b8b8b]">
                              However, market entry posed several challenges, including identifying reliable local partners, navigating complex regulatory requirements, and assessing the industry&apos;s readiness for large-scale PET recycling. Our objective was to evaluate the current state of Nigeria’s PET recycling sector, identify a suitable local partner, and develop practical strategies for MECEN&apos;s successful market integration.
                          </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* problem statement end */}

        {/* approach used */}
        <div className="p-1 lg:p-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Approach (The How)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
                BFG Global Consulting took a strategic approach to this project by conducting an in-depth market analysis and environmental assessment of Nigeria&apos;s PET recycling industry. This involved engaging with key stakeholders—including local recycling partners, government officials, and industry experts—through surveys and interviews to gain insights into the existing infrastructure, market demand, regulatory landscape, and potential challenges.
              </p>
              <br />{" "}
              <p className="text-lg text-[#9b8b8b]">
                Additionally, we evaluated the capabilities and needs of prospective local partners to identify those best suited to align with MECEN&apos;s project requirements. Our findings provided MECEN with a comprehensive understanding of market dynamics, enabling data-driven decisions on entry strategy and strategic partnerships.
              </p>
              <br />
             
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* approach used end */}

        {/* solution */}
        <div className="p-1 lg:px-12">
          <h3 className="text-2xl text-black font-semibold my-3">
            Solution Introduced (The Problem Solving Innovation)
          </h3>
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
              <p className="text-lg text-[#9b8b8b]">
               Drawing from our research, we delivered a comprehensive market report to MECEN, outlining key insights into Nigeria&apos;s PET recycling sector. Through surveys and interviews, we identified several potential local partners that aligned with MECEN&apos;s project requirements in terms of operational capacity, technological compatibility, and sustainability objectives.
              </p>
                          <br />
                          <p className="text-lg text-[#9b8b8b]">
                               These partners were strategically positioned to collaborate with MECEN, enabling a seamless integration of its advanced PET recycling technology into the Nigerian market. Additionally, we provided strategic recommendations on navigating regulatory challenges and optimizing the partnership for long-term success.
                          </p>
            </div>
            <div className="hidden lg:block lg:w-[20%]"></div>
          </div>
        </div>
        {/* solution end */}
      </div>
    </>
  );
};

export default page;
