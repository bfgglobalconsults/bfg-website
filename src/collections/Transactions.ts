import type { CollectionConfig } from "payload";

export const Transactions: CollectionConfig = {
  slug: "transactions",
  admin: {
    useAsTitle: "description",
    defaultColumns: ["description", "type", "amount", "date", "category"],
  },
  access: {
    create: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
    read: ({ req: { user } }) =>
      ["super-admin", "admin", "blogger", "user"].includes(user?.role), // All can view
    update: ({ req: { user } }) =>
      ["super-admin", "admin"].includes(user?.role),
    delete: ({ req: { user } }) => user?.role === "super-admin",
  },
  fields: [
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "Inflow", value: "inflow" },
        { label: "Outflow", value: "outflow" },
      ],
    },
    {
      name: "amount",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "currency",
      type: "select",
      required: true,
      defaultValue: "NGN",
      options: [
        { label: "Nigerian Naira (NGN)", value: "NGN" },
        { label: "US Dollar (USD)", value: "USD" },
        { label: "British Pound (GBP)", value: "GBP" },
        { label: "Euro (EUR)", value: "EUR" },
      ],
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Salary", value: "salary" },
        { label: "Project Payment", value: "project-payment" },
        { label: "Office Expenses", value: "office-expenses" },
        { label: "Equipment", value: "equipment" },
        { label: "Marketing", value: "marketing" },
        { label: "Training", value: "training" },
        { label: "Utilities", value: "utilities" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "reference",
      type: "text",
      admin: {
        description: "Transaction reference or invoice number",
      },
    },
    {
      name: "notes",
      type: "textarea",
    },
    {
      name: "attachments",
      type: "array",
      fields: [
        {
          name: "file",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "recordedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};
