"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
          Tech Achievers Accelerator
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Build the skills to shape Africa&apos;s future
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Three months of practical learning, collaboration, and skill
            development for young people in Nigeria
          </p>
        </div>

        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src="/assets/tech-achiever.jpg"
              alt="top-banner"
              width={1200}
              height={400}
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
              className="w-[100%] lg:w-[50%]"
            >
              <p className="text-[#999] my-4">
                Technology is changing how organisations across Africa work,
                grow, and serve their communities. The Tech Achiever Accelerator
                Program helps young people in Nigeria prepare for those
                opportunities through three months of practical learning,
                collaboration, and skill development.
              </p>
              <p className="text-[#999] my-4">
                The accelerator brings participants together to develop
                technology skills relevant to Africa&apos;s changing industries.
                Through structured learning, peer collaboration, and practical
                projects, you will explore new ideas, apply what you learn, and
                receive feedback on your progress.
              </p>
              <p className="text-[#999] my-4">
                You will also build the professional skills needed to work with
                others and tackle challenges with confidence, including
                communication, teamwork, problem-solving, and adaptability.
              </p>

              <h4 className="text-[#333] font-semibold text-xl my-6">
                Who can join?
              </h4>
              <p className="text-[#999] my-4">
                The program is designed for students, young graduates, and
                National Youth Service Corps (NYSC) members in Nigeria who want
                to develop practical skills for a changing world of work.
              </p>

              <h4 className="text-[#333] font-semibold text-xl my-6">
                Choose a cohort that works for you
              </h4>
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#041926]">
                      <th className="border border-gray-300 px-4 py-3 text-left text-white">
                        Cohort
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-white">
                        Program dates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        First cohort
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        January–March
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        Second cohort
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        May–July
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        Third cohort
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-[#999]">
                        September–November
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[#999] my-4">
                Each cohort runs for three months, giving you time to learn,
                practise, collaborate, and demonstrate your progress.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              onClick={handleOpenModal}
              className="w-[100%] lg:w-[50%] relative cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <Image
                src="/assets/achiever-card.png"
                alt="beauty-image"
                width={700}
                height={400}
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
                    src="/assets/sme-woman.png"
                    alt="beauty-image"
                    width={300}
                    height={400}
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
            <ul className="list-disc pl-6 marker:text-[#E26015]">
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Build relevant skills:
                </span>{" "}
                Develop technology capabilities connected to opportunities in
                Africa&apos;s evolving industries.
              </li>
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Put learning into practice:
                </span>{" "}
                Work on projects and challenges that help you apply new
                knowledge.
              </li>
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Grow professionally:
                </span>{" "}
                Strengthen the communication, teamwork, and problem-solving
                skills employers value.
              </li>
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Learn with peers:
                </span>{" "}
                Share ideas and build connections with other emerging talents.
              </li>
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Prepare for your next step:
                </span>{" "}
                Gain confidence and a clearer sense of direction for work or
                further learning.
              </li>
              <li className="text-[#999] my-2">
                <span className="font-semibold text-[#333]">
                  Show what you can do:
                </span>{" "}
                Develop project work that demonstrates the skills you have
                built.
              </li>
            </ul>

            <h4 className="text-[#333] font-semibold text-xl my-6">
              Take your next step
            </h4>
            <p className="text-[#999] my-4">
              Develop skills for emerging opportunities and join a community of
              young people preparing to contribute to innovation and industrial
              growth in Nigeria and across Africa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenModal}
              className="bg-[#041926] py-2 px-4 flex gap-2 my-3 rounded-2xl hover:bg-[#E26015] transition-colors duration-300"
            >
              <span className="text-white">
                Apply for the Tech Achiever Accelerator Program
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
            </motion.button>
          </motion.div>
        </div>
      </div>

      <ProgramModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        program="Tech Achievers Accelerator"
      />
    </>
  );
};

export default Page;
