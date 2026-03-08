import type { CollectionConfig } from "payload";

export const Documents: CollectionConfig = {
  slug: "documents",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "uploadedBy", "createdAt"],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin", "hr"].includes((user as any)?.role),
    read: ({ req: { user } }) =>
      ["super-admin", "admin", "hr", "employee"].includes((user as any)?.role),
    update: ({ req: { user } }) =>
      ["super-admin", "admin", "hr"].includes((user as any)?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes((user as any)?.role),
  },
  upload: {
    staticDir: "documents",
    mimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Document title for easy identification",
      },
    },
    {
      name: "description",
      type: "textarea",
      admin: {
        description: "Brief description of the document content",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Employee Records", value: "employee-records" },
        { label: "Contracts", value: "contracts" },
        { label: "Policies", value: "policies" },
        { label: "Reports", value: "reports" },
        { label: "Certificates", value: "certificates" },
        { label: "Legal Documents", value: "legal" },
        { label: "Financial Documents", value: "financial" },
        { label: "Other", value: "other" },
      ],
      admin: {
        description: "Document category",
      },
    },
    {
      name: "uploadedBy",
      type: "relationship",
      relationTo: "users",
      admin: {
        description: "User who uploaded this document",
      },
    },
    {
      name: "relatedEmployee",
      type: "relationship",
      relationTo: "employee-biodata",
      admin: {
        description: "Link to employee if document is employee-specific",
      },
    },
    {
      name: "tags",
      type: "array",
      admin: {
        description: "Tags for better organization and search",
      },
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
    {
      name: "isConfidential",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Mark as confidential (restricted access)",
      },
    },
  ],
};
