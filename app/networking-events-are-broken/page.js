import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "feather-icons-react";

export const metadata = {
  title: "Networking events are broken",
  description: "viktoratanasov.com",
};

export default function Article() {
  return (
    <main className="w-full h-auto min-h-screen px-4 bg-white lg:px-0">
      <Link href="/" className="absolute lg:fixed top-3 left-3">
        <button className="p-2 rounded-md hover:bg-neutral-200">
          <ArrowLeft className="w-4 h-4" />
        </button>
      </Link>
      <div className="flex flex-col w-full max-w-2xl pt-20 pb-5 mx-auto lg:py-20">
        <article className="w-full h-auto">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold text-black font-satoshi">
              Networking events are broken
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-[15px] font-normal font-satoshi text-neutral-500">
                November 14, 2023
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-[15px] font-normal font-satoshi text-neutral-500">
                997 words
              </span>
            </div>
          </div>
          <div className="mt-10">
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`When I moved to London in 2022, I was excited about the prospect of taking part in some networking events where I could meet like-minded people. In the last year, I’ve gone to multiple such events and it’s been the most disappointing experience ever. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Networking events could be good, but right now they are not and I would even go a step further and say that they feel like a waste of time and money. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Here are a few problems with how they work today…`}
            </p>

            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              Problem #1 - Inappropriate venues
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Networking is based on talking. So you would think that choosing a venue that would allow for easy conversations would be an absolute top priority for the organisers? Surely? Wrong! Most events I’ve attended are hosted in bars and pubs, where the noise is so high it makes my throat hurt just trying to introduce myself.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`The last start-up event I went to, was hosted in what looked like a refurbished strip club with loud music blasting through the speakers and hundreds of founders trying to talk to each other by screaming and yelling. As soon as I entered the pub and saw the venue, I turned around and left. The ticket for the event was £60. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`If you want a good networking event pick a venue thinking about the attendees, not the discount offer the pub gives you. `}
            </p>

            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              Problem #2 - Too many people
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Most networking events I’ve gone to, have had at least 50 people, and in some cases many more. I guess, as an organiser, getting as many people as possible through the door makes financial sense. But what this usually means is that conversations happen in groups of 4-5, where everyone gets the chance to say their little intro and potentially ask a couple of questions, before moving on and joining the next group. And then the cycle repeats. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Building a long-lasting relationship with another person requires peeling the top layers and exploring each other’s inner passions, drivers, interests and fears. Unfortunately, the current networking format doesn’t cater to that as you barely get to have 1:1 conversations with any one person. Even if you try doing that, before you realise it 3-4 others have joined in and now this has turned into a group conversation. `}
            </p>

            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`The whole experience feels very much like a numbers game, where the goal is to get as many LinkedIn connections as possible and feel a sense of achievement. But what’s the point of that? `}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              Problem #3 - No real curation{" "}
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`It is extremely frustrating going to a start-up event, hoping to meet other like-minded founders, to find out that most of the participants there are bankers and consultants. I don’t have anything against bankers or consultants, but this was not what I signed up for. What’s even worse is when these types of events are being used for prospecting and lead generation by salespeople, so instead of talking to a like-minded founder, you are being sold on an insurance package you don’t need.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`I think having some sort of basic gatekeeping or “acceptance criteria” would very much improve the experience and help attendees connect with people of similar interests. It might come down at the cost of a few tickets though, so I understand it’s not an easy decision to make. `}
            </p>

            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              Problem #4 - No information about the people you are going to meet
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`If you don’t know anything about the person you are speaking to, the level of questions you can ask them is very surface-level and repetitive. Heaven forbid you didn’t hear their intro because of all the background noise and now you are definitely stuck. There is just nothing to bite on. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Wouldn’t it be cool to be able to see a quick bio and a few links about each person before you meet them? Or even better - have every attendee record a short 30-second intro video when they are signing up. Imagine going to an event, where you feel like you know the people there. That would immediately elevate the conversations to questions beyond: “So, is this your first time here?”.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              I like that there are start-ups out there like{" "}
              {
                <a
                  href="https://lu.ma"
                  target="_blank"
                  className="font-medium text-black underline decoration-neutral-200 hover:decoration-neutral-300 decoration-2 group-hover:underline underline-offset-4"
                >
                  lu.ma
                </a>
              }
              , who are trying to tackle this problem by introducing attendee profiles, but I think
              there is still room for improvement.
            </p>
            <Image
              src="/img/writing/networking.png"
              placeholder="blur"
              blurDataURL="/img/writing/networking.png"
              width={1600}
              height={1600}
              alt="Screenshot of a events website luma showing a list of participants"
              className="w-full h-auto my-8 rounded-md "
            />
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              Problem #5 - No mechanisms for helping you maintain the relationships after the event{" "}
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`There is an argument to be made that what happens after the event is the responsibility of the people themselves, but wouldn’t it be nice if the event organisers had a built-in mechanism for keeping those relationships alive longer-term? I can’t tell you how many people I have added on LinkedIn throughout the year, just to never hear from them again. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`I have seen a few events try putting attendees in a Slack channel after the event, but I don’t find that very effective. The groups quickly become bloated and moderation gets difficult. I think there is an opportunity here for someone to come up with a structure where meeting a person at a networking event is just the first step of a longer-term “getting to know each other” experience. `}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">Now what? </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`So networking events are broken and I have stopped going to them. Now what? Unfortunately, I still have the same underlying problem - I want to meet other like-minded people. I’ve been trying to find short-term alternative solutions like being more active on Twitter and joining hobby-related meet-ups. And while these activities have helped me build my social circle in London, I still don’t know many people who are on the same professional wavelength as me. `}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Longer term, I am just waiting for someone to build the next-generation networking event, that would address at least some of the problems above. `}{" "}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
