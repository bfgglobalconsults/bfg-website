import React from "react";
const subData = [
  {
    id: 1,
    name: "Total Projects",
    value: "15",
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
    name: "Monthly Expenditure",
    value: "$",
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
    name: "Avg Uptime",
    value: "99.8%",
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
    name: "Regions",
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

const sectorData = [
  {
    name: "AWS",
    details: "+2 this month",
    projects: 7,
    percentage: 27,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z"></path>
      </svg>
    ),
  },
  {
    name: "Azure",
    details: "+1 this month",
    projects: 5,
    percentage: 20,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M21 9.5V12.5C21 14.9853 16.9706 17 12 17C7.02944 17 3 14.9853 3 12.5V9.5C3 11.9853 7.02944 14 12 14C16.9706 14 21 11.9853 21 9.5ZM3 14.5C3 16.9853 7.02944 19 12 19C16.9706 19 21 16.9853 21 14.5V17.5C21 19.9853 16.9706 22 12 22C7.02944 22 3 19.9853 3 17.5V14.5ZM12 12C7.02944 12 3 9.98528 3 7.5C3 5.01472 7.02944 3 12 3C16.9706 3 21 5.01472 21 7.5C21 9.98528 16.9706 12 12 12Z"></path>
      </svg>
    ),
  },
  {
    name: "Google",
    details: "+2 this month",
    projects: 3,
    percentage: 33,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M5 11H19V5H5V11ZM21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4ZM19 13H5V19H19V13ZM7 15H10V17H7V15ZM7 7H10V9H7V7Z"></path>
      </svg>
    ),
  },
  {
    name: "Others",
    details: "No change",
    projects: 7,
    percentage: 20,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
      >
        <path d="M14 9V4H5V20H11.0563C11.3838 20.4171 11.7803 20.7847 12.236 21.0848L13.626 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8V9H14ZM12 11H21V16.949C21 17.9397 20.4987 18.8648 19.6641 19.4144L16.5 21.4978L13.3359 19.4144C12.5013 18.8648 12 17.9397 12 16.949V11ZM14 16.949C14 17.2652 14.1616 17.5634 14.4358 17.744L16.5 19.1032L18.5642 17.744C18.8384 17.5634 19 17.2652 19 16.949V13H14V16.949Z"></path>
      </svg>
    ),
  },
];
const CloudDeployments = () => {
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
            <div
              key={index}
              className="rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {/* Icon */}
                  <div className="bg-[#EDEDED] p-2 rounded-full">
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
                  <span className="text-gray-500 text-sm block">
                    Projects
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mx-4">
                <p className="text-sm">Usage</p>
                <p className="text-sm">{industry.percentage}%</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mx-4 my-2">
                <div
                  className={`h-2 rounded-full bg-[#575757] `}
                  style={{ width: `${industry.percentage}%` }}
                ></div>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CloudDeployments;
