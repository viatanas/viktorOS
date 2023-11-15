import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "content/";
  const files = readdirSync(folder);

  // Get graymatter data for each file
  const posts = files.map((fileName) => {
    const filePath = `content/${fileName}`;
    const fileContent = readFileSync(filePath, "utf8");
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      publishedAt: matterResult.data.publishedAt,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
