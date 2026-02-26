"use client";
import React from "react";
import Image from "next/image";
import TopBanner from "../../../../../public/assets/research-banner.jpg";
import Project1 from "../../../../../public/assets/zenkleus-research.jpg";
import Project2 from "../../../../../public/assets/business-meeting.jpg";
import Project4 from "../../../../../public/assets/research-cover-img.jpg";
import Project5 from "../../../../../public/assets/gigs-travel-research.jpg";
import Project6 from "../../../../../public/assets/last-research.jpg";
import Optimize from "../../../../../public/assets/optimize-image.png";
import MeasureImg from "../../../../../public/assets/measure-image.png";
import ExperienceImg from "../../../../../public/assets/experience-image.png";
import PredictiveImg from "../../../../../public/assets/predective-image.png";
import ImpactImg from "../../../../../public/assets/impact-image.png";
import AppraisalImg from "../../../../../public/assets/appraisal-image.png";
import Link from "next/link";
import AllComponents from "@/components/dashboard/research/filters/AllComponents";
import MainDashboard from "@/components/dashboard/research/MainDashboard";
import CustomerReview from "@/components/customer-review/CustomerReview";
import CaseStudiesList from "@/components/CaseStudiesList";

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
      content:
        "Ensure your projects deliver meaningful results with our monitoring & evaluation expertise. We help you set clear goals, track progress, & make data-driven decisions to maximize impact & achieve success.",
    },
    {
      title: "Product Testing",
      content:
        "Put your products to the test with our rigorous testing services. We simulate real-world scenarios, identify areas for improvement, & ensure your products meet the highest st&ards of quality, reliability, & performance.",
    },
    {
      title: "Consumer Needs & Assessment",
      content:
        "Stay ahead of the curve with real-time insights into clients needs & satisfaction. Our research & analytics services help you predict, manage, & delight - shaping your services for future success.",
    },
  ];
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Portfolio Metrics
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Research and Analytics
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Highlights of our key performance indicators for project execution,
            research, analytical system dependability, and industries that
            guarantee value delivery, strategic alignment, through informed
            decision-making.
          </p>
        </div>
      </div>
      <div className="px-6 lg:px-12">
        <MainDashboard />
        
      </div>
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
              Data-driven insights empower businesses to make informed
              decisions. Through in-depth market research, consumer behavior
              analysis, and competitive intelligence, we provide actionable
              recommendations that drive growth. Explore our case studies to see
              how our research and analytics have helped businesses identify
              opportunities, mitigate risks, and stay ahead in competitive
              markets.
            </p>
          </div>

          <CaseStudiesList unit="research" />
          <CustomerReview unit="Research and Analytics" />

          {/* <hr />

          <div className="my-[80px]">
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
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-6">
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Optimize}
                    alt="optimize-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%] ">
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
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={MeasureImg}
                    alt="measure-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
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
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={ExperienceImg}
                    alt="exp-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
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
              <div className="w-[100%] lg:w-[30%] flex flex-col l items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={AppraisalImg}
                    alt="appraisal-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
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
              <div className="w-[100%] lg:w-[30%] flex flex-col l items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={PredictiveImg}
                    alt="predective-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Unlock Growth with Predictive Analytics
                  </h4>
                  <p className="text-[#999]">
                    Leverage advanced predictive models to forecast trends,
                    customer behavior, and market opportunities, enabling
                    proactive business strategies.{" "}
                  </p>{" "}
                </div>
              </div>
              <div className="w-[100%] lg:w-[30%] flex flex-col l items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={ImpactImg}
                    alt="impact-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Drive Business Impact Through Competitive Intelligence
                  </h4>
                  <p className="text-[#999]">
                    Gain a strategic edge with in-depth competitor analysis,
                    market positioning insights, and benchmarking to refine
                    business goals and strategies.
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
