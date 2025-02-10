"use client"
import TotalDepartmentCard from "@/components/admin-component/employee-cards/TotalDepartmentCard";
import TotalEmployeeCard from "@/components/admin-component/employee-cards/TotalEmployeeCard";
import Dropdown from "@/components/admin-component/filter-dropdown";
import Image from "next/image";
import React, { useState } from "react";
import Avatar from "../../../../../public/assets/avatar.png";
import TextTrimming from "@/components/admin-component/TextTrimmer";
import DepartmentTable from "@/components/admin-component/employee-components/DepartmentTable";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import AddEmployeeForm from "@/components/admin-component/employee-form/AddEmployeeForm";
import AddDepartmentForm from "@/components/admin-component/department-form/AddDepartmentForm";

const employeeData = [
  {
    id: 1,
    name: "John Ogbe",
    ID: "BFG/IIT/B001",
    email: "john.ogbe@gmail.com",
    phone: "+2347032145667",
    department: "IT",
    jobTitle: "Software Engineer",
    hireDate: "May 21, 2023",
    status: "Active",
  },
  {
    id: 2,
    name: "Jeremiah Gyang",
    ID: "BFG/IIT/A007",
    email: "j.gyang@gmail.com",
    phone: "+2348082145667",
    department: "IT",
    jobTitle: "Product Designer",
    hireDate: "July 25, 2023",
    status: "Active",
  },
  {
    id: 3,
    name: "Daniella Okereke",
    ID: "BFG/BSO/A002",
    email: "daniellaokereke@gmail.com",
    phone: "+2347032145997",
    department: "Business Strategy",
    jobTitle: "Business Strategist",
    hireDate: "April 11, 2022",
    status: "Leave",
  },
  {
    id: 4,
    name: "Chioma Lizzy",
    ID: "BFG/TD/A004",
    email: "chi.lizzy@gmail.com",
    phone: "+2347032145667",
    department: "Training & Development",
    jobTitle: "Associate, Training Officer",
    hireDate: "Jan 21, 2024",
    status: "Suspended",
  },
  {
    id: 5,
    name: "David Beckham",
    ID: "BFG/IIT/A007",
    email: "davidb07@gmail.com",
    phone: "+2349032141992",
    department: "IT",
    jobTitle: "Software Engineer",
    hireDate: "August 21, 2023",
    status: "Active",
  },
];
const EmployeePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dptOpen, setDptOpen] = useState(false);
  
   function dptIsOpen() {
    setDptOpen(true);
  }

  function dptIsClose() {
    setDptOpen(false);
  }


  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div className="w-full p-4">
          <div className="flex justify-between">
             
        <div></div>
        <div className="flex gap-3">
          <button onClick={open} className="flex items-center gap-2 p-2 rounded-md border border-[#E26015]">
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
            <span>Add Employee</span>
          </button>
          <button onClick={dptIsOpen} className="flex items-center gap-2 p-2 rounded-md border border-[#E26015]">
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
            <span>Add Department</span>
          </button>
        </div>
        {/* modal pop up */}
            <Transition appear show={isOpen}>
              <Dialog as="div" className="relative z-10" onClose={close}>
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 my-4"
                        >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Add Employee</span>
                        <button onClick={close}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></button>
                      </div>
                        </Dialog.Title>
                        <div>
                          <AddEmployeeForm close={close} />
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
        {/* modal pop up end */}
         {/* Department modal pop up */}
            <Transition appear show={dptOpen}>
              <Dialog as="div" className="relative z-10" onClose={dptIsClose}>
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 my-4"
                        >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Add Department</span>
                        <button onClick={dptIsClose}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></button>
                      </div>
                        </Dialog.Title>
                        <div>
                          <AddDepartmentForm  />
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            {/* Department modal pop up end */}
      </div>
      <div className="flex gap-2 my-3 items-center justify-between">
        <h3 className="text-2xl">Overview</h3>
        <div>
          <Dropdown />
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <div>
          <TotalEmployeeCard />
        </div>
        <div>
          <TotalDepartmentCard />
        </div>
      </div>
      <div className="w-full">
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <div className="flex items-center justify-between my-3 flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
              <h3 className="text-lg text-black font-semibold">Employees</h3>
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
                placeholder="Search for users"
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
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Hire Date
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
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={Avatar}
                          width={50}
                          height={50}
                          alt="Jese image"
                        />
                        <div className="px-2 py-4">
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
<TextTrimming text={employee.department} maxLength={6} />                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
                          {employee.jobTitle}
                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <div className="font-normal text-gray-500">
                          {employee.hireDate}
                        </div>
                            </td>
                            <td class="px-6 py-4">
                        <span className={`font-normal bg-[#E2E8F966] p-2 rounded-md text-black ${employee.status === "Active" ? "text-green-600": employee.status === "Suspended"? "text-red-600": "text-[#DFA510]"}`}>
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

export default EmployeePage;
