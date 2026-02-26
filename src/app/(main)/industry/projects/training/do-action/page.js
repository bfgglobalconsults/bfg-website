import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/training-do-action.jpg";
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
                      Empowering NGOs with Artificial Intelligence for Enhanced Impact and Innovation (Do Take Action)
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
The objective of the Artificial Intelligence Training is to equip Non-Governmental Organizations (NGOs) with the skills and knowledge to enhance operational efficiency, strengthen decision-making, improve service delivery, drive innovative solutions, and maximize fundraising and advocacy efforts—ultimately increasing their overall impact and sustainability.                          </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Oct 21, 2024</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Training</p>
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
                              DO Take Action mobilizes a vast network of volunteers to drive positive change in their communities by equipping grassroots citizens with practical skills such as grant writing, social media management, and program facilitation. However, with the fast-paced evolution of global systems through artificial intelligence (AI), there arose a critical need to upskill these volunteers.
                          </p>
                          <br />
                          <p className="text-lg text-[#9b8b8b]">
                           To maintain relevance and maximize impact, DO Take Action required comprehensive capacity building in AI for its staff and volunteers, ensuring they possess the advanced skill sets necessary to deliver meaningful, future-ready solutions in their communities.   
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
                              During the second phase of the Data2Deals Project, the Workforce Training and Development Unit of BFG Global Consulting LLC conducted extensive research and needs assessments to identify NGOs seeking to enhance their social impact in an increasingly digital world. Through this process, we engaged with DO Take Action and identified an opportunity to support their mission through specialized AI capacity building.
                          </p>
                          
                          <br />{" "}
                          <p className="text-lg text-[#9b8b8b]">
                              We designed a comprehensive, tailored training curriculum that aligned with the organization&apos;s specific goals, ensuring the delivery of practical, high-impact knowledge and skills that directly contributed to the success of the program.

                           </p>
             
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
                              The Workforce Training and Development Unit of BFG Global Consulting LLC equipped DO Take Action with the knowledge and practical application of Artificial Intelligence to enhance their service delivery. By empowering their staff and volunteers with AI skills, the organization was able to amplify its impact, streamline its processes, and deliver greater value in empowering grassroots communities through innovative and efficient solutions.
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
