// components/TrainingTrendChart.js
"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrainingTrendChart = () => {
  // data/trainingTrends.js (create this file or place directly in component)
  const trainingTrendsData = [
    { name: "Jan", "Training Sessions": 35, "Satisfaction Trend": 40 },
    { name: "Feb", "Training Sessions": 40, "Satisfaction Trend": 42 },
    { name: "Mar", "Training Sessions": 20, "Satisfaction Trend": 35 },
    { name: "Apr", "Training Sessions": 50, "Satisfaction Trend": 45 },
    { name: "May", "Training Sessions": 90, "Satisfaction Trend": 55 },
    { name: "Jun", "Training Sessions": 50, "Satisfaction Trend": 30 },
    { name: "Jul", "Training Sessions": 65, "Satisfaction Trend": 50 },
    { name: "Aug", "Training Sessions": 105, "Satisfaction Trend": 72 },
    { name: "Sep", "Training Sessions": 75, "Satisfaction Trend": 65 },
    { name: "Oct", "Training Sessions": 90, "Satisfaction Trend": 70 },
    { name: "Nov", "Training Sessions": 98, "Satisfaction Trend": 105 },
    { name: "Dec", "Training Sessions": 100, "Satisfaction Trend": 107 },
  ];
  // Define colors based on the image
  const trainingSessionsColor = "#FFA500"; // Orange
  const satisfactionTrendColor = "#6B8E23"; // Olive green

return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 lg:text-left mb-4 sm:mb-8">
            Training Sessions & Satisfaction Trend
        </h2>
        <div className="h-[300px] sm:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={trainingTrendsData}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="3 3"
                        stroke="#e0e0e0"
                    />
                    <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        style={{ fontSize: "10px", fill: "#6B7280" }}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        type="number"
                        domain={[0, 110]}
                        tickCount={5}
                        tickFormatter={(value) => `${value}`}
                        tickLine={false}
                        axisLine={false}
                        style={{ fontSize: "10px", fill: "#6B7280" }}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="Training Sessions"
                        stroke={trainingSessionsColor}
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="Satisfaction Trend"
                        stroke={satisfactionTrendColor}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="flex justify-center w-full mt-4">
            <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 items-center">
                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF8900]"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Training Session</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#519111]"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Satisfaction Trend</span>
                </div>
            </div>
        </div>
    </div>
);
};

export default TrainingTrendChart;
