import Image from "next/image";
import React from "react";
import TouristImg from "../../../../../public/assets/hospitality-tourism.jpg";
import TourismImage from "../../../../../public/assets/hospitality-image.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Tourism
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Hospitality & Tourism
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Creating unforgettable journeys, shaping the future of hospitality{" "}
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TouristImg}
            alt="consumer-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              In the vibrant world of hospitality & tourism, BFG Global
              Consulting stands as a trusted partner, committed to driving
              innovation, enhancing guest experiences, & fostering sustainable
              growth. With a deep understanding of market trends, consumer
              preferences, & operational challenges, we deliver tailored
              solutions that empower hotels, resorts, travel agencies, &
              destination management organizations to thrive in todays dynamic
              landscape. From strategic planning & revenue optimization to digital
              transformation & sustainability initiatives, our holistic approach
              enables clients to adapt to changing market dynamics, seize new
              opportunities, & create memorable experiences that inspire loyalty
              & drive success. At BFG Global Consulting, we are dedicated to
              shaping the future of hospitality & tourism, one strategic
              partnership at a time.
            </p>
          </div>
          </div>
          <div className="my-6">
            <Slides />
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 bg-[#041926] p-10 my-8">
            <div className="w-[100%] lg:w-[50%] rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference in the Hospitality & Tourism
                Sector{" "}
              </h3>
              <p className="text-white my-2">
                Experience the hospitality difference with our expert solutions,
                enhancing guest experiences & driving business success in key
                areas
              </p>
              <div className="w-full">
                <Image src={TourismImage} alt="it-image" className="w-full rounded-lg" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Strategic Planning Services
                </h4>
                <p className="my-2 text-[#999]">
                  Tailored strategic planning services to help hotels, resorts,
                  & tourism organizations define their vision, set goals, &
                  develop actionable plans to achieve sustainable growth.
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Revenue Optimization Solutions
                </h4>
                <p className="my-2 text-[#999]">
                  Data-driven revenue management strategies & pricing
                  optimization services to maximize room rates, occupancy
                  levels, & overall revenue for hospitality establishments.
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Market Research & Analysis{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  In-depth market research & competitive analysis services to
                  provide insights into market trends, consumer behavior, &
                  competitor strategies, enabling hospitality businesses to make
                  informed decisions & stay ahead of the competition.
                </p>
              </div>{" "}
            </div>
          </div>
        
      </div>
    </>
  );
};

export default page;
