import Slides from "@/components/Slides";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FirstNews from "../../../../../../public/assets/law-firm.jpg";
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
           Professional Digital Presence: Engaging Website for David Prestige Law, Abuja
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
                A sleek, informative, and interactive website designed for David Prestige Law, Abuja, ensuring a professional online presence. The platform is cross-device compatible, effectively showcasing the firm&apos;s services and engaging its target audience.
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
                Without an official business website, David Prestige Law faced challenges in establishing credibility, expanding its client reach, and building trust with potential clients. This absence not only put the firm at a competitive disadvantage but also resulted in missed opportunities for brand growth. Without a digital platform, the firm struggled to effectively showcase its expertise and connect with a broader audience.
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
               At BFG Global Consulting LLC, we began by conducting thorough requirement gathering to gain a deep understanding of the challenges and limitations faced by David Prestige Law. We then carried out technical and user research, analyzing industry standards and identifying the most effective user interface design tailored to the legal sector.
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
               Our technology and software development team designed a professional website that effectively showcases David Prestige Law&apos;s expertise and services. The platform includes detailed practice area descriptions, visually engaging attorney profiles and biographies, client testimonials and case studies (with strict confidentiality measures), comprehensive contact information with inquiry forms, and a dedicated blog/news section for sharing legal insights and updates.
                          </p>
                           <br />
                           
                          <p className="text-lg text-[#9b8b8b]">Preview: <Link className="text-black" href="https://davidprestigeattorneys.com/" target="_blank">https://davidprestigeattorneys.com/</Link></p>
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
