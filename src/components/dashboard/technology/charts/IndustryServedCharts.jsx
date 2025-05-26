"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "NGOs", value: 30, color: "#FF7043" },
  { name: "Healthcare", value: 25, color: "#C8EEFF" },
  { name: "Real Estate", value: 20, color: "#A06EEA" },
  { name: "Fintech", value: 15, color: "#00D1FF" },
  { name: "Logistics", value: 10, color: "#88D14E" },
];

const IndustryServedChart = () => {
  const renderCustomizedLabel = (entry, index) => {
    const RADIAN = Math.PI / 180;
    const radius = 180;
    const midAngle = entry.startAngle + (entry.endAngle - entry.startAngle) / 2;
    const x = entry.cx + radius * Math.cos(-midAngle * RADIAN);
    const y = entry.cy + radius * Math.sin(-midAngle * RADIAN);

    const textAnchor = x > entry.cx ? "start" : "end";
    const labelOffset = x > entry.cx ? 15 : -15;

    return (
      <g key={`label-${index}`}>
        {/* Connection line */}
        <line
          x1={entry.cx + 140 * Math.cos(-midAngle * RADIAN)}
          y1={entry.cy + 140 * Math.sin(-midAngle * RADIAN)}
          x2={x}
          y2={y}
          stroke={entry.color}
          strokeWidth={2}
        />
        {/* Horizontal line */}
        <line
          x1={x}
          y1={y}
          x2={x + labelOffset}
          y2={y}
          stroke={entry.color}
          strokeWidth={2}
        />
        {/* Percentage text */}
        <text
          x={x + labelOffset + (textAnchor === "start" ? 8 : -8)}
          y={y - 8}
          fill={entry.color}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          className="font-bold text-lg"
        >
          {entry.value}%
        </text>
        {/* Label text */}
        <text
          x={x + labelOffset + (textAnchor === "start" ? 8 : -8)}
          y={y + 12}
          fill="#6b7280"
          textAnchor={textAnchor}
          dominantBaseline="middle"
          className="text-sm font-medium"
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
            <div className="w-[400px] lg:w-[500px] h-[400px]">
              <h2 className="text-xl font-bold text-gray-900 ">
                Industry Served
              </h2>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
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

export default IndustryServedChart;
