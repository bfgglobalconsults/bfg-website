"use client";
import React, { useState, useEffect } from "react";
import analyticsService from "@/services/analyticsService";

const DailyProject = () => {
  const [dayProjects, setDayProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, settab] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dailyData = await analyticsService.fetchDailyProjects();
        setDayProjects(dailyData.projects || []);
      } catch (err) {
        setError(err.message);
        // Fallback data
        setDayProjects([
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
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const inProgressProjects = dayProjects.filter(
    (project) => project.status === "On going"
  );
  const completedProjects = dayProjects.filter(
    (project) => project.status === "Completed"
  );
  if (loading) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3">
        <div className="animate-pulse">
          <div className="flex gap-x-[24px] my-4 border-b border-b-[#efeff4]">
            <div className="h-4 bg-gray-200 rounded w-8"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                {dayProjects.map((project) => {
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
