// import { getPosts, getPostBySlug } from "../../lib/posts";
// import Head from "next/head";
// import Link from "next/link";
// import Nav from "../../components/Nav";
// import MobileNav from "../../components/MobileNav";
// import moment from "moment";

// const Post = ({ post }) => {
//   return (
//     <div>
//       <Head>
//         <title>{post.title}</title>
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
//             <Nav />
//           </div>
//           <div className="flex md:hidden">
//             <MobileNav />
//           </div>
//           <div className="w-full px-6 py-16 md:py-24 md:px-0 ">
//             <h1 className="mb-3 font-sans text-2xl font-bold text-gray-900 md:text-4xl">
//               {post.title}
//             </h1>
//             <span className="text-base text-gray-500 font-main">
//               {moment(post.created_at).format("MMMM Do, YYYY")}
//             </span>
//             <div
//               className="leading-8 prose text-gray-900 mt-14 font-main"
//               dangerouslySetInnerHTML={{ __html: post.html }}
//             ></div>
//             <Link href="/writing">
//               <div className="flex items-center space-x-2 cursor-pointer mt-14 group">
//                 <svg
//                   className="w-3 h-3 text-gray-500 fill-current group-hover:text-gray-900"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//                 <span className="text-sm font-medium text-gray-500 font-main group-hover:text-gray-900">
//                   Back To Writing
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const data = await getPosts();
//   const paths = data.map((post) => ({
//     params: { slug: post.slug },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps(context) {
//   const slug = context.params.slug;
//   const post = await getPostBySlug(slug);

//   return {
//     props: { post },
//   };
// }

// export default Post;
