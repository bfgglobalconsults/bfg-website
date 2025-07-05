import React from "react";

const allData = [
  {
    id: 1,
    name: "Total Projects",
    value: 3,
    iconColor: "#4A90E2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M18.0326 16.6184L22.3137 20.8995L20.8995 22.3137L16.6184 18.0326C15.0789 19.2639 13.1258 20 11 20C7.46456 20 4.40684 17.964 2.93475 15H6H9L7.69597 17.1734C8.67997 17.7009 9.80489 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 10.305 17.8988 9.63365 17.7104 9H19.7772C19.923 9.64318 20 10.3126 20 11C20 13.1258 19.2639 15.0789 18.0326 16.6184ZM19.0652 7H13L14.304 4.82662C13.32 4.29912 12.1951 4 11 4C7.1325 4 4 7.1325 4 11C4 11.695 4.10117 12.3663 4.2896 13H2.22279C2.07698 12.3568 2 11.6874 2 11C2 6.0275 6.0275 2 11 2C14.5354 2 17.5932 4.03597 19.0652 7Z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Completed",
    value: 2,
    iconColor: "#27AE60",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "In Progress",
    value: 1,
    cardColor: "#F3F0FF",
    iconColor: "#9B51E0",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M3 11H21V13H3V11ZM18 18V21H16V18H13L17 14L21 18H18ZM8 18V21H6V18H3L7 14L11 18H8ZM18 6H21L17 10L13 6H16V3H18V6ZM8 6H11L7 10L3 6H6V3H8V6Z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Total Budget",
    value: 7,
    iconColor: "#F2C94C",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="rgba(255,255,255,1)"
      >
        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
      </svg>
    ),
  },
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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col text-left"
          >
            <span
              className="p-3 rounded-full w-fit"
              style={{ backgroundColor: item.iconColor }}
            >
              {item.icon}
            </span>
            <p className="text-3xl font-semibold mt-1 text-left">
              {item.value}
            </p>

            <h3 className="text-lg mt-2 text-left">{item.name}</h3>
            <p className="text-sm text-[#E26015] font-semibold text-left">
              {item.stat}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-8">
        {projects.map((p, i) => (
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
