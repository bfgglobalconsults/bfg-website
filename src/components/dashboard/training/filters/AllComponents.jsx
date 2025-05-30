import React from "react";
import dynamic from 'next/dynamic';

// import ProjectDistribution from "../charts/ProjectDistribution";
// import IndustryChart from "../charts/IndustryChart";
// import IndustryCard from "../charts/IndustryCard";
import TrainingMetrics from "../charts/TrainingMetrics";
import TrainingBreakdown from "../charts/TrainingBreakdown";
import TrainingTrendChart from "../charts/TrainingTrendChart";
// import CountriesServedMap from "../../technology/maps/CountryServedMap";

const CountriesServedMap = dynamic(() => import("../../technology/maps/CountryServedMap"), {
  ssr: false
});

const allData = [
  {
    id: 1,
    name: "Training Sessions",
    stat: "+12% from last quarter",
    value: 98,
    cardColor: "#E8ECFF",
    iconColor: "#3D5AFE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Total Participants",
    stat: "+25% from last quarter",
    value: 334,
    cardColor: "#FFEAE5",
    iconColor: "#FF6F61",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Training Hours",
    stat: "+30% from last quarter",
    value: 1225,
    cardColor: "#FFF9E5",
    iconColor: "#F9A825",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Client Organizations",
    stat: "+14% from last quarter",
    value: "37",
    cardColor: "#E5F6F5",
    iconColor: "#00897B",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
      </svg>
    ),
  },
];

const subData = [
  {
    id: 1,
    name: "Participant Satisfaction Score",
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
    name: "Programs Customized per Client",
    value: "98%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(60,216,86,1)"
      >
        <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Knowledge Increase (Pre/Post)",
    value: "100%",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(191,131,255,1)"
      >
        <path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path>
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
          <div className="w-full flex flex-col lg:flex-row py-8 gap-2">
            <div className="w-[100%] lg:w-[50%]">
              <CountriesServedMap />
            </div>
            <div className="bg-white drop-shadow-md p-4 w-[100%] lg:w-[50%]">
              <TrainingMetrics />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row py-8 gap-2">
                    <div className="w-[100%] lg:w-[60%]">
                        <TrainingTrendChart />
            </div>
                    <div className="bg-white drop-shadow-md p-4 w-[100%] lg:w-[40%]">
                        <TrainingBreakdown />
            </div>
          </div>
        </div>
      </>
    );
};

export default AllComponents;
