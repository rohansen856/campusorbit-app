import Image from "next/image"

import { cn } from "@/lib/utils"
import { AnimatedButton } from "@/components/animated-button"
import { Icons } from "@/components/icons"

import Section from "../features/section"
import { LeftCurve, RightCurve } from "./curves"
import { collabApps, collabContent, collabText } from "./data"

export function Socials() {
  return (
    <Section>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 text-lg md:mb-8 lg:text-2xl 2xl:text-4xl">
            Follow us accross social media platforms
          </h2>

          <ul className="mb-10 max-w-[22rem] md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image
                    src={"/icons/check.svg"}
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className="ml-5">{item.title}</h6>
                </div>
                {item.text && <p className="mt-3 text-primary">{item.text}</p>}
              </li>
            ))}
          </ul>

          {/* <AnimatedButton>Try it now</AnimatedButton> */}
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="mb-8 text-muted-foreground md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>

          <div className="scale:75 relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 rounded-full border border-secondary md:scale-100">
            <div className="m-auto flex aspect-square w-60 rounded-full border border-secondary">
              <div className="bg-conic-gradient m-auto aspect-square w-24 rounded-full p-[0.2rem]">
                <div className="flex size-full items-center justify-center rounded-full bg-background p-2">
                  <Icons.logo className="size-14" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={cn(
                    "absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom",
                    `rotate-${index * 45}`
                  )}
                >
                  <div
                    className={cn(
                      "bg-n-7 relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-muted-foreground bg-secondary hover:scale-110 duration-300 cursor-pointer",
                      `-rotate-${index * 45}`
                    )}
                  >
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}
