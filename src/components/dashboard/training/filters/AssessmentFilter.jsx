import React, { useState } from "react";

const assessmentTypes = [
  "All",
  "Pre/Post-Training Assessment",
  "Skill Gap Analysis",
  "Competency Evaluation",
  "Performance Review",
];
const skillCategories = [
  "All",
  "Leadership & Management",
  "Communication Skills",
  "Technical Skills",
  "Problem Solving",
  "Digital Literacy",
];

export default function AssessmentFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    assessmentType: "All",
    skillCategory: "All",
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
      {/* Assessment Type */}
      <div>
        <label className="block text-xs font-semibold mb-1">
          Assessment Type
        </label>
        <select
          name="assessmentType"
          value={filters.assessmentType}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[200px]"
        >
          {assessmentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      {/* Skill Category */}
      <div>
        <label className="block text-xs font-semibold mb-1">
          Skill Category
        </label>
        <select
          name="skillCategory"
          value={filters.skillCategory}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[180px]"
        >
          {skillCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
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
          placeholder="Assessment name..."
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
