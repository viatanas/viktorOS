import Head from "next/head";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="w-full h-auto min-h-screen">
        <header className="fixed top-0 flex items-center justify-between w-full px-4 py-3 border-b border-neutral-200 bg-white/80 filter backdrop-blur">
          <span className="font-sans text-sm font-medium text-neutral-900">Snippet 1/4</span>
          <button className="flex items-center h-8 px-6 font-sans text-[13px] font-medium text-white rounded-full bg-neutral-900">
            Publish
          </button>
        </header>
        <div className="flex flex-col w-full max-w-xl py-32 mx-auto">
          <h1 className="text-3xl font-semibold leading-normal font-inter text-neutral-900">
            The Leftovers is One of the Best TV Shows Ever Made
          </h1>
          <p className="mt-4 text-base font-normal leading-7 font-inter text-neutral-700">
            When we are building apps at Simple Suite, most of the time, the people have rough
            guidelines of what they want, but they definetely don’t have any specific idea in mind.
            This means that we need to spend a considerable amount of time into bringing their idea
            to life on Figma, visualising the different flows, different UX patterns, different
            components in place. Once the customer is happy with the mocks, he gives us the final
            check off and then I am off to build it. The issue here is that there are always
            questions marks even when I start building it. Ideally you want all of these questions
            answered beforehand, but that usually doesn’t happen. It just doesn’t make sense to me
            writing an API endpoint for creating an organisation, if we don’t even know if we are
            going to have an organisation in the application (mainly because the user doesn’t know
            himself). That means building out the UI, walking the user through every screen and
            making him visualise their idea helps understand the exact requirements. Once you have
            those requirements then you can start building the backend logic as well.
          </p>
          <p className="mt-4 text-base font-normal leading-7 font-inter text-neutral-700">
            When we are building apps at Simple Suite, most of the time, the people have rough
            guidelines of what they want, but they definetely don’t have any specific idea in mind.
            This means that we need to spend a considerable amount of time into bringing their idea
            to life on Figma, visualising the different flows, different UX patterns, different
            components in place. Once the customer is happy with the mocks, he gives us the final
            check off and then I am off to build it. The issue here is that there are always
            questions marks even when I start building it. Ideally you want all of these questions
            answered beforehand, but that usually doesn’t happen. It just doesn’t make sense to me
            writing an API endpoint for creating an organisation, if we don’t even know if we are
            going to have an organisation in the application (mainly because the user doesn’t know
            himself). That means building out the UI, walking the user through every screen and
            making him visualise their idea helps understand the exact requirements. Once you have
            those requirements then you can start building the backend logic as well.
          </p>

          <p className="mt-4 text-base font-normal leading-7 font-inter text-neutral-700">
            When we are building apps at Simple Suite, most of the time, the people have rough
            guidelines of what they want, but they definetely don’t have any specific idea in mind.
            This means that we need to spend a considerable amount of time into bringing their idea
            to life on Figma, visualising the different flows, different UX patterns, different
            components in place. Once the customer is happy with the mocks, he gives us the final
            check off and then I am off to build it. The issue here is that there are always
            questions marks even when I start building it. Ideally you want all of these questions
            answered beforehand, but that usually doesn’t happen. It just doesn’t make sense to me
            writing an API endpoint for creating an organisation, if we don’t even know if we are
            going to have an organisation in the application (mainly because the user doesn’t know
            himself). That means building out the UI, walking the user through every screen and
            making him visualise their idea helps understand the exact requirements. Once you have
            those requirements then you can start building the backend logic as well.
          </p>
        </div>
      </main>
    </>
  );
}
