"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/information-technology.jpg";
import Accordion from "@/components/Accordion";
import TopBanner from "../../../../public/assets/it-banner.jpeg";

import ItImage from "../../../../public/assets/it-images.png";
import Avatar from "../../../../public/assets/new-avatar.png";
import Bradford from "../../../../public/assets/david-bradford.png";
import Jeremiah from "../../../../public/assets/jesunifemi.png";

import TechnologyPortfolio from "../../../../public/assets/technology-portfolio.jpg";
import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";
import Employee from "../../../../public/assets/improve-employee.png";
import DataSecurity from "../../../../public/assets/data-security.png";
import DataMgt from "../../../../public/assets/data-mgt.png";
import Flexibility from "../../../../public/assets/flexibility-scalibility.png";
import Expertise from "../../../../public/assets/expertise-resources.png";
import Innovation from "../../../../public/assets/innovation-development.png";

import AnimatedItems from "@/components/information-technology/AnimatedItems";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Page = () => {
  const benefitsRef = useRef(null);
  const isInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  const ItSlides = [
    {
      title: "Software Designing & Development",
      content:
        "We manage the design & development of customised IT solutions that are tailored to the specific needs of an organisation & or business.",
    },
    {
      title: "IT Risk Assessment & Disaster Recovery",
      content:
        "This scope of service includes the development & implementation of plans & procedures that organisations can use to quickly & effectively recover from IT-related disruptions, such as natural disasters, power outages or cyber-attacks.",
    },
    {
      title: "Technical Support",
      content:
        "This scope of service involves assisting employees & other users of an organisations IT systems. This can include troubleshooting & resolving technical issues, as well as providing advice & guidance on the use of specific software or hardware.",
    },
    {
      title: "Cloud Services & Migration",
      content:
        "We assist organisations in migrating their IT infrastructure & applications to the cloud, ensuring scalability, security & cost-efficiency.",
    },
    {
      title: "Cybersecurity",
      content:
        "This scope of service includes the implementation of security measures to protect an organisations IT systems & data from unauthorized access & breaches. This can include tasks such as configuring firewalls, implementing intrusion detection systems, & performing security audits.",
    },
  ];

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
        >
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Technology
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <motion.h3 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1 }}
              className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
            >
              Technology & Software
            </motion.h3>
            <motion.p 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 1 }}
              className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl"
            >
              Innovative solutions, secure technology, & unparalleled support for
              your business
            </motion.p>
          </div>
        </motion.div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              BFG Technology solutions is a specialised service deployed to help
              organisations optimize their use of technology to achieve their
              business objectives. Through this service, we provide a wide range
              of IT solutions, including, business web presence, cloud
              computing, software development, & cybersecurity. The service is
              delivered by our innovation & technology team, who are experts in
              their field & have the technical skills & knowledge to provide
              effective solutions. The goal of this service to clients is to
              improve their organisations efficiency, information security, &
              competitiveness by leveraging the latest technology.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg"
          >
            <div className="mb-4">
              <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                Focus Area
              </span>
            </div>
            <h3 className="text-white text-3xl font-semibold">
              Focus areas of our Technology & Software Consulting Services
            </h3>
            <p className="text-white my-4">
              Experience how our robust IT solutions & expert technical support
              deliver seamless technology integration, ensuring your systems
              reliability, security, & optimal performance from infrastructure
              to application.
            </p>
            <div className="w-full">
              <Image
                src={ItImage}
                alt="it-image"
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="w-[100%] bg-[#041926] p-4  lg:w-[50%] flex flex-col gap-10"
          >
            <AnimatedItems slides={ItSlides} />
          </motion.div>

          {/* <div className="w-[100%] flex gap-2">
              <div className="w-1/2 shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Software Designing & Development
                </h4>
                <p className="my-2 text-[#999]">
                 We manage the design & development of customised IT solutions that are tailored to the specific needs of an organisation & or business.
                </p>
              </div>
              <div className="w-1/2 shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  IT Risk Assessment & Disaster Recovery
                </h4>
                <p className="my-2 text-[#999]">
                  This scope of service includes the development & implementation of plans & procedures that organisations can use to quickly & effectively recover from IT-related disruptions, such as natural disasters, power outages or cyber-attacks.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Technical Support
                </h4>
                <p className="my-2 text-[#999]">
                  This scope of service involves assisting employees & other users of an organisations IT systems. This can include troubleshooting & resolving technical issues, as well as providing advice & guidance on the use of specific software or hardware.
                </p>
              </div>{" "}
             
            </div> */}
        </div>

        <hr />
        <div className="p-[40px]">
          <div ref={benefitsRef} className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <motion.h3 
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#333] text-3xl my-8 font-semibold"
              >
                Service Benefits
              </motion.h3>
              <p className="text-[#999] text-xl my-2">
                Unlock the full potential of your technology with our expert IT
                services, delivering seamless operations, enhanced performance,
                & sustainable solutions that drive lasting value & success.
              </p>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div> */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={Employee}
                    alt="employee-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Employee Performance
                  </h4>
                  <p className="text-[#999]">
                    By providing employees with the knowledge, skills, &
                    abilities they need to succeed in their roles, this solution
                    helps organisations improve employee performance &
                    productivity.{" "}
                  </p>
                </div>
              </motion.div>
              {/* second item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={DataSecurity}
                    alt="data-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Data Security
                  </h4>
                  <p className="text-[#999]">
                    IT services help organisations protect their IT systems &
                    data from unauthorized access & breaches by implementing
                    security measures such as firewalls, intrusion detection
                    systems, & regular security audits.
                  </p>
                </div>
              </motion.div>
              {/* third item */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={DataMgt}
                    alt="datamgt-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Data Management
                  </h4>
                  <p className="text-[#999]">
                    It helps organisations manage & protect their data more
                    effectively by providing solutions such as data storage,
                    backup, & recovery.
                  </p>
                </div>
              </motion.div>
              {/* fourth item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={Flexibility}
                    alt="flex-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Increased Flexibility & Scalability
                  </h4>
                  <p className="text-[#999]">
                    Organisations adapt to changing business conditions & grow
                    their operations by providing scalable & flexible solutions
                    that can be easily modified & expanded as needed.
                  </p>{" "}
                </div>
              </motion.div>
              {/* fifth item */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={Expertise}
                    alt="expertise-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Access to Expertise & Resources
                  </h4>
                  <p className="text-[#999]">
                    Our IT solutions provide organisations with access to
                    experts & resources that they might not have, such as
                    specialised software, & cybersecurity professionals.
                  </p>{" "}
                </div>
              </motion.div>
              {/* sixth item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src={Innovation}
                    alt="innovation-img"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Accelerated Innovation and Development
                  </h4>
                  <p className="text-[#999]">
                    Drive rapid technological advancements through agile
                    development practices, fostering continuous improvement and
                    faster time-to-market for new solutions.
                  </p>{" "}
                </div>
              </motion.div>
            </div>
          </div>
          {/* portfolio */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="py-[100px]"
          >
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  src={TechnologyPortfolio}
                  alt="research"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                  Portfolio
                </span>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Empowering Businesses with Digital Transformation
                </h3>
                <p className="text-[#999] text-xl my-2">
                  Explore how BFG Global Consult empowers businesses to navigate
                  their digital journeys, transforming strategic goals into
                  actionable results. We showcase innovative solutions that
                  reflect our commitment to excellence, agility, and sustainable
                  growth.
                </p>
                <a
                  href="/bfg-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                    <span className="text-white text-md font-semibold">
                      View Our Portfolio
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
                </a>
              </div>
            </div>
          </motion.div>
          {/* service team */}
          <div className="my-14">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Service Team
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Meet Our Technology & Software Development Team
              </h3>
              <p className="text-[#999] text-xl my-2">
                Discover the experts behind our solutions. Our dedicated team
                brings a wealth of experience and a passion for driving success,
                ensuring we meet our clients&apos; unique challenges with precision
                and insight.
              </p>
            </div>
            {/* team pictures */}

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col mb-12">
                <div className="w-[250px] h-[250px] aspect-square my-8 bg-[#B0D4EA]">
                  <Image
                    src={Bradford}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                    <h3 className="font-semibold text-lg">David U. Bradford</h3>
                    <p className="text-[#E45F11]">
                      Senior Software Developer/Technology Analyst
                    </p>
                    <Link href="/team/senior-software">
                      <button className="text-[#999] text-cursor text-md underline hover:text-black">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Jeremiah}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                    <h3 className="font-semibold text-lg">
                      Jesunifemi Jeremiah Oluwafemi
                    </h3>
                    <p className="text-[#E45F11]">
                      Product Designer / Developer
                    </p>
                    <Link href="/team/product-designer">
                      <button className="text-[#999] text-cursor text-md underline hover:text-black">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-[100%] lg:w-[60%] flex justify-center pt-14 my-14 mx-auto"
          >
            <div>
              <p className="text-center text-2xl">
                Connect, collaborate, and innovate from anywhere as you drive
                digital transformation with our Technology & Software
                Development Solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#E26015] hover:bg-black my-4 text-white text-md lg:text-lg py-2 px-4 rounded-lg">
                    Contact our Service Team
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
