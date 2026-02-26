import type { CollectionConfig } from "payload";

export const LeaveRequests: CollectionConfig = {
  slug: "leave-requests",
  admin: {
    useAsTitle: "employeeName",
    defaultColumns: [
      "employeeName",
      "leaveType",
      "startDate",
      "endDate",
      "status",
    ],
  },
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === "create") {
          if (req.user) {
            data.requestedBy = req.user.id;
          }
        }
        return data;
      },
    ],
  },
  access: {
    create: () => true, // All authenticated users can create leave requests
    read: ({ req: { user } }) => {
      if (["super-admin", "admin"].includes(user?.role)) return true;
      return { requestedBy: { equals: user?.id } }; // Users can only see their own
    },
    update: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
  },
  fields: [
    {
      name: "requestedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        readOnly: true,
        position: "sidebar",
        description: "Automatically set to the current user",
      },
    },
    {
      name: "employeeName",
      type: "text",
      required: true,
    },
    {
      name: "leaveType",
      type: "select",
      required: true,
      options: [
        { label: "Annual Leave", value: "annual" },
        { label: "Sick Leave", value: "sick" },
        { label: "Casual Leave", value: "casual" },
        { label: "Maternity Leave", value: "maternity" },
        { label: "Paternity Leave", value: "paternity" },
        { label: "Unpaid Leave", value: "unpaid" },
      ],
    },
    {
      name: "startDate",
      type: "date",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
      required: true,
    },
    {
      name: "reason",
      type: "textarea",
      required: true,
    },
    {
      name: "supportingDocument",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Upload supporting documents (medical certificate, etc.)",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" },
      ],
      access: {
        update: ({ req: { user } }) =>
          ["super-admin", "admin"].includes(user?.role),
      },
    },
    {
      name: "reviewedBy",
      type: "relationship",
      relationTo: "users",
      admin: {
        condition: (data) => data.status !== "pending",
      },
    },
    {
      name: "reviewNotes",
      type: "textarea",
      admin: {
        condition: (data) => data.status !== "pending",
      },
    },
    {
      name: "reviewedAt",
      type: "date",
      admin: {
        condition: (data) => data.status !== "pending",
      },
    },
  ],
};
