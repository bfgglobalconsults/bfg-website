"use client"; 

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const industriesData = [
  {
    name: "Client ROI Post - Engagement",
    percentages: 96,
    percentage: 96,
    tailwindColorClass: "bg-[#FA5A7D]",
  },
  {
    name: "Stakeholder Satisfaction",
    percentages: 98,
    percentage: 98,
    tailwindColorClass: "bg-[#519111]",
  },
  {
    name: "Change Management Success",
    percentages: 84,
    percentage: 84,
    tailwindColorClass: "bg-[#8950FC]",
  },
  {
    name: "Digital Maturity Improvement",
    percentages: 70,
    percentage: 70,
    tailwindColorClass: "bg-[#39CEF3]",
  },
  
];

const metricsData = [
  {
    name: "Client ROI Post - Engagement",
    value: 230, 
  },
  {
    name: "Stakeholder Satisfaction",
    value: 90, 
  },
  {
    name: "Change Management Success",
    value: 135, 
  },
  {
    name: "Digital Maturity Improvement",
    value: 200, 
  },
];

const MetricsBarChart = () => {
  return (
    <section className="text-black py-2 shadow-lg rounded-lg">
      {" "}
      {/* Dark background */}
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-left text-black my-12">
          Key Performance Metrics
        </h2>

        <div className="w-full h-[400px] md:h-[500px] lg:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={metricsData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 80,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#4a4a4a"
                vertical={false}
              />{" "}
              {/* Lighter grid lines for dark background */}
              <XAxis
                dataKey="name"
                stroke="#a0a0a0"
                angle={-45}
                textAnchor="end"
                interval={0}
                height={100}
                tick={{ fill: "#a0a0a0", fontSize: 12 }}
              />
              <YAxis
                stroke="#a0a0a0" // Lighter text for Y-axis labels
                tick={{ fill: "#a0a0a0", fontSize: 12 }} // Ensure tick labels are visible
                domain={[0, "dataMax + 50"]} // Adjust Y-axis domain
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.1)" }} // Light cursor for dark background
                contentStyle={{
                  backgroundColor: "#333",
                  border: "none",
                  color: "#fff",
                }} // Dark tooltip background
                itemStyle={{ color: "#fff" }} // White text for tooltip items
                formatter={(value, name, props) => [
                  `${value}`,
                  props.payload.name,
                ]}
              />
              <Bar
                dataKey="value"
                fill="#888888" // Gray color for bars
                radius={[10, 10, 0, 0]} // Rounded top corners
                barSize={50} // Adjust bar thickness
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-4 p-3">
        {industriesData.map((industry, index) => (
          <div key={index} className="rounded-xl shadow-md p-6 ">
            <div className="flex items-center  mb-4">
              <div className="flex items-center space-x-2">
                {/* Colored Dot */}
                <div
                  className={`w-3 h-3 rounded-full ${industry.tailwindColorClass}`}
                ></div>
                <span className="text-gray-900 text-md font-medium">
                 {industry.name}
                </span>
              </div>
              <span className="text-gray-700 bg-[#F4F4F4] p-2 rounded-full text-sm">
                {industry.percentages} %
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
    </section>
  );
};

export default MetricsBarChart;
