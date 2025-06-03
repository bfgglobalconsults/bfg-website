"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

const data = [
  { name: "M and E", value: 24, color: "#FF7043" },
  { name: "Surveys", value: 25, color: "#A06EEA" },
  { name: "Academic", value: 35, color: "#00D1FF" },
  { name: "Reports", value: 16, color: "#88D14E" },
];

const ProjectDistribution = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderCustomizedLabel = (entry, index) => {
    const RADIAN = Math.PI / 180;
    const radius = isMobile ? 120 : 180;
    const midAngle = entry.startAngle + (entry.endAngle - entry.startAngle) / 2;
    const x = entry.cx + radius * Math.cos(-midAngle * RADIAN);
    const y = entry.cy + radius * Math.sin(-midAngle * RADIAN);

    const textAnchor = x > entry.cx ? "start" : "end";
  const labelOffset = x > entry.cx ? (isMobile ? 8 : 15) : (isMobile ? -8 : -15);
  

     // Responsive outer radius for connection line
     const connectionRadius = isMobile ? 80 : 140;

    return (
      <g key={`label-${index}`}>
        {/* Connection line */}
        <line
          x1={entry.cx + connectionRadius * Math.cos(-midAngle * RADIAN)}
          y1={entry.cy + connectionRadius * Math.sin(-midAngle * RADIAN)}
          x2={x}
          y2={y}
          stroke={entry.color}
          strokeWidth={isMobile ? 1.5 : 2}
        />
        {/* Horizontal line */}
        <line
          x1={x}
          y1={y}
          x2={x + labelOffset}
          y2={y}
          stroke={entry.color}
          strokeWidth={isMobile ? 1.5 : 2}
        />
        {/* Percentage text */}
        <text
          x={x + labelOffset + (textAnchor === "start" ? 8 : -8)}
          y={y - (isMobile ? 6 : 8)}
          fill={entry.color}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          className={`font-bold ${isMobile ? "text-sm" : "text-lg"}`}
        >
          {entry.value}%
        </text>
        {/* Label text */}
        <text
          x={x + labelOffset + (textAnchor === "start" ? 8 : -8)}
          y={y + (isMobile ? 8 : 12)}
          fill="#6b7280"
          textAnchor={textAnchor}
          dominantBaseline="middle"
          className={`font-medium ${isMobile ? "text-xs" : "text-sm"}`}
        >
          {entry.name}
        </text>
      </g>
    );
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Chart Container with Shadow */}
          <div className="relative">
            <div className="w-[350px] lg:w-[500px] h-[400px]">
              <h2 className="text-xl font-bold text-gray-900 lg:text-left ">
                Project Distribution
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={isMobile ? 60 : 80}
                    outerRadius={isMobile ? 80 : 140}
                    paddingAngle={3}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="white"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDistribution;



