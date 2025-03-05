"use client"
import React, { useState } from 'react'
import Project1 from "../../../public/assets/zenkleus-research.jpg";
import Project2 from "../../../public/assets/business-meeting.jpg";
import Project4 from "../../../public/assets/research-cover-img.jpg";
import Project5 from "../../../public/assets/gigs-travel-research.jpg";
import Project6 from "../../../public/assets/last-research.jpg";
import Project7 from "../../../public/assets/dmj-image.jpg";
import Project8 from "../../../public/assets/st-image.jpg";
import Project9 from "../../../public/assets/skool-image.jpeg";
import Project10 from "../../../public/assets/david-presage-web.jpg";
import Project11 from "../../../public/assets/real-estate.jpg";
import Project12 from "../../../public/assets/gig-image.jpg";
import Project13 from "../../../public/assets/business-meeting.jpg";
import Project14 from "../../../public/assets/business-cover.jpg";
import Project15 from "../../../public/assets/business-image.png";
import Project16 from "../../../public/assets/measure-business.jpg";
import Project17 from "../../../public/assets/case-banner.jpeg";

import Project18 from "../../../public/assets/training-areai.jpg";
import Project21 from "../../../public/assets/training-do-action.jpg";
import Project20 from "../../../public/assets/training-hope-behind-bars.jpg"
import Project19 from "../../../public/assets/training-ilead.jpg";

import Image from 'next/image';
import Link from 'next/link';

