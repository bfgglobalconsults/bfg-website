// components/TechStackSection.jsx
"use client"; // Recharts uses client-side rendering

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const cloudDeploymentData = [
  { name: "AWS", projects: 7 },
  { name: "Azure", projects: 5 },
  { name: "Others", projects: 3 },
];

const mobilePlatforms = ["Android", "iOS", "Flutter", "React Native"];

const TechStackSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Cloud Deployments Section (with Bar Chart) */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            Cloud Deployments
          </h2>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={cloudDeploymentData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  className="text-sm"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0, "dataMax + 2"]}
                  className="text-sm"
                />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.1)" }}
                  formatter={(value, name) => [`${value} Projects`, name]}
                />
                <Bar
                  dataKey="projects"
                  fill="#E26015" // Dark green from your palette
                  radius={[10, 10, 0, 0]} // Rounded top corners for bars
                  barSize={40} // Adjust bar thickness
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mobile Platforms Section */}
        <div>
          <h2 className="text-xl  font-bold text-gray-900 mb-8">
            Mobile Platforms
          </h2>
          <div className="flex flex-wrap gap-4">
            {mobilePlatforms.map((platform) => (
              <span
                key={platform}
                className="bg-[#E2601533] text-gray-800 px-6 py-3 rounded-full text-lg font-medium shadow-sm hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
