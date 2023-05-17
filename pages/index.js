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
        <title>Viktor Atanasov</title>
      </Head>
      <main className="w-full h-auto min-h-screen bg-neutral-100">
        <div className="flex flex-col w-full h-auto max-w-3xl pt-10 mx-auto space-y-2 lg:pt-20">
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
