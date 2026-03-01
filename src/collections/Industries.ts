import type { CollectionConfig } from "payload";

export const Industries: CollectionConfig = {
  slug: "industries",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order", "status"],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin", "blogger"].includes((user as any)?.role),
    read: () => true,
    update: ({ req: { user } }) =>
      ["super-admin", "admin", "blogger"].includes((user as any)?.role),
    delete: ({ req: { user } }) =>
      ["super-admin", "admin"].includes((user as any)?.role),
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
        description: "URL slug for the industry page",
      },
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
      admin: {
        description: "Brief description for card display (150-200 characters)",
      },
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Main hero image for the industry page",
      },
    },
    {
      name: "cardImage",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        description:
          "Optional separate image for card display (if different from hero)",
      },
    },
    {
      name: "overview",
      type: "richText",
      required: true,
      admin: {
        description: "Detailed overview of the industry",
      },
    },
    {
      name: "challenges",
      type: "richText",
      required: false,
      admin: {
        description: "Key challenges in this industry",
      },
    },
    {
      name: "solutions",
      type: "richText",
      required: false,
      admin: {
        description: "How BFG helps solve industry challenges",
      },
    },
    {
      name: "caseStudies",
      type: "relationship",
      relationTo: "case-studies",
      hasMany: true,
      required: false,
      admin: {
        description: "Related case studies for this industry",
      },
    },
    {
      name: "services",
      type: "array",
      required: false,
      fields: [
        {
          name: "serviceName",
          type: "text",
          required: true,
        },
        {
          name: "serviceDescription",
          type: "textarea",
          required: true,
        },
      ],
      admin: {
        description: "Key services offered for this industry",
      },
    },
    {
      name: "stats",
      type: "array",
      required: false,
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "value",
          type: "text",
          required: true,
        },
      ],
      admin: {
        description: "Industry statistics or achievements",
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
        description: "Select which region(s) this industry should appear in",
      },
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
      admin: {
        description: "Display order (lower numbers appear first)",
      },
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
  ],
};


