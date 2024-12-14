import React from 'react'

const JobInfoForm = () => {
  return (
      <>
      <div>
        <form>
          <div className="w-full flex gap-2 mb-6">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Employee ID
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Employee ID"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Job Title
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Job Title"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Department
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Department
                </option>
                <option value="it">Innovation and Technology</option>
                <option value="training">Training and Development</option>
                <option value="research">Research and Analytics</option>
                <option value="business">Business Strategy and Operations</option>
              </select>
            </div>
                  </div>
                     <div className="w-full flex gap-2 mb-6">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Date of Employment
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Date of Employment"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Type of Employment
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Type of Employment
                </option>
                <option value="male">Partime</option>
                <option value="female">Fulltime</option>
                <option value="other">Intern</option>
                <option value="preferNotToSay">Contract</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Employment Status
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Employment Status
                </option>
                <option value="married">Active</option>
                <option value="single">Leave</option>
                <option value="other">Suspended</option>
                <option value="preferNotToSay">Inactive</option>
              </select>
            </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                      <button className="border border-[#999999] hover:bg-[#E26015] hover:text-white text-[#999999] rounded-md px-6 py-2">Prev</button>
                      <button className="bg-[#E26015] hover:bg-black text-white px-6 py-2 rounded-md">Next</button>
                  </div>
              </form>
              </div>
      </>
  )
}

export default JobInfoForm