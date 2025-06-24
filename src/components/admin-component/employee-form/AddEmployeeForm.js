import React, { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import JobInfoForm from "./forms/JobInfoForm";
import EducationalBackgroundForm from "./forms/EducationalBackgroundForm";
import DocumentsForm from "./forms/DocumentsForm";
import toast from "react-hot-toast";
import { useAuth } from "@/context/authContext";
import axios from "axios";

const apiLink = process.env.NEXT_PUBLIC_BASE_URL;

const AddEmployeeForm = ({ close }) => {
  const { user } = useAuth();
  const [tab, setTab] = useState("Step1");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    
    fullName: "",
    email: "",
    password: "suduko",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    stateOfOrigin: "",
    localGovernmentArea: "",
    residentialAddress: "",
    nextOfKinName: "",
    emergencyContact: "",
    // Job Info
    employeeID: "",
    jobTitle: "",
    employmentStatus: "",
    typeOfEmployment: "",
    dateOfEmployment: "",
    payScale: "",
    department: "",
    // Educational Background
    highestQualification: "",
    institutionsAttended: [],
    yearOfGraduation: "",
    relevantTrainings: ["none"],
    // Documents
    certifications: [],
    passportPhoto: "",
  });

  const handleFormDataChange = (stepData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'fullName',
      'email',
      'password',
      'phoneNumber',
      'dateOfBirth',
      'gender',
      'employeeID',
      'jobTitle',
      'employmentStatus',
      'department'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Phone number validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast.error('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      const employeeFormData = {
        ...formData,
        createdBy: user?.id,
      };

      const response = await axios.post(
        `${apiLink}/api/v1/employee/addEmployee`,
        employeeFormData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        }
      );
      
      if (response.data.success) {
        toast.success("Employee added successfully");
        close();
      } else {
        throw new Error(response.data.message || "Failed to add employee");
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      toast.error(error?.response?.data?.message || "Failed to add employee. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    "Personal Information",
    "Job Information",
    "Educational Background",
    "Documents",
  ];

  const getCurrentStepIndex = () => parseInt(tab.replace("Step", "")) - 1;

  const handleNext = (e) => {
    e.preventDefault();
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setTab(`Step${currentIndex + 2}`);
    }
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setTab(`Step${currentIndex}`);
    }
  };

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
            {steps?.map((step, index, arr) => (
              <div key={index} className="flex items-center">
                <div
                  className={`flex gap-2 items-center cursor-pointer ${
                    tab === `Step${index + 1}`
                      ? "bg-[#E2601533] p-2 rounded-2xl"
                      : ""
                  }`}
                  onClick={() => setTab(`Step${index + 1}`)}
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
          {tab === "Step1" && (
            <PersonalInfoForm
              formData={formData}
              onChange={handleFormDataChange}
            />
          )}
          {tab === "Step2" && (
            <JobInfoForm 
              formData={formData} 
              onChange={handleFormDataChange}
            />
          )}
          {tab === "Step3" && (
            <EducationalBackgroundForm
              formData={formData}
              onChange={handleFormDataChange}
            />
          )}
          {tab === "Step4" && (
            <DocumentsForm
              formData={formData}
              onChange={handleFormDataChange}
            />
          )}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={getCurrentStepIndex() === 0}
            className={`px-4 py-2 rounded-md ${
              getCurrentStepIndex() === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#E26015] text-white hover:bg-[#E26015]/90"
            }`}
          >
            Previous
          </button>

          {getCurrentStepIndex() === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`px-4 py-2 rounded-md bg-[#E26015] text-white hover:bg-[#E26015]/90 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-md bg-[#E26015] text-white hover:bg-[#E26015]/90"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddEmployeeForm;
