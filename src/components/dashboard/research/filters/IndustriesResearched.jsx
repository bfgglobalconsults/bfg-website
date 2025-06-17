import React from "react";
import dynamic from "next/dynamic";

import ProjectDistribution from "../charts/ProjectDistribution";
import IndustryChart from "../charts/IndustryChart";
import IndustryCard from "../charts/IndustryCard";
// import CountriesServedMap from "../maps/CountryServedMap";
// import CountriesServedMap from "../../technology/maps/CountryServedMap";

const CountriesServedMap = dynamic(() => import("../maps/CountryServedMap"), {
  ssr: false,
});

const allData = [
  {
    id: 1,
    name: "Industries Covered",
    stat: "+2 new Industries",
    value: 7,
    cardColor: "#E8ECFF",
    iconColor: "#4A90E2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Total Research Hours",
    stat: "+8% from last quarter",
    value: 1432,
    cardColor: "#EBFFF3",
    iconColor: "#27AE60",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Industry Experts Consulted",
    stat: "+12 new experts",
    value: 89,
    cardColor: "#F3F0FF",
    iconColor: "#9B51E0",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M17 2V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Research Accuracy Score",
    stat: "+3% Improvement",
    value: "94%",
    cardColor: "#FFF9EB",
    iconColor: "#F2C94C",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path>
      </svg>
    ),
  },
];

const industriesData = [
  {
    name: "Cyber Security",
    projects: 156,
    hours: 456,
    percentages: "18%",
    percentage: 23,
    tailwindColorClass: "bg-[#FC7E99]",
  },
  {
    name: "Retail",
    projects: 145,
    hours: 378,
    percentages: "25%",
    percentage: 18,
    tailwindColorClass: "bg-[#8950FC]",
  },
  {
    name: "Education",
    projects: 87,
    hours: 456,
    percentages: "12%",
    percentage: 48,
    tailwindColorClass: "bg-[#F61D34]",
  },
  {
    name: "Information Technology",
    projects: 98,
    hours: 290,
    percentages: "20%",
    percentage: 48,
    tailwindColorClass: "bg-[#00E096]",
  },
  {
    name: "Healthcare",
    projects: 234,
    hours: 456,
    percentages: "8%",
    percentage: 38,
    tailwindColorClass: "bg-[#39CEF3]",
  },
  {
    name: "FMCG",
    projects: 123,
    hours: 196,
    percentages: "10%",
    percentage: 38,
    tailwindColorClass: "bg-[#FF947A]",
  },
  {
    name: "Fintech",
    projects: 189,
    hours: 176,
    percentages: "8%",
    percentage: 38,
    tailwindColorClass: "bg-[#9AD960]",
  },
];



const researchAreas = [
  {
    name: "Education & EdTech",
    description: "Digital transformation in education",
    percentage: 30,
    tailwindColorClass: "bg-[#3F3F3F]", // Example: will apply `bg-red-500`
  },
  {
    name: "Financial Technology",
    description: "Regulatory changes and innovation",
    percentage: 25,
    tailwindColorClass: "bg-[#3F3F3F]",
  },
  {
    name: "Real Estate & PropTech",
    description: "Post-pandemic market shifts",
    percentage: 22,
    tailwindColorClass: "bg-[#3F3F3F]",
  },
  {
    name: "Retail & E-commerce",
    description: "Omnichannel strategy adoption",
    percentage: 20,
    tailwindColorClass: "bg-[#3F3F3F]",
  },
];

const researchInsight = [
  {
    name: "Healthcare Dominance",
    description:
      "Healthcare remains our largest research sector, driven by digital health innovations and regulatory complaince needs.",
    tailwindColorClass: "bg-[#39CEF3]", // Example: will apply `bg-red-500`
  },
  {
    name: "Emerging Technologies",
    description:
      "Cyber security and fintech research have shown consistent growth, reflecting market demand for security and financial innovation.",
    tailwindColorClass: "bg-[#00E096]",
  },
  {
    name: "Cross-Industry Trends",
    description:
      "Digital transformation themes appear across all industries, indicating universal technology adoption patterns.......",
    tailwindColorClass: "bg-[#FC7E99]",
  },
];

const IndustriesResearched = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col text-left"
            >
              <span
                className="p-3 rounded-full w-fit"
                style={{ backgroundColor: item.iconColor }}
              >
                {item.icon}
              </span>
              <p className="text-3xl font-semibold mt-1 text-left">
                {item.value}
              </p>

              <h3 className="text-lg mt-2 text-left">{item.name}</h3>
              <p className="text-sm text-[#E26015] font-semibold text-left">
                {item.stat}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1  gap-2 my-4">
          <div className="bg-white my-8">
            <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
              Survey Methodology Distribution
            </h2>
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 my-8">
              {industriesData.map((industry, index) => (
                <div key={index} className="rounded-xl shadow-md p-6 ">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {/* Colored Dot */}

                      <span className="text-gray-900 text-md font-medium">
                        {industry.name}
                      </span>
                    </div>
                    <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-base">
                      +{industry.percentages}
                    </span>
                  </div>

                  {/* Bottom Section - Percentage & Progress Bar */}
                  <div>
                    <div>
                      <p className="text-gray-500 text-sm mb-2 font-medium">
                        {industry.projects} projects
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${industry.tailwindColorClass}`}
                        style={{ width: `${industry.percentage}` }}
                      ></div>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mt-2 font-medium">
                        {industry.percentage}% of total research
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* second */}
        </div>

        {/* project data */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  my-8">
          {/* Sub data */}
          <div className="bg-white my-8">
            <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
              Fastest Growing Research Areas
            </h2>
            {/* Top Section */}
            <div className="grid grid-cols-1 gap-6 my-8">
              {researchAreas.map((industry, index) => (
                <div key={index} className="rounded-xl shadow-md p-6 ">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-900 text-md font-medium">
                        {industry.name}
                      </span>
                    </div>
                    <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-base">
                      +{industry.percentage}%
                    </span>
                  </div>
                  <div className=" mb-4">
                    <span className="text-gray-700  p-2  text-base">
                      {industry.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* sub data end */}
          <div>
            <div className="bg-white my-8">
              <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
                Industry Research Insights
              </h2>
              {/* Top Section */}
              <div className="grid grid-cols-1  gap-10 my-8">
                {researchInsight.map((industry, index) => (
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
                      {/* <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-base">
                          {industry.percentages}%
                        </span> */}
                    </div>

                    {/* Bottom Section - Percentage & Progress Bar */}
                    <div>
                      <p className="text-gray-700 p-2 rounded-full text-base">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* project end */}
      </div>
    </>
  );
};

export default IndustriesResearched;
