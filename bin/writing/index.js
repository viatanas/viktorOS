// import Head from "next/head";
// import Link from "next/link";
// import Nav from "../../components/Nav";
// import MobileNav from "../../components/MobileNav";

// import { getPosts } from "../../lib/posts";

// const Writing = (props) => {
//   return (
//     <div>
//       <Head>
//         <title>Writing</title>
//         <meta name="description" content="Viktor Atanasov - Projects" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Viktor Atanasov" />
//         <meta
//           property="og:description"
//           content="Business, writing, fun and more..."
//         />
//         <meta
//           property="og:image"
//           content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/og-graph.png"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@viatanas" />
//         <meta name="twitter:title" content="Viktor Atanasov" />
//         <meta
//           name="twitter:description"
//           content="Business, writing, fun and more..."
//         />
//         <meta
//           name="twitter:image"
//           content="https://viktor-atanasov-next.s3.eu-west-1.amazonaws.com/og-graph.png"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className="w-screen">
//         <div className="justify-center max-w-screen-sm pt-5 mx-auto md:px-0">
//           <div className="hidden md:flex">
//             <Nav selected="writing" />
//           </div>
//           <div className="flex md:hidden">
//             <MobileNav />
//           </div>
//           <div className="w-full px-6 py-16 md:py-24 md:px-0 ">
//             <h1 className="text-2xl font-bold text-gray-900 font-main md:text-4xl">
//               Writing
//             </h1>
//             <p className="mt-2 text-base text-gray-600 font-main md:text-lg">
//               Thoughts, reflections, learnings, experiences and anything else I
//               think is worth talking about.
//             </p>
//             <h1 className="mt-10 text-lg font-semibold text-gray-900 font-main">
//               Thoughts
//             </h1>
//             <div className="flex flex-col mt-8 space-y-8">
//               {props.posts.map((post) => (
//                 <div className="flex flex-col space-y-2" key={post.id}>
//                   <Link href={`/writing/${post.slug}`}>
//                     <a className="px-1 text-sm font-medium text-gray-900 bg-yellow-400 cursor-pointer max-w-max font-main md:text-base bg-opacity-20 hover:bg-opacity-60">
//                       {post.title}
//                     </a>
//                   </Link>
//                   <p className="text-sm text-gray-600 font-main">
//                     {post.meta_description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             {/* <h1 className="mt-10 text-lg font-semibold text-gray-900 font-main">
//               Coding Journey
//             </h1> */}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps(context) {
//   const posts = await getPosts();

//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// }

// export default Writing;
