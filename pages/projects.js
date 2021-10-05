import Head from "next/head";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import { useState } from "react";

const Projects = () => {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);
  const [project7, setProject7] = useState(true);

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Viktor Atanasov - Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen">
        <div className="md:px-0 max-w-screen-sm mx-auto justify-center pt-5">
          <div className="hidden md:flex">
            <Nav selected="projects" />
          </div>
          <div className="flex md:hidden">
            <MobileNav />
          </div>
          <div className="w-full py-16 md:py-24 px-6 md:px-0 ">
            <h1 className="font-main text-2xl md:text-4xl font-bold text-gray-900">
              Projects
            </h1>
            <p className="mt-2 font-main text-base md:text-lg text-gray-600">
              An active list of all the projects I have done throughout the
              years.
            </p>
            <div className="w-full mt-10 flex flex-col space-y-7 ">
              <div
                onClick={() => setProject7(!project7)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project7
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100 "
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project7 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="font-main tracking-wide text-base font-semibold text-gray-900">
                      blackoutpoetry.co
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    Current
                  </span>
                </div>
                <div className={`px-8 ${!project7 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    A web application for doing{" "}
                    <a
                      href="https://www.google.com/search?sxsrf=AOaemvK6N9PGbK2pMFxS_U8XpDwTFX0K4Q:1633265151754&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiXvsbpoq7zAhWUQUEAHTBUC7IQ_AUoAXoECAIQAw&q=blackout%20poetry&biw=1920&bih=890&dpr=1"
                      target="_blank"
                      rel="noreferrer"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      blackout poetry
                    </a>
                    online. You can also save all your poems to a personal
                    gallery that you can then share across.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Active and still working on it.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://blackoutpoetry.co"
                      target="_blank"
                      rel="noreferrer"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject6(!project6)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project6
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project6 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main tracking-wide text-base font-semibold text-gray-900">
                      askmesomething.io
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2021
                  </span>
                </div>
                <div className={`px-8 ${!project6 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    My first coding project built in React. It was an embeddable
                    AMA widget for websites, blogs etc. You could also create a
                    public AMA dashboard that you could share across with a
                    link.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Once I finished building it, I didn't want to invest time in
                    marketing, but instead I wanted to keep coding. I decided to
                    list it again on MicroAcquire and sold it a few weeks later.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://askmesomething.io"
                      target="_blank"
                      rel="noreferrer"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject5(!project5)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project5
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project5 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main tracking-wide text-base font-semibold text-gray-900">
                      Numerro
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2020
                  </span>
                </div>
                <div className={`px-8 ${!project5 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    First proper business that my co-founder and I built
                    together. It was a component library for Power BI that
                    helped users build better reports quicker. It was the first
                    project where a real problem was being solved and we managed
                    to hit traction mainly through forums like Reddit and SEO.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    After working on it for about a year, we both realised that
                    Power BI wasn't our passion and we both wanted to move on.
                    We listed the business on MicroAcquire and we got a good
                    offer that we accepted. In June 2021, we officially sold the
                    business to{" "}
                    <a
                      href="https://hatlabs.com"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Hat Labs
                    </a>
                    .
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://numerro.io"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Website
                    </a>
                    <a
                      href="https://www.reddit.com/r/PowerBI/comments/guj16p/hi_rpowerbi_we_made_a_power_bi_template_store/"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      First reddit post
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject4(!project4)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project4
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project4 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main tracking-wide text-base font-semibold text-gray-900">
                      Notion E-Commerce UI Kit
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2020
                  </span>
                </div>
                <div className={`px-8 ${!project4 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500">
                    A weekend project. Pre-built components for E-Commerce
                    stores that were built in Notion.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500">
                    Shut it down after launching on Product Hunt and making
                    around $100.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://www.producthunt.com/posts/notion-e-commerce-ui-kit"
                      target="_blank"
                      rel="noreferrer"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Product Hunt launch
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject3(!project3)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project3
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project3 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main text-base tracking-wide font-semibold text-gray-900">
                      Opendoorco
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2019
                  </span>
                </div>
                <div className={`px-8 ${!project3 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Courses and workshops for UK students interested in doing a
                    placement year in a Fortune 500 company.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Repeating the same mistake of focusing too much on website
                    design and domain name over thinking about traction and how
                    we would reach our target market. Shut it down after with
                    zero traction after my co-founder and I both realised that
                    none of us actually want to give workshops to random
                    students.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://opendoorvm.wixsite.com/website-2"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject2(!project2)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project2
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project2 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main text-base tracking-wide font-semibold text-gray-900">
                      MyUniMentor
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2018
                  </span>
                </div>
                <div className={`px-8 ${!project2 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    A platform where international students applying to the
                    University of Northampton (UK) would be able to connect with
                    current students and have them as their mentor.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Spend 2-3 months figuring out how Wordpress works and
                    choosing the domain. Didn't even ask the question if this
                    already exists. Rookie mistake. Apparently, the university
                    was already offering a similar service to international
                    students. Shut it down after getting no traction.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/myunimentor.jpeg"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Landing page
                    </a>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setProject1(!project1)}
                className={`flex flex-col space-y-6 px-3 py-5 cursor-pointer rounded-xl ${
                  project1
                    ? "bg-gray-100 border border-gray-200"
                    : "md:hover:bg-gray-100"
                }`}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start space-x-2 items-center">
                    <svg
                      className={`w-3 h-3 fill-current text-gray-900 ${
                        project1 && "transform rotate-90"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.39939 5.21433L17.8964 10.4508C19.3682 11.1874 19.3678 13.2844 17.8957 14.0204L7.39869 19.2847C6.06879 19.9496 4.50299 18.9844 4.50299 17.4997L4.50299 6.99895C4.50299 5.51392 6.06949 4.54874 7.39939 5.21433Z"
                        stroke="#1A202C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="font-main text-base tracking-wide font-semibold text-gray-900">
                      Brexitornah
                    </span>
                  </div>
                  <span className="font-main text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-900">
                    2018
                  </span>
                </div>
                <div className={`px-8 ${!project1 && "hidden"}`}>
                  <h1 className="font-main font-semibold text-sm text-gray-900">
                    What was it?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    My first "business". An e-commerce Shopify store selling
                    limited edition collector's cereal boxes of Theresa May and
                    Jeremy Corbyn (based on AirBnB's idea of{" "}
                    <a
                      href="https://www.airbnb.ie/obamaos?locale=en"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60"
                    >
                      Obama O's and Cap'N McCain's
                    </a>
                    ). I figured if it worked in the US, why would it not work
                    in the UK?
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    What happened?
                  </h1>
                  <p className="mt-2 font-main text-sm text-gray-500 leading-6">
                    Well it didn't work. I spend around $1000 for printing out
                    the boxes and made $0 in the process before shutting it
                    down.
                  </p>
                  <h1 className="mt-4 font-main font-semibold text-sm text-gray-900">
                    Extra notes
                  </h1>
                  <div className="mt-2 font-main text-sm text-gray-500 leading-6">
                    <a
                      href="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/initial-sketch.png"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Initial sketch
                    </a>
                    <a
                      href="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/Both.jpg"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      3D render of boxes
                    </a>
                    <a
                      href="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/IMG_0373.jpg"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Red box
                    </a>
                    <a
                      href="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/IMG_3294+2.JPG"
                      rel="noreferrer"
                      target="_blank"
                      className="px-1 cursor-pointer bg-yellow-400 bg-opacity-20 text-gray-900 hover:bg-opacity-60 mr-2"
                    >
                      Blue box
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
