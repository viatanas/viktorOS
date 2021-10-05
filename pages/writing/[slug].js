import { getPosts, getPostBySlug } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import MobileNav from "../../components/MobileNav";

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Viktor Atanasov - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <div className="md:px-0 max-w-screen-sm mx-auto justify-center pt-5">
          <div className="hidden md:flex">
            <Nav />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
          <div className="w-full py-16 md:py-24 px-6 md:px-0 ">
            <h1 className="font-mono text-2xl md:text-4xl font-bold text-gray-900">
              {post.title}
            </h1>
            <div
              className="mt-10 font-main text-gray-900 prose leading-8"
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></div>
            <Link href="/writing">
              <div className="mt-14 flex space-x-2 items-center cursor-pointer group">
                <svg
                  className="w-3 h-3 fill-current text-gray-500 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-main font-medium text-sm text-gray-500 group-hover:text-gray-900">
                  Back To Writing
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

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

export default Post;
