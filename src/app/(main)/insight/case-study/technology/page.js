"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import MainDashboard from "@/components/dashboard/technology/MainDashboard";
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
            Technology & Software Development
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Highlights of our key performance indicators for project execution,
            code quality, system dependability, and team output that guarantee
            value delivery, strategy alignment, and ongoing development
            throughout our technology and software development portfolio.
          </p>
        </div>
      </div>
      <MainDashboard />
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
              From custom software development to digital transformation
              strategies, we have delivered cutting-edge technologies to
              streamline processes, enhance customer experiences, and boost the
              efficiency of businesses and organizations of all sizes. These
              case studies showcase how we&apos;ve built scalable, secure, and
              high-performing solutions tailored to unique business needs.
            </p>
          </div>

          <CaseStudiesList unit="technology" />
          <CustomerReview unit="Technology and Software Development" />

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
            </div> 
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
