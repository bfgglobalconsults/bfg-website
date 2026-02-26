"use client";
import React from "react";
import Image from "next/image";

import TopBanner from "../../../../../public/assets/training-development-banner.jpg";
import Project18 from "../../../../../public/assets/training-areai.jpg";
import Project21 from "../../../../../public/assets/training-do-action.jpg";
import Project20 from "../../../../../public/assets/training-hope-behind-bars.jpg"
import Project19 from "../../../../../public/assets/training-ilead.jpg";
import EmployeePerformance from "../../../../../public/assets/employee-perfomance.jpg";
import Retention from "../../../../../public/assets/retention.png";
import GreaterFlexibility from "../../../../../public/assets/greater-flexibility.png";
import DecisionMaking from "../../../../../public/assets/decision-making.png";
import TopTalent from "../../../../../public/assets/top-talent.png";
import Operations from "../../../../../public/assets/operations.png";

import Link from "next/link";
import MainDashboard from "@/components/dashboard/training/MainDashboard";
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
            Training & Development
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
          By meticulously tracking these key performance indicators, we illuminate how our training initiatives directly translate into Optimized Project Execution, Maximized Team Output, and quantify the direct impact of our programs.           </p>
        </div>
      </div>
      <div className="px-6 lg:px-12">

        <MainDashboard />
        </div>
        
        <hr className="mx-12 my-8" />

      

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
              A skilled workforce is essential for business success. Our tailored training programs equip teams with the knowledge and skills needed to thrive in a dynamic business environment. From leadership development to technical training, our case studies demonstrate how we&apos;ve helped organizations upskill employees and foster a culture of continuous learning.
            </p>
          </div>

          <CaseStudiesList unit="training" />
          <CustomerReview unit="Training and Development" />

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
                Realize the full potential of your organization with our expert
                services, delivering actionable insights, improved efficiency, &
                sustained results that drive lasting impact & success.{" "}
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
            </div> 
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={EmployeePerformance}
                    alt="employee"
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
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Retention}
                    alt="retention"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Retention of Employees
                  </h4>
                  <p className="text-[#999]">
                    Investing in employee training & development helps
                    organisations retain their best employees, & reduces the
                    costs associated with turnover.{" "}
                  </p>
                </div>
              </div>
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={GreaterFlexibility}
                    alt="flexibility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Adaptability & Flexibility
                  </h4>
                  <p className="text-[#999]">
                    By providing your employees with training & development that
                    keeps them up-to-date with new technologies & changing
                    industry trends, your organisation will be more adaptable &
                    flexible in response to changing business conditions.{" "}
                  </p>
                </div>
              </div>
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={DecisionMaking}
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
                    for their businesses.{" "}
                  </p>{" "}
                </div>
              </div>
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={TopTalent}
                    alt="talent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Ability to Attract top Talent
                  </h4>
                  <p className="text-[#999]">
                    Organisations that invest in this service are more likely to
                    attract top talent, as potential employees view such
                    investment as a sign of a committed & forward-thinking
                    organisation.{" "}
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
                    Greater Scalability{" "}
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div> */}
          
          
         
        </div>
      </div>
    </>
  );
};

export default page;
