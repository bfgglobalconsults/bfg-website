import Image from "next/image";
import React from "react";
import NonGovtImg from "../../../../../public/assets/non-profit-vendor-scaled.jpg";
import NgoImage from "../../../../../public/assets/ngo-pic.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Gov & NGO
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Government & Non-for-Profit
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Empowering communities, driving positive change together.{" "}
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={NonGovtImg}
            alt="govt"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              In the realm of government & non-for-profit organizations, BFG
              Global Consulting is dedicated to driving positive change,
              fostering innovation, & maximizing impact. With a deep understanding
              of public policy, regulatory frameworks, & community needs, we
              partner with government agencies, NGOs, & philanthropic
              organizations to address complex challenges & advance societal
              goals. From strategic planning & program evaluation to capacity
              building & stakeholder engagement, our tailored solutions empower
              clients to enhance transparency, accountability, & effectiveness
              in their operations. By leveraging data-driven insights & best
              practices, we help our partners optimize resources, amplify social
              impact, & build resilient communities for the future. At BFG
              Global Consulting, we are committed to shaping a brighter tomorrow
              through purpose-driven collaboration & sustainable solutions{" "}
            </p>
          </div>
          </div>
          <div className="my-6">
            <Slides />
          </div>
 
          <div className="w-full flex flex-col lg:flex-row gap-4 bg-[#041926] rounded-xl p-10 my-8">
            <div className="w-[100%] lg:w-[50%]  rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference in the Government &
                Non-for-Profit Sector
              </h3>
              <p className="text-white my-2">
                Empowering public service & social impact, our expert solutions
                make a meaningful difference in key areas{" "}
              </p>
              <div className="w-full">
                <Image src={NgoImage} alt="it-image" className="w-full rounded-xl" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Strategic Planning & Advisory Services
                </h4>
                <p className="my-2 text-[#999]">
                  Customized strategic planning services to help government
                  agencies & non-for-profit organizations define their vision,
                  mission, & goals, as well as develop actionable strategic
                  plans to achieve them. This may include environmental scans,
                  SWOT analyses, stakeholder consultations, & strategic plan
                  development.{" "}
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Program Evaluation & Impact Assessment{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  Program evaluation services to assess the effectiveness,
                  efficiency, & impact of government programs & non-for-profit
                  initiatives. This may involve conducting evaluations,
                  collecting & analyzing data, measuring outcomes, & providing
                  recommendations for improvement.{" "}
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Capacity Building & Training Programs{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  Capacity building workshops, training sessions, & professional
                  development programs designed to enhance the skills,
                  knowledge, & capabilities of government & non-for-profit staff
                  & leaders. Topics may include leadership development, project
                  management, fundraising strategies, & advocacy techniques.{" "}
                </p>
              </div>{" "}
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default page;
