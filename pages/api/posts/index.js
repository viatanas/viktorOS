import dbConnect from "lib/db/dbConnect";

import Post from "@/models/Post";

import convertToSlug from "@/lib/helpers/convertToSlug";

export default async function handler(req, res) {
  await dbConnect();

  const { method, body } = req;
  const { title, content } = body;

  switch (method) {
    case "POST": {
      // Get post slug
      const slug = convertToSlug(title);

      // Check if this slug already exists
      const slugExists = await Post.findOne({ slug });
      if (slugExists) {
        res.status(409).send({ message: "A post with this title already exists" });
      }

      // Save post
      const newPost = new Post({
        slug,
        title,
        content,
      });
      await newPost.save();

      res.status(201).send({ newPost });
      break;
    }

    case "GET": {
      const posts = await Post.find({}).sort({ createdAt: -1 });
      res.status(200).send({ posts });
    }
  }
}
