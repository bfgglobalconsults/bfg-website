"use client"
import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/project-image.jpg";
import Project1 from "../../../../public/assets/project1.png";
import Project2 from "../../../../public/assets/project2.png";

import OurStand from "@/components/OurStand";
import ProjectTabs from "@/components/project-tabs/ProjectTabs";

const page = () => {
  
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Team
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
           Project Executed
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Experience our expertise in action through successfully executed projects.
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="py-[30px]">
          <div className="">
            <div className="w-full my-4">
              <p className="text-lg text-[#656565] my-3">
                Our solutions help clients gain resilience & manage industry challenges toward maximising greater opportunities. See a brief description of some of our most recent projects executed across sectors.
              </p>
            </div>
          </div>
        </div>
        {/* another section */}
         <div>
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Our Project
          </span>
          <div className="w-full gap-4 items-center justify-between my-4">
            <h3 className="text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              Amazing Projects Executed
            </h3>
           <ProjectTabs/>
            <div className="py-[30px]">
          <div className="">
            <div className="w-full flex flex-col lg:flex-row gap-10 my-4">
              <div className="w-[100%] lg:w-[50%]  p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={Project1}
                    alt="news1"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    ICT Training for Federal Ministry of Humanitarian Affairs, Disaster Management & Social Development
                  </h3>
                  <p className="text-[#999]">
                   Executed project management training for 40 staff members of the Ministry of Humanitarian Affairs, Disaster Management, & Social Development in partnership with Netline Limited on the use of office project management software. The basic tools covered were Microsoft Word, Excel, & PowerPoint.

                  </p>
                  <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                    <span className="text-white ml-2 font-semibold">Read More</span>
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
                </div>
              </div>
              {/* second image */}
              <div className="w-[100%] lg:w-[50%] p-10 border border-[#F7F7F8] rounded-3xl">
                <div className="h-[200px] lg:h-[350px]">
                  <Image
                    src={Project2}
                    alt="news1"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                   Business Transformation & Productivity Project for GIGStravel.co.uk
                  </h3>
                  <p className="text-[#999]">
                    This project is a full end-to-end business strategy & operations service. From researching & designing a bespoke business model for GIGS to recruiting new talents & training the staff & managers of the organisation on successful market practices to improve ROI & product units.
                  </p>
                  <button className="flex gap-1 py-1 px-2 items-center bg-[#E26015] hover:bg-[#333] rounded-3xl my-3">
                    <span className="text-white ml-2 font-semibold">Read More</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        {/* another section end */}
        <div>
          <OurStand/>
        </div>
        </div>
      
      {/* <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Project Executed
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Experience our expertise in action through successfully executed
            projects.
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div className="text-center">
            <p className="text-xl text-[#656565] w-full md:w-[70%] md:mx-auto my-3">
              Our solutions help clients gain resilience and manage industry
              challenges toward maximising greater opportunities. See a brief
              description of some of our most recent projects executed across
              sectors.
            </p>
          </div>

          <div>
            <div className="my-4 p-3">
              <div className="w-full  flex flex-wrap gap-4 my-2 justify-center">
                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#E45F11] p-2">
                  <div className="w-full h-[200px]">
                    <Image
                      src={Project1}
                      alt="first-project"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <p className="text-[#E45F11] font-bold my-2">
                    ICT Training for Federal Ministry of Humanitarian Affairs,
                    Disaster Management and Social Development
                  </p>
                  <p className="text-[#656565]">
                    Executed project management training for 40 staff members of
                    the Ministry of Humanitarian Affairs, Disaster Management,
                    and Social Development in partnership with Netline Limited
                    on the use of office project management software. The basic
                    tools covered were Microsoft Word, Excel, and PowerPoint.
                  </p>
                </div>

                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#016EF8] p-2">
                  <div className="w-full h-[200px]">
                    <Image
                      src={Project2}
                      alt="second-project"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <p className="text-[#016EF8] font-bold my-2">
                    Business Transformation and Productivity Project for
                    GIGStravel.co.uk
                  </p>
                  <p className="text-[#656565]">
                    This project is a full end-to-end business strategy and
                    operations service. From researching and designing a bespoke
                    business model for GIGS to recruiting new talents and
                    training the staff and managers of the organisation on
                    successful market practices to improve ROI and product
                    units.
                  </p>
                </div>

                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#E45F11] p-2">
                  <div className="w-full h-[200px]">
                    <Image
                      src={Project3}
                      alt="third-project"
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <p className="text-[#E45F11] font-bold my-2">
                    Property Technology System for Mindfire Limited
                  </p>
                  <p className="text-[#656565]">
                    Created an avenue for multichannel marketing by designing,
                    developing, and implementing Web Server Software to help
                    sales leaders, the marketing team and the managerial
                    department of Mindfire Group to advertise, sell and manage
                    its real estate product globally.
                  </p>
                </div>

                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#016EF8] p-2">
                                    <div className="w-full h-[200px]">

                  <Image
                    src={Project4}
                    alt="fourth-project"
                    className="w-full h-full object-fit"
                    />
                    </div>
                  <p className="text-[#016EF8] font-bold my-2">
                    Implementation of #TechforNonprofits model for Travaille
                    Ensemble
                  </p>
                  <p className="text-[#656565]">
                    This is one of our most interesting tech projects for NGOs.
                    Our team of developers managed this project from design to
                    prototype and then to production. The design is made up of a
                    multilingual AI system. It was developed as a
                    problem-solving tech delivering social change & impact
                    system for change makers at Travaille Ensemble
                  </p>
                </div>

                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#E45F11] p-2">
                  <div className="w-full h-[200px]">
                  <Image
                    src={Project5}
                    alt="first-project"
                    className="w-full h-full object-fit"
                    />
                    </div>
                  <p className="text-[#E45F11] font-bold my-2">
                    Digital Transformation and Product Profiling for Sensang
                    Construction Limited
                  </p>
                  <p className="text-[#656565]">
                    Sensang is now among the architectural and civil engineering
                    businesses in Nigerias capital with the quickest growth. We
                    led the companys initiative to transition digitally, acting
                    as its most dependable partner. We provided Sensang with
                    more than simply digital operations; we also created the
                    companys product profile and market features, which account
                    for more than 80% of its current lead worth.
                  </p>
                </div>

                <div className="w-[100%] md:w-[50%] lg:w-[30%] shadow-lg border-b-4 border-[#016EF8] p-2">
                 <div className="w-full h-[200px]">
                  <Image
                    src={Project6}
                    alt="six-project"
                    className="w-full h-full object-fit"
                    />
                    </div>
                  <p className="text-[#016EF8] font-bold my-2">
                    Projected Business Plan and Advisory service for WorkaHQ.
                  </p>
                  <p className="text-[#656565]">
                    WorkaHQ, a tech-based provider of household services,
                    specialises in laundry, kitchen maintenance, and support
                    services. This initiative was launched to attract investors
                    and grow. A market insight strategy was created by our
                    business planning and advising team for the companys
                    initiative to draw in over $20,000 in funding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
