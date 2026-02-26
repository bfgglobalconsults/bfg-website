"use client";
import React from "react";
import Image from "next/image";
// import Banner from "../../../../../public/assets/business-strategy.jpg";

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
import MainDashboard from "@/components/dashboard/business/MainDashboard";
import CustomerReview from "@/components/customer-review/CustomerReview";
import CaseStudiesList from "@/components/CaseStudiesList";

const page = () => {
  
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
        Portfolio Metrics
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Strategy & Operations Transformation
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
          Highlights of how our approach centers on dissecting  current operational landscape to identify inefficiencies and bottlenecks, leveraging deep analytical insights and strategic foresight to Streamline  Operations, Optimize Business Strategies, and Transform Organizational Framework into a finely tuned engine for success. 
          </p>
        </div>
      </div>
      <div className="px-6 lg:px-12">
       <MainDashboard />
       <hr className="mx-12 my-8" />

      <div className="mt-8 px-12"></div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Case Studies
            </span>
            <h3 className="text-[#333] text-3xl my-4 font-semibold">
              Projects Executed
            </h3>
            <p className="text-lg text-[#656565] my-3">
             Achieving operational excellence requires a strategic approach. Our consulting services help organizations refine business models, optimize workflows, and enhance performance. Our case studies highlight successful projects where we&apos;ve helped clients improve efficiency, reduce costs, and scale operations effectively.
            </p>
          </div>

          <CaseStudiesList unit="strategy" />
          <CustomerReview unit="Strategy and Operations
Transformation

" />

          {/* <hr />

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
           
          </div> */}
         
           
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
