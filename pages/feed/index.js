import Head from "next/head";

import Link from "next/link";
import useSWR from "swr";

import FeedCard from "@/components/FeedCard";
import fetcher from "@/lib/helpers/fetcher";

export default function Feed() {
  const { data, isLoading, error, mutate } = useSWR("/api/posts", fetcher);

  if (isLoading) return null;

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <nav className="flex justify-center w-full py-2 space-x-2 bg-white border-b border-neutral-200">
        <Link
          href="/"
          className="flex items-center justify-center px-16 font-sans text-sm font-medium rounded-md h-9 text-neutral-900 hover:bg-neutral-100 w-max"
        >
          About
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center px-16 font-sans text-sm font-medium rounded-md h-9 text-neutral-900 bg-neutral-100 w-max"
        >
          Feed
        </Link>
      </nav>
      <main className="w-full h-auto min-h-screen bg-neutral-100">
        <div className="flex flex-col w-full h-auto max-w-2xl pt-32 pb-40 mx-auto space-y-2">
          {data.posts?.map((post, index) => (
            <FeedCard
              key={post._id}
              post={post}
              index={index}
              mutate={mutate}
              numOfPosts={data.posts.length}
            />
          ))}
        </div>
      </main>
    </>
  );
}
