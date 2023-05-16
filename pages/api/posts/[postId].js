import dbConnect from "lib/db/dbConnect";

import Post from "@/models/Post";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "PATCH": {
      const update = req.body;

      // Update the post
      await Post.updateOne({ _id: req.query.postId }, { $set: update });

      // Retrieve the updated user
      const updatedPost = await Post.findById(req.query.postId);
      res.status(200).send({ updatedPost });
      break;
    }
  }
}
