import React from "react";
import Image from "next/image";
// import Banner from "../../../../public/assets/business-strategy.jpg";

import TopBanner from "../../../../../public/assets/business-strategy-banner.jpg";


import Efficiency from "../../../../../public/assets/efficiency.png";
import Cost from "../../../../../public/assets/cost.png";
import Decision from "../../../../../public/assets/decision.png";
import Advantage from "../../../../../public/assets/advantage.png";
import Scalabity from "../../../../../public/assets/scalability.png";
import Operations from "../../../../../public/assets/operations.png";
import Project13 from "../../../../../public/assets/business-meeting.jpg";
import Project14 from "../../../../../public/assets/business-cover.jpg";
import Project15 from "../../../../../public/assets/business-image.png";
import Project16 from "../../../../../public/assets/measure-business.jpg";
import Project17 from "../../../../../public/assets/case-banner.jpeg";
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
            Strategy & Operations Transformation
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Streamline your operations, optimize your strategy, & achieve your
            goals
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
             Achieving operational excellence requires a strategic approach. Our consulting services help organizations refine business models, optimize workflows, and enhance performance. Our case studies highlight successful projects where we&apos;ve helped clients improve efficiency, reduce costs, and scale operations effectively.
            </p>
          </div>

          <div className="w-full  my-8">
            
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
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
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
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
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
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
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
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
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
                    <h3 className="font-sans text-xl lg:text-2xl font-semibold">
                      Strategic Market Positioning and Business Expansion for
                      Emerging  Markets
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
                Experience how our tailored business strategies & operational
                expertise deliver transformative outcomes, driving long-term
                success & sustainable growth
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
                    src={Efficiency}
                    alt="efficiency"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Efficiency & Productivity
                  </h4>
                  <p className="text-[#999]">
                    By streamlining operations & identifying areas for
                    improvement, our business strategy & operations service
                    helps organisations to increase their overall efficiency &
                    productivity.
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Cost}
                    alt="cost"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Cost Savings
                  </h4>
                  <p className="text-[#999]">
                    Identifying & implementing cost-saving measures can help
                    your organisation reduce expenses & increase its bottom
                    line.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Decision}
                    alt="decision"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Decision-Making
                  </h4>
                  <p className="text-[#999]">
                    Access to accurate, up-to-date information & expert analysis
                    helps our clients make more informed & effective decisions
                    for their businesses.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Advantage}
                    alt="advantage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Competitive Advantage
                  </h4>
                  <p className="text-[#999]">
                    Identifying & leveraging competitive advantages helps our
                    clients gain an edge over their rivals in the marketplace.
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Scalabity}
                    alt="scalability"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.{" "}
                  </p>{" "}
                </div>
              </div>
              {/* sixth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Operations}
                    alt="operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Streamlined Operational Processes
                  </h4>
                  <p className="text-[#999]">
                    Enhance workflow efficiency through process optimization,
                    reducing redundancies, and fostering a more agile
                    operational environment.{" "}
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
