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
    <div className="flex flex-col items-center w-full min-h-screen">
      <Nav />
      <main className="flex flex-col w-full max-w-lg">
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
  );
};

export default Retrospectives;
