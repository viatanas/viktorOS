import Head from "next/head";
import Link from "next/link";
import { ArrowUpRight } from "feather-icons-react/build/IconComponents";

import projects from "@/data/projects";

import BirthdayCounter from "@/components/BirthdayCounter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Viktor Atanasov</title>
      </Head>
      <main className="w-full h-auto min-h-screen px-4 bg-white lg:px-0">
        <div className="flex flex-col w-full max-w-xl py-12 mx-auto lg:py-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold lg:text-2xl font-satoshi text-neutral-900">
                Viktor Atanasov
              </span>
              <span>·</span>
              <BirthdayCounter />
            </div>
          </div>

          <div className="flex flex-col w-full mt-4">
            <p className="font-satoshi text-[15px] font-normal leading-6 text-neutral-900">
              {`Hey, I'm Viktor. I am currently working at`}{" "}
              <Link
                target="_blank"
                href="https://simplesuite.co"
                className="underline underline-offset-4"
              >
                Simple Suite
              </Link>{" "}
              {` - a London-based design and development agency I co-founded with a friend. Previous to
              that, I worked on Numerro, which was acquired in 2021. I also have some 9-5 experience
              working at Microsoft.`}
            </p>
            <p className="font-satoshi text-[15px] mt-4 font-normal leading-6 text-neutral-900">
              Feel free to reach me via{" "}
              <Link
                target="_blank"
                href="mailto:viktor_atanasov@icloud.com"
                className="underline underline-offset-4"
              >
                email
              </Link>{" "}
              or on{" "}
              <Link
                target="_blank"
                href="https://twitter.com/viatanas"
                className="underline underline-offset-4"
              >
                twitter
              </Link>
              {`. If you are in London, let's grab coffee!`}
            </p>
          </div>

          <div className="my-10 w-28 text-neutral-400">
            <svg
              className="w-full"
              viewBox="0 0 234 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2C5.19444 3.66667 14.7778 12 21.1667 12C27.5556 12 33.9444 2 40.3333 2C46.7222 2 53.1111 12 59.5 12C65.8889 12 72.2778 2 78.6667 2C85.0556 2 91.4444 12 97.8333 12C104.222 12 110.611 2 117 2C123.389 2 129.778 12 136.167 12C142.556 12 148.944 2 155.333 2C161.722 2 168.111 12 174.5 12C180.889 12 187.278 2 193.667 2C200.056 2 206.444 12 212.833 12C219.222 12 228.806 3.66667 232 2"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>

          <div className="flex flex-col w-full">
            <span className="text-base font-bold font-satoshi text-neutral-900">Projects</span>
            <div className="flex flex-col mt-10 space-y-7">
              {projects.map((project) => (
                <div key={project.name} className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <Link target="_blank" href={project.href} className="flex space-x-1 group">
                      <span className="text-[15px] font-medium font-satoshi text-neutral-700 group-hover:text-neutral-900 group-hover:underline underline-offset-4">
                        {project.name}
                      </span>
                      <ArrowUpRight className="w-4 h-auto transition duration-150 transform text-neutral-500 group-hover:-translate-y-px group-hover:translate-x-px" />
                    </Link>

                    <span className="font-satoshi font-normal text-[14px] text-neutral-500">
                      {project.label}
                    </span>
                  </div>
                  <p className="w-9/12 font-satoshi font-normal text-[14px] text-neutral-500">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
