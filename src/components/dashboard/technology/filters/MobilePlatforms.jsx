import React from "react";
const subData = [
  {
    id: 1,
    name: "Mobile Projects",
    value: "19",
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
    name: "Total Downloads",
    value: "3.9M",
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
    name: "Avg Rating",
    value: "4.6",
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
    name: "Developers",
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
];

const sectorData = [
  {
    name: "Android",
    details: "8 apps",
    projects: 7,
    percentage: 27,
    color: "#4D8813", // Tailwind color class suffix, or a hex code
    tailwindColorClass: "bg-[#4D8813]", // Example: will apply
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M19 13H5V20H19V13ZM19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11H19ZM6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9ZM15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z"></path>
      </svg>
    ),
  },
  {
    name: "IOS",
    details: "6 apps",
    projects: 7,
    percentage: 27,
    color: "#585957",
    tailwindColorClass: "bg-[#585957]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M15.778 8.20793C15.3053 8.1711 14.7974 8.28434 14.0197 8.58067C14.085 8.55577 13.2775 8.87173 13.0511 8.95077C12.5494 9.12593 12.1364 9.22198 11.6734 9.22198C11.2151 9.22198 10.7925 9.13042 10.3078 8.96683C10.1524 8.91441 9.99616 8.8564 9.80283 8.7809C9.71993 8.74852 9.41997 8.62947 9.3544 8.60379C8.70626 8.34996 8.34154 8.25434 8.03885 8.26181C6.88626 8.2765 5.79557 8.9421 5.16246 10.0442C3.87037 12.2875 4.58583 16.3428 6.47459 19.075C7.4802 20.5189 8.03062 21.035 8.25199 21.0279C8.4743 21.0183 8.63777 20.9713 9.03567 20.8026C9.11485 20.7689 9.11485 20.7689 9.202 20.7317C10.2077 20.3032 10.9118 20.114 11.9734 20.114C12.9944 20.114 13.6763 20.2997 14.6416 20.7159C14.7302 20.7542 14.7302 20.7542 14.8097 20.7884C15.2074 20.9588 15.3509 20.9962 15.6016 20.9902C15.9591 20.9846 16.4003 20.5726 17.3791 19.1362C17.6471 18.7447 17.884 18.3333 18.0895 17.9168C17.9573 17.8077 17.826 17.6917 17.6975 17.5693C16.4086 16.3408 15.6114 14.6845 15.5895 12.6391C15.5756 11.0186 16.1057 9.61487 16.999 8.45797C16.6293 8.3142 16.2216 8.23805 15.778 8.20793ZM15.9334 6.21398C16.6414 6.26198 18.6694 6.47798 19.9894 8.40998C19.8814 8.46998 17.5654 9.81397 17.5894 12.622C17.6254 15.982 20.5294 17.098 20.5654 17.11C20.5414 17.194 20.0974 18.706 19.0294 20.266C18.1054 21.622 17.1454 22.966 15.6334 22.99C14.1454 23.026 13.6654 22.114 11.9734 22.114C10.2694 22.114 9.74138 22.966 8.33738 23.026C6.87338 23.074 5.76938 21.562 4.83338 20.218C2.92538 17.458 1.47338 12.442 3.42938 9.04597C4.40138 7.35397 6.12938 6.28598 8.01338 6.26198C9.44138 6.22598 10.7974 7.22198 11.6734 7.22198C12.5374 7.22198 14.0854 6.06998 15.9334 6.21398ZM14.7934 4.38998C14.0134 5.32598 12.7414 6.05798 11.5054 5.96198C11.3374 4.68998 11.9614 3.35798 12.6814 2.52998C13.4854 1.59398 14.8294 0.897976 15.9454 0.849976C16.0894 2.14598 15.5734 3.45398 14.7934 4.38998Z"></path>
      </svg>
    ),
  },
  {
    name: "Flutter",
    details: "3 apps",
    projects: 5,
    percentage: 20,
    color: "#4F7EC9",
    tailwindColorClass: "bg-[#4F7EC9]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M9.04304 5.79285 2.83594 12 9.04304 18.2071 10.4573 16.7928 5.66436 12 10.4573 7.20706 9.04304 5.79285ZM14.957 18.2072 21.1641 12.0001 14.957 5.793 13.5427 7.20721 18.3356 12.0001 13.5427 16.793 14.957 18.2072Z"></path>
      </svg>
    ),
  },
  {
    name: "React Native",
    details: "2 apps",
    projects: 5,
    percentage: 20,
    color: "#7F60F9",
    tailwindColorClass: "bg-[#7F60F9]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
      </svg>
    ),
  },
];
const MobilePlatforms = () => {
  return (
    <>
      <div className="px-12">
        {/* Sub data */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  my-8">
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
        {/* Sub data  end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  my-8">
          {sectorData.map((industry, index) => (
            <div key={index} className="border-2 rounded-xl shadow-md p-6" style={{ borderColor: industry.color }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {/* Icon */}
                  <div
                    className={`${industry.tailwindColorClass} p-2 rounded-full`}
                  >
                    {industry.icon}
                  </div>
                  <div>
                    <span className="text-gray-900 text-xl font-medium">
                      {industry.name}
                    </span>
                    <span className="text-gray-500 text-sm block">
                      {industry.details}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-black bg-[#F4F4F4] p-2 rounded-full text-md">
                    {industry.projects}
                  </span>
                  <span className="text-gray-500 text-sm block">Projects</span>
                </div>
              </div>
              <div className="flex items-center justify-between mx-4">
                <p className="text-sm">Usage</p>
                <p className="text-sm">{industry.percentage}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mx-4 my-2">
                <div
                  className="h-2 rounded-full" 
                  style={{ width: `${industry.percentage}%`, backgroundColor: industry.color} }
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobilePlatforms;
