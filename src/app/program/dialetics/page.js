"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/dialetics.png";
import DialeticGroup from "../../../../public/assets/dialetics-card.jpg";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className=""
        >
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Dialetics
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <motion.h3 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1 }}
              className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
            >
              Dialetics
            </motion.h3>
            <motion.p 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 1 }}
              className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl"
            >
              Fostering Intellectual Discourse and Innovation
            </motion.p>
          </div>
        </motion.div>

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
                Dialectics is an innovative discussion forum hosted by BFG Consults, designed to foster intellectual discourse and drive innovation through structured debate and dialogue. This program brings together thought leaders, industry experts, and forward-thinking professionals to explore complex business challenges and emerging trends in technology and management consulting.
              </p>
              <p className="text-[#999] my-4">
                Through carefully curated sessions, participants engage in meaningful discussions that challenge conventional thinking and encourage the exploration of new ideas. Our format combines elements of traditional debate with modern problem-solving methodologies, creating a unique environment where diverse perspectives converge to generate innovative solutions.
              </p>
              <p className="text-[#999] my-4">
                Each Dialectics session focuses on a specific theme or challenge facing the business world today. Topics range from digital transformation and artificial intelligence to sustainable business practices and the future of work. By bringing together experts from various fields, we create a rich dialogue that bridges theory and practice.
              </p>
              <p className="text-[#999] my-4">
                The program emphasizes active participation and intellectual rigor. Attendees are encouraged to question assumptions, present counterarguments, and work collaboratively to synthesize new insights. This approach not only enhances understanding but also develops critical thinking and communication skills essential for modern business leaders.
              </p>
              <p className="text-[#999] my-4">
                Beyond the discussions themselves, Dialectics serves as a platform for building meaningful professional relationships. Participants connect with peers who share their commitment to intellectual growth and innovation, creating a network of forward-thinking professionals who continue to collaborate and exchange ideas long after each session concludes.
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
                src={DialeticGroup}
                alt="dialetics-image"
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
            <p className="font-bold text-lg my-4">
              Program Benefits
            </p>
            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                Engage in high-level intellectual discourse with industry leaders and experts
              </li>
              <li className="text-[#999] my-2">
                Develop critical thinking and analytical skills through structured debate
              </li>
              <li className="text-[#999] my-2">
                Gain fresh perspectives on complex business challenges
              </li>
              <li className="text-[#999] my-2">
                Build a network of forward-thinking professionals
              </li>
              <li className="text-[#999] my-2">
                Access cutting-edge insights on emerging trends and technologies
              </li>
            </ul>

            <p className="font-semibold my-4">
              Join our next Dialectics session and be part of a community dedicated to pushing the boundaries of conventional thinking and driving innovation through intellectual discourse.
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
        program="Dialetics"
      />
    </motion.div>
  );
};

export default Page; 