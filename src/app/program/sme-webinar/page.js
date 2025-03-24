"use client"
import Image from "next/image";
import React, { useState } from "react";
import TopBanner from "../../../../public/assets/sme-webinar.png";
import SmeGroup from "../../../../public/assets/sme-card.jpg";
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
        <div className="">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            SME Series
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              SME Webinar Series
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
              Connecting SMEs with Knowledge and Opportunities
            </p>
          </div>
        </div>
        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={TopBanner}
              alt="top-banner"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="py-[1px] lg:py-[10px]">
          <div className="p-2 lg:p-[40px]">
            <div className="my-4">
              <Slides />
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-4">
            <div className="w-[100%] lg:w-[60%]">
              <p className="text-[#999] my-4">
                The SME Webinar Series, hosted by BFG Consults, is a dynamic
                platform designed specifically for Startups and Small and Medium
                Enterprises (SMEs) in Nigeria, regardless of their size or
                sector.
              </p>
              <p className="text-[#999] my-4">
                Every last week of the month, we gather a diverse group of
                stakeholders entrepreneurs, industry experts, and thought
                leaders to engage in meaningful conversations about current
                trends in technology and business, as well as practical
                adaptability measures for success.
              </p>
              <p className="text-[#999] my-4">
                In an ever-evolving marketplace, understanding technological
                advancements and their implications is crucial for any business
                aiming to thrive. Our webinars feature resource persons from
                various backgrounds, bringing a wealth of knowledge and
                experience to each session. Participants can expect to delve
                into topics such as digital transformation, leveraging data
                analytics, enhancing customer experience through technology, and
                navigating regulatory landscapes.
              </p>
              <p className="text-[#999] my-4">
                Each session is structured to encourage interaction and
                dialogue. Attendees can pose questions, share their experiences,
                and learn from one another, fostering a community of innovation
                and collaboration. The insights gained from these discussions
                are invaluable for stakeholders looking to enhance their
                business strategies and adapt to the rapidly changing
                environment.
              </p>
               <p className="text-[#999] my-4">
              The SME Webinar Series also serves as a vital networking
              opportunity, connecting participants with like-minded individuals
              who share a passion for entrepreneurship and growth. By fostering
              connections among SMEs, we aim to create a supportive ecosystem
              that drives collaboration and innovation.
            </p>
            </div>
            <div onClick={handleOpenModal} className="w-[100%] lg:w-[40%] relative">
               <Image
                    src={SmeGroup}
                    alt="beauty-image"
                    className="w-full h-full object-fit rounded-r-md"
                  />
              {/* <div className="w-full h-[400px] shadow-lg rounded-xl relative">
                <div className="bg-[#E26015] py-10 px-3 rounded-xl">
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
            </div>
          </div>
          <div className="">
           
            <p className="text-[#999] my-4">
              Whether you are a seasoned entrepreneur or just starting, this
              program offers the insights and connections you need to succeed in
              the competitive Nigerian marketplace.
            </p>
             <p className="font-semibold my-4">
              Apply for our next session and be part of the conversation that shapes the future of business in Nigeria.
            </p>
            <button onClick={handleOpenModal} className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl">
              <span className="text-white">Apply for our next session</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></span>
            </button>
          </div>
        </div>
      </div>
       <ProgramModal 
              isOpen={isModalOpen} 
              onClose={handleCloseModal}
              program="SME Webinar Series"
            />
    </>
  );
};

export default Page;
