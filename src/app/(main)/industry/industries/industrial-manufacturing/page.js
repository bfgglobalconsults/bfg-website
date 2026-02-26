import Image from "next/image";
import React from "react";
import IndustrialManufactureImg from "../../../../../public/assets/industrial-manufacture-banner.png";
import ManufactureImage from "../../../../../public/assets/manufacture-card.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Industry
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Industrial Manufacturing
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
        Elevating Manufacturing Excellence through Strategic Innovation and Digital Transformation
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={IndustrialManufactureImg}
            alt="oil-gas"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              At BFG Global Consult, we understand that the industrial
              manufacturing sector is the backbone of economic development,
              driving productivity, innovation, and large-scale operations. Our
              consulting solutions help manufacturers streamline production
              processes, optimize supply chains, integrate smart technologies,
              and enhance operational efficiency.
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
                Our Expertise in Industrial Manufacturing
              </h3>
              <p className="text-white my-2">
                We provide a comprehensive suite of services tailored to the
                unique challenges of the Industrial Manufacturing industry
              </p>
              <div className="w-full">
                <Image
                  src={ManufactureImage}
                  alt="oil-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Process Optimization & Lean Manufacturing
                </h4>
                <p className="my-2 text-[#999]">
                  Implementing best practices to reduce waste, improve
                  efficiency, and maximize production output.
                </p>
              </div>
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Supply Chain & Logistics Strategy
                </h4>
                <p className="my-2 text-[#999]">
                  Enhancing procurement, distribution, and inventory management
                  to ensure seamless operations.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-white rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Smart Factory & Industry 4.0 Integration{" "}
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
