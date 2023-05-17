import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Viktor Atanasov</title>
        <meta name="description" content="Viktor Atanasov's Personal Hub" />
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

      <main className="flex items-center justify-center w-screen h-screen bg-gray-100 bg-opacity-10">
        <div className="w-full text-sm leading-7 font-sans md:max-w-md mx-7 md:mx-auto">
          <p>
            {" "}
            Hi! My name is Viktor and I like to build my ideas. You can find a list of all the{" "}
            <Link
              href="/projects"
              className="px-1 bg-yellow-400 cursor-pointer bg-opacity-20 hover:bg-opacity-60"
            >
              projects
            </Link>{" "}
            I have done.
            <br></br>
            <br></br> I have previously worked at Microsoft and also co-founded Numerro, which was
            later acquired.You can find more{" "}
            <Link
              href="/about"
              className="px-1 bg-yellow-400 cursor-pointer bg-opacity-20 hover:bg-opacity-60"
            >
              about me
            </Link>
            .
          </p>
          <div className="flex items-center justify-center w-full mt-6 space-x-4">
            <a
              href="https://twitter.com/viatanas"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-gray-100"
            >
              <svg
                className="w-4 h-4 text-gray-900 fill-current"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.7747 3.77062C14.2657 3.99575 13.726 4.1436 13.1734 4.20928C13.7559 3.86091 14.1918 3.31263 14.4 2.66662C13.8534 2.99195 13.254 3.21995 12.6294 3.34328C12.2098 2.89434 11.6536 2.59659 11.0473 2.49634C10.4411 2.39609 9.81866 2.49895 9.27688 2.78892C8.7351 3.07889 8.30429 3.53974 8.05144 4.09981C7.7986 4.65989 7.73787 5.2878 7.8787 5.88595C6.77011 5.83039 5.68559 5.5423 4.69556 5.04039C3.70553 4.53849 2.83212 3.83398 2.13204 2.97262C1.88423 3.39825 1.75401 3.8821 1.7547 4.37462C1.7547 5.34128 2.2467 6.19528 2.9947 6.69528C2.55204 6.68135 2.11912 6.5618 1.73204 6.34662V6.38128C1.73217 7.02508 1.95495 7.64903 2.3626 8.14732C2.77025 8.64562 3.33769 8.9876 3.9687 9.11528C3.55778 9.22664 3.12691 9.24306 2.7087 9.16328C2.88661 9.71744 3.23337 10.2021 3.70043 10.5494C4.16749 10.8966 4.73145 11.0891 5.31337 11.0999C4.73502 11.5542 4.07282 11.8899 3.36462 12.0881C2.65642 12.2862 1.91612 12.3428 1.18604 12.2546C2.4605 13.0742 3.9441 13.5094 5.45937 13.5079C10.588 13.5079 13.3927 9.25928 13.3927 5.57462C13.3927 5.45462 13.3894 5.33328 13.384 5.21462C13.9299 4.82006 14.4011 4.3313 14.7754 3.77128L14.7747 3.77062Z" />
              </svg>
            </a>
            <a
              href="mailto:viktor_atanasov@icloud.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-gray-100"
            >
              <svg
                className="w-4 h-4 text-gray-900 fill-current"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.60229 4.7074L7.99989 7.9058L14.3975 4.7074C14.3738 4.29975 14.1952 3.91659 13.8982 3.63638C13.6011 3.35617 13.2082 3.20012 12.7999 3.2002H3.19989C2.79156 3.20012 2.39865 3.35617 2.10164 3.63638C1.80462 3.91659 1.62598 4.29975 1.60229 4.7074V4.7074Z" />
                <path
                  d="M14.4001 6.49414L8.0001 9.69414L1.6001 6.49414V11.1997C1.6001 11.6241 1.76867 12.0311 2.06873 12.3311C2.36878 12.6312 2.77575 12.7997 3.2001 12.7997H12.8001C13.2244 12.7997 13.6314 12.6312 13.9315 12.3311C14.2315 12.0311 14.4001 11.6241 14.4001 11.1997V6.49414Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href="https://www.goodreads.com/user/show/64263909-viktor-atanasov"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-gray-100"
            >
              <svg
                className="w-4 h-4 text-gray-900 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-3H6.5a1.5 1.5 0 0 0 0 3H19zM10 4v8l3.5-2 3.5 2V4h-7z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}