// components/IndustryServedChart.jsx
"use client"; // Recharts uses client-side rendering

import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "NGOs", value: 30, color: "#FF7043" }, // Orange from screenshot
  { name: "Healthcare", value: 25, color: "#C8EEFF" }, // Light Blue from screenshot (approx)
  { name: "Real Estate", value: 20, color: "#A06EEA" }, // Purple from screenshot
  { name: "Fintech", value: 15, color: "#00D1FF" }, // Cyan from screenshot
  { name: "Logistics", value: 10, color: "#88D14E" }, // Green from screenshot
];

const IndustryServedChart = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-12">
          Industry Served
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Side: Chart */}
          <div className="w-full min-w-[600px] h-[400px] md:h-[500px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  className="rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {/* Rest of the labels code remains the same */}
                {data.map((entry, index) => {
                  const RADIAN = Math.PI / 180;
                  const radius = entry.name === "Healthcare" || entry.name === "Real Estate" 
                    ? 145 
                    : 180;
                  const x =
                    Math.cos(
                      -RADIAN *
                        ((360 / 100) *
                          (data
                            .slice(0, index)
                            .reduce((acc, curr) => acc + curr.value, 0) +
                            entry.value / 2))
                    ) *
                      radius +
                    250;
                  const y =
                    Math.sin(
                      -RADIAN *
                        ((360 / 100) *
                          (data
                            .slice(0, index)
                            .reduce((acc, curr) => acc + curr.value, 0) +
                            entry.value / 2))
                    ) *
                      radius +
                    250;

                  const textAnchor = x > 250 ? "start" : "end";
                  const labelOffset = x > 250 ? 10 : -10;

                  return (
                    <g key={`label-${index}`}>
                      <line
                        x1={x}
                        y1={y}
                        x2={x + labelOffset}
                        y2={y}
                        stroke={entry.color}
                        strokeWidth={1}
                      />
                      <text
                        x={x + labelOffset * 1}
                        y={y}
                        fill={entry.color}
                        textAnchor={textAnchor}
                        dominantBaseline="middle"
                        className="font-semibold text-lg"
                      >
                        {entry.value}%
                      </text>
                      <text
                        x={x + labelOffset * 2}
                        y={y + 20}
                        fill="#6b7280"
                        textAnchor={textAnchor}
                        dominantBaseline="middle"
                        className="text-sm"
                      >
                        {entry.name}
                      </text>
                    </g>
                  );
                })}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryServedChart;

