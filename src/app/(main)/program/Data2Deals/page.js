"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/data-deal-img.jpg";
import DataDeal from "../../../../public/assets/Data2Deals.jpg";
import Beauty from "../../../../public/assets/sme-woman.png";
import Slides from "@/components/Slides";
import ProgramModal from "@/components/ProgramModal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Data2Deals
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Data2Deals
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
          Drive Growth with Data-Driven Insights, Now
          </p>
        </div>

        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={TopBanner}
              alt="top-banner"
              className="w-full h-full object-fit rounded-xl"
            />
          </div>
        </div>

        <div className="py-[1px] lg:py-[10px]">
          <div className="p-2 lg:p-[40px]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 1 }}
              className="my-4"
            >
              <Slides />
            </motion.div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-4">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.7, duration: 1 }}
              className="w-[100%] lg:w-[60%]"
            >
              <p className="text-[#999] my-4">
                In today&apos;s data-driven economy, the ability to transform
                raw information into actionable business intelligence is what
                separates thriving businesses from those struggling to survive.
                Data2Deals, developed by BFG Consults, is a practical,
                insight-powered training and execution program designed to help
                startups and SMEs in Nigeria bridge the gap between data
                collection and business growth.
              </p>
              <p className="text-[#999] my-4">
                Data2Deals equips entrepreneurs, marketing teams, and
                operational leads with the tools and strategies needed to
                leverage data for business development, sales optimization, and
                strategic decision-making. Through a blend of workshops,
                practical case studies, expert-led sessions, and real-time
                analytics practice, participants will learn how to harness data
                to drive tangible business deals.
              </p>
              <p className="font-bold text-lg my-4">Program Objectives</p>
            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                Equip participants with the fundamentals of data literacy and
                interpretation
              </li>
              <li className="text-[#999] my-2">
                Provide practical tools for converting customer, sales, and
                market data into revenue strategies
              </li>
              <li className="text-[#999] my-2">
                Empower SMEs to build data-driven customer acquisition and
                retention models
              </li>
              <li className="text-[#999] my-2">
                Bridge the gap between technical data analytics and real-world
                sales outcomes.
              </li>
            </ul>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              onClick={handleOpenModal}
              className="w-[100%] lg:w-[40%] relative cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <Image
                src={DataDeal}
                alt="data-image"
                className="w-full h-full object-fit rounded-r-md"
              />
              {/* <div className="w-full h-[400px] shadow-lg rounded-xl relative">
                <div className="bg-[#E260</p>15] py-10 px-3 rounded-xl">
                  <div className="w-[60%]">
                    <h4 className="text-white font-semibold text-3xl lg:text-3xl">
                      Shaping Nigeria&apos;s Business Future
                    </h4>
                    <p className="text-white text-sm my-4 pr-4">
                      Aren&apos;t you ready to empower your business with
                      knowledge
                    </p>
                  </div>
                </div>
                <div className="bg-white py-4 px-3">
                  <div className="w-[60%]">
                    <ul className="text-[#333] list-disc marker:text-[#E26015] pl-4">
                      <li>Various Insights, Strategies and Growth.</li>
                      <li>Join Our SME Webinar Series Today!</li>
                    </ul>
                    <button className="bg-[#E26015] hover:bg-black my-4 text-white rounded-2xl py-2 px-4">
                      Join Now!
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-[45%] h-full">
                  <Image
                    src={Beauty}
                    alt="beauty-image"
                    className="w-full h-full object-cover rounded-r-md"
                  />
                </div>
              </div> */}
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 1 }}
            className=""
          >
           

            <p className="font-bold text-lg my-4">What You Will Learn</p>
            <p className="text-lg my-4">
              Over the course of the program, participants will gain mastery in:
            </p>
            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                Foundations of Business Data: Understanding types of data and
                why they matter for SMEs
              </li>
              <li className="text-[#999] my-2">
                Tools of the Trade: Introduction to Excel, Google Data Studio,
                Power BI, and simple CRM dashboards
              </li>
              <li className="text-[#999] my-2">
                From Numbers to Narrative: Telling compelling business stories
                with data
              </li>
              <li className="text-[#999] my-2">
                Customer Intelligence: Using behavioral data to target and close
                more deals
              </li>
              <li className="text-[#999] my-2">
                Predictive Insights: Forecasting trends and making smarter
                decisions
              </li>
              <li className="text-[#999] my-2">
                Data-Backed Pitches: Designing proposals that convert with
                evidence and insights
              </li>
            </ul>

            <p className="font-bold text-lg my-4">Who Should Attend</p>
            <p className="text-lg my-4">This program is ideal for:</p>
            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                Startup founders and SME owners seeking growth through smarter
                decision-making
              </li>
              <li className="text-[#999] my-2">
                Sales and business development professionals who want to boost
                results
              </li>
              <li className="text-[#999] my-2">
                Marketing and customer success teams looking to sharpen their
                data edge
              </li>
              <li className="text-[#999] my-2">
                Non-technical business leaders who want to understand and use
                data better
              </li>
            </ul>
            <p className="font-bold text-lg my-4">Delivery Format</p>

            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                3-week blended program: Live workshops, guided hands-on
                sessions, and real-time analytics exercises
              </li>
              <li className="text-[#999] my-2">
                Interactive dashboards and mini-projects tied to your actual
                business data (or sample cases)
              </li>
              <li className="text-[#999] my-2">
                Access to one-on-one mentoring from our data strategy and
                business development experts
              </li>
              <li className="text-[#999] my-2">
                End-of-program showcase: “From Data to Deal”—participants
                present a pitch backed by real business data
              </li>
                      </ul>
                      <p className="font-bold text-lg my-4">Outcome and Certification</p>
                      <p className="text-lg my-4">Upon completion, participants will:</p>
                      <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
              Gain a Data2Deals Certificate of Proficiency
              </li>
              <li className="text-[#999] my-2">
              Leave with a personalized Data2Deals Playbook for their business
              </li>
              <li className="text-[#999] my-2">
              Join the BFG Data-Driven Business Network for ongoing mentorship and collaboration
              </li>
              <li className="text-[#999] my-2">
              Be better positioned to close more deals using insight-driven strategies
              </li>
             
              
            </ul>

            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl hover:bg-[#E26015] transition-colors duration-300"
            >
              <span className="text-white">Apply now for the next cohort of Data2Deals. Let your data speak for your business</span>
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
            </motion.button>
          </motion.div>
        </div>
      </div>

      <ProgramModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        program="Data2Deals"
      />
    </>
  );
};

export default Page;
