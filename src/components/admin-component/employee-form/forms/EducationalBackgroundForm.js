import React from "react";

const EducationalBackgroundForm = () => {
  return (
    <>
      <div>
        <div className="w-full flex gap-2 mb-6">
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Highest Qualification
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" disabled selected>
                Select Qualification
              </option>
              <option value="male">Bsc</option>
              <option value="female">Msc</option>
              <option value="other">pHD</option>
              <option value="preferNotToSay">SSCE</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Institutions Attended
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Institution"
            />
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Graduation
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Date of Graduation"
            />
          </div>
        </div>
        <div className="w-full flex gap-2 mb-6">
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Relevant Training/Workshops Attended
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Details"
            />
          </div>
              </div>
               <div className="flex gap-4 justify-center">
                      <button className="border border-[#999999] hover:bg-[#E26015] hover:text-white text-[#999999] rounded-md px-6 py-2">Prev</button>
                      <button className="bg-[#E26015] hover:bg-black text-white px-6 py-2 rounded-md">Next</button>
                  </div>
      </div>
    </>
  );
};

export default EducationalBackgroundForm;
