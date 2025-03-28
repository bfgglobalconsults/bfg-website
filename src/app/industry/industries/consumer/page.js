import Image from "next/image";
import React from "react";
import ConsumerImg from "../../../../../public/assets/consumers.png";
import ConsumerImage from "../../../../../public/assets/consumer-image.png";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Market
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Consumer & Retail Market
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Elevating experiences, driving growth in consumer & retail{" "}
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={ConsumerImg}
            alt="consumer-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              In the ever-evolving landscape of the consumer & retail market, BFG
              Global Consulting offers tailored strategies & solutions to
              navigate complexities, capitalize on emerging trends, & drive
              sustainable growth. With a keen understanding of consumer behavior,
              market dynamics, & industry trends, we empower businesses to
              enhance clients experiences, optimize operations, & stay
              competitive in an increasingly competitive marketplace. Our
              expertise spans across the entire value chain, from market
              research & brand positioning to supply chain optimization &
              digital transformation, ensuring our clients thrive in todays
              dynamic consumer-driven economy.{" "}
            </p>
          </div>
           </div>
          <div className="my-6">
            <Slides />
          </div>
         

          <div className="w-full flex flex-col lg:flex-row bg-[#041926] lg:p-10 rounded-xl gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] p-[40px]  rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference in the Retail Market{" "}
              </h3>
              <p className="text-white my-2">
                Transform your retail business with our expert solutions,
                delivering impactful results in key area{" "}
              </p>
              <div className="w-full">
                <Image src={ConsumerImage} alt="it-image" className="w-full" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] p-[40px] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  E-commerce & Digital Transformation
                </h4>
                <p className="my-2 text-[#999]">
                  The rise of e-commerce has revolutionized the way consumers
                  shop, presenting both challenges & opportunities for
                  retailers. Our digital experts assist clients in developing
                  robust e-commerce strategies, optimizing online platforms, &
                  harnessing the power of digital marketing to drive traffic &
                  conversions.{" "}
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Market Insights & Analysis{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  Our team of experts conducts comprehensive market research &
                  analysis to uncover valuable insights that drive informed
                  decision-making. By examining consumer preferences, purchasing
                  patterns, & competitor strategies, we help our clients
                  identify opportunities for growth & differentiation.{" "}
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Brand Positioning & Strategy{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  In todays crowded marketplace, establishing a strong brand
                  identity is essential for success. We work closely with our
                  clients to develop compelling brand strategies that resonate
                  with their target audience & set them apart from competitors.
                  From brand positioning to messaging & visual identity, we help
                  build brands that leave a lasting impression.{" "}
                </p>
              </div>{" "}
            </div>
          </div>
        
      </div>
    </>
  );
};

export default page;
