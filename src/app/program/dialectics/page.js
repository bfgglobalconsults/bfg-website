"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/dialectics.png";
import DialetGroup from "../../../../public/assets/dialet-card.jpg";
import Beauty from "../../../../public/assets/sme-woman.png";
import Slides from "@/components/Slides";
import Link from "next/link";
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
            The Dialectics
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 
              className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
            >
              The Dialectics
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl"
            >
              Conversations That Shape the Future
            </p>
          </div>
    

        <div 
          className="px-1 py-12"
        >
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
              The Dialectics is an engaging podcast initiative created by the BFG Consults Team to foster dynamic conversations around the intersection of technology and business.               </p>
              <p className="text-[#999] my-4">
                
                Every week, we explore the trends that are shaping the marketplace, focusing on adaptability measures that stakeholders can implement to thrive in an ever-evolving landscape.
              </p>
              <p className="text-[#999] my-4">
              Designed for African innovators, The Dialectics aims to provide a platform where diverse voices can share insights, experiences, and strategies on pressing issues that affect various sectors. Our episodes feature a variety of resource persons from industry experts and successful entrepreneurs to thought leaders who bring unique perspectives to the table. 
              </p>
              <p className="text-[#999] my-4">
             Listeners can expect a rich tapestry of discussions covering topics such as digital transformation, the impact of emerging technologies, innovation strategies, and best practices for navigating challenges in today&apos;s business environment. Each episode is carefully crafted to ensure that it is informative, engaging, and relevant to the African context.
              </p>
               <p className="text-[#999] my-4">
                One of the unique aspects of The Dialectics is its predesigned format, which allows for easy access to resources. Each episode is uploaded weekly on BFG&apos;s YouTube channel, making it convenient for listeners to engage with the content at their own pace. This accessibility empowers individuals and organizations to stay informed and inspired, encouraging them to take action in their own endeavors.
              </p>
             <p className="text-[#999] my-4">
                As we delve into the complexities of technology and business, The Dialectics not only seeks to inform but also to stimulate dialogue among stakeholders.  Whether you are an entrepreneur, a corporate leader, or simply someone passionate about technology and business, The Dialectics offers valuable insights that can help you navigate the challenges and opportunities of today&apos;s marketplace.
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
                src={DialetGroup}
                alt="dialet-image"
                className="w-full h-full object-fit rounded-r-md"
              />
            </motion.div>
          </div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 1 }}
            className=""
          >
            <p className="font-semibold my-4">
              Join us for our next episode and become part of the conversation that is shaping the future of business in Africa.
            </p>
            
            <Link href="https://www.youtube.com/@BFGConsults" target="_blank">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl hover:bg-[#E26015] transition-colors duration-300"
              >
                <span className="text-white">Subscribe to our YouTube Channel</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <ProgramModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        program="The Dialetics"
      />
    </>
  );
};

export default Page;
