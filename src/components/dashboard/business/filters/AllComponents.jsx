import React from "react";
import dynamic from 'next/dynamic';
import ProjectDistribution from "../charts/ProjectDistribution";
import MetricsBarChart from "../charts/MetricsBarChart";
import KeyInsights from "../charts/KeyInsights";
// import CountriesServedMap from "../../technology/maps/CountryServedMap";

const CountriesServedMap = dynamic(() => import("../maps/CountryServedMap"), {
  ssr: false
});

const allData = [
  {
    id: 1,
    name: "Transformation Projects",
    stat: "+18% from last quarter",
    value: 98,
    cardColor: "#E2FCFF",
    iconColor: "#5ACFFA",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Process Re-engineering",
    stat: "+25% from last quarter",
    value: 334,
    cardColor: "#DEE0FF",
    iconColor: "#7E7AFF",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM6.00008 6.00008V9.5148L3.5148 12.0001L6.00008 14.4854V18.0001H9.5148L12.0001 20.4854L14.4854 18.0001H18.0001V14.4854L20.4854 12.0001L18.0001 9.5148V6.00008H14.4854L12.0001 3.5148L9.5148 6.00008H6.00008ZM12.0001 16.0001C9.79094 16.0001 8.00008 14.2092 8.00008 12.0001C8.00008 9.79094 9.79094 8.00008 12.0001 8.00008C14.2092 8.00008 16.0001 9.79094 16.0001 12.0001C16.0001 14.2092 14.2092 16.0001 12.0001 16.0001ZM12.0001 14.0001C13.1047 14.0001 14.0001 13.1047 14.0001 12.0001C14.0001 10.8955 13.1047 10.0001 12.0001 10.0001C10.8955 10.0001 10.0001 10.8955 10.0001 12.0001C10.0001 13.1047 10.8955 14.0001 12.0001 14.0001Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Client ROI",
    stat: "+30% from last quarter",
    value: 1225,
    cardColor: "#FCF6DC",
    iconColor: "#D8AE3C",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Change Management Success",
    stat: "+14% from last quarter",
    value: "37",
    cardColor: "#FFE8E8",
    iconColor: "#FF8383",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z"></path>
      </svg>
    ),
  },
];

const subData = [
  {
    id: 1,
    name: "Stakeholder Satisfaction Score",
    value: "96%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,137,0,1)"
      >
        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Avg. Implementation Weeks",
    value: "98%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(148,57,246,1)"
      >
        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Digital Maturity Improvement",
    value: "100%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(81,145,17,1)"
      >
        <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-4">
            <div className="">
              <CountriesServedMap />
              <MetricsBarChart />
            </div>
            <div className="">
                        <ProjectDistribution />
                        <KeyInsights />
            </div>
          </div>
          {/* <div className="w-full flex flex-col lg:flex-row py-8 gap-2">
            <div className="bg-white drop-shadow-md p-4 w-[100%] lg:w-[50%]">
              <IndustryCard />
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <IndustryChart />
            </div>
          </div> */}
        </div>
      </>
    );
};

export default AllComponents;
