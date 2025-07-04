import React, { useState } from 'react';

const orgSizes = [
  'All',
  'Enterprise (1000+ employees)',
  'Large (500-999 employees)',
  'Medium (100-499 employees)',
  'Small (10-99 employees)',
];
const industries = [
  'All',
  'Technology',
  'Healthcare',
  'Financial Services',
  'Manufacturing',
  'Retail',
  'Education',
  'Other',
];

export default function ClientSegmentationFilter({ onFilter }) {
  const [filters, setFilters] = useState({
    orgSize: 'All',
    industry: 'All',
    search: '',
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
      {/* Organization Size */}
      <div>
        <label className="block text-xs font-semibold mb-1">Organization Size</label>
        <select
          name="orgSize"
          value={filters.orgSize}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[200px]"
        >
          {orgSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      {/* Industry */}
      <div>
        <label className="block text-xs font-semibold mb-1">Industry</label>
        <select
          name="industry"
          value={filters.industry}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 min-w-[160px]"
        >
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
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
          placeholder="Client name..."
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