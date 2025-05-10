"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import Banner from "../../../public/assets/about-banner.png";
import Banner from "../../../public/assets/glass-building.jpeg";

import Picture from "../../../public/assets/festus-bello-image.png";
import Statistics from "@/components/Statistics";
import OurStand from "@/components/OurStand";
import CounterSection from "@/components/counter/CounterSection";
import Link from "next/link";

const Page = () => {
  const statsRef = useRef(null);
  const ceoRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const isCeoInView = useInView(ceoRef, { once: true, amount: 0.2 });

  return (
    <>
      
        <div className="lg:mt-[150px] p-12">
          
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          About Us
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
              <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
              >
            Our Company
          </h3>
              <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl"
              >
            We are more than consultants; we are architects of
            growth, innovators of products, & your dedicated partners in
            success.
          </p>
        </div>


          <div className="relative h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center"
          >
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="py-[30px]">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className=""
            >
            <div className="w-full my-4">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#656565] my-3"
                >
                  BFG Global Consulting LLC (also trading as BFG Consults)
                  offers custom solutions in software development, market
                  research, strategy development, and workforce training. With
                  offices in Nigeria and the United Kingdom, we offer our
                  services globally as a solution partner to individuals,
                  businesses, corporate organizations, and government agencies.
                  Our business model is built on innovation, combining
                  Consulting-as-a-Service (CaaS) and Software-as-a-Service
                  (SaaS) offerings to individuals and businesses in navigating
                  complex challenges, optimizing performance, and achieving
                  sustainable growth across various industries
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-[#656565] my-3"
                >
                We are managed by a group of agile product leaders who are
                experienced in delivering cutting-edge solutions designed to
                meet the evolving needs of modern enterprises of any size. Our
                clients range from large-profile brands to medium, small, and
                start-up companies in Nigeria, India, Australia, Canada, the
                United Kingdom, and the United States.
                </motion.p>
            </div>
            </motion.div>

            <div ref={statsRef} className="flex flex-col lg:flex-row gap-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={
                  isStatsInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                className="w-[100%] lg:w-[50%]"
              >
                <div className="my-10">
                  <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold my-4">
                    Business Stats
                  </span>
                </div>
                <div>
                  <motion.h3
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isStatsInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[#333] font-bold text-3xl md:text-3xl lg:text-4xl"
                  >
                    Our services have consistently demonstrated success in
                    enhancing business performance.
                  </motion.h3>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isStatsInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[#999] my-5 text-lg lg:text-xl"
                  >
                    We help you unleash the power within your business,
                    transforming potential into performance through tailored
                    strategies and innovative solutions that fuel growth and
                    success.
                  </motion.p>
                  <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      isStatsInView
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    href="/bfg-about-us.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                      <span className="text-white text-md font-semibold">
                        View Our Profile
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
                    </button>
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={
                  isStatsInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-[100%] lg:w-[50%]"
              >
                <CounterSection />
              </motion.div>
            </div>

            {/* <div className="bg-[#E26015] px-3 py-6 rounded-2xl">
                  <div className="flex flex-col lg:flex-row justify-center gap-10">
                    <div>
                      <h3 className="text-4xl text-white font-bold">899+</h3>
                      <p className="text-white">Complete project</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">20+</h3>
                      <p className="text-white">Team Member</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">100+</h3>
                      <p className="text-white">Winning Award</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">99+</h3>
                      <p className="text-white">Clients covered</p>
                    </div>
                  </div>
                </div> */}
            
             
            {/* <div className="bg-[#E26015] px-3 py-6 rounded-2xl">
                  <div className="flex flex-col lg:flex-row justify-center gap-10">
                    <div>
                      <h3 className="text-4xl text-white font-bold">899+</h3>
                      <p className="text-white">Complete project</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">20+</h3>
                      <p className="text-white">Team Member</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">100+</h3>
                      <p className="text-white">Winning Award</p>
                    </div>
                    <div>
                      <h3 className="text-4xl text-white font-bold">99+</h3>
                      <p className="text-white">Clients covered</p>
                    </div>
                  </div>
                </div> */}
            <div className="my-10">
              <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold my-4">
                CEO Message
              </span>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-4 my-4">
              <div className="w-[100%] lg:w-[60%]">
                <h3 className="text-[#333] font-bold text-3xl md:text-3xl lg:text-4xl">
                  Your Growth Partner in a Changing Business Landscape
                </h3>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  I am delighted to address you today as the Managing Partner
                  and CEO of BFG Global Consulting Limited and introduce our
                  firm. With great passion and commitment, our team at BFG
                    Global Consulting is dedicated to assisting organizations
                    from diverse industries in their pursuit of business growth.
                    We aim to be your growth partners, guiding you towards the
                    new opportunities of contemporary business.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  At BFG Global Consulting, we understand that the business
                  landscape is constantly evolving, presenting both challenges
                    and prospects for organizations worldwide. In this
                    fast-paced environment, it is crucial for businesses to
                    adapt and thrive to remain competitive. Thats where we come
                    in.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  Our expertise lies in deploying and managing innovative
                    solutions that empower businesses and organizations to
                    achieve growth. We firmly believe that success in todays
                    marketplace requires a multidimensional approach, blending
                    research, strategy, workforce training, and information
                    technology. By operating at the intersection of these
                    critical areas, we offer comprehensive consulting services
                    that equip our clients with the tools they need to drive
                    their success.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                  As we embark on this exciting journey, we invite you to join
                    us in shaping the future of business growth. Whether you are
                    a small startup seeking guidance or a well-established
                    organization looking for fresh insights, BFG Global
                    Consulting is here to support you every step of the way. Our
                    team of experts are ready to listen, understand your unique
                    challenges, and tailor solutions that align with your
                    specific goals.
                </p>
                <p className=" text-[#999] my-5 text-lg lg:text-xl">
                    While you explore our business profile, we thank you for
                    your attention, and we look forward to connecting with you
                    soon. Together, let us embrace the possibilities and create
                    a future of sustainable growth and success.
                </p>
              </div>
              <div className="flex flex-col">
                  <div className="">
                  <Image
                    src={Picture}
                    alt="festus-bello"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white  p-4 shadow-md rounded-lg">
                    <h3 className="font-semibold text-lg">
                      Festus BELLO, mba.
                    </h3>
                  <p className="text-[#E45F11] font-semibold">
                    Managing Partner / CEO
                  </p>
                </div>
                <div className="my-8">
                  <a href="mailto:festus.bello@bfgconsults.com">
                    <button className="w-full flex justify-center gap-4 p-3 border border-[#E26015] hover:bg-[#E26015] hover:text-white rounded-md">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                        </svg>
                      </span>
                      <span>Get in Touch</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4">
              <OurStand />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Page;
