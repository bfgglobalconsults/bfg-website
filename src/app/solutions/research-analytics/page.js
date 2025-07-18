"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/research-analytic.jpg";
import TopBanner from "../../../../public/assets/research-banner.jpg";
import { motion, useInView } from "framer-motion";

import ResearchImage from "../../../../public/assets/business-teacher.png";
import Simon from "../../../../public/assets/simon-adeh.png";
import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";

import Accordion from "@/components/Accordion";
import ResearchPortfolio from "../../../../public/assets/research-portfolio.jpg";
import Kenneth from "../../../../public/assets/kenneth.png";
import Avatar from "../../../../public/assets/new-avatar.png";
import Optimize from "../../../../public/assets/optimize-image.png";
import MeasureImg from "../../../../public/assets/measure-image.jpg";
import ExperienceImg from "../../../../public/assets/experience-image.jpg";
import PredictiveImg from "../../../../public/assets/predictive-image.jpg";
import ImpactImg from "../../../../public/assets/impact-image.jpg";
import AppraisalImg from "../../../../public/assets/appraisal-images.png";
import AnimatedItems from "@/components/information-technology/AnimatedItems";
import Link from "next/link";

const Page = () => {
  const benefitsRef = useRef(null);
  const isInView = useInView(benefitsRef, { once: true, amount: 0.2 });

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
        "Unlock the power of data-driven insights with our business research expertise. We combine rigorous methodologies, industry expertise, & analytical capabilities to deliver actionable findings that inform strategic decisions & drive business success.",
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
        "Put your products to the test with our rigorous testing services. We simulate real-world scenarios, identify areas for improvement, & ensure your products meet the highest standards of quality, reliability, & performance.",
    },
    {
      title: "Consumer Needs & Assessment",
      content:
        "Stay ahead of the curve with real-time insights into client needs and satisfaction. Our comprehensive research and analytics services empower businesses to predict trends, manage expectations, and  exceed customer demands.",
    },
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
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
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
        </div>
        <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg"
          >
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
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="w-[100%] bg-[#041926] p-4 lg:w-[50%] flex flex-col gap-10"
          >
            <AnimatedItems slides={researchSlides} />
          </motion.div>
        </div>

        <hr />
        <div className="p-[40px]">
          <div ref={benefitsRef} className="my-[80px]">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <motion.h3
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                className="text-[#333] text-3xl my-8 font-semibold"
              >
                Service Benefits
              </motion.h3>
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
            </div> */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-4 my-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={Optimize}
                    alt="optimize-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
              {/* second item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={MeasureImg}
                    alt="measure-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
              {/* third item */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={ExperienceImg}
                    alt="exp-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
              {/* fourth item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={AppraisalImg}
                    alt="appraisal-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
              {/* fifth item */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={PredictiveImg}
                    alt="predective-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
              {/* sixth item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={ImpactImg}
                    alt="impact-img"
                    className="w-full h-full object-cover rounded-lg"
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
              </motion.div>
            </div>
          </div>
          {/* portfolio */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-[100px]"
          >
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  src={ResearchPortfolio}
                  alt="research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                  Portfolio
                </span>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Empowering Progress Through Impactful Solutions
                </h3>
                <p className="text-[#999] text-xl my-2">
                  Discover how BFG Global Consult transforms strategies into
                  impactful outcomes across diverse industries. We showcase
                  unique projects that reflect our commitment to excellence,
                  innovation, and results-driven solutions.
                </p>
                                <Link href="/insight/case-study/research">
                
                  <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                    <span className="text-white text-md font-semibold">
                      View Our Portfolio
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
          {/* service team */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="my-[80px]"
          >
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Service Team
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Meet Our Research & Analytics Team{" "}
              </h3>
              <p className="text-[#999] text-xl my-2">
                Discover the experts behind our solutions. Our dedicated team
                brings a wealth of experience and a passion for driving success,
                ensuring we meet our clients unique challenges with precision
                and insight.
              </p>
            </div>
            {/* team pictures */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col mb-10">
                <div className="w-[250px] h-[250px] my-8 aspect-square bg-[#B0D4EA]">
                  <Image
                    src={Kenneth}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">
                      Kenneth Idanwekhai
                    </h3>
                    <p className="text-[#E45F11]">
                      Senior Research and Data Analyst
                    </p>
                    <Link href="/team/senior-research">
                      <button className="text-[#999] text-cursor text-md underline hover:text-black">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square my-8 bg-[#B0D4EA]">
                  <Image
                    src={Simon}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">Simon Adeh</h3>
                    <p className="text-[#E45F11]">
                      Research and Data Analyst
                    </p>
                    <Link href="/team/data-analyst">
                      <button className="text-[#999] text-cursor text-md underline hover:text-black">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-[100%] lg:w-[60%] flex justify-center pt-14 my-14 mx-auto"
          >
            <div>
              <p className="text-center text-2xl">
                Connect, collaborate, and drive innovation on your data insights
                project—anytime, anywhere—with our Research & Analytics
                Solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#E26015] hover:bg-black my-4 text-white text-md lg:text-lg py-2 px-4 rounded-lg">
                    Contact our Service Team
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Page;
