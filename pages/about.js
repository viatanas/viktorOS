// Absolute imports
import Head from "next/head";
import Link from "next/link";

// Relative imports
import { ArrowRight } from "iconoir-react";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Viktor Atanasov - About" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viktor Atanasov" />
        <meta property="og:description" content="Business, writing, fun and more..." />
        <meta
          property="og:image"
          content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/og-graph.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@viatanas" />
        <meta name="twitter:title" content="Viktor Atanasov" />
        <meta name="twitter:description" content="Business, writing, fun and more..." />
        <meta
          name="twitter:image"
          content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/og-graph.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center w-full min-h-screen pb-20">
        <Nav />
        <div className="flex flex-col w-full max-w-lg px-6 mt-20 lg:px-0">
          {/* Title */}
          <header className="text-2xl font-light text-gray-900 font-inter">About</header>

          {/* Main */}
          <main className="flex flex-col w-full mt-10">
            <div>
              <p className="text-sm font-normal leading-6 text-gray-900 font-inter">
                Hi, I am Viktor and I bootstrap my business ideas. I enjoy tinkering with design,
                code, marketing and all the fun bits that go into an idea.
              </p>

              {/* <div className="-mb-36"></div> */}
              <p className="mt-4 text-sm font-normal leading-6 text-gray-900 font-inter">
                Previously, I worked at Microsoft UK as a Technical Account Manager where I got to
                work with some of the biggest brands in the country helping them improve their
                ancient technology. I left the company after 2 years to pursue my passion for
                business.
              </p>

              <p className="mt-4 text-sm font-normal leading-6 text-gray-900 font-inter">
                I then partnered up with a friend of mine and we founded{" "}
                <a
                  href="https://numerro.io"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline hover:text-gray-700"
                >
                  Numerro
                </a>
                , a design toolkit for Power BI users which was my first bootstrapped business. We
                sold it one year later to Hat Labs .
              </p>
              <p className="mt-4 text-sm font-normal leading-6 text-gray-900 font-inter">
                Currently, I am back at square one, testing out different ideas, before jumping in
                and building my next business.{" "}
              </p>
              <p className="mt-4 text-sm font-normal leading-6 text-gray-900 font-inter">
                If you want to chat about ideas, business, technology or you got an interesting
                project that you need help with, definitely reach out to me! Would love to speak to
                you.
              </p>
            </div>
            <div className="flex flex-col w-full mt-16">
              <h2 className="text-base font-medium text-gray-900 font-inter">Contact</h2>
              <div className="flex flex-col mt-6 space-y-4">
                <div className="flex items-start space-x-2">
                  <span className="w-2/12 text-sm font-light text-gray-400 font-inter">
                    Twitter
                  </span>

                  <Link
                    href="https://twitter.com/viatanas"
                    className="flex items-center w-10/12 space-x-1 hover:underline"
                  >
                    <span className="text-sm font-normal text-gray-900 font-inter">viatanas</span>
                    <ArrowRight className="w-4 h-4 text-gray-900 transform -rotate-45" />
                  </Link>
                </div>

                <div className="flex items-start space-x-2">
                  <span className="w-2/12 text-sm font-light text-gray-400 font-inter">Email</span>

                  <Link
                    href="mailto:viktoratanasov@icloud.com"
                    className="flex items-center w-10/12 space-x-1 hover:underline"
                  >
                    <span className="text-sm font-normal text-gray-900 font-inter">
                      viktor_atanasov@icloud.com
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-900 transform -rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Comment
