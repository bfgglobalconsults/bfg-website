// components/WebTechnologiesSection.jsx
import React from "react";

const technologiesData = [
  {
    id: 1,
    name: "React",
    usage: 85, // Percentage for the bar
    projects: 45,
    color: "#0095FF",
    background: "#F0F9FF",
  },
  {
    id: 2,
    name: "Laravel",
    usage: 70,
    projects: 29,
    color: "#00E58F",
    background: "#F0FDF4",
  },
  {
    id: 3,
    name: "WordPress",
    usage: 60,
    projects: 18,
    color: "#884DFF", // Purple
    background: "#FBF1FF",
  },
  {
    id: 4,
    name: "Javascript",
    usage: 75,
    projects: 25,
    color: "#FF8900", // Orange
    background: "#FEF6E6",
  },
  // Add more technologies as needed
];

const WebTechnologiesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-12">
          Web Technologies Used
        </h2>

        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Table Header */}
          <div className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 pb-4 border-b border-gray-200 text-gray-500 font-semibold text-md">
            <div className="py-2 text-center">#</div>
            <div className="py-2">Name</div>
            <div className="py-2">Usage</div>
            <div className="py-2 text-center">Projects</div>
          </div>

          {/* Table Rows */}
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              className="grid grid-cols-[auto_1fr_2fr_auto] gap-4 py-4 border-b border-gray-100 items-center last:border-b-0"
            >
              <div className="text-gray-600 font-medium text-center">
                {tech.id.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-800">{tech.name}</div>
              <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: `${tech.usage}%`,
                    background: `linear-gradient(to right, ${tech.color} 0%, ${tech.color}AA 100%)`, // Solid to slightly transparent gradient
                  }}
                ></div>
              </div>
              <div
                className="flex items-center justify-center w-16 h-8 md:w-20 md:h-10 rounded-full border text-white font-semibold  text-md"
                style={{ backgroundColor: tech.background, color:tech.color,  borderColor: tech.color }}
              >
                {tech.projects}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebTechnologiesSection;
