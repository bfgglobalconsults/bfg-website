import type { CollectionConfig } from "payload";

export const EmployeeBiodata: CollectionConfig = {
  slug: "employee-biodata",
  admin: {
    useAsTitle: "fullName",
    defaultColumns: [
      "fullName",
      "employmentInfo.employeeID",
      "employmentInfo.department",
      "employmentInfo.employmentStatus",
    ],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin", "hr"].includes((user as any)?.role),
    read: ({ req: { user } }) =>
      ["super-admin", "admin", "hr"].includes((user as any)?.role),
    update: ({ req: { user } }) =>
      ["super-admin", "admin", "hr"].includes((user as any)?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes((user as any)?.role),
  },
  fields: [
    // Top-level full name for admin title
    {
      name: "fullName",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the employee (used for display)",
      },
    },
    // Personal Information
    {
      name: "personalInfo",
      type: "group",
      label: "Personal Information",
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
          unique: true,
          admin: {
            description: "Employee email address",
          },
        },
        {
          name: "phoneNumber",
          type: "text",
          required: true,
          admin: {
            description: "Primary phone number",
          },
        },
        {
          name: "dateOfBirth",
          type: "date",
          required: true,
          admin: {
            description: "Date of birth",
          },
        },
        {
          name: "gender",
          type: "select",
          required: true,
          options: [
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ],
        },
        {
          name: "maritalStatus",
          type: "select",
          required: true,
          options: [
            { label: "Single", value: "Single" },
            { label: "Married", value: "Married" },
            { label: "Divorced", value: "Divorced" },
            { label: "Widowed", value: "Widowed" },
          ],
        },
        {
          name: "nationality",
          type: "text",
          required: true,
        },
        {
          name: "stateOfOrigin",
          type: "text",
          required: true,
        },
        {
          name: "localGovernmentArea",
          type: "text",
          required: true,
        },
        {
          name: "residentialAddress",
          type: "textarea",
          required: true,
        },
      ],
    },

    // Emergency Contact
    {
      name: "emergencyInfo",
      type: "group",
      label: "Emergency Contact",
      fields: [
        {
          name: "nextOfKinName",
          type: "text",
          required: true,
          admin: {
            description: "Name of next of kin",
          },
        },
        {
          name: "emergencyContact",
          type: "text",
          required: true,
          admin: {
            description: "Emergency contact phone number",
          },
        },
      ],
    },

    // Employment Details
    {
      name: "employmentInfo",
      type: "group",
      label: "Employment Information",
      fields: [
        {
          name: "employeeID",
          type: "text",
          required: true,
          unique: true,
          admin: {
            description: "Unique employee identifier",
          },
        },
        {
          name: "jobTitle",
          type: "text",
          required: true,
        },
        {
          name: "department",
          type: "select",
          required: true,
          options: [
            { label: "Engineering", value: "Engineering" },
            { label: "Management", value: "Management" },
            { label: "Product", value: "Product" },
            { label: "Marketing", value: "Marketing" },
            { label: "Finance", value: "Finance" },
            { label: "Administrative", value: "Administrative" },
            { label: "Human Resources", value: "Human Resources" },
            { label: "Operations", value: "Operations" },
          ],
        },
        {
          name: "dateOfEmployment",
          type: "date",
          required: true,
        },
        {
          name: "payScale",
          type: "text",
          required: true,
          admin: {
            description: "e.g., Level 1, Level 2, etc.",
          },
        },
        {
          name: "typeOfEmployment",
          type: "select",
          required: true,
          options: [
            { label: "Full-Time", value: "Full-Time" },
            { label: "Part-Time", value: "Part-Time" },
            { label: "Contract", value: "Contract" },
            { label: "Intern", value: "Intern" },
          ],
        },
        {
          name: "employmentStatus",
          type: "select",
          required: true,
          defaultValue: "Active",
          options: [
            { label: "Active", value: "Active" },
            { label: "On Leave", value: "On Leave" },
            { label: "Suspended", value: "Suspended" },
            { label: "Terminated", value: "Terminated" },
          ],
        },
      ],
    },

    // Educational Background
    {
      name: "educationInfo",
      type: "group",
      label: "Educational Background",
      fields: [
        {
          name: "highestQualification",
          type: "text",
          required: true,
          admin: {
            description: "e.g., Bachelor's Degree, Master's Degree",
          },
        },
        {
          name: "institutionsAttended",
          type: "array",
          required: true,
          fields: [
            {
              name: "institution",
              type: "text",
            },
          ],
        },
        {
          name: "yearOfGraduation",
          type: "number",
          required: true,
        },
        {
          name: "relevantTrainings",
          type: "array",
          fields: [
            {
              name: "training",
              type: "text",
            },
          ],
        },
        {
          name: "certifications",
          type: "array",
          fields: [
            {
              name: "certification",
              type: "text",
            },
          ],
        },
      ],
    },

    // Documents
    {
      name: "passportPhoto",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Employee passport photograph",
      },
    },
  ],
};
