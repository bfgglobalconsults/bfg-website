import React from "react";

const metrics = [
  { label: "Countries Served", value: 3, icon: "🌍" },
  { label: "Total Projects", value: 5, icon: "📁" },
  { label: "Global Avg ROI", value: "283%", icon: "📈" },
  { label: "Total Investment", value: "$1278", icon: "💰" },
];

const countries = [
  {
    name: "United Kingdom",
    projects: 2,
    completed: 1,
    inProgress: 1,
    planning: 0,
    avgROI: "25%",
    satisfaction: "98%",
    investment: "$5000",
    recent: [
      { name: "Digital Banking Transformation", status: "Completed" },
      { name: "Manufacturing Process Automation", status: "Planning" },
    ],
  },
  {
    name: "Nigeria",
    projects: 2,
    completed: 1,
    inProgress: 1,
    planning: 0,
    avgROI: "25%",
    satisfaction: "96%",
    investment: "$5000",
    recent: [
      { name: "Digital Banking Transformation", status: "Completed" },
      { name: "Manufacturing Process Automation", status: "Planning" },
    ],
  },
  {
    name: "Australia",
    projects: 2,
    completed: 1,
    inProgress: 1,
    planning: 0,
    avgROI: "25%",
    satisfaction: "98%",
    investment: "$5000",
    recent: [
      { name: "Digital Banking Transformation", status: "Completed" },
      { name: "Manufacturing Process Automation", status: "Planning" },
    ],
  },
];

const regionalPerformance = [
  { label: "United Kingdom", roi: "25%", volume: 2, investment: "$6.6M" },
  { label: "Nigeria", roi: "25%", volume: 2, investment: "$6.6M" },
  { label: "Australia", roi: "25%", volume: 1, investment: "$6.6M" },
];

export default function CountriesDashboard() {
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
            <span className="text-2xl my-2">{m.icon}</span>
            <div className="text-3xl font-semibold">{m.value}</div>
            <div className="text-gray-500 text-sm my-1">{m.label}</div>
          </div>
        ))}
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {countries.map((c, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold my-2">
              {c.name}{" "}
              <span className="text-sm text-gray-400">
                ({c.projects} projects)
              </span>
            </h2>
            <div className="flex gap-4 my-2 text-sm">
              <div>
                Completed: <span className="font-bold">{c.completed}</span>
              </div>
              <div>
                In Progress: <span className="font-bold">{c.inProgress}</span>
              </div>
              <div>
                Planning: <span className="font-bold">{c.planning}</span>
              </div>
            </div>
            <div className="flex gap-4 my-2 text-sm">
              <div>
                Avg ROI: <span className="font-bold">{c.avgROI}</span>
              </div>
              <div>
                Satisfaction:{" "}
                <span className="font-bold">{c.satisfaction}</span>
              </div>
              <div>
                Investment: <span className="font-bold">{c.investment}</span>
              </div>
            </div>
            <div className="my-2 text-sm">
              <span className="font-semibold">Recent Projects:</span>{" "}
              {c.recent.map((r) => `${r.name} (${r.status})`).join(", ")}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-6 my-8">
        <h2 className="font-semibold mb-4">Regional Performance Comparison</h2>
        <div className="mb-4">
          <div className="font-semibold mb-2">Average ROI by Country</div>
          {regionalPerformance.map((r) => (
            <div key={r.label} className="mb-2">
              <div className="flex justify-between text-sm my-2">
                <span>{r.label}</span>
                <span>{r.roi}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: r.roi }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-semibold mb-2">Project Volume by Country</div>
        {regionalPerformance.map((r) => (
          <div key={r.label} className="my-2">
            <div className="flex justify-between text-sm my-1">
              <span>{r.label}</span>
              <span>{r.volume} projects</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${r.volume * 40}%` }}
              ></div>
            </div>
          </div>
        ))}
        <div className="font-semibold mb-2 mt-4">Investment Distribution</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {regionalPerformance.map((r) => (
            <div
              key={r.label}
              className="bg-gray-100 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold my-1">{r.label}</div>
              <div className="text-lg">{r.investment}</div>
              <div className="text-xs text-gray-500">51.6% of total</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
