import Link from "next/link";
import projects from "@/data/projects";
import BirthdayCounter from "@/components/BirthdayCounter";
import Tide from "@/components/Tide";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto min-h-screen px-4 lg:px-0">
        <div className="flex flex-col w-full max-w-xl pt-20 pb-10 mx-auto lg:py-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold lg:text-2xl font-satoshi text-neutral-900">
                Viktor Atanasov
              </span>
              <span>·</span>
              <BirthdayCounter />
            </div>
          </div>

          <div className="flex flex-col w-full mt-4 lg:mt-8">
            <p className="font-satoshi text-[15px] font-normal leading-6 text-neutral-900">
              {`Hey, I'm Viktor. I am currently doing Customer Success at`}{" "}
              <Link
                target="_blank"
                href="https://vercel.com"
                className="underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2"
              >
                Vercel.
              </Link>{" "}
            </p>

            <p className="font-satoshi text-[15px] mt-4 font-normal leading-6 text-neutral-900">
              {`Before joining Vercel, I spent 3 years working on various different projects including`}{" "}
              <Link
                target="_blank"
                href="https://numerro.io"
                className="underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2"
              >
                Numerro
              </Link>{" "}
              {`- a Power BI design system, which was acquired in 2021.`}
            </p>
            <p className="font-satoshi text-[15px] mt-4 font-normal leading-6 text-neutral-900">
              {`Previous to that, I worked at`}{" "}
              <Link
                target="_blank"
                href="https://microsoft.com"
                className="underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2"
              >
                Microsoft
              </Link>{" "}
              {` where I made my first steps in the tech world.`}
            </p>

            <p className="font-satoshi text-[15px] mt-4 font-normal leading-6 text-neutral-900">
              Feel free to reach me via{" "}
              <Link
                target="_blank"
                href="mailto:viktor_atanasov@icloud.com"
                className="underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2"
              >
                email
              </Link>{" "}
              or on{" "}
              <Link
                target="_blank"
                href="https://twitter.com/viatanas"
                className="underline underline-offset-4 decoration-neutral-200 hover:decoration-yellow-300 decoration-2"
              >
                twitter
              </Link>
              {`. If you are in London, let's grab coffee!`}
            </p>
          </div>

          <div className="my-10">
            <Tide />
          </div>

          <div className="flex flex-col w-full">
            <span className="text-base font-bold font-satoshi text-neutral-900">Projects</span>
            <div className="flex flex-col mt-10 space-y-7">
              {projects.map((project) => (
                <div key={project.name} className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <a target="_blank" href={project.href}>
                      <span className="underline decoration-neutral-200 hover:decoration-yellow-300 decoration-2 text-[15px] font-medium font-satoshi text-neutral-700 group-hover:text-neutral-900 group-hover:underline underline-offset-4">
                        {project.name}
                      </span>
                    </a>

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
