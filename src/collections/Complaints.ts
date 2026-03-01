import type { CollectionConfig } from "payload";

export const Complaints: CollectionConfig = {
  slug: "complaints",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "priority", "createdBy", "createdAt"],
    group: "HR Management",
  },
  access: {
    // Users can create their own complaints
    create: ({ req: { user } }) => !!user,

    // Users can only read their own complaints, hr-admin/admin/super-admin can read all
    read: ({ req: { user } }) => {
      if (!user) return false;

      if (["super-admin", "admin", "hr-admin"].includes((user as any).role)) {
        return true;
      }

      // Regular users can only see their own complaints
      return {
        createdBy: {
          equals: (user as any).id,
        },
      };
    },

    // Users can update their own complaints (only if status is 'open' or 'in-progress')
    // hr-admin/admin/super-admin can update all
    update: ({ req: { user } }) => {
      if (!user) return false;

      if (["super-admin", "admin", "hr-admin"].includes((user as any).role)) {
        return true;
      }

      // Regular users can only update their own open/in-progress complaints
      return {
        and: [
          {
            createdBy: {
              equals: (user as any).id,
            },
          },
          {
            status: {
              in: ["open", "in-progress"],
            },
          },
        ],
      };
    },

    // Only hr-admin/admin/super-admin can delete
    delete: ({ req: { user } }) =>
      ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "Brief title of the complaint",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Detailed description of the complaint",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Workplace Harassment", value: "harassment" },
        { label: "Discrimination", value: "discrimination" },
        { label: "Work Environment", value: "work-environment" },
        { label: "Management Issues", value: "management" },
        { label: "Compensation & Benefits", value: "compensation" },
        { label: "Safety Concerns", value: "safety" },
        { label: "Policy Violation", value: "policy-violation" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "priority",
      type: "select",
      required: true,
      defaultValue: "medium",
      options: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
        { label: "Urgent", value: "urgent" },
      ],
      admin: {
        description: "Priority level of the complaint",
      },
      access: {
        update: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "open",
      options: [
        { label: "Open", value: "open" },
        { label: "In Progress", value: "in-progress" },
        { label: "Under Review", value: "under-review" },
        { label: "Resolved", value: "resolved" },
        { label: "Closed", value: "closed" },
      ],
      admin: {
        description: "Current status of the complaint",
      },
      access: {
        update: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
    },
    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        readOnly: true,
        description: "User who filed the complaint",
      },
      hooks: {
        beforeChange: [
          ({ req, operation, value }) => {
            if (operation === "create") {
              return (req.user as any).id;
            }
            return value;
          },
        ],
      },
    },
    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "users",
      required: false,
      admin: {
        description: "HR Admin assigned to handle this complaint",
        condition: (data, siblingData, { user }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
      access: {
        update: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
    },
    {
      name: "attachments",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: false,
      admin: {
        description: "Supporting documents or evidence",
      },
    },
    {
      name: "isAnonymous",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "File complaint anonymously (identity hidden from non-admins)",
      },
    },
    {
      name: "internalNotes",
      type: "richText",
      required: false,
      admin: {
        description: "Internal notes for HR/Admin use only",
        condition: (data, siblingData, { user }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
      access: {
        read: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
        update: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
    },
    {
      name: "resolution",
      type: "textarea",
      required: false,
      admin: {
        description: "Resolution details and actions taken",
        condition: (data, siblingData, { user }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
      access: {
        update: ({ req: { user } }) =>
          ["super-admin", "admin", "hr-admin"].includes((user as any)?.role),
      },
    },
    {
      name: "resolvedAt",
      type: "date",
      required: false,
      admin: {
        description: "Date when complaint was resolved",
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ value, originalDoc, data }) => {
            // Auto-set resolvedAt when status changes to resolved
            if (
              data.status === "resolved" &&
              originalDoc?.status !== "resolved"
            ) {
              return new Date().toISOString();
            }
            return value;
          },
        ],
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, operation, data }) => {
        // Set createdBy on create
        if (operation === "create" && req.user) {
          data.createdBy = (req.user as any).id;
        }
        return data;
      },
    ],
  },
};






