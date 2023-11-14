import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "feather-icons-react";

export const metadata = {
  title: "How I taught myself how to code",
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
              How I taught myself how to code
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-[15px] font-normal font-satoshi text-neutral-500">
                November 9, 2023
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-[15px] font-normal font-satoshi text-neutral-500">
                1,581 words
              </span>
            </div>
          </div>
          <div className="mt-10">
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {` In 2021 my co-founder and I sold our first company Numerro and with some cash in the
              bank, we were thinking what to do next. We knew we wanted to start something in the
              SaaS space, but we didn’t know what. We were on the lookout for problems to solve.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`The issue was that none of us was technical. I graduated from university with a
              business degree and my co-founder was a designer, so looking for a problem that could
              be solved through software seemed like a difficult task. As an alternative, we looked
              in the direction of the hugely trendy at that stage no-code movement. We were
              interested in the prospect of using UI-first tools like Bubble and Webflow to create
              our business, but once we looked a bit deeper into them, we realised that while these
              solutions give you the ability to create a good MVP, you could never solve a
              meaningful problem using them. Within that community, people were selling Notion
              dashboards and access to Airtables and that just felt a bit…uninspiring.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`We were stuck and not sure what to do next. That’s when I decided to hit the pause
              button on the entrepreneurship thing and spend some time learning how to code. I
              wanted to have the skills to bring my ideas to life and not pick my ideas based on
              what limited skills I had. I spent the next 12 months learning and since then I have
              gone from learning about what HTML is to shipping multiple projects in production
              including blackoutpoetry.co and usehaste.io.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Throughout the years a lot of people have asked me about my coding journey - what
              books I’ve read and what courses I’ve done. I guess the whole point of writing this
              article is that my answer is slightly different. I didn’t really read any books or do
              any courses. I learnt through picking projects I was passionate about and
              Googling/Stack Overflowing (is that a word?) my way to the answers. I wanted to break
              down my journey into 3 main ideas that you might find useful if you are finding
              yourself on the same journey, struggling to make progress and losing motivation.
              People are different, and this way of learning might not be for everyone, but it was
              for me, so it might be for you too!`}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              1. Start with a project you want to build
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`A lot of people I have spoken to seem to start with the theory first. They order a
              Javascript book on Amazon or sign up for Codecademy and try to learn the concepts
              without knowledge of their practical application. That’s boring and inefficient
              because it’s difficult to determine the “usefulness” of the concept you are learning.
              Learning that an array is “a data structure consisting of a collection of elements, of
              same memory size, each identified by at least one array index or key” is hardly
              memorable or interesting.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`When I started learning how to code I picked a project that I really wanted to build.
              COVID was just starting and I was missing the feeling of working with other people
              around me. I set out to create a virtual study room where hundreds of people could
              join in simultaneously in a Zoom-like fashion giving you the feeling of co-working
              with others, albeit virtually. Of course knowing what I know now, starting your coding
              journey by trying to build a Zoom-like clone that can synchronously host 100s of users
              is a ridiculous thing to do. I was learning about technologies like socket.io before I
              even knew what HTML was! And yet that didn’t matter. It gave me the motivation to keep
              pursuing, as the learnings were digestible and directly applicable.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Picking a project that you are passionate about allows you to only learn the amount of
              theory required to complete the next step and immediately be able to
              understand how and where this concept fits within the bigger picture. For example,
              finding out that you can store similar pieces of data (like Twitter posts, user
              objects etc.) in an array, then be able to loop through each one of them and display
              them on a page is a more engaging way of learning the concept of an array.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              Soon after I started my initial project (codenamed Project 1), I realised how
              difficult it would be to actually build it, so I quickly moved to my next idea. A
              simple app to create a colourful profile picture for Twitter. This project (codenamed
              Project 2) turned out to be my first-ever shipped application -{" "}
              <a
                href="https://twitter-profile-picture.web.app"
                target="_blank"
                className="font-medium text-black underline decoration-neutral-200 hover:decoration-neutral-300 decoration-2 group-hover:underline underline-offset-4"
              >
                https://twitter-profile-picture.web.app
              </a>
              .
            </p>
            <Image
              src="/img/twitter-project.png"
              placeholder="blur"
              blurDataURL="/img/writing/coding.png"
              width={1600}
              height={1600}
              alt="Screenshot of a website for creating colorful profile pictures for Twitter."
              className="w-full h-auto my-8 rounded-md "
            />

            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              2. Break down the problems into small bites
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`When starting to learn, framing the problems in the right way could make or break your
              learning spirit. In the beginning, everything seems complicated, inaccessible and
              overwhelming, so it’s important to break down the problems into singular, achievable
              actions you can take, giving you a sense of progress.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`When I was starting, I tried my best to tackle the problems one by one. Instead of
              asking general questions like “How to build a Zoom-like clone”, I tried asking “How do
              I send content from a textarea to the server and save it in a database”. The more
              specific you can ask your question the better. At this stage, you shouldn’t worry too
              much about the quality or the “correctness” of your questions. You are still learning
              so a lot of the concepts are new to you. The more important thing here is to ask a
              question that helps you get to the next stage and the next problem. That’s it.`}
            </p>
            <Image
              src="/img/coding.png"
              placeholder="blur"
              blurDataURL="/img/writing/coding.png"
              width={1600}
              height={1600}
              alt="Screenshot of a note with a to-do list of problems"
              className="w-full h-auto my-8 rounded-md "
            />
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`A framework I heard a while back called “ABZ” summarises this way of thinking quite
              well. It says that at any point in time, you should know what’s your starting point
              (point A), what’s the next milestone (point B) and what’s the final vision (point Z).
              You don’t need to know about all the other steps that will take you to point Z,
              because, at this point in your journey, you don’t even know what you don’t know! It’s
              all about asking the right question to get to point B and from there the cycle
              repeats.`}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">
              3. Google is your friend
            </h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Once you break down the bigger problem into smaller questions, now it’s time to look
              for the answers. That’s where Google, Stack Overflow, Youtube (and nowadays ChatGPT)
              come in. Most of the questions you are trying to answer have already been answered
              many times and it’s up to you to find them. This part of the learning process is
              really important because being resourceful is an important part of “knowing how to
              code”. Regardless of your experience, you will never have all the answers, and finding
              the right answer is a skill on its own.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`In the beginning, it very often comes down to finding the solution, copy-pasting it
              into your app and then tweaking it until it works. At times, it might feel
              overwhelming that you are using external code that you don’t understand (I definitely
              had that feeling multiple times), but again you have to remember what the goal is - to
              get to point B. The knowledge will come with time and if copying-pasting lines of code
              solves your problem so you can move to the next one, so be it.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`If you get particularly stuck on a problem, then it’s also a great idea to have a
              tutorial on the side that you can jump into to understand a particular concept. I
              personally found tutorials a great resource, but only when I used them for particular
              problems. Trying to complete a YouTube tutorial from start to finish was torture for
              me.`}
            </p>
            <h3 className="mb-5 text-2xl font-bold text-black mt-14 font-satoshi">Conclusion</h3>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`I don’t want to make this method of learning seem like it’s all sunshine and roses.
              There are some disadvantages to it as well. There have been times when I was stuck on
              a single problem for weeks without any idea how to solve it by myself or in some other
              cases having to refactor a bunch of code just because the thing that I copy-pasted
              early on, completely broke my app in a later stage. And still, if I had to go back and
              choose a way to learn, I would go down the same route.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Some time ago I did a Reddit post sharing my thoughts about this topic and gave it the
              daring title - “Doing courses is the worst way you can learn to code”. I used that
              title mainly for attention-grabbing reasons, but to a large extent, I believed this to
              be a true statement. Expectedly, I received a moderate amount of backlash about the
              post, but more importantly, some of the feedback made me rethink my strong opinion.
              Wasn’t there a saying - strong opinions, weakly held?`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`So over time, I’ve softened my stance. I don’t really believe there is a right way to
              learn. I completely understand that some people would prefer to do a coding boot camp
              or read a Javascript book and that’s completely fine. We are all different after all.
              But what I wanted to do with this article was to reflect on my approach and put it out
              there as some people might resonate with it.`}
            </p>
            <p className="mb-5 font-sans text-base font-normal leading-7 text-neutral-600">
              {`Whatever path you choose to pursue though, I want to end this by saying - don’t give
              up. It’s a magical feeling to be able to bring your ideas to life and see other people
              using something you’ve built.`}
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
