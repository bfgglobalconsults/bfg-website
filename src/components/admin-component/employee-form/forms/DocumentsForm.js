import React from "react";

const DocumentsForm = () => {
  return (
    <>
      {" "}
      <div className="w-full flex gap-2 mb-4">
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Passport Photograph
          </label>
          <input
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload Image"
          />
        </div>
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Certification 
          </label>
          <input
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload Document"
          />
        </div>
          </div>
            <div className="flex gap-4 justify-center">
                      <button className="border border-[#999999] hover:bg-[#E26015] hover:text-white text-[#999999] rounded-md px-6 py-2">Prev</button>
                      <button className="bg-[#E26015] hover:bg-black text-white px-6 py-2 rounded-md">Next</button>
                  </div>
    </>
  );
};

export default DocumentsForm;
