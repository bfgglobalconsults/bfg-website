import React from "react";
import dynamic from 'next/dynamic';

import ProjectDistribution from "../charts/ProjectDistribution";
import IndustryChart from "../charts/IndustryChart";
import IndustryCard from "../charts/IndustryCard";
// import CountriesServedMap from "../../technology/maps/CountryServedMap";

const CountriesServedMap = dynamic(() => import("../../technology/maps/CountryServedMap"), {
  ssr: false
});

const allData = [
  {
    id: 1,
    name: "Market Research Projects",
    stat: "+12% from last quarter",
    value: 24,
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
    name: "Academic Research Projects",
    stat: "+8% from last quarter",
    value: 1023,
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
        <path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM6 7V9H14V7H6ZM6 11V13H14V11H6ZM6 15V17H11V15H6Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Surveys & Focus Groups",
    stat: "+15% from last quarter",
    value: 789,
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
    name: "Reports & Dashboards",
    stat: "+22% from last quarter",
    value: "1453",
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
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
      </svg>
    ),
  },
];

const subData = [
  {
    id: 1,
    name: "Client Decision Support Score",
    value: "87.6%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(250,90,125,1)"
      >
        <path d="M11 5.07089C7.93431 5.5094 5.5094 7.93431 5.07089 11H7V13H5.07089C5.5094 16.0657 7.93431 18.4906 11 18.9291V17H13V18.9291C16.0657 18.4906 18.4906 16.0657 18.9291 13H17V11H18.9291C18.4906 7.93431 16.0657 5.5094 13 5.07089V7H11V5.07089ZM3.05493 11C3.51608 6.82838 6.82838 3.51608 11 3.05493V1H13V3.05493C17.1716 3.51608 20.4839 6.82838 20.9451 11H23V13H20.9451C20.4839 17.1716 17.1716 20.4839 13 20.9451V23H11V20.9451C6.82838 20.4839 3.51608 17.1716 3.05493 13H1V11H3.05493ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Repeat Research Engagements",
    value: "95%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,148,122,1)"
      >
        <path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Avg. Turnaround Days",
    value: "20",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(60,216,86,1)"
      >
        <path d="M12.0001 22.0001C7.02956 22.0001 3.00012 17.9707 3.00012 13.0001C3.00012 8.02956 7.02956 4.00012 12.0001 4.00012C16.9707 4.00012 21.0001 8.02956 21.0001 13.0001C21.0001 17.9707 16.9707 22.0001 12.0001 22.0001ZM12.0001 20.0001C15.8661 20.0001 19.0001 16.8661 19.0001 13.0001C19.0001 9.13412 15.8661 6.00012 12.0001 6.00012C8.13412 6.00012 5.00012 9.13412 5.00012 13.0001C5.00012 16.8661 8.13412 20.0001 12.0001 20.0001ZM13.0001 13.0001H16.0001V15.0001H11.0001V8.00012H13.0001V13.0001ZM1.74707 6.2826L5.2826 2.74707L6.69682 4.16128L3.16128 7.69682L1.74707 6.2826ZM18.7176 2.74707L22.2532 6.2826L20.839 7.69682L17.3034 4.16128L18.7176 2.74707Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Industries Researched",
    value: "7",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(191,131,255,1)"
      >
        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
      </svg>
    ),
  },
];
const AllComponents = () => {
    return (
      <>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col text-left"
                style={{ backgroundColor: item.cardColor }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  my-8">
            {subData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg p-4 flex gap-3 items-center text-left"
                style={{ backgroundColor: item.cardColor }}
              >
                <div className="flex-shrink-0">
                  <span
                    className="p-3 rounded-full inline-flex"
                    style={{ backgroundColor: item.iconColor }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-semibold mt-1 text-left">
                    {item.value}
                  </p>

                  <h3 className="text-md mt-2 text-left">{item.name}</h3>
                  {/* <p className="text-sm text-[#E26015] font-semibold text-left">
                  {item.name}
                </p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col lg:flex-row py-8 gap-2">
            <div className="w-[100%] lg:w-[50%]">
              <CountriesServedMap />
            </div>
            <div className="w-[100%] lg:w-[50%] ">
              <ProjectDistribution />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row py-8 gap-2">
            <div className="bg-white drop-shadow-md p-4 w-[100%] lg:w-[50%]">
              <IndustryCard />
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <IndustryChart />
            </div>
          </div>
        </div>
      </>
    );
};

export default AllComponents;
