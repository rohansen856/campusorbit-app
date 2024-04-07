import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Meteors } from "@/components/meteors"

export default async function IndexPage() {
  return (
    <>
      <section className="w-full h-screen p-6 overflow-hidden">
        <div className="h-[70vh] w-full bg-secondary"></div>
      </section>
    </>
  )
}
