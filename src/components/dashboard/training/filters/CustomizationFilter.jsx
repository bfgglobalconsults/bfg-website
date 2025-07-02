import React, { useState } from "react";

const customizationCategories = [
  "All",
  "Content Adaptation",
  "Industry Specific Requirements",
  "Delivery Method Customization",
  "Assessment Customization",
];
const processSteps = [
  "All",
  "Requirement Gathering",
  "Design & Planning",
  "Content Development",
  "Review & Approval",
];

export default function CustomizationFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    customizationCategory: "All",
    processStep: "All",
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
      {/* Customization Category */}
      <div>
        <label className="block text-xs font-semibold mb-1">
          Customization Category
        </label>
        <select
          name="customizationCategory"
          value={filters.customizationCategory}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[200px]"
        >
          {customizationCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {/* Process Step */}
      <div>
        <label className="block text-xs font-semibold mb-1">Process Step</label>
        <select
          name="processStep"
          value={filters.processStep}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[180px]"
        >
          {processSteps.map((step) => (
            <option key={step} value={step}>
              {step}
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
          placeholder="Project name..."
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
