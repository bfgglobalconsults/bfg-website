import React from 'react'
const subData = [
  {
    id: 1,
    name: "Industries Served",
    value: "5",
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
  {
    id: 2,
    name: "Total Revenue",
    value: "$",
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
    name: "Avg Satisfaction",
    value: "4.7",
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
];

const sectorData = [
  {
    name: "NGOs",
    details: "Non-profit organizations focused on social impact",
    projects: 18,
    percentage: 30,
    duration: "4.2 months",
    topProjects: [
      "Educational Platform", "Donation Management", "Volunteer Portal",
    ],
    Ratings: 4.8,
    color: "#FF8900", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#FF8900]", // Example: will apply `bg-red-500`
  },
  {
    name: "Healthcare",
    details: "Medical institutions and healthcare providers",
    projects: 15,
    percentage: 25,
    duration: "6.1 months",
    topProjects: [
      "Patient Management System", "Telemedicine App", "Medical Records",
    ],
    Ratings: 4.9,
    color: "#CDE7FF", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#CDE7FF]", // Example: will apply `bg-red-500`
  },
  {
    name: "Fintech",
    details: "Financial technology and banking solutions",
    projects: 9,
    percentage: 25,
    duration: "5.3 months",
    topProjects: ["Payment Gateway", "Trading Platform", "Crypto Wallet"],
    Ratings: 4.7,
    color: "#39CEF3",
    tailwindColorClass: "bg-[#39CEF3]",
  },
  {
    name: "Real Estate",
    details: "Property management and real estate platforms",
    projects: 12,
    percentage: 25,
    duration: "3.8 months",
    topProjects: ["Property Listing", "CRM System", "Virtual Tours"],
    Ratings: 4.6,
    color: "#A939F3",
    tailwindColorClass: "bg-[#A939F3]",
  },
  {
    name: "Logistics",
    details: "Supply chain and transportation solutions",
    projects: 6,
    percentage: 25,
    duration: "4.5 months",
    topProjects: ["Fleet Management", "Inventory System", "Route Optimization"],
    Ratings: 4.5,
    color: "#97D85E",
    tailwindColorClass: "bg-[#97D85E]",
  },
  
];
const IndustryServed = () => {
  return (
    <>
      <div className="px-12">
        {/* Sub data */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  my-8">
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
        {/* Sub data  end*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  my-8">
          {sectorData.map((industry, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md p-6 hover:bg-[#E2601533] "
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {/* Colored Dot */}
                  <div
                    className={`w-3 h-3 rounded-full ${industry.tailwindColorClass}`}
                  ></div>
                  <div>
                    <span className="text-gray-900 text-xl font-medium">
                      {industry.name}
                    </span>
                    <span className="text-gray-500 text-sm block">
                      {industry.details}
                    </span>
                  </div>
                </div>
                <span className="text-black bg-[#F4F4F4] p-2 rounded-full text-sm">
                  {industry.percentage}% of portfolio
                </span>
              </div>

              {/* Bottom Section - Percentage & Progress Bar */}
              <div className="flex items-center justify-between">
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg">
                    {industry.projects}
                  </p>
                  <span className="text-gray-500  text-sm">Projects</span>
                </div>
                <div className="">
                  <p className="text-black font-semibold text-lg">$</p>
                  <span className="text-gray-500  text-sm">Revenue</span>
                </div>
              </div>
              {/* Two bottom section */}
              <div className="flex items-center justify-between">
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg">
                    {industry.duration}
                  </p>
                  <span className="text-gray-500  text-sm">Avg Duration</span>
                </div>
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg">
                    {industry.Ratings}
                  </p>
                  <span className="text-gray-500  text-sm">Rating</span>
                </div>
              </div>
              {/* Two bottom section end */}
              <p className="text-black font-semibold text-lg mx-4">Top Projects:</p>
              {/* Third bottom section */}
              <div className="my-4 flex flex-wrap gap-2 mx-4">
                {industry.topProjects.map((platform) => (
                  <span
                    key={platform}
                    className="flex items-center text-center border border-[#0000004D] text-gray-800 p-2 rounded-full text-xs font-medium shadow-sm hover:bg-white transition-colors cursor-pointer"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              {/* Third bottom section end */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IndustryServed