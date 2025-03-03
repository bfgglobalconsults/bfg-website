import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/dmj-image.jpg";
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
            Digital Gateway: Enhancing Student Travel with DMJ Travels & Tours
            Online Platform
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
                DMJ Travels and Tours is an international travel agency
                specializing in student travel packages. To enhance its
                visibility, credibility, and customer engagement, the agency
                required a dedicated and comprehensive online platform to
                showcase its offerings, attract student travelers, and
                streamline the booking process.
              </p>
              <br />
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Aug 09, 2024</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Technology</p>
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
                In today&apos;s digital era, the absence of an online presence
                severely limits customer reach, reduces potential business
                patronage, diminishes brand awareness, and ultimately hinders
                growth.{" "}
              </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
                DMJ Travels and Tours faced these challenges, struggling to
                effectively showcase its student travel packages and attract the
                right audience. To remain competitive and expand its market
                reach, the company needed a robust digital platform to engage
                students and strengthen its position in the industry.
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
                The website development followed a structured process, beginning
                with requirements gathering and analysis to ensure alignment
                with DMJ Travels and Tours&apos; student-focused niche. This was
                followed by UI/UX design and prototyping to create an engaging
                and user-friendly experience.
              </p>
              <br />{" "}
              <p className="text-lg text-[#9b8b8b]">
                The development phase encompassed both frontend and backend
                implementation, leading to rigorous testing and quality
                assurance. Finally, ongoing maintenance and support were
                established to ensure long-term functionality and adaptability.
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
                We started by analyzing the challenges faced by DMJ Travels and
                Tours to define clear requirements for an effective solution.
                Based on these insights, we developed a comprehensive website
                designed to enhance user engagement and streamline bookings.
              </p>
              <br />
              <p className="text-lg text-[#9b8b8b]">
                The platform featured a dedicated section for travel packages,
                detailed information on student discounts and special offers,
                and an intuitive inquiry system—ensuring students had access to
                the comprehensive information they needed to make informed
                travel decisions.
              </p>
                          <br />
                          <p className="text-lg text-[#9b8b8b]">Preview: <Link className="text-black" href="https://dmjtravelexpress.com/" target="_blank">https://dmjtravelexpress.com/</Link></p>
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
