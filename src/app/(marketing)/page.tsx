import Image from "next/image"
import Link from "next/link"
import { HardDriveDownload, PersonStanding } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Benefits } from "./components/features/benifits"
import { HeroButton } from "./components/hero/hero-button"
import { Socials } from "./components/social/social"
import {
  clients,
  InfiniteMovingCards,
} from "./components/tech-stack/infinite-moving-cards"

export default async function IndexPage() {
  return (
    <>
      <section className="relative max-w-full space-y-6 overflow-hidden pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_80%,transparent)]">
          <div className="relative size-full">
            <Image
              fill
              src={
                "https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              }
              alt=""
              className="object-contain max-lg:object-cover max-lg:opacity-50"
            />
          </div>
        </div>
        <div className="container z-10 flex max-w-5xl flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent">
              CampusOrbit
            </span>{" "}
            - An app made for the ease of students
          </h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            This is a multi purpose app built by student of IIITDMJ for the ease
            and comfort of students.
          </p>
          <div className="relative scale-50 md:scale-75 xl:scale-90 2xl:scale-100">
            <div className="absolute left-6 top-4 size-48 overflow-hidden rounded-[25%] rounded-br-[60%] border-2 border-dotted border-blue-900 duration-200 hover:scale-110">
              <Link
                href={"/download"}
                className="flex size-48 flex-col items-center justify-center gap-2 bg-white/90 text-2xl font-bold text-black"
              >
                Download
                <HardDriveDownload />
              </Link>
            </div>
            <div className="absolute right-6 top-4 size-48 rotate-90 overflow-hidden rounded-[25%] rounded-br-[60%] border-2 border-dotted border-blue-900 duration-200 hover:scale-110">
              <Link
                href={"/dashboard"}
                // target="_blank"
                // rel="noreferrer"
                className="flex size-48 -rotate-90 flex-col items-center justify-center gap-2 bg-white/90 text-2xl font-bold text-black"
              >
                Profile
                <PersonStanding />
              </Link>
            </div>
            <HeroButton />
          </div>
        </div>
      </section>
      <section
        id="tech-stack"
        className="flex w-full flex-col items-center justify-center overflow-x-hidden"
      >
        <InfiniteMovingCards
          className=""
          items={clients}
          direction="right"
          speed="slow"
        />
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto mb-20 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            This project is an android application built using Latest
            technology. The main features and purpose of the app are listed as
            below
          </p>
        </div>
        <Benefits />
      </section>
      <section
        id="socials"
        className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Social
          </h2>
        </div>
        <Socials />
      </section>

      <section
        id="open-source"
        className="container relative py-8 md:py-12 lg:py-24"
      >
        {/* <div className="absolute -top-10 flex size-full items-center justify-center opacity-50">
          <Image
            src={"/images/globe-small.png"}
            alt=""
            height={350}
            width={350}
            className="-z-10"
          />
        </div> */}
        <div className="z-10 mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Built by Students
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            campusorbit is built by the students of{" "}
            <Link
              href={"https://iiitdmj.ac.in"}
              className="underline underline-offset-4 hover:text-blue-800"
            >
              IIITDMJ
            </Link>
            . Please support us in to maintain the app in{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-blue-800"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  )
}
