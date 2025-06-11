import React from 'react'
const subData = [
  {
    id: 1,
    name: "Countries",
    value: "6",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(250,90,125,1)"
      >
        <path d="M11 5.07089C7.93431 5.5094 5.5094 7.93431 5.07089 11H7V13H5.07089C5.5094 16.0657 7.93431 18.4906 11 18.9291V17H13V18.9291C16.0657 18.4906 18.4906 16.0657 18.9291 13H17V11H18.9291C18.4906 7.93431 16.0657 5.5094 13 5.07089V7H11V5.07089ZM3.05493 11C3.51608 6.82838 6.82838 3.51608 11 3.05493V1H13V3.05493C17.1716 3.51608 20.4839 6.82838 20.9451 11H23V13H20.9451C20.4839 17.1716 17.1716 20.4839 13 20.9451V23H11V20.9451C6.82838 20.4839 3.51608 17.1716 3.05493 13H1V11H3.05493ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Total Clients",
    value: "54",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,148,122,1)"
      >
        <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
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
        <path d="M12.0001 22.0001C7.02956 22.0001 3.00012 17.9707 3.00012 13.0001C3.00012 8.02956 7.02956 4.00012 12.0001 4.00012C16.9707 4.00012 21.0001 8.02956 21.0001 13.0001C21.0001 17.9707 16.9707 22.0001 12.0001 22.0001ZM12.0001 20.0001C15.8661 20.0001 19.0001 16.8661 19.0001 13.0001C19.0001 9.13412 15.8661 6.00012 12.0001 6.00012C8.13412 6.00012 5.00012 9.13412 5.00012 13.0001C5.00012 16.8661 8.13412 20.0001 12.0001 20.0001ZM13.0001 13.0001H16.0001V15.0001H11.0001V8.00012H13.0001V13.0001ZM1.74707 6.2826L5.2826 2.74707L6.69682 4.16128L3.16128 7.69682L1.74707 6.2826ZM18.7176 2.74707L22.2532 6.2826L20.839 7.69682L17.3034 4.16128L18.7176 2.74707Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Avg Project Value",
    value: "$",
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

const sectorData = [
  {
    name: "India",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#8950FC", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#8950FC]", // Example: will apply `bg-red-500`
  },
  {
    name: "United Kingdom",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#6993FF", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#6993FF]", // Example: will apply `bg-red-500`
  },
  {
    name: "Canada",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#F64E60", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#F64E60]", // Example: will apply `bg-red-500`
  },
  {
    name: "Australia",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#39CEF3", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#39CEF3]", // Example: will apply `bg-red-500`
  },
  {
    name: "United States",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#FF8900", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#FF8900]", // Example: will apply `bg-red-500`
  },
  {
    name: "Nigeria",
    projects: 25,
    clients: 18,
    zone: "UTC +5:30",
    duration: "4.2 months",
    topCities: ["Mumbai", "Bangalore", "Delhi"],
    keyIndustries: ["Health Care", "Fintech", "NGOs"],
    color: "#0BB783", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#0BB783]", // Example: will apply `bg-red-500`
  },
];
const CountryServed = () => {
  return (
    <>
      <div className="px-12">
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
        {/* Sub data end */}
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
                  </div>
                </div>
                <span className="text-black bg-[#F4F4F4] p-2 rounded-full text-sm">
                  {industry.zone}
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
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg text-right">
                    $
                  </p>
                  <span className="text-gray-500 text-sm text-right">
                    Revenue
                  </span>
                </div>
              </div>
              {/* Two bottom section */}
              <div className="flex items-center justify-between">
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg">
                    {industry.clients}
                  </p>
                  <span className="text-gray-500  text-sm">Clients</span>
                </div>
                <div className="mx-4">
                  <p className="text-black font-semibold text-lg text-right">
                    $
                  </p>
                  <span className="text-gray-500 text-sm text-right">
                    Avg Project Value
                  </span>
                </div>
              </div>
              {/* Two bottom section end */}
              <p className="text-black font-semibold text-md mx-4">Top Cities:</p>
              {/* Third bottom section */}
              <div className="my-4 flex flex-wrap gap-2 mx-4">
                {industry.topCities.map((platform) => (
                  <div
                    key={platform}
                    className="flex gap-2 items-center text-center border border-[#0000004D] text-gray-800 p-2 rounded-full text-xs font-medium shadow-sm hover:bg-white transition-colors cursor-pointer"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.4037 6L11 12.8944V20H13V12.8944L17.5963 6H6.4037Z"></path>
                      </svg>
                    </span>
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
              {/* Third bottom section end */}
              <p className="text-black font-semibold text-md my-2 mx-4">
                Key Industries:
              </p>

              <div className="my-4 flex flex-wrap gap-2 mx-4">
                {industry.keyIndustries.map((platform) => (
                  <span
                    key={platform}
                    className="flex items-center text-center bg-[#F4F4F4] text-gray-800 p-2 rounded-full text-xs font-medium shadow-sm transition-colors cursor-pointer"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountryServed;