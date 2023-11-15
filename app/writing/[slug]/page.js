import Link from "next/link";
import { ArrowLeft } from "feather-icons-react/build/IconComponents";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Tide from "@/components/Tide";

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
    <main className="flex justify-center w-full h-auto min-h-screen px-4 bg-white lg:px-0">
      <div className="flex flex-col w-full max-w-2xl pt-20 pb-5 mx-auto lg:py-20">
        <section className="flex flex-col w-full">
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
          <article>
            <Markdown className="mt-10 prose">{post.content}</Markdown>
          </article>
        </section>
        <div className="flex justify-center w-full mt-6">
          <Tide />
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
