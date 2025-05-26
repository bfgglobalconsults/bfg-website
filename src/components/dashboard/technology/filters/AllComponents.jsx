import React from "react";
import dynamic from 'next/dynamic';
import IndustryServedChart from "../charts/IndustryServedCharts";
import HowItWorksSection from "../charts/WebTechnologiesSection";
import TechStackSection from "../charts/TechStackSection";

const CountriesServedMap = dynamic(() => import("../maps/CountryServedMap"), {
  ssr: false
});

const allData = [
  {
    id: 1,
    name: "Total Digital Projects",
    stat: "+8% from 2024",
    value: 81,
    cardColor: "#FFE2E5",
    iconColor: "#FA5A7D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7 13V17H9V13H7ZM11 7V17H13V7H11ZM15 10V17H17V10H15Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Web/Mobile Applications Developed",
    stat: "+8% from 2024",
    value: 18,
    cardColor: "#FFF4DE",
    iconColor: "#FF947A",
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
    name: "Websites Completed",
    stat: "+8% from 2024",
    value: 63,
    cardColor: "#DCFCE7",
    iconColor: "#3CD856",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Client Retention Rate",
    stat: "+8% from 2024",
    value: "98%",
    cardColor: "#F3E8FF",
    iconColor: "#BF83FF",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path>
      </svg>
    ),
  },
];
const AllComponents = () => {
    return (
      <>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-12">
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
                <p className="text-3xl font-bold mt-1 text-left">{item.value}</p>

                <h3 className="text-lg font-semibold mt-2 text-left">
                  {item.name}
                </h3>
                <p className="text-sm text-[#E26015] font-semibold text-left">{item.stat}</p>
              </div>
            ))}
          </div>
                <div className="w-full flex flex-col lg:flex-row py-8 gap-2 px-12">
                    <div className="w-[100%] lg:w-[50%]">
                        <CountriesServedMap />
                    </div>
                    <div className="w-[100%] lg:w-[50%]">
                        <IndustryServedChart />
                    </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2 px-12">
            <div className="w-[100%] lg:w-[50%]">
              <HowItWorksSection />
          </div>
            <div className="w-[100%] lg:w-[50%]">
              <TechStackSection />
          </div>
          </div>

        </div>
      </>
    );
};

export default AllComponents;
