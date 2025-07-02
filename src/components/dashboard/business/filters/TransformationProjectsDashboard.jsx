import React from "react";

const metrics = [
  { label: "Total Projects", value: 3, icon: "📁" },
  { label: "Completed", value: 2, icon: "✅" },
  { label: "In Progress", value: 1, icon: "⏳" },
  { label: "Total Budget", value: 7, icon: "💰" },
];

const projects = [
  {
    name: "Digital Banking Transformation",
    country: "United Kingdom",
    startDate: "1/15/2024",
    endDate: "1/15/2024",
    team: ["Sarah Johnson", "Mike Chen", "Emma Wilson"],
    budget: "$200",
    roi: "245%",
    status: "Completed",
    satisfaction: "98%",
  },
  {
    name: "Customer Experience Redesign",
    country: "Australia",
    startDate: "2/10/2024",
    endDate: "8/15/2024",
    team: ["Rachel Smith", "Tom Anderson", "Sophie Brown"],
    budget: "$500",
    roi: "320%",
    status: "Completed",
    satisfaction: "95%",
  },
  {
    name: "HR Digital Transformation",
    country: "Nigeria",
    startDate: "4/20/2024",
    endDate: "",
    team: ["Grace Adebayo", "Peter Kim", "Anna Johnson"],
    budget: "$1000",
    roi: "150%",
    status: "In Progress",
    satisfaction: "89%",
  },
];

export default function TransformationProjectsDashboard() {
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
            🗂️
          </span>{" "}
          Transformation Projects
        </button>
      </div>
      <div className="space-y-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 relative">
            <div className="absolute top-6 right-6 px-4 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
              {p.status}
            </div>
            <h2 className="text-xl font-bold mb-1">{p.name}</h2>
            <div className="text-gray-500 mb-2">{p.country}</div>
            <div className="flex flex-wrap gap-8 mb-2 text-sm">
              <div>
                <span className="font-semibold">Start Date:</span> {p.startDate}
              </div>
              {p.endDate && (
                <div>
                  <span className="font-semibold">End Date:</span> {p.endDate}
                </div>
              )}
              <div>
                <span className="font-semibold">Budget:</span> {p.budget}
              </div>
              <div>
                <span className="font-semibold">ROI:</span> {p.roi}
              </div>
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Team:</span> {p.team.join(", ")}
            </div>
            <div className="flex items-center gap-2 text-sm mt-2">
              <span className="font-semibold">Stakeholder Satisfaction</span>
              <span className="bg-gray-200 px-2 py-1 rounded-full font-bold">
                {p.satisfaction}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
