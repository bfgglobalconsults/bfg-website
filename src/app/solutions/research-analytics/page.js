import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/research-analytic.jpg";
import Accordion from "@/components/Accordion";

const page = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="p-[40px]">
        <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
              Research and Analytics
            </span>
          </h3>
          <div className="w-full flex flex-wrap items-center gap-2">
            <div className="w-[100%] lg:w-[50%]">
              <p className="text-lg text-[#656565] my-3">
                Advanced data analytics and product research are provided by the
                BFG Business Research and Intelligence team with a workflow that
                is integrated to assist you in making decisions that are
                quicker, more accurate, and more intelligent when using data.
                Your business results may be influenced by our data insights,
                planning, budgeting, forecasting, and knowledgeable BI
                solutions, regardless of your company area—finance, HR, supply
                chain, marketing, sales, or IT. This service combines the
                expertise of agile information professionals, market
                researchers, and insight managers to deliver high-quality
                standards and regulatory intelligence, market insights, industry
                research, and impact assessment.
              </p>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <div className="w-full h-[400px] my-3">
                <Image
                  src={Banner}
                  alt="research-banner"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>

          <div>
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#5d9df0] p-2 text-white rounded-xl">
              Analytic Tools and Solutions
            </span>
          </h3>
            <div className="">
              <div className="relative w-[100%] lg:w-[80%] h-[100%] bg-white shadow-lg border-b-2 border-[#016EF8] p-8 mx-auto ">
                <div className="text-black">
                <ul className="list-disc">

                  <li className="my-2">
                    <span className="font-bold">Business Analytics:</span>{" "}
                    Focusing on data, statistical analysis and reporting to help
                    investigate and analyse business operations, provide
                    insights, and drive recommendations to improve performance.
                  </li>
                  <li className="my-2">
                    <span className="font-bold">
                      Data Science and Analytics:
                    </span>{" "}
                    Utilising and putting to use a variety of technologies,
                    architectures, methodologies, tools, and approaches, such as
                    distributed data management, data warehousing and mining,
                    and the right AI and ML techniques.
                  </li>

                  <li className="my-2">
                    <span className="font-bold">Text Analytics:</span>{" "}
                    Empowering business managers and organisational leaders to
                    provide business value for end users via the use of
                    descriptive, thematic, and reflective contexts.
                  </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto py-8">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
