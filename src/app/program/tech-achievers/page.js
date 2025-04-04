"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TopBanner from "../../../../public/assets/tech-achiever.jpg";
import SmeGroup from "../../../../public/assets/achiever-card.jpg";
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
          Tech Achiever
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Tech Achievers Graduate Scheme
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Peer-to-Peer Learning for SME Leaders
          </p>
        </div>

        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={TopBanner}
              alt="top-banner"
              className="w-full h-full object-cover rounded-xl"
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
                The Tech Achievers Graduate Scheme is an innovative internship
                and mentorship program designed for youth, including students
                and recent graduates, eager to launch their careers in the
                technology and consulting sectors. Spanning three months, this
                program provides selected candidates with hands-on experience
                within various consulting units of our management consulting
                firm.
              </p>
              <p className="text-[#999] my-4">
                Participants in the Tech Achievers Graduate Scheme will benefit
                from a structured learning environment where they can develop
                essential skills, gain industry insights, and apply theoretical
                knowledge in real-world scenarios. Through mentorship from
                experienced professionals, graduates will receive guidance
                tailored to their career aspirations, helping them to navigate
                the complexities of the business landscape.
              </p>
              <p className="text-[#999] my-4">
                Successful candidates will have the opportunity to work on
                impactful projects, collaborate with diverse teams, and enhance
                their professional networks. By immersing themselves in the
                operations of a leading consulting firm, participants will gain
                invaluable insights into the workings of the industry, setting
                them up for future success.
              </p>
              <p className="text-[#999] my-4">
                The Tech Achievers Graduate Scheme is not just an internship;
                it&apos;s a launchpad for aspiring professionals ready to make
                their mark in the tech and consulting fields. We are committed
                to empowering the next generation of leaders, equipping them
                with the skills and experiences necessary to thrive in an
                increasingly competitive marketplace.
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
                src={SmeGroup}
                alt="beauty-image"
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
            <p className="font-bold text-lg my-4">Benefits for Applicants</p>
            <ul className="list-disc pl-6 marker:text-[#999]">
              <li className="text-[#999] my-2">
                Hands-On Experience: Gain practical experience by working
                directly within various consulting units, allowing you to apply
                your academic knowledge in real-world scenarios
              </li>
              <li className="text-[#999] my-2">
                Mentorship Opportunities: Receive guidance and support from
                experienced professionals in the industry, helping you to refine
                your skills and navigate your career path.
              </li>
              <li className="text-[#999] my-2">
                Skill Development: Enhance your technical and soft skills,
                including problem-solving, communication, teamwork, and project
                management, which are essential for success in the consulting
                sector.
              </li>
              <li className="text-[#999] my-2">
                Networking: Build valuable connections with industry experts,
                fellow interns, and potential employers, expanding your
                professional network and opening doors for future opportunities.
              </li>
              <li className="text-[#999] my-2">
                Career Preparation: Get insights into industry trends and best
                practices, equipping you with the knowledge and confidence
                needed to succeed in a competitive job market.
              </li>
              <li className="text-[#999] my-2">
                Project Involvement: Contribute to meaningful projects that
                impact the firm and its clients, allowing you to showcase your
                abilities and make a tangible difference.
              </li>
              <li className="text-[#999] my-2">
                Certification: Upon successful completion of the program,
                receive a certificate recognizing your participation and the
                skills you&apos;ve acquired, adding value to your resume.
              </li>
            </ul>

            <p className="font-semibold my-4">
              Are you ready to jumpstart your career in technology and
              consulting? Don&apos;t miss this opportunity to develop your
              skills and gain invaluable experience. Apply now to be part of the
              Tech Achievers Graduate Scheme and take the first step towards a
              successful career!{" "}
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
        program="Tech Achievers Graduate Scheme"
      />
    </>
  );
};

export default Page;
