"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const regions = [
  { code: "", name: "Nigeria", flag: "🇳🇬" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "global", name: "Global", flag: "🌍" },
];

export default function RegionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Determine the current region directly from the pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentRegionCode =
    pathSegments[0] && regions.some((r) => r.code === pathSegments[0])
      ? pathSegments[0]
      : "";

  const currentRegion =
    regions.find((r) => r.code === currentRegionCode) || regions[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleRegionChange = (regionCode) => {
    // Get the path without the current region
    let remainingPath = pathname;

    // If current path starts with a region code, remove it
    if (pathSegments[0] && regions.some((r) => r.code === pathSegments[0])) {
      remainingPath = "/" + pathSegments.slice(1).join("/");
    }

    // Construct new path
    const newPath = regionCode
      ? `/${regionCode}${remainingPath}`
      : remainingPath;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span className="mr-2">{currentRegion.flag}</span>
        {currentRegion.name}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {regions.map((region) => (
              <button
                key={region.code}
                onClick={() => handleRegionChange(region.code)}
                className={`flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  currentRegion.code === region.code
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700"
                }`}
              >
                <span className="mr-3">{region.flag}</span>
                {region.name}
                {currentRegion.code === region.code && (
                  <svg
                    className="ml-auto h-4 w-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
