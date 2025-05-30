import React from 'react'

const industriesData = [
  {
    name: "Participant Satisfaction",
    percentages: "96",
    percentage: 96,
    tailwindColorClass: "bg-[#FA5A7D]", // Example: will apply `bg-red-500`
  },
  {
    name: "Program Customization",
    percentages: "96",
    percentage: 96,
    tailwindColorClass: "bg-[#519111]",
  },
  {
    name: "Knowledge Improvement",
    percentages: "100",
    percentage: 100,
    color: "lime",
    tailwindColorClass: "bg-[#8950FC]",
  },
];

const TrainingMetrics = () => {
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
    </>
  );
}

export default TrainingMetrics