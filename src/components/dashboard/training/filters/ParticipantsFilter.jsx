import React, { useState } from "react";

const ageGroups = [
  "All",
  "22-30 years",
  "31-40 years",
  "41-50 years",
  "50+ years",
];
const experienceLevels = [
  "All",
  "Entry Level (0-2 years)",
  "Mid Level (3-7 years)",
  "Senior Level (8+ years)",
];

export default function ParticipantsFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    ageGroup: "All",
    experienceLevel: "All",
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    if (onFilter) onFilter(filters);
  };

  return (
    <div className="flex flex-wrap gap-4 items-end bg-white p-4 rounded-xl shadow mb-6">
      {/* Age Group */}
      <div>
        <label className="block text-xs font-semibold mb-1">Age Group</label>
        <select
          name="ageGroup"
          value={filters.ageGroup}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[160px]"
        >
          {ageGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      {/* Experience Level */}
      <div>
        <label className="block text-xs font-semibold mb-1">
          Experience Level
        </label>
        <select
          name="experienceLevel"
          value={filters.experienceLevel}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[180px]"
        >
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      {/* Search */}
      <div>
        <label className="block text-xs font-semibold mb-1">Search</label>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Participant name..."
          className="border rounded-lg px-3 py-2 min-w-[180px]"
        />
      </div>
      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg ml-auto"
      >
        Apply Filters
      </button>
    </div>
  );
}
