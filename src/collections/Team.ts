import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "position", "department", "order"],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
    read: () => true,
    update: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        description: "Full name of the team member",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly identifier (e.g., managing-partner)",
      },
    },
    {
      name: "position",
      type: "text",
      required: true,
      admin: {
        description: "Job title/position (e.g., Managing Partner / CEO)",
      },
    },
    {
      name: "department",
      type: "select",
      required: true,
      options: [
        { label: "Management Team", value: "management" },
        { label: "Product Team", value: "product" },
        { label: "Marketing Team", value: "marketing" },
        { label: "Finance Team", value: "finance" },
        { label: "Administrative Team", value: "administrative" },
      ],
      admin: {
        description: "Department/team the member belongs to",
      },
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Profile photo (recommended: 250x250px square)",
      },
    },
    {
      name: "bio",
      type: "richText",
      admin: {
        description: "Full biography/profile (for detail page)",
      },
    },
    {
      name: "shortBio",
      type: "textarea",
      admin: {
        description: "Short bio for team card (optional)",
      },
    },
    {
      name: "email",
      type: "email",
      admin: {
        description: "Work email address (optional)",
      },
    },
    {
      name: "phone",
      type: "text",
      admin: {
        description: "Work phone number (optional)",
      },
    },
    {
      name: "linkedIn",
      type: "text",
      admin: {
        description: "LinkedIn profile URL (optional)",
      },
    },
    {
      name: "twitter",
      type: "text",
      admin: {
        description: "Twitter/X profile URL (optional)",
      },
    },
    {
      name: "region",
      type: "select",
      required: true,
      hasMany: true,
      options: [
        { label: "Nigeria", value: "nigeria" },
        { label: "United Kingdom", value: "uk" },
      ],
      admin: {
        description: "Select which region(s) this team member should appear in",
      },
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description:
          "Display order within department (lower numbers appear first)",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
      admin: {
        description: "Set to Active to display on website",
      },
    },
    {
      name: "achievements",
      type: "array",
      admin: {
        description: "Key achievements or qualifications",
      },
      fields: [
        {
          name: "achievement",
          type: "text",
        },
      ],
    },
    {
      name: "expertise",
      type: "array",
      admin: {
        description: "Areas of expertise",
      },
      fields: [
        {
          name: "area",
          type: "text",
        },
      ],
    },
  ],
};
