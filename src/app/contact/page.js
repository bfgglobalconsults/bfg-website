"use client";
import Accordion from "@/components/Accordion";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import ContactBanner from "../../../public/assets/contact-image.png";
import { useRouter } from "next/router";
import Image from "next/image";

const Page = () => {
  const [state, handleSubmit] = useForm("xwkgrkre");
  const [showItems, setShowItems] = useState([false, false, false, false]);
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, amount: 0.2 });

  const toggleShowItem = (index) => {
    setShowItems((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const questions = [
    {
      title: "What services does your firm offer?",
      content:
        "Our firm provides a wide range of consulting services, including technology and software development, market research and analytics, strategy and operations transformation, and workforce training. We specialize in delivering tailored solutions to help businesses optimize performance and achieve sustainable growth.",
    },
    {
      title: "How experienced are your consultants?",
      content:
        " Our consultants bring extensive experience across various industries, with expertise in strategy, technology, and business transformation. They have worked with startups, SMEs, and large corporations, providing innovative solutions backed by data-driven insights. Many of our consultants hold advanced degrees and industry certifications both in Nigeria and the United Kingdom, ensuring high-quality advisory services.",
    },
    {
      title: "How do you ensure confidentiality & security?",
      content:
        "We adhere to strict confidentiality and data security policies to protect client information. Our team follows industry best practices, including the use of secure communication channels, encrypted data storage, and compliance with relevant data protection regulations. Non-disclosure agreements (NDAs) are also standard in our engagements to safeguard sensitive business information.",
    },
    {
      title: "How do you measure experience with clients?",
      content:
        "We measure client experience through regular feedback, project outcomes, and performance metrics. Client satisfaction surveys, case studies, and key performance indicators (KPIs) help us continuously improve our services. Our goal is to build long-term partnerships by delivering measurable results and exceeding client expectations.",
    },
  ];

  if (state.succeeded) {
    return (
      <div className="p-8 flex justify-center mx-8 my-8 rounded-md bg-[#1c416d]">
        <div>
          <p className="text-black text-2xl font-bold">
            Thanks for Contacting Us!
          </p>
          <Link href="/">
            <div className="flex gap-4 justify-center my-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
                </svg>
              </span>
              <span className="text-white text-xl font-semibold">Go Home</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Start Your Project Journey
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Contact Us
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
             Whether you have a question about
            our services, or want to discuss a potential collaboration, our team is ready to connect with you.
          </p>
        </div>

        <div className="px-1 py-12">
          <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
            <Image
              src={ContactBanner}
              alt="contact-banner"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div ref={cardsRef} className="flex flex-wrap justify-center gap-10 mx-auto my-6">
          {/* Email Card */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="flex gap-3 p-4 w-[300px] lg:w-[250px] shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl"
          >
            <div className="flex flex-col w-full">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="my-2 mx-auto inline-block p-4 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
                </svg>
              </motion.div>
              <span className="text-[#999] text-center text-md my-2">
                You can email us here
              </span>
              <p className="text-[#333] text-center text-md font-semibold">
                info@bfgconsults.com
              </p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="flex gap-3 p-4 w-[300px] shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl"
          >
            <div className="flex flex-col w-full">
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="my-2 mx-auto inline-block p-4 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]"
              >                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                </svg>
              </motion.div>
              <span className="text-[#999] text-center text-md my-2">
                Give us a call on
              </span>
              <p className="flex gap-2 text-[#333] text-md font-semibold">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path fill="#fff" d="M10 4H22V28H10z"></path>
                    <path
                      d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                      fill="#3b8655"
                    ></path>
                    <path
                      d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                      transform="rotate(180 26 16)"
                      fill="#3b8655"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>{" "}
                <span>(+234) 818 416 5533</span>
              </p>
              <br />
              <p className="flex gap-2 text-[#333] text-md font-semibold">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#071b65"
                    ></rect>
                    <path
                      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                      fill="#fff"
                    ></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="24"
                      fill="#b92932"
                    ></rect>
                    <rect
                      x="14"
                      y="1"
                      width="4"
                      height="30"
                      transform="translate(32) rotate(90)"
                      fill="#b92932"
                    ></rect>
                    <path
                      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>{" "}
                <span>(+44) 7551 107100 </span>
              </p>
            </div>
          </motion.div>
          {/* Office Hours Card */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="flex gap-3 p-4 w-[300px] lg:w-[250px] shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl"
          >
            <div className="flex flex-col w-full">
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="my-2 mx-auto inline-block p-4 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]"
              >                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
                </svg>
              </motion.div>
              <span className="text-[#999] text-center text-md my-2">
                Office Hours
              </span>
              <p className="text-[#333] text-center text-md font-semibold">
                9:00 am - 6:00 pm
              </p>
            </div>
          </motion.div>
          {/* Location Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 p-4 w-[300px] shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl"
          >
            <div className="flex flex-col w-full">
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="my-2 mx-auto inline-block p-4 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]"
              >                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                </svg>
              </motion.div>
              <span className="text-[#999] text-center text-md my-2">
                Office Location
              </span>
              <p className="flex gap-2 text-[#333] text-md font-semibold">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path fill="#fff" d="M10 4H22V28H10z"></path>
                    <path
                      d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                      fill="#3b8655"
                    ></path>
                    <path
                      d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                      transform="rotate(180 26 16)"
                      fill="#3b8655"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>{" "}
                <span>
                  Suite D02, Kenuj 02 Mall, Kaura District, Abuja, Nigeria
                </span>
              </p>
              <br />
              <p className="flex gap-2 text-[#333] text-md font-semibold">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="30"
                      height="24"
                      rx="4"
                      ry="4"
                      fill="#071b65"
                    ></rect>
                    <path
                      d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                      fill="#fff"
                    ></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect
                      x="14"
                      y="4"
                      width="4"
                      height="24"
                      fill="#b92932"
                    ></rect>
                    <rect
                      x="14"
                      y="1"
                      width="4"
                      height="30"
                      transform="translate(32) rotate(90)"
                      fill="#b92932"
                    ></rect>
                    <path
                      d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                      fill="#b92932"
                    ></path>
                    <path
                      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                      opacity=".15"
                    ></path>
                    <path
                      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                      fill="#fff"
                      opacity=".2"
                    ></path>
                  </svg>
                </span>
                <span>
                  12 Oxford Street, Margate, Kent, United Kingdom, CT91TD
                </span>
              </p>
            </div>
          </motion.div>
        </div>
        {/* new contact banner */}
        <div className="w-full flex flex-col lg:flex-row border border-[#EEF3F6] rounded-3xl my-10">
          <div className="w-[100%] lg:w-[40%] bg-[#FFFFFF] rounded-l-3xl">
            <div className="p-4">
              <div>
                <h4 className="text-3xl text-[#222]">Connect with Us Today!</h4>
                <p className="text-[#999] my-3">
                  We value your inquiries, feedback, & collaborations. Whether
                  you are interested in our digital services, have questions
                  about our projects
                </p>
              </div>
              <div className="my-5 bg-[#FCFDFD] border border-[#EEF3F6] rounded-2xl p-4">
                <h5 className="my-2 text-lg font-semibold">
                  Our Commitment to You
                </h5>
                <div className="p-2">
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                      </svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">
                        Swift responses, dedicated support
                      </p>
                    </span>
                  </div>
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                      </svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">
                        Efficient & always here for you
                      </p>
                    </span>
                  </div>
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                      </svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">
                        We listen, understand, & act promptly
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[60%] bg-[#EEF3F6] rounded-r-3xl p-10">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    name="first-name"
                    type="text"
                    placeholder="Enter your Firstname"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    name="last-name"
                    type="text"
                    placeholder="Enter Your Lastname"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-phone"
                    name="phone"
                    type="text"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-subject"
                  >
                    Subject
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-subject"
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message"
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full rounded-md px-4 text-sm pt-3 shadow-sm outline-gray-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="py-2 px-4 text-white flex items-center gap-2 bg-[#E26015] hover:bg-[#333] rounded-3xl"
                >
                  <span className="font-semibold">Send Your Message</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* accordion */}
        <div>
          <div className="w-full flex flex-col lg:flex-row gap-10">
            <div className="w-[100%] lg:w-[40%]">
              <h3 className="text-4xl font-semibold text-[#1A1A1A]">
                Common Queries, Clear Answers
              </h3>
              <p className="text-[#999]">
                We believe in transparency & aim to provide you with all the
                information you need to make informed decisions about our
                services.
              </p>

              <div className="bg-[#EEF3F6]  rounded-3xl p-10 my-8">
                <div>
                  <div className="flex justify-center">
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                        fill="rgba(226,96,21,1)"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path>
                      </svg>{" "}
                    </span>{" "}
                  </div>
                  <h4 className="text-xl text-center font-semibold">
                    Still have questions ?
                  </h4>
                  <p className="text-[#999]">
                    If the question is not available on our FAQ section, Feel
                    free to contact us personally.
                  </p>
                  <div className="flex justify-center my-3">
                    <button className="border border-[#E26015] hover:bg-[#E26015] hover:text-white font-semibold p-2 rounded-2xl">
                      <a href="mailto:info@bfgconsults.com">Ask a Question</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] lg:w-[60%]">
              {questions.map((question, index) => (
                <div key={index} className="w-full flex gap-2 mb-4">
                  <div className="w-[80%] py-4 px-4 rounded-3xl border border-[#F0F6FF]">
                    <div>
                      <p className="text-lg font-semibold">{question.title}</p>
                      {showItems[index] && (
                        <>
                          <hr className="my-2" />
                          <p className="text-[#999]">{question.content}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-[20%] my-4">
                    <button onClick={() => toggleShowItem(index)}>
                      {showItems[index] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="36"
                          height="36"
                          fill="rgba(226,96,21,1)"
                        >
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="36"
                          height="36"
                          fill="rgba(226,96,21,1)"
                        >
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
