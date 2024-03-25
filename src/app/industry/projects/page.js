import React from "react";
import Image from "next/image";
import TopBanner from "../../../../public/assets/project-executed.jpg";
import Project1 from "../../../../public/assets/project-1.jpg";
import Project2 from "../../../../public/assets/project-2.jpg";
import Project3 from "../../../../public/assets/project-3.jpg";
import Project4 from "../../../../public/assets/project-4.jpg";
import Project5 from "../../../../public/assets/project-5.jpg";
import Project6 from "../../../../public/assets/project-6.jpg";

const page = () => {
  return (
    <>
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
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
      </div>
    </>
  );
};

export default page;
