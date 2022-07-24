// Absolute imports
import Link from "next/link";

// Relative imports
import Article from "../../components/Article";
import Nav from "../../components/Nav";

import { getPostBySlug, getPosts } from "../../lib/posts";

export async function getStaticPaths() {
  const data = await getPosts();
  const paths = data.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);

  return {
    props: { post },
  };
}

const IndividualArticle = ({ post }) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20">
      <Link href={"/retrospectives"}>
        <button className="fixed z-50 flex items-center h-10 px-6 text-sm text-gray-900 bg-white border border-gray-200 rounded-full cursor-pointer bottom-6 left-6 font-inter hover:border-gray-300">
          Back
        </button>
      </Link>
      <Nav />
      <main className="flex flex-col w-full max-w-2xl px-6 lg:px-0">
        {/* Title */}

        {/* Posts container */}
        <div className="w-full mt-20">
          <Article post={post} />
        </div>
      </main>
    </div>
  );
};

export default IndividualArticle;
