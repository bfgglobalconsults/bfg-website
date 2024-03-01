import React from "react";
import Image from "next/image";
import Project1 from "../../../../public/assets/project-1.jpg";
import Project2 from "../../../../public/assets/project-2.jpg";
import Project3 from "../../../../public/assets/project-3.jpg";
import Project4 from "../../../../public/assets/project-4.jpg";
import Project5 from "../../../../public/assets/project-5.jpg";
import Project6 from "../../../../public/assets/project-6.jpg";


const page = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <h2 className="text-2xl font-bold">Project Executed</h2>
          <p>
            Our solutions help clients gain resilience and manage industry
            challenges toward maximising greater opportunities. See a brief
            description of some of our most recent projects executed across
            sectors.
          </p>
          <div>
            <div className="my-4 p-3 bg-[#E45F11]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[60%]">
                  <p className="text-[#E45F11] font-bold my-2">
                    ICT Training for Federal Ministry of Humanitarian Affairs,
                    Disaster Management and Social Development
                  </p>
                  <p>
                    Executed project management training for 40 staff members of
                    the Ministry of Humanitarian Affairs, Disaster Management,
                    and Social Development in partnership with Netline Limited
                    on the use of office project management software. The basic
                    tools covered were Microsoft Word, Excel, and PowerPoint.
                  </p>
                </div>
                <div className="w-[40%]">
                  <Image
                    src={Project1}
                    alt="first-project"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>

            <div className="my-4 p-3 bg-[#016EF8]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[40%]">
                  <Image
                    src={Project2}
                    alt="second-project"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-[#016EF8] font-bold my-2">
                    Business Transformation and Productivity Project for
                    GIGStravel.co.uk
                  </p>
                  <p>
                    This project is a full end-to-end business strategy and
                    operations service. From researching and designing a bespoke
                    business model for GIGS to recruiting new talents and
                    training the staff and managers of the organisation on
                    successful market practices to improve ROI and product
                    units.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-4 p-3 bg-[#E45F11]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[60%]">
                  <p className="text-[#E45F11] font-bold my-2">
                    Property Technology System for Mindfire Limited
                  </p>
                  <p>
                    Created an avenue for multichannel marketing by designing,
                    developing, and implementing Web Server Software to help
                    sales leaders, the marketing team and the managerial
                    department of Mindfire Group to advertise, sell and manage
                    its real estate product globally.
                  </p>
                </div>
                <div className="w-[40%]">
                  <Image
                    src={Project3}
                    alt="third-project"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>

            <div className="my-4 p-3 bg-[#016EF8]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[40%]">
                  <Image
                    src={Project4}
                    alt="fourth-project"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-[#016EF8] font-bold my-2">
                    Implementation of #TechforNonprofits model for Travaille
                    Ensemble
                  </p>
                  <p>
                    This is one of our most interesting tech projects for NGOs.
                    Our team of developers managed this project from design to
                    prototype and then to production. The design is made up of a
                    multilingual AI system. It was developed as a
                    problem-solving tech delivering social change & impact
                    system for change makers at Travaille Ensemble
                  </p>
                </div>
              </div>
            </div>

            <div className="my-4 p-3 bg-[#E45F11]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[60%]">
                  <p className="text-[#E45F11] font-bold my-2">
                    Digital Transformation and Product Profiling for Sensang
                    Construction Limited
                  </p>
                  <p>
                    Sensang is now among the architectural and civil engineering
                    businesses in Nigerias capital with the quickest growth. We
                    led the companys initiative to transition digitally, acting
                    as its most dependable partner. We provided Sensang with
                    more than simply digital operations; we also created the
                    companys product profile and market features, which account
                    for more than 80% of its current lead worth. Along with
                    other businesses, LIPRIMA, DexDirect Cargo, 12Twenty,
                    Ampersand, and Telbes Group have benefitted from this kind
                    of service.
                  </p>
                </div>
                <div className="w-[40%]">
                  <Image
                    src={Project5}
                    alt="first-project"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>

            <div className="my-4 p-3 bg-[#016EF8]/20">
              <div className="w-full flex items-center gap-2 my-2">
                <div className="w-[40%]">
                  <Image
                    src={Project6}
                    alt="six-project"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="w-[60%]">
                  <p className="text-[#016EF8] font-bold my-2">
                  Projected Business Plan and Advisory service for WorkaHQ.
                  </p>
                  <p>
                  WorkaHQ, a tech-based provider of
household services, specialises in
laundry, kitchen maintenance, and
support services. This initiative was
launched to attract investors and grow.
A market insight strategy was created by
our business planning and advising
team for the companys initiative to
draw in over $20,000 in funding
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
