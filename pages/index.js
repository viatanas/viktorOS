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
        <meta property="og:url" content="https://viktoratanasov.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viktor Atanasov" />
        <meta property="og:image" content="/img/og.png" />
      </Head>
      <main className="w-full h-auto min-h-screen bg-neutral-100">
        <div className="flex flex-col w-full h-auto max-w-3xl pt-20 mx-auto space-y-2">
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
