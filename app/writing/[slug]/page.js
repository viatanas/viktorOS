import Link from "next/link";
import { ArrowLeft } from "feather-icons-react/build/IconComponents";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug) => {
  const folder = "content/";
  const filePath = `${folder}${slug}.mdx`;
  const fileContent = readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  return matterResult;
};

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
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const ArticlePage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="w-full h-auto min-h-screen px-4 bg-white lg:px-0">
      <Link href="/" className="absolute lg:fixed top-3 left-3">
        <button className="p-2 rounded-md hover:bg-neutral-200">
          <ArrowLeft className="w-4 h-4" />
        </button>
      </Link>
      <article className="flex flex-col w-full max-w-2xl pt-20 pb-5 mx-auto lg:py-20">
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold text-black font-satoshi">{post.data.title}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-[15px] font-normal font-satoshi text-neutral-500">
              {post.data.publishedAt}
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-[15px] font-normal font-satoshi text-neutral-500">
              {post.data.wordCount}
            </span>
          </div>
        </div>

        <Markdown className="mt-10 prose">{post.content}</Markdown>
      </article>
    </main>
  );
};

export default ArticlePage;
