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

import Accordion from "@/components/Accordion";

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
            Research and Analytics
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Utilise our Business Research and Analytics to help you make wiser
            business decisions.
          </p>
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

          <div>
            <div className="bg-[#f8f5f5] p-8">
            <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
              Focus areas of our Research and Analytics Consulting Services              </h3>
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
          </div>

          <div>
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
                          Collect real-time data about customer satisfaction with your
                product. This service can improve client connections across any
                channel by providing clearer, more accurate responses to
                questions in any language.
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
                        Employee Satisfaction and Performance Appraisal                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Engage your employees in decision- making through a quality
                feedback mechanism. By periodically evaluating an employees work
                performance and the manager-employee relationship in light of
                your organisations competence requirements, you may strengthen
                the operational connection of your organisation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>

          <div className="py-8">
            <h3 className="text-[#016EF8] text-4xl my-4 text-center">Connect With Us: Uncover Insights, Drive Decisions</h3>
            <p className="text-xl font-semibold my-2 text-center">Explore Our Research and Analytics Expertise</p>

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
                <h3 className="text-xl font-semibold my-2">Sunday Moses</h3>
                <p className="text-xl text-gray-500">Head of Growth and Development</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">sunday.moses@bfgconsults.com</span></div>
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
                <h3 className="text-xl font-semibold my-2">Kenneth Idanwekhai</h3>
                <p className="text-xl text-gray-500">Associate, Research, Data and Analytics</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">sunday.moses@bfgconsults.com</span></div>
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
