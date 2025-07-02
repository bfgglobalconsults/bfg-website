import React from 'react';

const allData = [
  {
    id: 1,
    name: "Total Participants Trained",
    stat: "+12% from last quarter",
    value: "2,847",
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
    name: "Average Engagement Rate",
    stat: "+0.3 Improvement",
    value: "89%",
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
    name: "Completion Rate",
    stat: "+5% Improvement",
    value: "94%",
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
    name: "Total Training Hours",
    stat: "+18% from last quarter",
    value: "1,890",
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

const ageDist = [
  { label: '22-30 years', value: 996, percent: 35 },
  { label: '31-40 years', value: 1116, percent: 42 },
  { label: '41-50 years', value: 512, percent: 18 },
  { label: '50+ years', value: 143, percent: 5 },
];
const expLevels = [
  { label: 'Entry Level (0-2 years)', value: 797, percent: 28 },
  { label: 'Mid Level (3-7 years)', value: 1281, percent: 45 },
  { label: 'Senior Level (8+ years)', value: 769, percent: 27 },
];
const engagement = [
  { label: 'Active Participation', value: '89%' },
  { label: 'Assignment Completion', value: '94%' },
  { label: 'Knowledge Retention', value: '87%' },
  { label: 'Skill Application', value: '82%' },
];
const satisfaction = [
  { label: 'Content Quality', value: 4.8 },
  { label: 'Instructor Effectiveness', value: 4.7 },
  { label: 'Learning Environment', value: 4.6 },
];
const learningOutcomes = [
  { label: 'Knowledge Retention', value: '92%', color: 'text-blue-600' },
  { label: 'Skill Application', value: '87%', color: 'text-green-600' },
  { label: 'Behavior Change', value: '78%', color: 'text-purple-600' },
];
const growthMetrics = [
  { label: 'Repeat Participation', value: '67%', change: '+12% from last quarter', color: 'text-blue-600' },
  { label: 'Referrals Generated', value: '45%', change: '+8% from last quarter', color: 'text-green-600' },
  { label: 'Career Advancement', value: '34%', change: 'within 6 months', color: 'text-purple-600' },
];

export default function ParticipantsDashboard() {
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
        {/* Participant Demographics */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Participant Demographics
          </h2>
          <div className="mb-4">
            <div className="mb-2">Age Distribution</div>
            {ageDist.map((a) => (
              <div key={a.label} className="rounded-xl shadow-md p-6 mb-2">
                <div className="flex justify-between text-sm my-2 ">
                  <span>{a.label}</span>
                  <span className="bg-gray-100 p-2 rounded-full">
                    {a.value} ({a.percent}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${a.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="mb-2">Experience Level</div>
            {expLevels.map((e) => (
              <div key={e.label} className="rounded-xl shadow-md p-6 mb-2">
                <div className="flex justify-between text-sm my-2">
                  <span>{e.label}</span>
                  <span className="bg-gray-100 p-2 rounded-full">
                    {e.value} ({e.percent}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${e.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Engagement & Performance Metrics */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Engagement & Performance Metrics
          </h2>
          {engagement.map((e) => (
            <div key={e.label} className="rounded-xl shadow-md p-6 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{e.label}</span>
                <span>{e.value}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: e.value }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Satisfaction Breakdown */}
        <div className="bg-white">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Satisfaction Breakdown
          </h2>
          {satisfaction.map((s) => (
            <div key={s.label} className="rounded-xl shadow-md p-6 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{s.label}</span>
                <span>{s.value}/5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(s.value / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Learning Outcomes */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Learning Outcomes
          </h2>
          {learningOutcomes.map((l) => (
            <div key={l.label} className="rounded-xl shadow-md p-6 mb-4">
              <div className="flex  flex-col my-2 text-center">
                <p className={l.color + " font-bold text-xl"}>{l.value}</p>

                <p className="text-sm">{l.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Growth Metrics */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            Growth Metrics
          </h2>
          {growthMetrics.map((g) => (
            <div key={g.label} className="rounded-xl shadow-md p-6 mb-4">
              <div className="flex flex-col  mb-1">
                <span className="text-sm">{g.label}</span>
                <span className={g.color + " font-bold text-xl"}>
                  {g.value}
                </span>
              </div>
              <div className={g.color + " text-xs font-semibold mt-1"}>
                {g.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 