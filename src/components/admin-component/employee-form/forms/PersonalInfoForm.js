import React from "react";

const PersonalInfoForm = () => {
  return (
    <>
      <div>
        <form>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Fullname"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                DOB
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter DOB"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Marital Status
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Status
                </option>
                <option value="married">Married</option>
                <option value="single">Single</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nationality
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select Nationality
                </option>
                <option value="nigeria">Nigeria</option>
                <option value="england">England</option>
                <option value="ghana">Ghana</option>
                <option value="italy">Italy</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                State of Origin
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select State
                </option>
                <option value="nigeria">Nigeria</option>
                <option value="england">England</option>
                <option value="ghana">Ghana</option>
                <option value="italy">Italy</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                LGA
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled selected>
                  Select LGA
                </option>
                <option value="nigeria">Nigeria</option>
                <option value="england">England</option>
                <option value="ghana">Ghana</option>
                <option value="italy">Italy</option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Residential Address
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Residential Address"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Next of Kin Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Next of Kin Name"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Emergency Contact Information
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Emergency Contact Information"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#E26015] text-white px-6 py-2 rounded-md">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfoForm;
