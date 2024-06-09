import "./src/env.mjs"

import mdx from "@next/mdx"

const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "avatars.githubusercontent.vercel.app",
      "github.githubassets.com",
      "utfs.io",
      "images.unsplash.com",
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default withMDX(nextConfig)
