import React from 'react'

const industriesData = [
  {
    name: "Corporate Training",
    session: "65 sessions",
    percentage: 66,
    tailwindColorClass: "bg-[#39CEF3]", // Example: will apply `bg-red-500`
  },
  {
    name: "Program Customization",
    session: "23 sessions",
    percentage: 23,
    tailwindColorClass: "bg-[#519111]",
  },
  {
    name: "Leadership Training",
    session: "10 sessions",
    percentage: 10,
    tailwindColorClass: "bg-[#8950FC]",
  },
];

const TrainingBreakdown = () => {
  return (
    <>
      <div className="bg-white">
        <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
          Training Performance Metrics
        </h2>
        {/* Top Section */}
        <div className="grid grid-cols-1  gap-6 my-4">
          {industriesData.map((industry, index) => (
            <div key={index} className="rounded-xl shadow-md p-6 ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {/* Colored Dot */}
                  <div
                    className={`w-6 h-6 rounded-full ${industry.tailwindColorClass}`}
                  ></div>
                  <span className="text-gray-900 text-md font-medium">
                    {industry.name}
                  </span>
                </div>
                <div>
                  <span className="text-black font-semibold text-base">
                    {industry.session}
                  </span>
                  <p className="text-gray-500 text-sm mb-2">
                    {industry.percentage}% of total 
                  </p>
                </div>
              </div>

              {/* Bottom Section - Percentage & Progress Bar */}
              {/* <div>
                <p className="text-gray-500 text-sm mb-2">
                  {industry.percentage}% of total research
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${industry.tailwindColorClass}`}
                    style={{ width: `${industry.percentage}%` }}
                  ></div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrainingBreakdown;