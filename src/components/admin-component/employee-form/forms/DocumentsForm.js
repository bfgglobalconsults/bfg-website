import React from "react";

const DocumentsForm = ({ formData, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value,
    });
  };

  const handleCertificateChange = (index, value) => {
    const updatedCertificate = [...(formData.institutionsAttended || [])];
    updatedCertificate[index] = value;
    onChange({
      ...formData,
      certificates: updatedCertificate,
    });
  };

  const addCertificate = () => {
    onChange({
      ...formData,
      certificates: [...(formData.certificates || []), ""],
    });
  };

  const removeCertificate = (index) => {
    const updatedCertificate = [...(formData.certificates || [])];
    updatedCertificate.splice(index, 1);
    onChange({
      ...formData,
      certificates: updatedCertificate,
    });
  };
  return (
    <>
      {" "}
      <div className="w-full flex gap-2 mb-4">
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Passport Photograph
          </label>
          <input
            name="passportPhoto"
            value={formData.passportPhoto}
            onChange={handleChange}
            type="file"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload Image"
          />
        </div>
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Certification
          </label>

          {(formData.certificates || []).map((institution, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Upload Document"
                value={institution}
                onChange={(e) => handleCertificateChange(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeCertificate(index)}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCertificate}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
      
    </>
  );
};

export default DocumentsForm;
