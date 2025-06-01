// components/IndustryCard.js
"use client";
import React from "react";
import Image1 from "../../../../../public/assets/highlight-img.png";
import Image2 from "../../../../../public/assets/growth-img.png"
import Image from "next/image";

// data/industries.js (or directly in your component)
const industriesData = [
  {
    name: "Performance Highlight",
    img: Image1,
    desc: "Average implementation time reduced by 30% through our streamlined methodology.",
  },
  {
    name: "Growth Trend",
    img: Image2,
    desc:"Consistent quarterly growth with 245% ROI achievement across all transformation projects.",
    
  },
];
const KeyInsights = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-12">
      <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
        Key Insights
      </h2>
      {/* Top Section */}
      <div className="grid grid-cols-1  gap-6 p-6 my-4">
        {industriesData.map((industry, index) => (
          <div key={index} className="rounded-xl shadow-md p-6 ">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <Image src={industry.img} alt={industry.name} className="w-6 h-6 rounded-full object-fit" />
                <span className="text-gray-900 text-md font-medium">
                  {industry.name}
                </span>
              </div>
              
            </div>

            {/* Bottom Section - Percentage & Progress Bar */}
            <div>
              <p className="text-gray-500 text-sm mb-2">
                {industry.desc}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyInsights;
