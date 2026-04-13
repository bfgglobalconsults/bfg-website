"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import OfficeAddresses from "@/components/OfficeAddresses";
import AnimatedItems from "@/components/information-technology/AnimatedItems";
import CalendlyModal from "@/components/CalendlyModal";
import Link from "next/link";

const Page = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const trainingSlides = [
  {
      title: "Strategic Gap Analysis",
      content: "We diagnose your employee strengths and weaknesses to evaluate the current competencies, knowledge, and performance levels of employees against the evolving demands and benchmarks set by industry standards. This diagnostic approach involves us collecting data through performance reviews, surveys, interviews, and competency assessments to identify specific areas where skills are lacking or underdeveloped.",
    },
    {
      title: "Onboarding Programs",
      content: "We offer structured, strategic training initiatives designed to ensure that new hires are smoothly and effectively integrated into the organizations culture, values, policies, and operational systems",
    },
    {
      title: "Customized Training for Employee Development",
      content:
        "Offering customised training solutions that are tailored to meet the specific needs of your organisation & employees.",
    },
    {
      title: "Training Delivery & Facilitation",
      content:
        "Facilitating training sessions, workshops, & seminars for employees at all levels of your organisation.",
    },
    {
      title: "Training Evaluation & Monitoring",
      content:
        "Measuring the effectiveness of training programs & providing follow-up support to ensure that employees can apply new skills & knowledge on the job.",
    },
    {
      title: "Coaching & Mentoring",
      content:
        "Through tailored development plans, constructive feedback, and skill-building sessions, we offer personalized one-on-one coaching and mentoring designed to empower employees with the guidance, support, and tools they need to grow professionally.",
    },
   
  ];

  const benefitsRef = useRef(null);
  const isInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  return (
   <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
       
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Training
          </span>
          <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl"
            >
              Training & Development
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
              Empowering your workforce, Enhancing your business
            </p>
          </div>
        
      </div>

      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image src="/assets/training-development-banner.jpg" alt="top-banner" width={1200} height={400} className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>

      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="w-full"
          >
            <p className="text-lg text-[#656565] my-3">
              The BFG Training & Development Solution sits within our talent
              management consulting practices. This service is provided to
              unlock potential, develop leaders, & create high-performing teams.
              We help organisations improve their performance by providing
              employees with the knowledge, skills, & abilities they need to
              succeed in their roles. We provide a wide range of training
              options, including classroom instruction, online learning, & on
              the job training. It also includes assessments, evaluations, &
              feedback to measure the effectiveness of the training for your
              organisation.{" "}
            </p>
          </motion.div>
        </div>

        <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg"
          >
            <div className="my-4">
              <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                Focus Area
              </span>
            </div>
            <h3 className="text-white text-3xl font-semibold">
              Focus areas of our Training & Development Consulting Services
            </h3>
            <p className="text-white my-2">
              Unlock your teams potential with our structured approach to
              training & development, delivering tailored learning solutions
              that drive performance, productivity, & lasting impact from
              start to success.{" "}
            </p>
            <div className="w-full">
              <Image
                src="/assets/sales-newbanner.jpg"
                alt="training-image"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 1 }}
            className="w-[100%] bg-[#041926] p-4 lg:w-[50%] flex flex-col gap-10"
          >
            <AnimatedItems slides={trainingSlides} />
          </motion.div>
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
                Realize the full potential of your organization with our expert
                services, delivering actionable insights, improved efficiency, &
                sustained results that drive lasting impact & success.{" "}
              </p>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src="/assets/service-image1.png"
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src="/assets/service-image2.png"
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
                    src="/assets/employee-perfomance.jpg"
                    alt="employee"
                    width={400}
                    height={200}
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
                    src="/assets/retention.jpg"
                    alt="retention"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Retention of Employees
                  </h4>
                  <p className="text-[#999]">
                    Investing in employee training & development helps
                    organisations retain their best employees, & reduces the
                    costs associated with turnover.{" "}
                  </p>
                </div>
              </motion.div>
              {/* third item */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src="/assets/greater-flexibility.jpg"
                    alt="flexibility"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Adaptability & Flexibility
                  </h4>
                  <p className="text-[#999]">
                    By providing your employees with training & development that
                    keeps them up-to-date with new technologies & changing
                    industry trends, your organisation will be more adaptable &
                    flexible in response to changing business conditions.{" "}
                  </p>
                </div>
              </motion.div>
              {/* fourth item */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src="/assets/decision-making.jpg"
                    alt="decision"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Decision-Making
                  </h4>
                  <p className="text-[#999]">
                    Access to accurate, up-to-date information & expert analysis
                    helps our clients make more informed & effective decisions
                    for their businesses.{" "}
                  </p>{" "}
                </div>
              </motion.div>
              {/* fifth item */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src="/assets/top-talent.jpg"
                    alt="talent"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Ability to Attract top Talent
                  </h4>
                  <p className="text-[#999]">
                    Organisations that invest in this service are more likely to
                    attract top talent, as potential employees view such
                    investment as a sign of a committed & forward-thinking
                    organisation.{" "}
                  </p>{" "}
                </div>
              </motion.div>
              {/* sixth item */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10 border rounded-2xl shadow-lg"
              >
                <div className="w-full h-[200px]">
                  <Image
                    src="/assets/operations.jpg"
                    alt="operations"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability{" "}
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.
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
                  src="/assets/Training-Portfolio.jpg"
                  alt="training"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                  Portfolio
                </span>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Building Capacity for Future-Ready Talent{" "}
                </h3>
                <p className="text-[#999] text-xl my-2">
                  BFG Global Consult empowers organizations with comprehensive
                  training and development initiatives, fostering a pipeline of
                  skilled talent ready to tackle tomorrow&apos; challenges.
                </p>
                               <Link href="/insight/case-study/training">
               
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
                </Link>
              </div>
            </div>
          </motion.div>
          {/* service team */}
          <OfficeAddresses />
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-[100%] lg:w-[60%] flex justify-center pt-14 my-14 mx-auto"
          >
            <div>
              <p className="text-center text-2xl">
                Connect, collaborate, and innovate from anywhere as you
                transform your workforce with our Training and Development
                Solutions.
              </p>
              <div className="flex justify-center">
                 <button 
                   onClick={() => setIsCalendlyOpen(true)}
                   className="bg-[#E26015] hover:bg-black my-4 text-white text-md lg:text-lg py-2 px-4 rounded-lg"
                 >
                    Book a Quick Call
                  </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
      />
    </>
  );
};

export default Page;
