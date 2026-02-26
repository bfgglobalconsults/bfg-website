"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/leadership-summit.png";
import LeaderGroup from "../../../../public/assets/leadership-card.jpg";
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
            Leadership Summit
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 
              className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
            >
              Emerging Marketplace Leadership Summit
            </h3>
            <p 
              className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl"
            >
              Shaping the Future of Nigeria&apos;s Business Ecosystem
            </p>
          </div>
    

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="px-1 py-12"
        >
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={TopBanner}
              alt="top-banner"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

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
                              The Emerging Marketplace Leadership Summit, an annual event organized by BFG Consults, serves as a vital platform for dialogue among key stakeholders in Nigeria&apos;s marketplace. This summit brings together government officials, innovation leaders from the private sector, and representatives from civil society organizations to discuss pressing issues affecting various sectors and to propose actionable solutions.
                          </p>
              <p className="text-[#999] my-4">
                
                              In a rapidly changing economic landscape, collaboration is essential. The summit provides an opportunity for participants to share their insights, challenges, and success stories, fostering an environment of collective problem-solving. Each year, we curate a diverse agenda that addresses the most pertinent issues facing the Nigerian marketplace, including economic growth, regulatory frameworks, technological innovation, and sustainable development.
                          </p>
              <p className="text-[#999] my-4">
               Our speakers include thought leaders and experts who are at the forefront of their fields, ensuring that discussions are informed by the latest research and real-world experiences. Participants will engage in panel discussions, workshops, and networking sessions designed to facilitate collaboration and inspire innovative thinking. 
              </p>
              <p className="text-[#999] my-4">
              The Emerging Marketplace Leadership Summit is more than just a conference; it is a catalyst for change. By bringing together a wide array of stakeholders, we aim to create a shared vision for the future of Nigeria&apos;s marketplace.
            </p>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              onClick={handleOpenModal} 
              className="w-[100%] lg:w-[40%] relative cursor-pointer hover:scale-[1.02] transition-transform"
            >
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
            </motion.div>
          </div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 1 }}
            className=""
          >
           
            <p className="text-[#999] my-4">
              Whether you are looking to improve your organization&apos;s performance, enhance your leadership skills, or simply stay informed about the latest trends in the marketplace, the Emerging Marketplace Leadership Summit is an event you cannot afford to miss. 
            </p>
             <p className="font-semibold my-4">
           Join us at the next Emerging Marketplace Leadership Summit and be part of a movement dedicated to transforming Nigeria&apos;s marketplace for the better. Together, we can shape a future that is innovative, inclusive, and sustainable.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl hover:bg-[#E26015] transition-colors duration-300"
            >
              <span className="text-white">Apply for our next session</span>
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
        program="EML Summit"
      />
    </>
  );
};

export default Page;
