import React from "react";

const metrics = [
  { label: "Average ROI", value: "283%", icon: "📈" },
  { label: "Total Investment", value: "5000", icon: "💰" },
  { label: "Total Returns", value: "16.4M", icon: "💵" },
  { label: "Completed Projects", value: 2, icon: "✅" },
];

const roiDistribution = [
  { label: "200%+ ROI", value: 2 },
  { label: "150-199% ROI", value: 0 },
  { label: "100-149% ROI", value: 0 },
  { label: "50-99% ROI", value: 0 },
];
const topProjects = [
  {
    name: "Customer Experience Redesign",
    country: "Australia",
    roi: "320%",
    returns: "5.2k",
  },
  {
    name: "Digital Banking Transformation",
    country: "United Kingdom",
    roi: "245%",
    returns: "5.0k",
  },
];
const projectDetails = [
  {
    name: "Customer Experience Redesign",
    country: "Nigeria",
    investment: "$5000",
    returns: "$6000",
    roi: "245%",
    netGain: "$1000",
    progress: "92%",
  },
  {
    name: "Digital Banking Transformation",
    country: "Nigeria",
    investment: "$5000",
    returns: "$6000",
    roi: "245%",
    netGain: "$1000",
    progress: "92%",
  },
];

export default function ClientROIDashboard() {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Strategy and Operations Transformations
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-start"
          >
            <span className="text-2xl mb-2">{m.icon}</span>
            <div className="text-3xl font-semibold">{m.value}</div>
            <div className="text-gray-500 text-sm mt-1">{m.label}</div>
          </div>
        ))}
        <button className="ml-auto bg-white border px-4 py-2 rounded-lg shadow flex items-center gap-2 h-fit self-start">
          <span role="img" aria-label="filter">
            💹
          </span>{" "}
          Client ROI
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* ROI Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">ROI Distribution</h2>
          {roiDistribution.map((r) => (
            <div key={r.label} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span>{r.label}</span>
                <span className="font-semibold">{r.value} Projects</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${r.value * 50}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Top Performing Projects */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Top Performing Projects</h2>
          {topProjects.map((p) => (
            <div
              key={p.name}
              className="mb-4 flex justify-between items-center"
            >
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-gray-500 text-xs">{p.country}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">{p.roi}</div>
                <div className="text-gray-400 text-xs">{p.returns}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project ROI Details */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="font-semibold mb-4">Project ROI Details</h2>
        {projectDetails.map((p, i) => (
          <div key={i} className="mb-6">
            <div className="flex flex-wrap gap-8 mb-2 text-sm">
              <div>
                <span className="font-semibold">{p.name}</span> ({p.country})
              </div>
              <div>
                <span className="font-semibold">Investment:</span>{" "}
                {p.investment}
              </div>
              <div>
                <span className="font-semibold">Returns:</span> {p.returns}
              </div>
              <div>
                <span className="font-semibold">ROI:</span> {p.roi}
              </div>
              <div>
                <span className="font-semibold">Net Gain:</span> {p.netGain}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: p.progress }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              ROI Progress: {p.progress}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
