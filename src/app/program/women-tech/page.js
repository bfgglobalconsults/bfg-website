"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/women-tech.png";
import WomenGroup from "../../../../public/assets/women-card.jpg";
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
          Women in Tech
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Women in Tech
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Bridging the Gender Gap in the Digital Economy
          </p>
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
                The Women in Tech program, developed by BFG Consults, is a
                transformative workshop aimed at closing the gender gap in
                technology skills optimization in Nigeria. Recognizing the
                critical need for increased female representation in tech, this
                initiative offers a three-month intensive training course
                designed to equip women with both coding and non-coding skills
                essential for thriving in today&apos;s digital economy.
              </p>
              <p className="text-[#999] my-4">
                This program is a call to action for women across Nigeria,
                providing them with the tools, resources, and support they need
                to gain confidence and authority in their careers. Participants
                engage in hands-on workshops that cover a range of topics, from
                basic programming and web development to project management and
                digital marketing strategies. This diverse curriculum ensures
                that women of all backgrounds can find a path that resonates
                with their interests and career goals.
              </p>
              <p className="text-[#999] my-4">
                BFG Global Consults, we are committed to delivering high-quality
                training that not only enhances participants technical skills
                but also fosters leadership and professional growth. Our expert
                facilitators bring a wealth of experience and knowledge,
                creating a supportive and empowering learning environment.
              </p>
              <p className="text-[#999] my-4">
                In addition to skill development, the Women in Tech program
                emphasizes the importance of community and mentorship.
                Participants have the opportunity to connect with industry
                leaders and fellow trainees, fostering relationships that can
                lead to career advancement and collaboration.
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
                src={WomenGroup}
                alt="klinic-image"
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
              By the end of the program, participants emerge with a
              certification that validates their skills, equipping them to
              pursue opportunities in the tech sector with confidence. This is
              aimed at creating a pipeline of skilled women who can contribute
              meaningfully to the technology landscape in Nigeria.
            </p>

            <p className="font-semibold my-4">
              Join us in our mission to bridge the gender gap in technology and
              empower women to take their rightful place in this dynamic field.
              Together, we can inspire the next generation of female tech
              leaders and innovators.
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
        program="Women in Tech"
      />
    </>
  );
};

export default Page;
