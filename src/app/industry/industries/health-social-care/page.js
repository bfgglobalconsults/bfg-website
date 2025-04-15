import Image from "next/image";
import React from "react";
import HealthImg from "../../../../../public/assets/health-banner.jpg";
import HealthImage from "../../../../../public/assets/health-card.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Care
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Health & Social Care
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Enhancing Healthcare Delivery, Improving Lives
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={HealthImg}
            alt="health-media"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              Healthcare is one of the most essential sectors driving societal
              well-being, innovation, and patient care excellence. BFG Global
              Consult supports healthcare providers, social care organizations,
              and health-tech startups in adopting advanced healthcare
              strategies, improving service delivery, and ensuring regulatory
              compliance.
            </p>
          </div>
 </div>
          <div className="my-6">
            <Slides />
          </div>
       

        <div className="w-full flex flex-col lg:flex-row gap-4 my-8 lg:p-10 bg-[#041926] rounded-xl">
          <div className="w-[100%] lg:w-[50%] p-[40px]  rounded-lg">
            <div className="my-4">
              <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                Areas
              </span>
            </div>
            <h3 className="text-white text-3xl font-semibold">
              Our Expertise in Health & Social Care
            </h3>
            <p className="text-white my-2">
              We provide a comprehensive suite of services tailored to the
              unique challenges of the Entertainment & Creative Industry
            </p>
            <div className="w-full">
              <Image
                src={HealthImage}
                alt="telecom-image"
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] p-[40px] flex flex-col gap-10">
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Healthcare Process Optimization
              </h4>
              <p className="my-2 text-[#999]">
                Enhancing patient care through efficient workflows and
                technology integration.
              </p>
            </div>
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Health-Tech & Digital Transformation
              </h4>
              <p className="my-2 text-[#999]">
                Implementing telemedicine, AI diagnostics, and electronic health
                records (EHR) systems.
              </p>
            </div>{" "}
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Regulatory & Compliance Advisory
              </h4>
              <p className="my-2 text-[#999]">
                Ensuring healthcare organizations meet local and international
                industry regulations.
              </p>
            </div>{" "}
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Public Health & Social Care Solutions
              </h4>
              <p className="my-2 text-[#999]">
                Supporting government and NGOs in driving impactful health
                policies and social care programs.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
