import { GitCommit, Clock } from "feather-icons-react";

export default function FeedCard({ index }) {
  return (
    <div className="flex items-stretch w-full h-auto space-x-6 ">
      <div className="relative flex self-stretch justify-center w-3/12 space-x-6">
        <span className="mt-px font-mono text-xs font-medium tracking-tight text-neutral-900">
          13 May, 2023
        </span>

        {index !== 0 && (
          <div className="absolute inset-y-0 w-[2px] right-[21px] bg-neutral-200 top-7"></div>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-neutral-400"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="w-full h-auto pb-16">
        <div className="flex flex-col w-full h-auto p-6 bg-white border rounded-md shadow border-neutral-200 filter">
          <h1 className="text-lg font-semibold font-inter text-neutral-900">Abstractions</h1>
          <p className="mt-4 text-sm font-normal leading-6 font-inter text-neutral-700">
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
          <p className="font-sans text-sm font-normal leading-6 text-neutral-700">
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
          <div className="flex justify-start w-full">
            <button className="flex items-center justify-center p-2 mt-6 space-x-1.5 border rounded-md border-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-neutral-900"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span className="font-mono text-xs font-normal text-neutral-700">3</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
