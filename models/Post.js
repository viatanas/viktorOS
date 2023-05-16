import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    slug: { type: String },
    title: { type: String },
    content: { type: String },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema);
