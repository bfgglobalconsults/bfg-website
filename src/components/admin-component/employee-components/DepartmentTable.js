"use client";
import React, { useEffect, useState } from "react";
import TextTrimming from "../TextTrimmer";
import Image from "next/image";
import Avatar from "../../../../public/assets/avatar.png";
import axios from "axios";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/departments/getDepartments`)
      .then((res) => setDepartments(res.data.data || []))
      .catch(() => setDepartments([]));
  }, []);

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
            {departments.map((dept) => (
              <tr key={dept._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <div className="font-semibold">{dept.name} </div>
                  </div>
                </th>
                <td className="px-6 py-4">{dept._id}</td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">
                    {dept.description || "-"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">
                    {dept.employees ? dept.employees.length : 0}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-normal text-gray-500">
                    {dept.createdAt ? new Date(dept.createdAt).toLocaleDateString() : ""}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DepartmentTable;
