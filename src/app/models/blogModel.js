import mongoose, { Document, Model } from "mongoose";


const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
        },
    content: {
        type: String,
        required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    contentImages: {
      type: [String], // Array of strings to hold multiple image URLs
      default: [], // Default to an empty array if no images are provided
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;