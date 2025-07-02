import React from 'react';

const allData = [
  {
    id: 1,
    name: "Customization Projects",
    stat: "+12% from last quarter",
    value: "189",
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
    name: "Avg Turnaround Days",
    stat: "+5 Improvement",
    value: "7.2",
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
    name: "Client Approval Rate",
    stat: "+0.3% Improvement",
    value: "89%",
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
    name: "Customization Quality Score",
    stat: "+5% from last quarter",
    value: "4.7",
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

const customizationCategories = [
  { label: 'Content Adaptation', value: 81, percent: 45, rating: 5.0 },
  { label: 'Industry Specific Requirements', value: 55, percent: 29, rating: 5.0 },
  { label: 'Delivery Method Customization', value: 34, percent: 18, rating: 5.0 },
  { label: 'Assessment Customization', value: 19, percent: 10, rating: 5.0 },
];
const processSteps = [
  { label: 'Requirement Gathering', days: 2.1, success: 95 },
  { label: 'Design & Planning', days: 1.8, success: 95 },
  { label: 'Content Development', days: 2.5, success: 92 },
  { label: 'Review & Approval', days: 0.8, success: 94 },
];
const efficiencyMetrics = [
  { label: 'On-Time Delivery', value: 96 },
  { label: 'First-Time Approval', value: 89 },
  { label: 'Client Satisfaction', value: 94 },
];
const successMetrics = [
  { label: 'Approval Rate', value: '89%' },
  { label: 'Avg. Turnaround (Days)', value: 7.2 },
  { label: 'Quality Score', value: 4.7 },
];
const bestPractices = [
  { label: 'Early Stakeholder Engagement', note: '+23% faster approval' },
  { label: 'Modular Content Design', note: '+18% efficiency gain' },
  { label: 'Iterative Feedback Loops', note: '+15% quality improvement' },
];
const recentProjects = [
  { name: 'TechCorp Solutions', client: 'TechCorp Solutions', type: 'Technology', status: 24, duration: 245, rating: 5.0, revenue: '$100' },
  { name: 'TechCorp Solutions', client: 'TechCorp Solutions', type: 'Technology', status: 24, duration: 245, rating: 5.0, revenue: '$100' },
  { name: 'TechCorp Solutions', client: 'TechCorp Solutions', type: 'Technology', status: 24, duration: 245, rating: 5.0, revenue: '$100' },
  { name: 'TechCorp Solutions', client: 'TechCorp Solutions', type: 'Technology', status: 24, duration: 245, rating: 5.0, revenue: '$100' },
];

export default function CustomizationDashboard() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Customization Categories */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Customization Categories
          </h2>
          {customizationCategories.map((c) => (
            <div key={c.label} className=" rounded-xl shadow p-6 mb-4">
              <div className="flex justify-between items-center my-2">
                <span>{c.label}</span>
                <span className="font-semibold">{c.value} projects</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${c.percent}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>{c.percent}% of customizations</span>
                <span className="flex items-center gap-1 text-yellow-500 font-bold">
                  {c.rating}{" "}
                  <span role="img" aria-label="star">
                    ⭐
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Customization Process Workflow */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Customization Process Workflow
          </h2>
          {processSteps.map((p) => (
            <div key={p.label} className=" rounded-xl shadow p-6 mb-4">
              <div className="flex justify-between items-center my-2">
                <span>{p.label}</span>
                <span className="font-semibold">{p.days} days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${p.success}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 flex justify-between">
                <span>Success Rate: {p.success}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {/* Efficiency Metrics */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Efficiency Metrics
          </h2>
          {efficiencyMetrics.map((e) => (
            <div key={e.label} className=" rounded-xl shadow p-6 mb-4">
              <div className="flex justify-between text-sm my-2">
                <span>{e.label}</span>
                <span>{e.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${e.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Success Metrics */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Success Metrics
          </h2>
          {successMetrics.map((s) => (
            <div key={s.label} className=" rounded-xl shadow p-6 mb-4">
              <div className="flex justify-between text-sm my-2">
                <span>{s.label}</span>
                <span className="font-bold">{s.value}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Best Practices */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Best Practices
          </h2>
          {bestPractices.map((b) => (
            <div key={b.label} className=" rounded-xl shadow p-6 mb-4">
              <div className="flex flex-col text-sm my-2">
                <span className="text-md">{b.label}</span>
                <span className="text-green-600 font-bold">{b.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
} 