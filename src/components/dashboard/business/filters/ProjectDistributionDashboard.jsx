import React from "react";

const metrics = [
  { label: "Total Projects", value: 5, icon: "📁" },
  { label: "Transformations", value: 3, icon: "🔄" },
  { label: "Re-engineering", value: 2, icon: "⚙️" },
  { label: "Completed", value: 2, icon: "✅" },
];

const projectTypes = [
  { label: "Operations Transformation", value: 45, percent: 58 },
  { label: "Project Re-engineering", value: 78, percent: 42 },
];
const projectStatus = [
  { label: "Completed", value: 2, percent: 40 },
  { label: "In Progress", value: 2, percent: 40 },
  { label: "Planning", value: 2, percent: 40 },
];
const geoDist = [
  { label: "United Kingdom", value: 2, percent: 40 },
  { label: "Nigeria", value: 2, percent: 40 },
  { label: "Australia", value: 1, percent: 20 },
];
const quarterlyDist = [
  { label: "Q1 2024", value: 1, percent: 40 },
  { label: "Q2 2024", value: 1, percent: 40 },
  { label: "Q3 2024", value: 1, percent: 40 },
  { label: "Q4 2024", value: 1, percent: 40 },
];

export default function ProjectDistributionDashboard() {
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
            📊
          </span>{" "}
          Project Distribution
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Project Type Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Project Type Distribution</h2>
          {/* Donut chart placeholder */}
          <div className="flex justify-center items-center mb-4">
            <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              Donut Chart
            </div>
          </div>
          {projectTypes.map((p) => (
            <div key={p.label} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{p.label}</span>
                <span>{p.value} projects</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${p.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Project Status Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Project Status Distribution</h2>
          {projectStatus.map((p) => (
            <div key={p.label} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{p.label}</span>
                <span>{p.value} projects</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${p.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Geographic Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Geographic Distribution</h2>
          {geoDist.map((g) => (
            <div key={g.label} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{g.label}</span>
                <span>{g.value} projects</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${g.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Quarterly Project Distribution */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Quarterly Project Distribution</h2>
          {quarterlyDist.map((q) => (
            <div key={q.label} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{q.label}</span>
                <span>{q.value} Project</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${q.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
