import React from "react";
import TextTrimming from "../TextTrimmer";
import Image from "next/image";
import Avatar from "../../../../public/assets/avatar.png";

const departmentData = [
  {
    id: 1,
    name: "Information Technology",
    ID: "IIT",
    description: "The IT Dept",
    totalEmployee: "2",
    createdDate: "Jan 15, 2022",
  },
  {
    id: 2,
    name: "Training & Development",
    ID: "TD",
    description: "Training Dept",
    totalEmployee: "3",
    createdDate: "June 25, 2022",
  },
  {
    id: 3,
    name: "Research & Analytics",
    ID: "RA",
    description: "Training Dept",
    totalEmployee: "3",
    createdDate: "July 4, 2022",
  },
];
const DepartmentTable = () => {
  return (
    <>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
               <h3 className="text-lg text-black font-semibold p-2">Department</h3>
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
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                TotalEmployee
              </th>
              <th scope="col" className="px-6 py-3">
                CreatedDate
              </th>
            </tr>
          </thead>
          <tbody>
            {departmentData.map((dept) => {
              return (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="">
                                  <div className="font-semibold"><TextTrimming text={dept.name} maxLength={6} /></div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{dept.ID} </td>
                    <td className="px-6 py-4">
                      <div className="font-normal text-gray-500">
                        {dept.description}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div className="font-normal text-gray-500">
                        {dept.totalEmployee}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div className="font-normal text-gray-500">
                        {dept.createdDate}{" "}
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DepartmentTable;
