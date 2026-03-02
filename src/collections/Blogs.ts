import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedDate", "status"],
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
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
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
        description: "Select which region(s) this blog should appear in",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
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
        description: "Author of this blog post",
      },
    },
  ],
};
