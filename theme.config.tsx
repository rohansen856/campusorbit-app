import React from "react"
import { type DocsThemeConfig } from "nextra-theme-docs"

import { Icons } from "@/components/icons"
import { SiteFooter } from "@/components/shared/site-footer"

const config: DocsThemeConfig = {
  logo: (
    <span className="flex items-center justify-center gap-3 font-extrabold">
      <Icons.logo className="size-10" />
      <h1>Campusorbit Docs</h1>
    </span>
  ),
  project: {
    link: "https://github.com/rohansen856",
  },
  chat: {
    link: "https://discord.gg/XbJkCtt",
  },
  docsRepositoryBase: "https://github.com/rohansen856",
  toc: {
    backToTop: true,
  },
  footer: {
    text: (
      <>
        <h1>&#169;{"Campusorbit Docs by rohansen856."}</h1>
      </>
    ),
  },
  banner: {
    key: "welcome",
    text: "🎉 Thanks for trying campusorbit",
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  head: () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={"Daily ReactUIs"} />
        <meta
          property="og:description"
          content={
            "Welcome to Daily Components ! This is open source React/Next.js Tailwind UI components and templates to bootstrap your new apps, projects or landing sites."
          }
        />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Daily",
    }
  },
  faviconGlyph: "C",
}

export default config
