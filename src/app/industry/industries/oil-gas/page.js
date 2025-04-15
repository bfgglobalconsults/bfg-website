import Image from "next/image";
import React from "react";
import OilGasImg from "../../../../../public/assets/oilgas-banner.png";
import OilGasImage from "../../../../../public/assets/oil-gas.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Oil & Gas
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Oil & Gas
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
            Powering Progress, Transforming the Future of Oil & Gas
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={OilGasImg}
            alt="oil-gas"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              At BFG Global Consulting, we understand the critical importance of
              the oil and gas sector in powering economies and driving global
              progress. Our dedicated team offers specialized consulting
              services to help organizations navigate the complexities of this
              dynamic industry, ensuring operational excellence, regulatory
              compliance, and sustainable growth.
            </p>
          </div>
        </div>
        <div className="my-6">
          <Slides />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 my-8 p-10 bg-[#041926] rounded-xl">
          <div className="w-[100%] lg:w-[50%]  rounded-lg">
            <div className="my-4">
              <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                Areas
              </span>
            </div>
            <h3 className="text-white text-3xl font-semibold">
              Our Expertise in the Oil and Gas Sector
            </h3>
            <p className="text-white my-2">
              We provide a comprehensive suite of services tailored to the
              unique challenges of the oil and gas industry
            </p>
            <div className="w-full">
              <Image src={OilGasImage} alt="oil-image" className="w-full rounded-xl" />
            </div>
          </div>
          <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Strategic Advisory Services
              </h4>
              <p className="my-2 text-[#999]">
                Offering insights into market trends, investment opportunities,
                and competitive positioning to inform decision-making and drive
                growth.
              </p>
            </div>
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Risk Management Solutions
              </h4>
              <p className="my-2 text-[#999]">
                Developing robust frameworks to identify, assess, and mitigate
                risks associated with exploration, production, and distribution.
              </p>
            </div>{" "}
            <div className="w-full shadow-lg bg-white rounded-xl p-7">
              <h4 className="font-semibold text-xl text-[#333333]">
                Digital Transformation Consulting
              </h4>
              <p className="my-2 text-[#999]">
                Leveraging cutting-edge technologies such as IoT, AI, and data
                analytics to enhance operational efficiency and asset
                management.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
