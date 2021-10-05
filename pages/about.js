import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Viktor Atanasov - About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen">
        <div className="md:px-0 max-w-screen-sm mx-auto justify-center pt-5">
          <div className="hidden md:flex">
            <Nav selected="about" />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
          <div className="w-screen md:max-w-screen-sm py-16 md:py-24 md:px-0">
            <img className="md:rounded-md" src="/me.png" />
            <div className="w-full mt-12 px-6">
              <p className="font-main font-normal text-sm md:text-base text-gray-900 leading-7">
                Hi, I am Viktor and I bootstrap my business ideas. I enjoy
                tinkering with design, code, marketing and all the fun bits that
                go into an idea.
              </p>
              <br></br>
              <p className="font-main font-normal text-sm md:text-base text-gray-900 leading-7">
                Previously, I worked at Microsoft UK as a Technical Account
                Manager where I got to work with some of the biggest brands in
                the country helping them improve their ancient technology. Two
                years in and I realised{" "}
                <a className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60">
                  working for someone else wasn’t for me.
                </a>
              </p>
              <br></br>
              <p className="font-main font-normal text-sm md:text-base text-gray-900 leading-7">
                I then partnered up with a friend of mine and we founded{" "}
                <a
                  href="https://numerro.io"
                  target="_blank"
                  className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60"
                >
                  Numerro
                </a>
                , a design toolkit for Power BI users which was my first
                bootstrapped business. We sold it one year later to Hat Labs .
              </p>
              <br></br>
              <p className="font-main font-normal text-sm md:text-base text-gray-900 leading-7">
                Currently, I am back at square one, testing out different ideas,
                before jumping in and building my next business.{" "}
              </p>
              <br></br>
              <p className="font-main font-normal text-sm md:text-base text-gray-900 leading-7">
                If you want to chat about ideas, business, technology or you got
                an interesting project that you need help with, definitely reach
                out to me on{" "}
                <a
                  href="twitter.com/viatanas"
                  className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60"
                >
                  Twitter
                </a>{" "}
                or by{" "}
                <a
                  href="mailto:viktoratanasov@icloud.com"
                  target="_blank"
                  className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60"
                >
                  email
                </a>
                ! Would love to speak to you.
              </p>
              <h1 className="mt-10 font-main font-semibold text-xl text-gray-900">
                🖐️ Some Fun Facts
              </h1>
              <ol className="mt-5 font-main font-normal text-sm md:text-base text-gray-900 flex flex-col space-y-4 leading-7">
                <li>
                  1. I am originally from Bulgaria, but have lived in the UK for
                  6 years. Currently, I am based in Dublin, Ireland.
                </li>
                <li>
                  2. When I was younger I used to{" "}
                  <a
                    href="https://ratings.fide.com/profile/2912007"
                    target="_blank"
                    className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 hover:bg-opacity-60"
                  >
                    play chess competitively
                  </a>{" "}
                  and won a few titles including a European Championship and
                  Team World Championship representing Bulgaria. I still play
                  from time to time so if you are up for a game just hit me up.
                </li>
                <li>3. I really don't like chocolate. Shocking I know.</li>
              </ol>
              <h1 className="mt-10 font-main font-semibold text-xl text-gray-900">
                👍 Interests
              </h1>
              <div className="max-w-full">
                <div className="grid grid-cols-2 mt-5 gap-3 md:flex md:flex-wrap">
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Business
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Technology
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Coding
                  </span>
                  <span className="max-w-max  px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    History
                  </span>
                  <span className=" max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Astronomy
                  </span>
                  <span className=" max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Bootstrap
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Philosphy
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Writing
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Good Weather
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md ">
                    Sports
                  </span>
                  <span className="max-w-max px-2 py-1 bg-gray-100 text-gray-900 font-main text-sm rounded-md mr-2">
                    Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
