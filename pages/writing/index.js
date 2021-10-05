import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import MobileNav from "../../components/MobileNav";

import { getPosts } from "../../lib/posts";

const Writing = (props) => {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <meta name="description" content="Viktor Atanasov - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <div className="md:px-0 max-w-screen-sm mx-auto justify-center pt-5">
          <div className="hidden md:flex">
            <Nav selected="writing" />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
          <div className="w-full py-16 md:py-24 px-6 md:px-0 ">
            <h1 className="font-main text-2xl md:text-4xl font-bold text-gray-900">
              Writing
            </h1>
            <p className="mt-2 font-main text-base md:text-lg text-gray-600">
              Thoughts, reflections, learnings, experiences and anything else I
              think is worth talking about.
            </p>
            <h1 className="mt-10 font-main font-semibold text-lg text-gray-900">
              Thoughts
            </h1>
            <div className="mt-8 flex flex-col space-y-8">
              {props.posts.map((post) => (
                <div className="flex flex-col space-y-2" key={post.id}>
                  <Link href={`/writing/${post.slug}`}>
                    <a className="max-w-max font-main text-sm md:text-base font-medium text-gray-900 px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60">
                      {post.title}
                    </a>
                  </Link>
                  <p className="font-main text-sm text-gray-600">
                    {post.meta_description}
                  </p>
                </div>
              ))}
            </div>
            {/* <h1 className="mt-10 font-main font-semibold text-lg text-gray-900">
              Coding Journey
            </h1> */}
          </div>
        </div>
      </main>
    </div>
  );
};

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

export default Writing;
