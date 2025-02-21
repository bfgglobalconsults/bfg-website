import Image from "next/image";
import React from "react";
import FinTechImg from "../../../../../public/assets/technology-img.png";
import TechImage from "../../../../../public/assets/technology-image.png";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Technology
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Technology & Finance
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Innovating finance, shaping tomorrows solutions.{" "}
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FinTechImg}
            alt="tech"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              In the intersection of technology & finance, BFG Global Consulting
              pioneers innovative solutions that redefine the future of
              financial services. Leveraging cutting-edge technologies & deep
              industry expertise, we empower financial institutions, fintech
              startups, & technology firms to navigate digital transformation,
              enhance operational efficiency, & drive sustainable growth. From
              blockchain & AI to cybersecurity & digital banking, our
              comprehensive suite of services covers the full spectrum of
              technological advancements reshaping the finance landscape. By
              blending strategic insights with technical acumen, we help our
              clients harness the power of technology to streamline processes,
              deliver superior clients experiences, & stay ahead in an
              increasingly competitive market. At BFG Global Consulting, we are
              committed to shaping the next era of finance through innovation,
              collaboration, & strategic foresight.
            </p>
          </div>
          
          <div className="my-6">
            <Slides />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 bg-[#041926] p-10  rounded-xl my-8">
            <div className="w-[100%] lg:w-[50%] rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference in the Financial Technology
                Sector{" "}
              </h3>
              <p className="text-white my-2">
                Powering innovation in financial technology, our expert
                solutions drive impact in key areas
              </p>
              <div className="w-full">
                <Image src={TechImage} alt="it-image" className="w-full" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Cybersecurity Solutions
                </h4>
                <p className="my-2 text-[#999]">
                  Cybersecurity solutions to protect financial institutions &
                  their clients from cyber threats, including data encryption,
                  threat detection, & security monitoring services to safeguard
                  sensitive information & prevent data breaches.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Data Analytics & Business Intelligence
                </h4>
                <p className="my-2 text-[#999]">
                  Data analytics & business intelligence solutions for financial
                  institutions, offering insights into clients behavior, market
                  trends, & operational performance to support data-driven
                  decision-making & strategic planning.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Digital Banking Solutions
                </h4>
                <p className="my-2 text-[#999]">
                  Innovative digital banking solutions for financial
                  institutions, including online banking platforms, mobile
                  banking apps, & digital payment systems to enhance clients
                  experiences & streamline banking operations.
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
