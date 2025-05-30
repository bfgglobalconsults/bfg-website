// components/IndustryChart.js
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

const data = [
  { industry: "Healthcare", projects: 240 },
  { industry: "Fintech", projects: 180 },
  { industry: "Cyber Security", projects: 160 },
  { industry: "Retail", projects: 150 },
  { industry: "FMCG", projects: 120 },
  { industry: "IT", projects: 100 },
];

const IndustryChart = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 text-center lg:text-left mb-8">
        Industry Project Comparison
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#D3D3D3"
          />
          <XAxis dataKey="industry" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="projects" fill="#8A8A8A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndustryChart;
