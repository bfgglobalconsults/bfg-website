"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";

const regions = [
  { code: "ng", name: "Nigeria", flag: "🇳🇬" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "", name: "Global", flag: "🌍" },
];

const MENU_WIDTH = 224; // matches w-56

export default function RegionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const router = useRouter();
  const pathname = usePathname();
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => setMounted(true), []);

  // Determine the current region directly from the pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentRegionCode =
    pathSegments[0] && regions.some((r) => r.code === pathSegments[0])
      ? pathSegments[0]
      : "";

  const currentRegion =
    regions.find((r) => r.code === currentRegionCode) || regions[0];

  const updatePosition = useCallback(() => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuPos({
      top: rect.bottom + window.scrollY + 8, // ~mt-2
      left: rect.right + window.scrollX - MENU_WIDTH, // right-align to button
    });
  }, []);

  const toggleOpen = () => {
    if (!isOpen) updatePosition();
    setIsOpen((prev) => !prev);
  };

  // Reposition on open, and keep tracking the button on scroll/resize
  // (the header is fixed, so this matters). Also handles click-outside.
  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, updatePosition]);

  const handleRegionChange = (regionCode) => {
    // Always navigate to the region's landing page
    const newPath = regionCode ? `/${regionCode}` : "/";

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        onClick={toggleOpen}
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

      {mounted &&
        isOpen &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "absolute", top: menuPos.top, left: menuPos.left }}
            className="z-[99999] w-56 bg-white border border-gray-300 rounded-md shadow-lg"
          >
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
          </div>,
          document.body
        )}
    </div>
  );
}
