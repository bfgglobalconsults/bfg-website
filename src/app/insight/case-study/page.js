import Image from "next/image";
import React from "react";
import Banner from "../../../../public/assets/case-banner.png";
import Slides from "@/components/Slides";
import Technology from "../../../../public/assets/technology-software1.png";
import Business from "../../../../public/assets/business-strategy1.jpg";
import Research from "../../../../public/assets/research-analytics1.jpg";
import Training from "../../../../public/assets/training-development1.jpg";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Our Case Study
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Case Studies
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Discover how BFG has helped businesses like yours achieve remarkable
            success through our innovative solutions
          </p>
        </div>

        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={Banner}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div>
          <Slides />
        </div>
        <div className="my-14">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Recent Case Study
          </span>
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-between my-4">
            <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
              Real Solutions,Tangible Results
            </h3>
            <p className="w-[100%] lg:w-[50%] text-[#999] text-lg lg:text-xl my-2">
              Explore our diverse portfolio showcasing how BFG optimizes
              operations & fosters growth for businesses. From strategic
              planning to technology integration, witness the transformative
              impact of our tailored solutions.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="w-full h-[350px]">
              <Image
                src={Technology}
                alt="client"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-black font-semibold my-4">
                Technology & Software Development
              </h4>
              <p className="text-lg text-[#333] my-4">
                Innovation is at the core of our technology solutions. From
                custom software development to digital transformation
                strategies, we help businesses leverage cutting-edge
                technologies to streamline processes, enhance customer
                experiences, and boost efficiency. Our case studies showcase how
                we&apos;ve built scalable, secure, and high-performing solutions
                tailored to unique business needs.
              </p>
              <Link href="/insight/case-study/technology">
                <button className="bg-[#E26015] text-white text-cursor text-md  hover:bg-black rounded-md p-2">
                  View All Cases
                </button>
              </Link>
            </div>
          </div>
          {/* second item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="w-full h-[350px]">
              <Image
                src={Business}
                alt="innovate"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-black font-semibold my-4">
                Strategy and Operations Transformation
              </h4>
              <p className="text-lg text-[#333] my-4">
                Achieving operational excellence requires a strategic approach.
                Our consulting services help organizations refine business
                models, optimize workflows, and enhance performance. Our case
                studies highlight successful projects where we&apos;ve helped
                clients improve efficiency, reduce costs, and scale operations
                effectively.
              </p>
              <Link href="/insight/case-study/strategy">
                <button className="bg-[#E26015] text-white text-cursor text-md  hover:bg-black rounded-md p-2">
                  View All Cases
                </button>
              </Link>
            </div>
          </div>
          {/* third item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="w-full h-[350px]">
              <Image
                src={Research}
                alt="inclusive"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-black font-semibold my-4">
                Research & Analytics
              </h4>
              <p className="text-lg text-[#333] my-4">
                Data-driven insights empower businesses to make informed
                decisions. Through in-depth market research, consumer behavior
                analysis, and competitive intelligence, we provide actionable
                recommendations that drive growth. Explore our case studies to
                see how our research and analytics have helped businesses
                identify opportunities, mitigate risks, and stay ahead in
                competitive markets.{" "}
              </p>
              <Link href="/insight/case-study/research">
                <button className="bg-[#E26015] text-white text-cursor text-md  hover:bg-black rounded-md p-2">
                  View All Cases
                </button>
              </Link>
            </div>
          </div>
          {/* fourth item */}
          <div className="bg-[#F7F7F8] w-[100%] lg:w-[45%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
            <div className="w-full h-[350px]">
              <Image
                src={Training}
                alt="sustain"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-[100%]">
              <h4 className="text-xl text-black font-semibold my-4">
                Training & Development
              </h4>
                <p className="text-lg text-[#333] my-4">
                A skilled workforce is essential for business success. Our tailored training programs equip teams with the knowledge and skills needed to thrive in a dynamic business environment. From leadership development to technical training, our case studies demonstrate how we&apos;ve helped organizations upskill employees and foster a culture of continuous learning.
              </p>
              <Link href="/insight/case-study/training">
                <button className="bg-[#E26015] text-white text-cursor text-md  hover:bg-black rounded-md p-2">
                  View All Cases
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
