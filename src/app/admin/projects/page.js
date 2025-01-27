import TotalDepartmentCard from "@/components/admin-component/employee-cards/TotalDepartmentCard";
import TotalEmployeeCard from "@/components/admin-component/employee-cards/TotalEmployeeCard";
import Dropdown from "@/components/admin-component/filter-dropdown";
import Image from "next/image";
import React from "react";
import Avatar from "../../../../public/assets/avatar.png";
import TextTrimming from "@/components/admin-component/TextTrimmer";
import DepartmentTable from "@/components/admin-component/employee-components/DepartmentTable";
import ClientCard from "@/components/admin-component/dashboard-cards/ClientCard";
import AllProjectsCard from "@/components/admin-component/project-cards/AllProjectsCard";

const employeeData = [
  {
    id: 1,
    name: "John Ogbe",
    ID: "B001",
    email: "john.ogbe@gmail.com",
    phone: "+2347032145667",
    project: "IT Development",
    projectStart: "April 1, 2023",
    projectEnd: "May 21, 2023",
    status: "Completed",
  },
  {
    id: 2,
    name: "Jeremiah Gyang",
    ID: "A007",
    email: "j.gyang@gmail.com",
    phone: "+2348082145667",
    project: "Graphics Designs",
    projectStart: "June 30, 2023",
    projectEnd: "July 25, 2023",
    status: "Completed",
  },
  {
    id: 3,
    name: "Daniella Okereke",
    ID: "A002",
    email: "daniellaokereke@gmail.com",
    phone: "+2347032145997",
    project: "Business Strategy for Real Estate",
    projectStart: "Febr 20, 2023",
    projectEnd: "April 11, 2023",
    status: "Ongoing",
  },
  {
    id: 4,
    name: "Chioma Lizzy",
    ID: "A004",
    email: "chi.lizzy@gmail.com",
    phone: "+2347032145667",
    project: "Training & Development For Sales",
    projectStart: "Novem 28, 2023",
    projectEnd: "Jan 21, 2024",
    status: "Ongoing",
  },
  {
    id: 5,
    name: "David Beckham",
    ID: "A007",
    email: "davidb07@gmail.com",
    phone: "+2349032141992",
    project: "IT Supplies",
    projectStart: "July 31, 2023",
    projectEnd: "August 21, 2023",
    status: "Completed",
  },
];
const page = () => {
  return (
    <div className="w-full p-4">
          <div className="flex justify-between">
             
        <div></div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 p-2 rounded-md border border-[#E26015]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="rgba(153,153,153,1)"
              >
                <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
              </svg>
            </span>
            <span>Add Project</span>
          </button>
          <button className="p-2 rounded-md text-white bg-[#EE201C]">
            
            <span>Delete Project</span>
          </button>
        </div>
      </div>
      <div className="flex gap-2 my-3 items-center justify-between">
        <h3 className="text-2xl">Overview</h3>
        <div>
          <Dropdown />
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div>
          <AllProjectsCard />
        </div>
        <div>
         
        </div>
      </div>
      <div className="w-full">
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <div className="flex items-center justify-between my-3 flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
              <h3 className="text-lg text-black font-semibold">Projects</h3>
              </div>
         
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for projects..."
              />
                      </div>
                      </div>
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Project
                </th>
                <th scope="col" className="px-6 py-3">
                  Project Start
                </th>
                <th scope="col" className="px-6 py-3">
                  Project End
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee) => {
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                      
                        <div className="">
                          <div className="font-semibold">
                          <TextTrimming text={employee.name} maxLength={6} />
                          </div>
                        </div>
                      </th>
                      <td className="px-6 py-4"><TextTrimming text={employee.ID} maxLength={6} /></td>
                      <td className="px-6 py-4">
                        <div className="font-normal text-gray-500">
                         <TextTrimming text={employee.email} maxLength={6} />
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
                          {employee.phone}
                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
<TextTrimming text={employee.project} maxLength={6} />                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
                          {employee.projectStart}
                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
                          {employee.projectEnd}
                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <span className={`font-normal bg-[#E2E8F966] p-2 rounded-md text-black ${employee.status === "Completed" ? "text-green-600": "text-[#DFA510]"}`}>
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
                  </table>
                  </div>
              <div className="w-full flex gap-4 my-4">
                  <div className="w-[60%]">
                      <DepartmentTable />
                  </div>
                  <div className="w-[40%]"></div>
              </div>
        </div>
      </div>
  );
};

export default page;
