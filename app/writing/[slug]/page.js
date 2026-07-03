import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import getPostMetadata from "@/lib/getPostMetadata";

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
  const { slug } = await params;
  const post = getPostContent(slug);
  return {
    title: post.data.title,
    openGraph: {
      title: post.data.title,
      description: "viktoratanasov.com",
    },
  };
}

const ArticlePage = async (props) => {
  const { slug } = await props.params;
  const post = getPostContent(slug);

  return (
    <main className="flex justify-center w-full h-auto min-h-screen px-4 lg:px-0">
      <div className="flex flex-col w-full max-w-2xl pt-20 pb-10 mx-auto lg:py-20">
        <section className="flex flex-col w-full">
          <div className="flex flex-col space-y-2">
            <h1 className="font-handwritten text-[34px] lg:text-[44px] text-neutral-900">
              {post.data.title}
            </h1>
            <div className="flex items-center space-x-2">
              <span className="font-geist text-[15px] font-light text-neutral-400">
                {post.data.publishedAt}
              </span>
              <span className="text-neutral-300 text-[15px]">·</span>
              <span className="font-geist text-[15px] font-light text-neutral-400">
                {post.data.wordCount}
              </span>
            </div>
          </div>
          <article>
            <Markdown className="mt-10 prose">{post.content}</Markdown>
          </article>
        </section>

        <div className="w-full h-px bg-neutral-200 mt-16 mb-8" />

        <Link href="/" className="flex items-center gap-2 group w-fit">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400 group-hover:text-neutral-500 transition-colors"
          >
            <path
              d="M9.8304 6C7.727 7.55556 5.83783 9.37278 4.20952 11.4057C4.06984 11.5801 4 11.79 4 12M9.8304 18C7.727 16.4444 5.83783 14.6272 4.20952 12.5943C4.06984 12.4199 4 12.21 4 12M4 12H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-handwritten text-[20px] text-neutral-400 group-hover:text-neutral-500 transition-colors">
            viktoratanasov.com
          </span>
        </Link>
      </div>
    </main>
  );
};

export default ArticlePage;
