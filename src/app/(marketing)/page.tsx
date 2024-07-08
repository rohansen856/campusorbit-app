import Image from "next/image"
import Link from "next/link"
import { ChevronRight, HardDriveDownload, PersonStanding } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Benefits } from "./components/features/benifits"
import BlurIn from "./components/hero/blur-in-text"
import AnimatedGradientText from "./components/hero/gradient-badge"
import { HeroButton } from "./components/hero/hero-button"
import ShimmerButton from "./components/hero/shimmer-button"
import Particles from "./components/particles"
import { Socials } from "./components/social/social"
import {
  clients,
  InfiniteMovingCards,
} from "./components/tech-stack/infinite-moving-cards"

export default async function IndexPage() {
  return (
    <>
      <Particles
        className="fixed top-0 left-0 h-screen w-screen -z-50"
        quantity={100}
        ease={80}
        color={"#ddd"}
        refresh
      />
      <section className="relative max-w-full space-y-6 overflow-hidden pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="absolute left-0 top-0 -z-10 h-screen w-screen [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_80%,transparent)]">
          <div className="relative size-full">
            <Image
              fill
              src={
                "https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              }
              alt=""
              className="object-cover max-lg:object-cover max-lg:opacity-50"
            />
          </div>
        </div>
        <div className="container z-10 flex max-w-5xl flex-col items-center gap-4 text-center">
          <Link
            href={"/docs"}
            className="z-10 flex items-center justify-center"
          >
            <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Introducing Campus Orbit
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
          <div className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <BlurIn
              word="CampusOrbit"
              className="bg-gradient-to-r from-blue-700 to-teal-700 bg-clip-text text-transparent"
            />
            An app made for the ease of students
          </div>
          <Link href={"/download"} className="relative mt-16">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Download app
              </span>
            </ShimmerButton>
          </Link>
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
