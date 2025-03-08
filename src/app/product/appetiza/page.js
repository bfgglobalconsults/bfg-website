import React from "react";
import Appetizer from "../../../../public/assets/appetiza-bg.png";
import ProductImage from "../../../../public/assets/product-banner.png";
import ProductExpand from "../../../../public/assets/product-expand.png";

import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="lg:p-20 lg:mt-[150px]">
        <div className="border-4 border-[#E45F11] rounded-3xl">
          <div className="p-12">
            <div className="w-[250px] h-[200px] lg:w-[400px] lg:h-[250px] mx-auto">
              <Image
                src={Appetizer}
                alt="appetizer-product"
                className="w-full h-full object-fit"
              />
            </div>
            <p className="font-sans text-3xl lg:text-5xl font-semibold text-center my-4">
              Elevate Your Business with the Power of Appetiza.ai
            </p>
            <p className="text-[#999] text-center my-2">
              Intelligent AI-Driven Business Development Planning Software for
              African and Global Enterprises
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#041926] p-6 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="lg:w-[60%]">
            <div className="">
              <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                Enterprises
              </span>
            </div>
            <h3 className="text-white font-semibold text-3xl lg:text-4xl my-4">
              Tailored for African Enterprises
            </h3>
            <div className="flex gap-2 items-center my-4">
              <span className="p-2 w-10 h-10 rounded-full bg-[#E26015] text-white text-lg font-semibold text-center">
                1
              </span>
              <span className="text-[#999] text-lg">
                Specialized solutions designed to address the unique challenges
                & opportunities of the African market
              </span>
            </div>
            <div className="flex gap-2 items-center my-4">
              <span className="w-10 h-10 p-2 rounded-full bg-[#E26015] text-white text-lg font-semibold text-center">
                2
              </span>
              <span className="text-[#999] text-lg">
                Leverage local market expertise to develop effective expansion &
                optimization plans
              </span>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <div className="">
              <Image
                src={ProductImage}
                alt="product-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-12">
        
        <div className="flex flex-col lg:flex-row lg:items-center gap-1">
          <div className="lg:w-[40%]">
                <div className="lg:w-[400px] h-[400px]">
                  <Image
                    src={ProductExpand}
                    alt="product-image"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:w-[60%]">
                <div className="my-4">
                  <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                    Expansion
                  </span>
                </div>
                <h3 className="text-[#333] font-semibold text-2xl lg:text-4xl my-4">
                  Facilitate Global Expansion
                </h3>
                <div className="flex gap-2 items-center my-4">
                  <span className="w-10 h-10 p-2 rounded-full bg-[#E26015] text-white text-lg font-semibold text-center">
                    1
                  </span>
                  <span className="text-[#999] text-lg">
                   Seamlessly scale your business beyond Africa with comprehensive internationalization support
                  </span>
                </div>
                <div className="flex gap-2 items-center my-4">
                  <span className="w-10 h-10 p-2 rounded-full bg-[#E26015] text-white text-lg font-semibold text-center">
                    2
                  </span>
                  <span className="text-[#999] text-lg">
                    Navigate complex regulatory environments & cultural differences with expert guidance
                  </span>
                </div>
              </div>
              
            </div>
          </div>
    </>
  );
};

export default page;
