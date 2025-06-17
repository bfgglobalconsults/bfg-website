import React from "react";
import dynamic from 'next/dynamic';

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
    name: "Average Research Projects",
    stat: "+12% from last quarter",
    value: 156,
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
        <path d="M18.0326 16.6184L22.3137 20.8995L20.8995 22.3137L16.6184 18.0326C15.0789 19.2639 13.1258 20 11 20C7.46456 20 4.40684 17.964 2.93475 15H6H9L7.69597 17.1734C8.67997 17.7009 9.80489 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 10.305 17.8988 9.63365 17.7104 9H19.7772C19.923 9.64318 20 10.3126 20 11C20 13.1258 19.2639 15.0789 18.0326 16.6184ZM19.0652 7H13L14.304 4.82662C13.32 4.29912 12.1951 4 11 4C7.1325 4 4 7.1325 4 11C4 11.695 4.10117 12.3663 4.2896 13H2.22279C2.07698 12.3568 2 11.6874 2 11C2 6.0275 6.0275 2 11 2C14.5354 2 17.5932 4.03597 19.0652 7Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Completed Projects",
    stat: "+8% from last quarter",
    value: 1247,
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
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Avg. Days to Complete",
    stat: "+15% from last quarter",
    value: 18,
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
        <path d="M3 11H21V13H3V11ZM18 18V21H16V18H13L17 14L21 18H18ZM8 18V21H6V18H3L7 14L11 18H8ZM18 6H21L17 10L13 6H16V3H18V6ZM8 6H11L7 10L3 6H6V3H8V6Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Client Satisfaction Score",
    stat: "+22% from last quarter",
    value: "4.8",
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
        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
      </svg>
    ),
  },
];

const industriesData = [
  {
    name: "Market Analysis",
    projects: 45,
    percentage: 35,
    color: "red", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-red-500", // Example: will apply `bg-red-500`
  },
  {
    name: "Consumer Behavior",
    projects: 32,
    percentage: 25,
    color: "cyan",
    tailwindColorClass: "bg-cyan-500",
  },
  {
    name: "Competitive Intelligence",
    projects: 28,
    percentage: 22,
    color: "lime",
    tailwindColorClass: "bg-lime-500",
  },
  {
    name: "Product Research",
    projects: 23,
    percentage: 18,
    color: "purple",
    tailwindColorClass: "bg-purple-500",
  },
  
];

const projectDistribution = [
  {
    name: "Completed",
    percentages: "78",
    percentage: 78,
    tailwindColorClass: "bg-[#3F3F3F]", 
  },
  {
    name: "In Progress",
    percentages: "18",
    percentage: 18,
    tailwindColorClass: "bg-[#3F3F3F]",
  },
  {
    name: "Planning Phase",
    percentages: "4",
    percentage: 4,
    tailwindColorClass: "bg-[#3F3F3F]",
  },
  
];
  

const ResearchedProjects = () => {
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
          {/* Sub data */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  my-8">
            <div>
              <div className="bg-white ">
                <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
                  Project Status Distribution
                </h2>
                {/* Top Section */}
                <div className="grid grid-cols-1  gap-10 my-8">
                  {projectDistribution.map((industry, index) => (
                    <div key={index} className="rounded-xl shadow-md p-6 ">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {/* Colored Dot */}
                          
                          <span className="text-gray-900 text-md font-medium">
                            {industry.name}
                          </span>
                        </div>
                        <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-base">
                          {industry.percentages}%
                        </span>
                      </div>

                      {/* Bottom Section - Percentage & Progress Bar */}
                      <div>
                       
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
            </div>
            <div>
              <div className="bg-white ">
                <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
                  Training Delivery Breakdown
                </h2>
                {/* Top Section */}
                <div className="grid grid-cols-1  gap-2 my-4">
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
            </div>
          </div>
        </div>
      </>
    );
};

export default ResearchedProjects;
