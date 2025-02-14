import Image from "next/image";
import React from "react";
import TopBanner from "../../../../public/assets/leadership-summit.png";
import LeaderGroup from "../../../../public/assets/leadership-card.png";
import Beauty from "../../../../public/assets/sme-woman.png";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <div className="">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Leadership Summit
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
              Emerging Marketplace Leadership Summit
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
             Shaping the Future of Nigeria’s Business Ecosystem
            </p>
          </div>
        </div>
        <div className="px-1 lg:px-12 py-12">
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
                              The Emerging Marketplace Leadership Summit, an annual event organized by BFG Consults, serves as a vital platform for dialogue among key stakeholders in Nigeria’s marketplace. This summit brings together government officials, innovation leaders from the private sector, and representatives from civil society organizations to discuss pressing issues affecting various sectors and to propose actionable solutions.
                          </p>
              <p className="text-[#999] my-4">
                
                              In a rapidly changing economic landscape, collaboration is essential. The summit provides an opportunity for participants to share their insights, challenges, and success stories, fostering an environment of collective problem-solving. Each year, we curate a diverse agenda that addresses the most pertinent issues facing the Nigerian marketplace, including economic growth, regulatory frameworks, technological innovation, and sustainable development.
                          </p>
              <p className="text-[#999] my-4">
               Our speakers include thought leaders and experts who are at the forefront of their fields, ensuring that discussions are informed by the latest research and real-world experiences. Participants will engage in panel discussions, workshops, and networking sessions designed to facilitate collaboration and inspire innovative thinking. 
              </p>
             
            </div>
            <div className="w-[100%] lg:w-[40%] relative">
               <Image
                    src={LeaderGroup}
                    alt="leader-image"
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
              The Emerging Marketplace Leadership Summit is more than just a conference; it is a catalyst for change. By bringing together a wide array of stakeholders, we aim to create a shared vision for the future of Nigeria’s marketplace.
            </p>
            <p className="text-[#999] my-4">
              Whether you are looking to improve your organization’s AI capabilities or seeking to elevate your career prospects, the AI Advantage program offers the resources and knowledge needed to succeed.
            </p>
             <p className="font-semibold my-4">
           Join us at the next Emerging Marketplace Leadership Summit and be part of a movement dedicated to transforming Nigeria’s marketplace for the better. Together, we can shape a future that is innovative, inclusive, and sustainable.
            </p>
            <button className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl">
              <span className="text-white">Apply for our next session</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
