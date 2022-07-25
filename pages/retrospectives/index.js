// Absolute imports
import Head from "next/head";

// Relative imports
import { getPosts } from "../../lib/posts";
import Post from "../../components/Post";
import Nav from "../../components/Nav";

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

const Retrospectives = ({ posts }) => {
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
          content="https://blackout-poetry-bucket.s3.eu-west-1.amazonaws.com/personal-website-og.png"
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
          content="https://blackout-poetry-bucket.s3.eu-west-1.amazonaws.com/personal-website-og.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center w-full min-h-screen">
        <Nav />
        <main className="flex flex-col w-full max-w-lg px-6 lg:px-0">
          {/* Title */}
          <h1 className="mt-20 text-2xl font-light text-gray-900 font-inter">
            Retrospectives
          </h1>

          {/* Posts container */}
          <div className="flex flex-col w-full mt-10">
            <h2 className="text-base font-normal text-gray-900 font-inter">
              2022
            </h2>
            <div className="flex flex-col mt-5 space-y-6">
              {posts?.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Retrospectives;
