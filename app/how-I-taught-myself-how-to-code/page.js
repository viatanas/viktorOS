import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "feather-icons-react";

export default function Article() {
  return (
    <main className="w-full h-auto min-h-screen px-4 bg-white lg:px-0">
      <Link href="/" className="fixed top-3 left-3">
        <button className="p-2 rounded-md hover:bg-neutral-200">
          <ArrowLeft className="w-4 h-4" />
        </button>
      </Link>
      <div className="flex flex-col w-full max-w-2xl py-12 mx-auto lg:py-20">
        <article className="w-full h-auto">
          <div className="flex flex-col space-y-3">
            <h1 className="text-3xl font-bold text-black font-satoshi">
              How I taught myself how to code
            </h1>
            <span className="text-base font-normal font-satoshi text-neutral-500">
              November 7, 2023
            </span>
          </div>
          <div className="mt-10">
            <h5 className="mt-12 mb-5 text-xl font-bold text-black font-satoshi">Introduction</h5>
            <p className="mb-5 text-base font-normal leading-7 font-satoshi text-neutral-900">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
            <div className="relative w-full h-auto">
              <Image
                src="/img/coding.png"
                placeholder="blur"
                blurDataURL="/img/coding.png"
                width={1600}
                height={1600}
                alt="Picture of the author"
                className="w-full h-auto my-8 rounded-md "
              />
            </div>

            <p className="mb-5 text-base font-normal leading-7 font-satoshi text-neutral-900">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
