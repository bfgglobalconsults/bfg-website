import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/research-analytic.jpg";
import TopBanner from "../../../../public/assets/Research-and-analytics.png";
import MarketingStats from "../../../../public/assets/marketing-stats.jpg";
import EmployeeSatisfy from "../../../../public/assets/employee-satisfy.jpg";
import MeasureBusiness from "../../../../public/assets/measure-business.jpg";
import ProductionStats from "../../../../public/assets/production-stats.jpg";
import ManagingDirector from "../../../../public/assets/festus-bello-md.jpg";
import HeadGrowth from "../../../../public/assets/moses-sunday.jpg";
import ResearchHead from "../../../../public/assets/kenneth.jpg";
import ResearchImage from "../../../../public/assets/research-img.png";

import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";

import Accordion from "@/components/Accordion";

const page = () => {
  return (
    <>
      <div className="mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Research
        </span>
        <div className="flex w-full gap-4 justify-between my-4">
          <h3 className="w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Research and Analytics
          </h3>
          <p className="w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Utilise our Business Research and Analytics to help you make wiser
            business decisions.
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              Advanced data analytics and product research are provided by the
              BFG Business Research and Intelligence team with a workflow that
              is integrated to assist you in making decisions that are quicker,
              more accurate, and more intelligent when using data. Your business
              results may be influenced by our data insights, planning,
              budgeting, forecasting, and knowledgeable BI solutions, regardless
              of your company area—finance, HR, supply chain, marketing, sales,
              or IT. This service combines the expertise of agile information
              professionals, market researchers, and insight managers to deliver
              high-quality standards and regulatory intelligence, market
              insights, industry research, and impact assessment.
            </p>
          </div>

          <div className="w-full flex gap-4 my-8">
            <div className="w-[50%] bg-[#041926] p-10 rounded-lg">
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
            <div className="w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Case Study Analysis
                </h4>
                <p className="my-2 text-[#999]">
                  Bridging the gap between theory & practice, our research &
                  analytics service offers insights that combine real-life
                  scenarios, academic knowledge, & stimulation to deliver
                  actionable insights.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  UX Research & Insights
                </h4>
                <p className="my-2 text-[#999]">
                  Unlock user-centric solutions with our UX research expertise.
                  Get actionable insights to inform design decisions, enhance
                  user engagement, and drive business growth.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Business Intelligence Research{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  Unlock the power of data-driven insights with our business
                  research expertise. We combine rigorous methodologies,
                  industry expertise, & analytical capabilities to deliver
                  actionable findings that inform strategic decisions & drive
                  business success.
                </p>
              </div>{" "}
            </div>
          </div>

          <hr />

          {/* <div>
            <div className="bg-[#f8f5f5] p-8">
              <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Focus areas of our Research and Analytics Consulting Services{" "}
              </h3>
              <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="rgba(1,110,248,1)"
                    >
                      <path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Business Analytics</h4>
                  <p className="text-[#656565]">
                    {" "}
                    Focusing on data, statistical analysis and reporting to help
                    investigate and analyse business operations, provide
                    insights, and drive recommendations to improve performance.
                  </p>
                </div>
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="rgba(1,110,248,1)"
                    >
                      <path d="M11 2.04935V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81462 5.94668 2.55107 11 2.04935ZM13 0.542847C18.5535 1.02121 22.9788 5.4465 23.4571 11H13V0.542847Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Data Science and Analytics</h4>
                  <p className="text-[#656565]">
                    Utilising and putting to use a variety of technologies,
                    architectures, methodologies, tools, and approaches, such as
                    distributed data management, data warehousing and mining,
                    and the right AI and ML techniques.
                  </p>
                </div>
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="rgba(1,110,248,1)"
                    >
                      <path d="M21 9V20.9925C21 21.5511 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H14V8C14 8.55228 14.4477 9 15 9H21ZM21 7H16V2.00318L21 7ZM8 7V9H11V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"></path>
                    </svg>{" "}
                  </span>
                  <h4 className="text-2xl my-2">Text Analytics</h4>
                  <p className="text-[#656565]">
                    Empowering business managers and organisational leaders to
                    provide business value for end users via the use of
                    descriptive, thematic, and reflective contexts.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

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
            <div className="w-full flex gap-10">
              <div className="w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[70%] h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-10 my-6">
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
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
                <div className="w-[80%]">
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
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(208,229,242,1)"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 7V17H13V7H11ZM15 11V17H17V11H15ZM7 13V17H9V13H7Z"></path></svg>
                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
Measure Production Agility                  </h4>
                  <p className="text-[#999]">
                   With unmatched scalability & resilience, this service provides you with insights into your production process & quality level with your production managers. You can improve cost performance & productivity through end- to-end real-time data collection & analytical management.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(217,217,217,1)"><path d="M2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM2 21V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21H2ZM17.5 11C15.2909 11 13.5 9.20914 13.5 7C13.5 4.79086 15.2909 3 17.5 3C19.7091 3 21.5 4.79086 21.5 7C21.5 9.20914 19.7091 11 17.5 11ZM13 21V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13Z"></path></svg>                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
Measure experience with Clients                 </h4>
                  <p className="text-[#999]">
Collect real-time data about clients satisfaction with your product. This service can improve client connections across any channel by providing clearer, more accurate responses to questions in any language.                  </p>
                </div>
              </div>
              {/* fourth item */}
                            <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(217,217,217,1)"><path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"></path></svg>                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
Employee Satisfaction & 
                    Performance Appraisal
                  </h4>
                  <p className="text-[#999]">
Engage your employees in decision- making through a quality feedback mechanism. By periodically evaluating an employees work performance & the manager-employee relationship in light of your organisations competence requirements, you may strengthen the operational connection of your organisation. </p>                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-[#016EF8] text-4xl text-center my-4">
              Service Benefits
            </h3>
            <div>
              <div>
                <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-6">
                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Banner}
                          alt="banner"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Market Feasibility and Planning
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          For business plan drafting, get real-time information
                          about your market. This service offers you the ability
                          to recognise new data architecture and market entry
                          strategies. It makes it easier for your organisation
                          to obtain data for market service while guaranteeing
                          customer-valued goods.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={ProductionStats}
                          alt="production-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Measure production agility
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          With unmatched scalability and resilience, this
                          service provides you with insights into your
                          production process and quality level with your
                          production managers. You can improve cost performance
                          and productivity through end- to-end real-time data
                          collection and analytical management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={MarketingStats}
                          alt="marketing-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Measure Customer Needs and Satisfaction (CNSAT)
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Have real-time knowledge about your customers needs
                          and understand if you are meeting them. Our research
                          and analytics service are used to forecast, manage,
                          and get insight into customer needs and satisfaction
                          levels. This will help you manage your future service
                          process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={MeasureBusiness}
                          alt="measure-business"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Measure experience with customers
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Collect real-time data about customer satisfaction
                          with your product. This service can improve client
                          connections across any channel by providing clearer,
                          more accurate responses to questions in any language.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={EmployeeSatisfy}
                          alt="employee-satisfy"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Employee Satisfaction and Performance Appraisal{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Engage your employees in decision- making through a
                          quality feedback mechanism. By periodically evaluating
                          an employees work performance and the manager-employee
                          relationship in light of your organisations competence
                          requirements, you may strengthen the operational
                          connection of your organisation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="py-8">
            <h3 className="text-[#016EF8] text-4xl my-4 text-center">
              Connect With Us: Uncover Insights, Drive Decisions
            </h3>
            <p className="text-xl font-semibold my-2 text-center">
              Explore Our Research and Analytics Expertise
            </p>
            <p className="text-2xl text-[#016EF8] text-center my-2 font-semibold">
              Get in touch
            </p>

            <div className="w-full flex gap-4 flex-wrap justify-center">
              {/* <div className="w-[30%] border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                <Image
                src={ManagingDirector}
                alt="managing-director"
                className="w-full h-full object-fit rounded-full"
                />
                </div>
                <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Festus Bello</h3>
                <p className="text-xl text-gray-500">Managing Director / CEO</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">festus.bello@bfgconsults.com</span></div>
                </div>
              </div> */}

              <div className="border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={HeadGrowth}
                    alt="head-growth"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">Moses S. Ijeo</h3>
                  <p className="text-xl text-gray-500">
                    Head of Growth and Consulting
                  </p>
                  <div className="flex gap-2 justify-center my-2">
                    {" "}
                    <a
                      href="mailto:sunday.moses@bfgconsults.com"
                      title="sunday.moses@bfgconsults.com"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sunday-moses-10b49314a/"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={ResearchHead}
                    alt="research-head"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">
                    Kenneth Idanwekhai
                  </h3>
                  <p className="text-xl text-gray-500">
                    Associate, Research, Data and Analytics
                  </p>
                  <div className="flex gap-2 justify-center my-2">
                    <a
                      href="mailto:kenneth.idanwekhai@bfgconsults.com"
                      title="kenneth.idanwekhai@bfgconsults.com"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kenneth-idanwekhai/"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container mx-auto py-8">
            <h1 className="text-lg font-bold mb-4">Service Benefits</h1>
            <Accordion title="Market Feasibility and Planning">
              <p>
                For business plan drafting, get real-time information about your
                market. This service offers you the ability to recognise new
                data architecture and market entry strategies. It makes it
                easier for your organisation to obtain data for market service
                while guaranteeing customer-valued goods. This service enables
                you Product Concept Testing: to understand the properties,
                characteristics, and performance of products before, during, and
                after launch by capturing real-real time feedback on your
                product. This makes it possible for a producer to use a UI/UX
                process to evaluate a products functionality, safety, quality,
                and adherence to specified standards.
              </p>
            </Accordion>
            <Accordion title="Measure production agility">
              <p>
                With unmatched scalability and resilience, this service provides
                you with insights into your production process and quality level
                with your production managers. You can improve cost performance
                and productivity through end- to-end real-time data collection
                and analytical management.
              </p>
            </Accordion>
            <Accordion title="Measure Customer Needs and Satisfaction (CNSAT)">
              <p>
                Have real-time knowledge about your customers needs and
                understand if you are meeting them. Our research and analytics
                service are used to forecast, manage, and get insight into
                customer needs and satisfaction levels. This will help you
                manage your future service process.
              </p>
            </Accordion>
            <Accordion title="Measure experience with customers">
              <p>
                Collect real-time data about customer satisfaction with your
                product. This service can improve client connections across any
                channel by providing clearer, more accurate responses to
                questions in any language.
              </p>
            </Accordion>
            <Accordion title="Employee Satisfaction and Performance Appraisal">
              <p>
                {" "}
                Engage your employees in decision- making through a quality
                feedback mechanism. By periodically evaluating an employees work
                performance and the manager-employee relationship in light of
                your organisations competence requirements, you may strengthen
                the operational connection of your organisation.
              </p>
            </Accordion>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
