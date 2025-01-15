"use client";
import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/research-analytic.jpg";
import TopBanner from "../../../../public/assets/Research-and-analytics.png";
import { motion } from "framer-motion";

import ResearchImage from "../../../../public/assets/research-img.png";

import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";

import Accordion from "@/components/Accordion";
import AnimatedItems from "@/components/information-technology/AnimatedItems";

const page = () => {
  const researchSlides = [
      {
        title: "Case Study Analysis",
        content:
          "Bridging the gap between theory & practice, our research & analytics service offers insights that combine real-life scenarios, academic knowledge, & stimulation to deliver actionable insights.",
      },
      {
        title: "UX Research & Insights",
        content:
          "Unlock user-centric solutions with our UX research expertise. Get actionable insights to inform design decisions, enhance user engagement, and drive business growth.",
      },
      {
        title: "Business Intelligence Research",
        content:
          "Unlock the power of data-driven insights with our business research expertise. We combine rigorous methodologies, industry expertise, & analytical capabilities to deliver actionable findings that inform strategic decisions & drive business success.",
      },
      {
        title: "Market Feasibility & Analysis",
        content:
          "Get real-time data to fuel your business plan, uncover new market opportunities, & drive clients-valued solutions. Our research expertise helps you stay ahead of the competition & make informed decisions.",
     },
     {
       title: "Monitoring & Evaluation",
       content: "Ensure your projects deliver meaningful results with our monitoring & evaluation expertise. We help you set clear goals, track progress, & make data-driven decisions to maximize impact & achieve success."
    }, {
       title: "Product Testing",
      content: "Put your products to the test with our rigorous testing services. We simulate real-world scenarios, identify areas for improvement, & ensure your products meet the highest st&ards of quality, reliability, & performance."
    },
    {
      title: "Consumer Needs & Assessment",
      content: "Stay ahead of the curve with real-time insights into clients needs & satisfaction. Our research & analytics services help you predict, manage, & delight - shaping your services for future success."
     }
    ];
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Research
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Research and Analytics
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Utilise our Business Research and Analytics to help you make wiser
            business decisions.
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
              Advanced data analytics and product research are provided by the
              BFG Business Research and Intelligence team with a workflow that
              is integrated to assist you in making decisions that are quicker,
              more accurate, and more intelligent when using data. Your business
              results may be influenced by our data insights, planning,
              budgeting, forecasting, and knowledgeable BI solutions, regardless
              of your company area, finance, HR, supply chain, marketing, sales,
              or IT. This service combines the expertise of agile information
              professionals, market researchers, and insight managers to deliver
              high-quality standards and regulatory intelligence, market
              insights, industry research, and impact assessment.
            </p>
          </div>

          <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Focus Area
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Focus areas of our Research & Analytics Consulting Services
              </h3>
              <p className="text-white my-2">
                Discover how our expert research & analytics process delivers
                tailored insights, ensuring your projects success from data to
                decision.
              </p>
              <div className="w-full">
                <Image
                  src={ResearchImage}
                  alt="research-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] bg-[#041926] p-4  lg:w-[50%] flex flex-col gap-10">
              <AnimatedItems slides={researchSlides} />
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
                Discover how our personalized approach to service ensures your
                unique needs are met, delivering exceptional results & long-term
                value.
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10">
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
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(217,217,217,1)"
                    >
                      <path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Optimize Performance with Data-Driven Strategies
                  </h4>
                  <p className="text-[#999]">
                    Our research & analytics expertise helps you harness the
                    power of data to optimize performance across your
                    organization, enabling you to Identify areas for improvement
                    & opportunities for growth, Develop data-driven strategies
                    to drive innovation & efficiency
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(208,229,242,1)"
                    >
                      <path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 7V17H13V7H11ZM15 11V17H17V11H15ZM7 13V17H9V13H7Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Measure Production Agility{" "}
                  </h4>
                  <p className="text-[#999]">
                    With unmatched scalability & resilience, this service
                    provides you with insights into your production process &
                    quality level with your production managers. You can improve
                    cost performance & productivity through end- to-end
                    real-time data collection & analytical management.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(217,217,217,1)"
                    >
                      <path d="M2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM2 21V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21H2ZM17.5 11C15.2909 11 13.5 9.20914 13.5 7C13.5 4.79086 15.2909 3 17.5 3C19.7091 3 21.5 4.79086 21.5 7C21.5 9.20914 19.7091 11 17.5 11ZM13 21V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13Z"></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Measure experience with Clients{" "}
                  </h4>
                  <p className="text-[#999]">
                    Collect real-time data about clients satisfaction with your
                    product. This service can improve client connections across
                    any channel by providing clearer, more accurate responses to
                    questions in any language.{" "}
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[45%] flex flex-col lg:flex-row items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(217,217,217,1)"
                    >
                      <path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="w-[100%] lg:w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Employee Satisfaction & Performance Appraisal
                  </h4>
                  <p className="text-[#999]">
                    Engage your employees in decision- making through a quality
                    feedback mechanism. By periodically evaluating an employees
                    work performance & the manager-employee relationship in
                    light of your organisations competence requirements, you may
                    strengthen the operational connection of your organisation.{" "}
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
