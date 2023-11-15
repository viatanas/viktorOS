import Tide from "@/components/Tide";
import getPostMetadata from "@/lib/getPostMetadata";
import Link from "next/link";

export const metadata = {
  title: "Viktor Atanasov - Writing",
};

const WritingPage = () => {
  const posts = getPostMetadata();

  return (
    <main className="flex justify-center w-full h-auto min-h-screen px-4 bg-white lg:px-0">
      <div className="flex flex-col w-full max-w-xl py-20 pb-5 mx-auto">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold lg:text-2xl font-satoshi text-neutral-900">Writing</h1>
          <p className="font-satoshi text-[15px] font-normal leading-6 text-neutral-900">
            Some thoughts, learnings and things worth sharing.
          </p>
        </div>
        <div className="my-10">
          <Tide />
        </div>
        <section className="flex flex-col w-full space-y-8">
          {posts.map((post) => (
            <div className="flex flex-col items-start w-full space-y-2">
              <Link
                className="text-base font-medium underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2 font-satoshi text-neutral-900"
                href={`/writing/${post.slug}`}
              >
                {post.title}
              </Link>
              {/* <span className="text-sm font-normal font-satoshi text-neutral-500">
                {post.publishedAt}
              </span> */}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default WritingPage;
