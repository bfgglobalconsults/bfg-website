import React from "react";

const metrics = [
  { label: "Total Initiatives", value: 2, icon: "🔄" },
  { label: "Optimized", value: 0, icon: "⚙️" },
  { label: "Active", value: 1, icon: "🟢" },
  { label: "Avg Efficiency Gain", value: 7, icon: "📈" },
];

const initiatives = [
  {
    name: "Supply Chain Optimization",
    country: "Nigeria",
    startDate: "3/1/2024",
    investment: "$5000",
    team: ["David Okofor", "Lisa Park", "James Wright"],
    efficiencyGain: "180%",
    status: "In Progress",
    adoptionRate: "92%",
  },
  {
    name: "Manufacturing Process Automation",
    country: "United Kingdom",
    startDate: "3/1/2024",
    investment: "$5000",
    team: ["Alex Thompson", "Maria Garcia", "John Davis"],
    efficiencyGain: "N/A",
    status: "Planning",
    adoptionRate: "N/A",
  },
  {
    name: "Manufacturing Process Automation",
    country: "United Kingdom",
    startDate: "3/1/2024",
    investment: "$5000",
    team: ["Alex Thompson", "Maria Garcia", "John Davis"],
    efficiencyGain: "N/A",
    status: "Planning",
    adoptionRate: "N/A",
  },
];

export default function ProcessReengineeringDashboard() {
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
       
      </div>
      <div className="space-y-8">
        {initiatives.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 relative">
            <div className="absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
              {p.status}
            </div>
            <h2 className="text-xl font-bold mb-1">{p.name}</h2>
            <div className="text-gray-500 mb-2">{p.country}</div>
            <div className="flex justify-between flex-wrap gap-8 mb-2 text-sm">
              <div>
                <span className="font-semibold">Start Date:</span> {p.startDate}
              </div>
              <div>
                <span className="font-semibold">Investment:</span>{" "}
                {p.investment}
              </div>
              {p.efficiencyGain !== "N/A" && (
                <div>
                  <span className="font-semibold">Efficiency Gain:</span>{" "}
                  {p.efficiencyGain}
                </div>
              )}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Process Team:</span>{" "}
              {p.team.join(", ")}
            </div>
            {p.adoptionRate !== "N/A" && (
              <div className="flex items-center gap-2 text-sm mt-2">
                <span className="font-semibold">Process Adoption Rate</span>
                <span className="bg-gray-200 px-2 py-1 rounded-full font-bold">
                  {p.adoptionRate}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
