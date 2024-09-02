import Image from "next/image";
import React from "react";
import RealEstateImg from "../../../../../public/assets/realestate-img.png";
import RealImage from "../../../../../public/assets/realestate-image.png";

const page = () => {
  return (
    <div>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Real Estate
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Real Estate
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Unlocking possibilities, building dreams in real estate.{" "}
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={RealEstateImg}
            alt="real-estate"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              In the dynamic realm of real estate, BFG Global Consulting serves
              as a strategic ally, empowering clients to navigate complexities,
              capitalize on opportunities, & achieve their investment
              objectives. With a profound underst&ing of market dynamics,
              regulatory l&scapes, & emerging trends, we offer tailored
              solutions that drive value across the real estate spectrum. From
              market analysis & asset valuation to development strategy &
              portfolio optimization, our multidisciplinary approach enables
              clients to make informed decisions, mitigate risks, & maximize
              returns. Whether its commercial, residential, or mixed-use
              properties, we leverage our expertise & industry insights to help
              clients unlock the full potential of their real estate
              investments, contributing to vibrant communities & sustainable
              growth.{" "}
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Areas
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Areas where we make a difference in the Real Estate Sector{" "}
              </h3>
              <p className="text-white my-2">
                Build a strong foundation with our expert real estate solutions,
                making a lasting impact in key areas{" "}
              </p>
              <div className="w-full">
                <Image src={RealImage} alt="it-image" className="w-full" />
              </div>
            </div>
            <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Market Research & Analysis
                </h4>
                <p className="my-2 text-[#999]">
                  Comprehensive market research & analysis services to provide
                  insights into local market trends, property values,
                  demographic data, & competitor analysis to inform investment
                  decisions & strategic planning{" "}
                </p>
              </div>
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Asset Valuation & Appraisal
                </h4>
                <p className="my-2 text-[#999]">
                  Property valuation & appraisal services for real estate
                  investors, lenders, & developers to determine the fair market
                  value of properties for acquisition, financing, investment
                  analysis, & financial reporting purposes.{" "}
                </p>
              </div>{" "}
              <div className="w-full shadow-lg bg-[#f4f4f4] rounded-xl p-7">
                <h4 className="font-semibold text-xl text-[#333333]">
                  Investment Advisory Services{" "}
                </h4>
                <p className="my-2 text-[#999]">
                  Personalized investment advisory services for real estate
                  investors & property owners, offering portfolio analysis,
                  asset allocation strategies, & investment recommendations to
                  maximize returns & mitigate risks.{" "}
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
