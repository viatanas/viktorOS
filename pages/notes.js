import Head from "next/head";

import Link from "next/link";
import useSWR from "swr";

import FeedCard from "@/components/FeedCard";
import fetcher from "@/lib/helpers/fetcher";

export default function Feed() {
  const { data, isLoading, error, mutate } = useSWR("/api/posts", fetcher);

  return (
    <>
      <Head>
        <title>Viktor Atanasov - Notes</title>
      </Head>
      <main className="w-full h-auto min-h-screen bg-neutral-100">
        <div className="flex flex-col w-full h-auto max-w-3xl pt-10 mx-auto space-y-2 lg:pt-20">
          {isLoading && (
            <div className="flex flex-col w-8/12 mx-auto space-y-6">
              <div className="w-full h-64 rounded-lg bg-neutral-200 animate-pulse"></div>
              <div className="w-full h-64 rounded-lg bg-neutral-200 animate-pulse"></div>
              <div className="w-full h-64 rounded-lg bg-neutral-200 animate-pulse"></div>
              <div className="w-full h-64 rounded-lg bg-neutral-200 animate-pulse"></div>
              <div className="w-full h-64 rounded-lg bg-neutral-200 animate-pulse"></div>
            </div>
          )}

          {!isLoading &&
            data.posts?.map((post, index) => (
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
