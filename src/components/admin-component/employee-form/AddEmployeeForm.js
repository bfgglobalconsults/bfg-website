import React, { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import JobInfoForm from "./forms/JobInfoForm";
import EducationalBackgroundForm from "./forms/EducationalBackgroundForm";
import DocumentsForm from "./forms/DocumentsForm";

const AddEmployeeForm = ({ close }) => {
  const [tab, settab] = useState("Step1");

  return (
    <>
      {/* <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-[24px] my-4 border-b border-b-[#efeff4]">
            <div className="flex gap-2 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1">
              <p className="text-[#D9D9D9]">Personal Information</p>
              <span className="w-5 h-5 p-2 text-[#D9D9D9] rounded-full border border-[#D9D9D9]">1</span>
            </div>
            <div className="flex gap-2 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1">
              <p className="text-[#D9D9D9]">Job Information</p>
              <span className="w-5 h-5 p-3 text-[#D9D9D9] rounded-full border border-[#D9D9D9]">2</span>
            </div>
            <div className="flex gap-2 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1">
              <p className="text-[#D9D9D9]">Educational Background</p>
              <span className="w-5 h-5 p-3 text-[#D9D9D9] rounded-full border border-[#D9D9D9]">3</span>
            </div>
            <div className="flex gap-2 items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1">
              <p className="text-[#D9D9D9]">Documents</p>
              <span className="w-5 h-5 p-3 text-[#D9D9D9] rounded-full border border-[#D9D9D9]">4</span>
            </div>
          </div>
        </div>
      </div>*/}
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6 my-4  w-full">
            {[
              "Personal Information",
              "Job Information",
              "Educational Background",
              "Documents",
            ].map((step, index, arr) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex gap-2 items-center cursor-pointer ${
                    tab === `Step${index + 1}`
                      ? "bg-[#E2601533] p-2 rounded-2xl"
                      : ""
                  }`}
                  onClick={() => settab(`Step${index + 1}`)}
                >
                  <p
                    className={`text-sm ${
                      tab === `Step${index + 1}`
                        ? "text-black"
                        : "text-[#D9D9D9]"
                    }`}
                  >
                    {step}
                  </p>
                  <span
                    className={`w-5 h-5 flex items-center justify-center text-xs rounded-full border ${
                      tab === `Step${index + 1}`
                        ? "bg-[#E26015] text-white border-[#E26015]"
                        : "text-[#D9D9D9] border-[#D9D9D9]"
                    }`}
                  >
                    {tab === `Step${index + 1}` ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </span>
                </div>
                {/* Add a dash separator for non-final steps */}
                {index < arr.length - 1 && (
                  <div className="w-10 h-[1px] bg-[#D9D9D9] mx-2"></div>
                )}
               
              </div>
            ))}
          </div>
        </div>
        <div>
          {tab === "Step1" && <PersonalInfoForm />}
          {tab === "Step2" && <JobInfoForm />}
          {tab === "Step3" && <EducationalBackgroundForm />}
          {tab === "Step4" && <DocumentsForm />}
          
            </div>
      </div>
    </>
  );
};

export default AddEmployeeForm;
