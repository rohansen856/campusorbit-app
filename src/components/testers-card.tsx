import { MainContributors } from "@/types"
import { LinkedinIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestersCard(props: MainContributors) {
  return (
    <div className="flex h-[100px] w-[400px] max-w-full items-center justify-around rounded-xl border bg-secondary px-3 duration-300 hover:scale-110 hover:border-[#2af598]">
      <Avatar className="size-20 rounded-full bg-secondary">
        <AvatarImage
          src={
            props.image ??
            "https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png"
          }
          alt={props.name}
        />
        <AvatarFallback>{props.name}</AvatarFallback>
      </Avatar>
      <div className="flex h-[170px] w-[350px] flex-col justify-center overflow-y-hidden p-2">
        <span className="flex items-center justify-between space-x-3 text-xl">
          {props.name}
          <p className="ml-5 flex space-x-1 text-sm text-muted-foreground">
            <LinkedinIcon
              height={25}
              width={25}
              className="rounded-full bg-blue-800 p-1"
            />
          </p>
        </span>

        <span className="mb-4">{props.email}</span>
      </div>
    </div>
  )
}
