"use client"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { BackgroundGradient } from "./bg-gradient"

type MainContributors = {
  name: string
  speciality: string
  email: string
  about?: string
}

export function CreatorsComponent(props: MainContributors) {
  return (
    <div>
      <BackgroundGradient className="flex w-[500px] max-w-[95vw] flex-col items-center justify-around rounded-3xl border bg-secondary p-3 duration-300 hover:scale-110 hover:border-[#009efd]">
        <Avatar className="mx-2 size-32 rounded-full border border-gray-500 bg-primary-foreground">
          <AvatarImage
            src="https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png"
            alt={props.name}
          />
          <AvatarFallback>RCSen</AvatarFallback>
        </Avatar>
        <div className="flex h-[170px] w-[350px] flex-col items-center justify-center overflow-y-hidden p-2">
          <span className="flex items-center space-x-3 text-xl">
            {props.name}
          </span>

          <span className="mb-4 text-muted-foreground">{props.email}</span>
          <span className="">{props.about}</span>
          <span className="mt-4 flex space-x-6 text-sm text-muted-foreground">
            <GithubIcon
              height={35}
              width={35}
              className="rounded-full bg-black p-2"
            />
            <LinkedinIcon
              height={35}
              width={35}
              className="rounded-full bg-blue-800 p-2"
            />
            <TwitterIcon
              height={35}
              width={35}
              className="rounded-full bg-blue-500 p-2"
            />
          </span>
        </div>
      </BackgroundGradient>
    </div>
  )
}
