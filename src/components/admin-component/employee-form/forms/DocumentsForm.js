"use client";
import { CldUploadButton } from "next-cloudinary";
import React, { useState } from "react";

const DocumentsForm = ({ formData, onChange }) => {
  const [imageId, setImageId] = useState("");
  const [docId, setDocId] = useState("");

  
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
      <div className="w-full flex gap-2 mb-4">
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Passport Photograph
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImageId(file ? file.name : "");
              if (onChange && file) {
                onChange({
                  ...formData,
                  passportPhoto: file,
                });
              }
            }}
          />
        </div>
        <div className="w-1/3">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Certification
          </label>
          {(formData.certificates || []).map((certificate, index) => (
            <div key={index} className="flex mb-2 items-center">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => {
                  const file = e.target.files[0];
                  handleCertificateChange(index, file);
                }}
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
