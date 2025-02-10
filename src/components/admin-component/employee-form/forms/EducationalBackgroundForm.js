import React from "react";

const EducationalBackgroundForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value
    });
  };

  const handleInstitutionChange = (index, value) => {
    const updatedInstitutions = [...(formData.institutionsAttended || [])];
    updatedInstitutions[index] = value;
    onChange({
      ...formData,
      institutionsAttended: updatedInstitutions
    });
  };

  const addInstitution = () => {
    onChange({
      ...formData,
      institutionsAttended: [...(formData.institutionsAttended || []), ""]
    });
  };

  const removeInstitution = (index) => {
    const updatedInstitutions = [...(formData.institutionsAttended || [])];
    updatedInstitutions.splice(index, 1);
    onChange({
      ...formData,
      institutionsAttended: updatedInstitutions
    });
  };

  return (
    <>
      <div>
        <div className="w-full flex gap-2 mb-6">
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Highest Qualification
            </label>
            <select  name="highestQualification"
                value={formData.highestQualification}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="" disabled selected>
                Select Qualification
              </option>
              <option value="Bsc">Bsc</option>
              <option value="Msc">Msc</option>
              <option value="pHD">pHD</option>
              <option value="SSCE">SSCE</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Institutions Attended
            </label>
            {(formData.institutionsAttended || []).map((institution, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => handleInstitutionChange(index, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Institution"
                />
                <button
                  type="button"
                  onClick={() => removeInstitution(index)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addInstitution}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
          <div className="w-1/3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date of Graduation
            </label>
            <input
               name="yearOfGraduation"
                value={formData.yearOfGraduation}
                onChange={handleChange}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Date of Graduation"
            />
          </div>
        </div>
        {/* <div className="w-full flex gap-2 mb-6">
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
              </div> */}
              
      </div>
    </>
  );
};

export default EducationalBackgroundForm;
