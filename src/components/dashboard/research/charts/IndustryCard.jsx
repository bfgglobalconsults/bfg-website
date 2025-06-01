// components/IndustryCard.js
"use client";
import React from "react";
// data/industries.js (or directly in your component)
const industriesData = [
    {
      name: 'Cyber Security',
      projects: 156,
      percentage: 15,
      color: 'red', // Tailwind color class suffix, or a hex code
      tailwindColorClass: 'bg-red-500', // Example: will apply `bg-red-500`
    },
    {
      name: 'Healthcare',
      projects: 234,
      percentage: 23,
      color: 'cyan',
      tailwindColorClass: 'bg-cyan-500',
    },
    {
      name: 'Fintech',
      projects: 189,
      percentage: 18,
      color: 'lime',
      tailwindColorClass: 'bg-lime-500',
    },
    {
      name: 'Retail',
      projects: 145,
      percentage: 14,
      color: 'purple',
      tailwindColorClass: 'bg-purple-500',
    },
    {
      name: 'FMCG',
      projects: 123,
      percentage: 12,
      color: 'orange',
      tailwindColorClass: 'bg-orange-500',
    },
    {
      name: 'Information Technology',
      projects: 98,
      percentage: 10,
      color: 'emerald',
      tailwindColorClass: 'bg-emerald-500',
    },
    {
      name: 'Education',
      projects: 87,
      percentage: 8,
      color: 'red', // Reusing red for similar color palette
      tailwindColorClass: 'bg-red-500',
    },
  ];
const IndustryCard = () => {
  return (
    <div className="bg-white ">
      <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
        Industries Researched
      </h2>
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-4">
        {industriesData.map((industry, index) => (
          <div key={index} className="rounded-xl shadow-md p-6 ">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <div
                  className={`w-3 h-3 rounded-full ${industry.tailwindColorClass}`}
                ></div>
                <span className="text-gray-900 text-md font-medium">
                  {industry.name}
                </span>
              </div>
              <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-base">
                {industry.projects} Projects
              </span>
            </div>

            {/* Bottom Section - Percentage & Progress Bar */}
            <div>
              <p className="text-gray-500 text-sm mb-2">
                {industry.percentage}% of total research
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${industry.tailwindColorClass}`}
                  style={{ width: `${industry.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryCard;
