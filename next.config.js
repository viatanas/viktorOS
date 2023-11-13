const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx"],
  experimental: {
    appDir: true,
  },
};

module.exports = withMDX(nextConfig);

// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
// };
