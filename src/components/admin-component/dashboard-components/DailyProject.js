"use client";
import React, { useState } from "react";

const DayProject = [
  {
    id: 1,
    name: "Create a user flow of social application design",
    checked: true,
    status: "Completed",
  },
  {
    id: 2,
    name: "Create a social application ",
    checked: false,
    status: "On going",
  },
  {
    id: 3,
    name: "Landing page design for Fintech project of singapore",
    checked: false,
    status: "On going",
  },
  {
    id: 4,
    name: "Interactive prototype for app screens of deltamine project",
    checked: false,
    status: "Delayed",
  },
  {
    id: 5,
    name: "Interactive prototype for app screens of deltamine project",
    checked: true,
    status: "Completed",
  },
];
const DailyProject = () => {
  const inProgressProjects = DayProject.filter(
    (project) => project.status === "On going"
  );
  const completedProjects = DayProject.filter(
    (project) => project.status === "Completed"
  );
  const [tab, settab] = useState("All");
  return (
    <>
      <div className="">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-[24px] my-4 border-b border-b-[#efeff4]">
              <p
                onClick={() => {
                  settab("All");
                }}
                className={`text-[14px] pb-2 cursor-pointer ${
                  tab === "All"
                    ? "text-[#3f3f95] border-b-2 border-b-[#127DC0] "
                    : "#8d98af"
                } `}
              >
                All
              </p>
              <p
                onClick={() => {
                  settab("In-Progress");
                }}
                className={`text-[14px] pb-2 cursor-pointer ${
                  tab === "In-Progress"
                    ? "text-[#3f3f95] border-b-2 border-b-[#127DC0] "
                    : "#8d98af"
                } `}
              >
                In-Progress
              </p>
              <p
                onClick={() => {
                  settab("Completed");
                }}
                className={`text-[14px] pb-2 cursor-pointer ${
                  tab === "Completed"
                    ? "text-[#3f3f95] border-b-2 border-b-[#127DC0] "
                    : "#8d98af"
                } `}
              >
                Completed
              </p>
            </div>
          </div>
          <div className="my-4">
            {tab === "All" && (
              <div>
                {DayProject.map((project) => {
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 my-2">
                          <p>
                            <input
                              type="checkbox"
                              className="accent-[#E26015]"
                              checked={project.checked}
                              disabled={!project.checked}
                              readOnly
                            />
                          </p>
                          <p className="text-sm">{project.name}</p>
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              project.status === "Completed"
                                ? "text-green-500"
                                : project.status === "Delayed"
                                ? "text-red-600"
                                : "text-orange-500"
                            }`}
                          >
                            {project.status}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
            {tab === "In-Progress" && (
              <div>
                {inProgressProjects.map((project) => {
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 my-2">
                          <p>
                            <input
                              type="checkbox"
                              className="accent-[#E26015]"
                              checked={project.checked}
                              disabled={!project.checked}
                              readOnly
                            />
                          </p>
                          <p className="text-sm">{project.name}</p>
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              project.status === "Completed"
                                ? "text-green-500"
                                : project.status === "Delayed"
                                ? "text-red-600"
                                : "text-orange-500"
                            }`}
                          >
                            {project.status}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
            {tab === "Completed" && (
              <div>
                {completedProjects.map((project) => {
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 my-2">
                          <p>
                            <input
                              type="checkbox"
                              className="accent-[#E26015]"
                              checked={project.checked}
                              disabled={!project.checked}
                              readOnly
                            />
                          </p>
                          <p className="text-sm">{project.name}</p>
                        </div>
                        <div>
                          <p
                            className={`text-sm ${
                              project.status === "Completed"
                                ? "text-green-500"
                                : project.status === "Delayed"
                                ? "text-red-600"
                                : "text-orange-500"
                            }`}
                          >
                            {project.status}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyProject;
