import React from "react";

const IndustryComponent = () => {
  return (
    <>
      <div>
        <div className="w-full flex gap-8">
          <div className="w-[20%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Portfolio
            </h3>
            <p className="text-white text-lg">
              We combine industry expertise with analytical insights to help
              clients achieve growth, drive innovation, and navigate complex
              business landscapes.
            </p>
            <button className="my-8 px-6 py-4 border-2 border-white text-lg font-semibold">
              Explore
            </button>
          </div>
          <div className="w-[40%]">
            <p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold">
              Consumer and Retail Market
            </p>
            <p className="text-lg py-4 mx-4  font-semibold">
              Financial Services
            </p>
            <p className="text-lg py-4 mx-4 border-t  border-white font-semibold">
              Hospitality and Tourism
            </p>
            <p className="text-lg py-4 mx-4 border-t border-b border-white font-semibold">
              Real Estate
            </p>
            <p className="text-lg py-4 mx-4  border-b border-white font-semibold">
              Technology and Finance
            </p>
            <p className="text-lg py-4 mx-4  border-b border-white font-semibold">
              Government and Non-for-Profit
            </p>
          </div>
          <div className="w-[40%]">
            <h3 className="text-2xl text-white font-semibold my-3">
              Case Studies
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryComponent;
