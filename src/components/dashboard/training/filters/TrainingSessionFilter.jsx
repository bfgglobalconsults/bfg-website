import React, { useState } from "react";

const sessionTypes = [
  "All",
  "Corporate Training",
  "Skills Development",
  "Leadership Training",
  "Technical Training",
];
const deliveryMethods = [
  "All",
  "In-Person Training",
  "Virtual Training",
  "Leadership Training",
];

export default function TrainingSessionFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    sessionType: "All",
    deliveryMethod: "All",
    search: "",
    dateRange: "", // Placeholder
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
      {/* Session Type */}
      <div>
        <label className="block text-xs font-semibold mb-1">Session Type</label>
        <select
          name="sessionType"
          value={filters.sessionType}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[160px]"
        >
          {sessionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {/* Delivery Method */}
      <div>
        <label className="block text-xs font-semibold mb-1">
          Delivery Method
        </label>
        <select
          name="deliveryMethod"
          value={filters.deliveryMethod}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[160px]"
        >
          {deliveryMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      {/* Date Range (placeholder) */}
      <div>
        <label className="block text-xs font-semibold mb-1">Date Range</label>
        <input
          type="text"
          name="dateRange"
          value={filters.dateRange}
          onChange={handleChange}
          placeholder="e.g. Jan 2024 - Mar 2024"
          className="border rounded-lg px-3 py-2 min-w-[180px]"
        />
      </div>
      {/* Search */}
      <div>
        <label className="block text-xs font-semibold mb-1">Search</label>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Session name..."
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
