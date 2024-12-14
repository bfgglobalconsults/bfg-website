import React from "react";

const ProjectSummary = () => {
  const projectSummaryData = [
    {
      id: 1,
      projectTitle: "Nelsa web developement",
      projectManager: "James Akpan",
      dueDate: "May 25, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      id: 2,
      projectTitle: "Datascale AI app",
      projectManager: "Ebuka Okoli",
      dueDate: "Jun 20, 2023",
      status: "Delayed",
      progress: 30,
    },
    {
      id: 3,
      projectTitle: "Media channel branding",
      projectManager: "Femi Adenrele",
      dueDate: "July 13, 2023",
      status: "Delayed",
      progress: 30,
    },
    {
      id: 4,
      projectTitle: "Corlax iOS app development",
      projectManager: "Tunde Ednut",
      dueDate: "Dec 20, 2023",
      status: "Completed",
      progress: 100,
    },
    {
      id: 5,
      projectTitle: "Website builder development",
      projectManager: "Sadiq Abubakar",
      dueDate: "Mar 15, 2024",
      status: "Ongoing",
      progress: 50,
    }
  ];
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Project Manager
              </th>
              <th scope="col" className="px-6 py-3">
                Due date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
            </tr>
          </thead>
                  <tbody>
                      {projectSummaryData.map((projectSummary)=>{
                          return (
                            <tr key={projectSummary.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">{projectSummary.projectTitle}</td>
                              <td className="px-6 py-4">{projectSummary.projectManager}</td>
                              <td className="px-6 py-4">{projectSummary.dueDate}</td>
                             <td className="px-6 py-4">
  <span
    className={`px-2 py-1 rounded-md ${
      projectSummary.status === "Completed"
        ? "text-green-500 bg-[#E2E8F966]"
        : projectSummary.status === "Delayed"
        ? "text-red-600 bg-[#E2E8F966]"
        : "text-yellow-600 bg-[#E2E8F966]"
    }`}
  >
    {projectSummary.status}
  </span>
</td>

                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                
                                  <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                      <div className="relative w-10 h-10">
                                        <svg className="w-10 h-10">
                                          <circle
                                            className="text-gray-300"
                                            strokeWidth="5"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="18"
                                            cx="20"
                                            cy="20"
                                          />
                                          <circle
                                            className={`${
                                              projectSummary.progress >= 70
                                                ? "text-green-400"
                                                : projectSummary.progress >= 50
                                                ? "text-yellow-300"
                                                : "text-orange-700"
                                            }`}
                                            strokeWidth="5"
                                            strokeDasharray={113}
                                            strokeDashoffset={113 - (113 * projectSummary.progress) / 100}
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="18"
                                            cx="20"
                                            cy="20"
                                          />
                                        </svg>
                                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
                                          {projectSummary.progress}%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </div>
                              </td>
                            </tr>
                          )
                      })}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectSummary;
