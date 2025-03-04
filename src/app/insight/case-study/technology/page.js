"use client";
import React from "react";
import Image from "next/image";
import TopBanner from "../../../../../public/assets/it-banner.jpeg";



import Project7 from "../../../../../public/assets/dmj-image.jpg";
import Project8 from "../../../../../public/assets/st-image.jpg";
import Project9 from "../../../../../public/assets/skool-image.jpeg";
import Project10 from "../../../../../public/assets/david-presage-web.jpg";
import Project11 from "../../../../../public/assets/real-estate.jpg";
import Project12 from "../../../../../public/assets/gig-image.jpg";

import Employee from "../../../../../public/assets/improve-employee.png";
import DataSecurity from "../../../../../public/assets/data-security.png";
import DataMgt from "../../../../../public/assets/data-mgt.png";
import Flexibility from "../../../../../public/assets/flexibility-scalibility.png";
import Expertise from "../../../../../public/assets/expertise-resources.png";
import Innovation from "../../../../../public/assets/innovation-development.png";

import Link from "next/link";

const page = () => {
  

  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Case Studies
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            
Technology & Software Development
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Innovative solutions, secure technology, & unparalleled support for
            your business
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
              BFG Technology solutions is a specialised service deployed to help
              organisations optimize their use of technology to achieve their
              business objectives. Through this service, we provide a wide range
              of IT solutions, including, business web presence, cloud
              computing, software development, & cybersecurity. The service is
              delivered by our innovation & technology team, who are experts in
              their field & have the technical skills & knowledge to provide
              effective solutions. The goal of this service to clients is to
              improve their organisations efficiency, information security, &
              competitiveness by leveraging the latest technology.
            </p>
          </div>

                  <div className="w-full  my-8">
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
            
          </div>

          <hr />

          <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Service Benefits
              </h3>
              <p className="text-[#999] text-xl my-2">
                Unlock the full potential of your technology with our expert IT
                services, delivering seamless operations, enhanced performance,
                & sustainable solutions that drive lasting value & success.
              </p>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div> */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Employee}
                    alt="employee-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Employee Performance
                  </h4>
                  <p className="text-[#999]">
                    By providing employees with the knowledge, skills, &
                    abilities they need to succeed in their roles, this solution
                    helps organisations improve employee performance &
                    productivity.{" "}
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={DataSecurity}
                    alt="data-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Data Security
                  </h4>
                  <p className="text-[#999]">
                    IT services help organisations protect their IT systems &
                    data from unauthorized access & breaches by implementing
                    security measures such as firewalls, intrusion detection
                    systems, & regular security audits.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={DataMgt}
                    alt="datamgt-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Data Management
                  </h4>
                  <p className="text-[#999]">
                    It helps organisations manage & protect their data more
                    effectively by providing solutions such as data storage,
                    backup, & recovery.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Flexibility}
                    alt="flex-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Flexibility & Scalability
                  </h4>
                  <p className="text-[#999]">
                    Organisations adapt to changing business conditions & grow
                    their operations by providing scalable & flexible solutions
                    that can be easily modified & expanded as needed.
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Expertise}
                    alt="expertise-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Access to Expertise & Resources
                  </h4>
                  <p className="text-[#999]">
                    Our IT solutions provide organisations with access to
                    experts & resources that they might not have, such as
                    specialised software, & cybersecurity professionals.
                  </p>{" "}
                </div>
              </div>
              {/* sixth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Innovation}
                    alt="innovation-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Accelerated Innovation and Development
                  </h4>
                  <p className="text-[#999]">
                    Drive rapid technological advancements through agile
                    development practices, fostering continuous improvement and
                    faster time-to-market for new solutions.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          
          
         
        </div>
      </div>
    </>
  );
};

export default page;
