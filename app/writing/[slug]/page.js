import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/lib/getPostMetadata";

import Tide from "@/components/Tide";
import Navbar from "@/components/Navbar";

const getPostContent = (slug) => {
  const folder = "content/";
  const filePath = `${folder}${slug}.mdx`;
  const fileContent = readFileSync(filePath, "utf8");
  const matterResult = matter(fileContent);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params }) {
  const post = getPostContent(params.slug);
  return {
    title: post.data.title,
    openGraph: {
      title: post.data.title,
      description: "viktoratanasov.com",
    },
  };
}

const ArticlePage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <Navbar />
      <main className="flex justify-center w-full h-auto min-h-screen px-4 lg:px-0">
        <div className="flex flex-col w-full max-w-xl pt-20 pb-10 mx-auto lg:py-20">
          <section className="flex flex-col w-full">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold text-black font-satoshi">{post.data.title}</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-normal font-satoshi text-neutral-500">
                  {post.data.publishedAt}
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-sm font-normal font-satoshi text-neutral-500">
                  {post.data.wordCount}
                </span>
              </div>
            </div>
            <article>
              <Markdown className="mt-10 prose">{post.content}</Markdown>
            </article>
          </section>
          <div className="flex justify-center w-full mt-4 lg:mt-6">
            <Tide />
          </div>
        </div>
      </main>
    </>
  );
};

export default ArticlePage;
