// Absolute imports
import Link from "next/link";
import Head from "next/head";

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
    <div>
      <Head>
        <title>Retrospectives</title>
        <meta name="description" content="Viktor Atanasov - Retrospectives" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viktor Atanasov" />
        <meta
          property="og:description"
          content="Business, writing, fun and more..."
        />
        <meta
          property="og:image"
          content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/dasdsaxxz.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@viatanas" />
        <meta name="twitter:title" content="Viktor Atanasov" />
        <meta
          name="twitter:description"
          content="Business, writing, fun and more..."
        />
        <meta
          name="twitter:image"
          content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/dasdsaxxz.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </div>
  );
};

export default IndividualArticle;
