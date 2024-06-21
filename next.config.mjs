import nextra from "nextra"

import "./src/env.mjs"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})

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
  rewrites: async () => {
    return [
      {
        source: "/docs/database",
        destination: "/docs/index.html",
      },
    ]
  },
}

export default withNextra(nextConfig)
