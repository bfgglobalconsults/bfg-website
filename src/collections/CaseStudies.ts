import type { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "unit", "publishedDate", "status"],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin", "blogger", "user"].includes(user?.role),
    read: () => true,
    update: ({ req: { user } }) =>
      ["super-admin", "admin", "blogger", "user"].includes(user?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL-friendly version of the title",
      },
    },
    {
      name: "unit",
      type: "select",
      required: true,
      options: [
        { label: "Technology", value: "technology" },
        { label: "Strategy", value: "strategy" },
        { label: "Research", value: "research" },
        { label: "Training", value: "training" },
      ],
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
        description: "Select which region(s) this case study should appear in",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      admin: {
        description: "Brief summary or Project Overview",
      },
    },
    {
      name: "problemStatement",
      type: "textarea",
      admin: {
        description: "Describe the problem or challenge",
      },
    },
    {
      name: "approach",
      type: "textarea",
      admin: {
        description: "Explain the approach or methodology used",
      },
    },
    {
      name: "solution",
      type: "richText",
      admin: {
        description: "Detail the solution introduced",
      },
    },
    {
      name: "content",
      type: "richText",
      admin: {
        description: "Additional content (optional, for legacy support)",
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "client",
      type: "text",
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        description: "Author of this case study",
      },
    },
  ],
};