const ProjectTabs = () => {
        const [tab, settab] = useState("Technology and Software Development");
    
  return (
    <>
      <div className="my-6">
        <div className="flex flex-wrap gap-x-[24px] my-4 ">
          {/* <button
            onClick={() => {
              settab("All");
            }}
            className={`text-[14px] pb-2 cursor-pointer ${
              tab === "All"
                ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
            } `}
          >
            All
          </button> */}
          <button
            onClick={() => {
              settab("Technology and Software Development");
            }}
            className={`text-[14px] pb-2 my-3 cursor-pointer ${
              tab === "Technology and Software Development"
                ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
            } `}
          >
            Technology and Software Development
          </button>
          <button
            onClick={() => {
              settab("Research and Analytics");
            }}
            className={`text-[14px] pb-2 my-3 cursor-pointer ${
              tab === "Research and Analytics"
                ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
            } `}
          >
            Research and Analytics
          </button>
          <button
            onClick={() => {
              settab("Strategy and Operations Transformation");
            }}
            className={`text-[14px] pb-2 my-3 cursor-pointer ${
              tab === "Strategy and Operations Transformation"
                ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
            } `}
          >
            Strategy and Operations Transformation
          </button>

          <button
            onClick={() => {
              settab("Training and Development");
            }}
            className={`text-[14px] pb-2 my-3 cursor-pointer ${
              tab === "Training and Development"
                ? "text-white bg-[#E26015] py-2 px-6 rounded-xl"
                : "text-black border border-[#E26015] py-2 px-6 rounded-xl"
            } `}
          >
            Training and Development
          </button>
        </div>
      </div>
      <div className="my-4">
        {tab === "Technology and Software Development" && (
          <div>
            <div className="">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project7}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Digital Gateway: Enhancing Student Travel with DMJ Travels
                      & Tours Online Platform
                    </h3>
                    <p className="text-[#999]">
                      DMJ Travels and Tours is an international travel agency
                      specializing in student travel packages. To enhance its
                      visibility, credibility, and customer engagement, the
                      agency required a dedicated and comprehensive online
                      platform to showcase its offerings, attract student
                      travelers, and streamline the booking process.
                    </p>
                    <Link href="/industry/projects/technology/dmj-travels-web">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second image */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project8}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Digital Transformation: Comprehensive Web Solution for ST
                      Travels & Tours
                    </h3>
                    <p className="text-[#999]">
                      ST Travels & Tours is an international travel and
                      hospitality company serving both individuals and corporate
                      clients. Operating locally and relying primarily on
                      referrals, the company sought a comprehensive, all-in-one
                      web application to enhance its online presence, streamline
                      operations, and attract a broader customer base.
                    </p>
                    <Link href="/industry/projects/technology/st-travels-web">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* third product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project9}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Comprehensive Software System Analysis for Skoolbod
                      Education Management Platform
                    </h3>
                    <p className="text-[#999]">
                      BFG Global Consulting LLC delivered a comprehensive
                      software system analysis for the Skoolbod education
                      management platform. The solution encompassed in-depth
                      user research and analysis, structured requirements
                      elicitation workshops, detailed user story and use case
                      documentation.
                    </p>
                    <Link href="/industry/projects/technology/skoolbod">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project10}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      {" "}
                      Professional Digital Presence: Engaging Website for David
                      Prestige Law, Abuja
                    </h3>
                    <p className="text-[#999]">
                      A sleek, informative, and interactive website designed for
                      David Prestige Law, Abuja, ensuring a professional online
                      presence. The platform is cross-device compatible,
                      effectively showcasing the firm&apos;s services and
                      engaging its target audience.
                    </p>
                    <Link href="/industry/projects/technology/david-prestige-attorneys">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fifth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project11}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Building a Strong Digital Presence: A Professional Website
                      for Alubarika Construction
                    </h3>
                    <p className="text-[#999]">
                      A professionally designed website with seamless
                      navigation, an aesthetically appealing user interface,
                      high-quality content, and fast responsiveness across all
                      devices. This platform enhances Alubarika
                      Construction&apos;s credibility, boosts online visibility,
                      expands client reach, and strengthens its brand presence
                      in the industry.
                    </p>
                    <Link href="/industry/projects/technology/alubarika-web">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* sixth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project12}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Elevating GIGS Travels: A High-Conversion Marketing
                      Campaign for Migration and Travel Services
                    </h3>
                    <p className="text-[#999]">
                      A strategic, high-conversion marketing campaign designed
                      to position GIGS Travels as the premier choice for
                      migration and travel services.
                    </p>
                    <Link href="/industry/projects/technology/gigs-travels">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "Research and Analytics" && (
          <div>
            <div className="">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project1}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      ZENKLEUS Nigeria: A UI/UX Research Journey into
                      User-Centered Design
                    </h3>
                    <p className="text-[#999]">
                      In Nigeria&apos;s rapidly evolving digital landscape, user
                      experience (UX) and user interface (UI) design are
                      becoming crucial for product success. ZENKLEUS Nigeria
                      embarked on a comprehensive UI/UX research initiative to
                      better understand user behavior, optimize engagement, and
                      enhance usability.
                    </p>
                    <Link href="/industry/projects/research/zenkleus-research">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second image */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project2}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      MECEN&apos;s Sustainable Expansion: Establishing a PET
                      Recycling Facility in Nigeria
                    </h3>
                    <p className="text-[#999]">
                      As plastic waste continues to pose a significant
                      environmental challenge in Nigeria, innovative recycling
                      solutions have become crucial for sustainable development.
                      MECEN, a global leader in recycling and advanced Pyrolysis
                      technology, identified an opportunity to drive change by
                      establishing a PET recycling facility in key Nigerian
                      cities—Abuja, Port Harcourt, and Lagos{" "}
                    </p>
                    <Link href="/industry/projects/research/mecen-research">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* third product */}

                {/* fourth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project4}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Corporate Scholarship Funding: Analyzing CSR Investment in
                      Education Across Industries
                    </h3>
                    <p className="text-[#999]">
                      AKADAPlay commissioned us to conduct a comprehensive study
                      on corporate scholarship funding as part of CSR
                      initiatives across various industries. The research aimed
                      to evaluate how corporations allocate resources for
                      educational support, identify spending patterns, and
                      uncover key trends in CSR-driven scholarship programs.
                    </p>
                    <Link href="/industry/projects/research/akadapay-research">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fifth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project5}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Strategic Market Exploration: Identifying Fintech
                      Opportunities for Ampersand
                    </h3>
                    <p className="text-[#999]">
                      Ampersand is seeking to enter the fintech industry but
                      requires strategic direction on the most viable product
                      line and target market. The company is evaluating
                      opportunities in both the Nigerian and U.S. markets,
                      aiming to identify an underserved segment with strong
                      growth potential.
                    </p>
                    <Link href="/industry/projects/research/ampersand-research">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* sixth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project6}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      PocketFI: Market Research and Digital Platform Development
                      for Nigeria&apos;s P2P Cryptocurrency Ecosystem
                    </h3>
                    <p className="text-[#999]">
                      PocketFI engaged us with a dual objective: to conduct
                      comprehensive market research on Nigeria&apos;s P2P
                      cryptocurrency ecosystem and to design and develop a
                      user-friendly website and mobile application for their
                      platform.
                    </p>
                    <Link href="/industry/projects/research/pocket-fi-research">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "Strategy and Operations Transformation" && (
          <div>
            <div className="">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project13}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Bridging the Funding Gap: Empowering Women Through Sheroes
                      Rising 4 Development Initiative{" "}
                    </h3>
                    <p className="text-[#999]">
                      Sheroes Rising 4 Development Initiative, a social
                      enterprise dedicated to empowering and enlightening women
                      across all aspects of life and society, identified a
                      critical gap in funding opportunities needed to sustain
                      and expand its initiatives.
                    </p>
                    <Link href="/industry/projects/business/sheroes-business">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second image */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project14}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Crafting a Persuasive Sales Brochure & Value Proposition
                      for Skoolbod
                    </h3>
                    <p className="text-[#999]">
                      Development of a compelling sales brochure and value
                      proposition document for Skoolbod, an edutech management
                      platform. The goal is to capture attention, educate
                      potential customers, and drive engagement by clearly
                      communicating Skoolbod&apos;s unique value.
                    </p>
                    <Link href="/industry/projects/business/skoolbod">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* third product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project15}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Strategic Market Positioning and Business Expansion for
                      Emerging Fintech and Underserved Markets
                    </h3>
                    <p className="text-[#999]">
                      To-Doo presented a business idea to us with a focus on a
                      particularly underserved market to create a business plan
                      to expand and structure the idea to provide services to
                      that market to gain a competitive edge in the business
                      atmosphere.
                    </p>
                    <Link href="/industry/projects/business/to-doo-business">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project16}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Strategic Expansion: Proposal and Pitch Deck for
                      Educational Growth
                    </h3>
                    <p className="text-[#999]">
                      A professionally crafted and well-structured proposal and
                      pitch deck designed for a strategic loan application aimed
                      at securing a larger space to accommodate more students.
                    </p>
                    <Link href="/industry/projects/business/tots-academy">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fifth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project17}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Strategic Market Positioning and Business Expansion for
                      Emerging Markets
                    </h3>
                    <p className="text-[#999]">
                      Yahweh Yasad sought to explore business opportunities
                      within an underserved market niche and needed a deeper
                      understanding of its dynamics.
                    </p>
                    <Link href="/industry/projects/business/yasad-business">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "Training and Development" && (
          <div>
            <div className="">
              <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-4">
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project18}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Areai)
                    </h3>
                    <p className="text-[#999]">
                      The objective of the Artificial Intelligence Training is
                      to equip Non-Governmental Organizations (NGOs) with the
                      knowledge and tools to enhance their efficiency, amplify
                      their impact, and drive innovation by improving
                      data-driven decision-making, streamlining operations,
                      enhancing service delivery, strengthening fundraising and
                      advocacy efforts, and fostering creative solutions to
                      social challenges.
                    </p>
                    <Link href="/industry/projects/training/areai">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* second image */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project19}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Empowering iLEAD Africa: Strategic Program Design and AI
                      Prompt Engineering Training
                    </h3>
                    <p className="text-[#999]">
                      A tailored two-day capacity-building training focused on
                      strategic program design and AI prompt engineering,
                      designed to equip the staff and volunteers of iLEAD Africa
                      with practical skills to enhance their operations and
                      impact.
                    </p>
                    <Link href="/industry/projects/training/ilead-africa">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* third product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project20}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Hope Behind Bars)
                    </h3>
                    <p className="text-[#999]">
                      The objective of the Artificial Intelligence Training is
                      to equip Non-Governmental Organizations (NGOs) with the
                      knowledge and tools to enhance their efficiency, amplify
                      their impact, and drive innovation by improving
                      data-driven decision-making, streamlining operations,
                      enhancing service delivery, strengthening fundraising and
                      advocacy efforts, and fostering creative solutions to
                      social challenges.
                    </p>
                    <Link href="/industry/projects/training/hope-behind-bars">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* fourth product */}
                <div className="w-[100%] lg:w-[30%] p-4 lg:p-10 border border-[#F7F7F8] rounded-3xl">
                  <div className="h-[200px] lg:h-[350px]">
                    <Image
                      src={Project21}
                      alt="news1"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">
                      Empowering NGOs with Artificial Intelligence for Enhanced
                      Impact and Innovation (Do Take Action)
                    </h3>
                    <p className="text-[#999]">
                      The Workforce Training and Development Unit of BFG Global
                      Consulting LLC equipped DO Take Action with the knowledge
                      and practical application of Artificial Intelligence to
                      enhance their service delivery.
                    </p>
                    <Link href="/industry/projects/research/do-action">
                      <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                        <span className="text-white ml-2 font-semibold">
                          Read More
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                            fill="rgba(255,255,255,1)"
                          >
                            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                          </svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectTabs