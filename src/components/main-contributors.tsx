import { GithubIcon, LinkedinIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type MainContributors = {
    name: string
    speciality: string
    email: string
    about?: string
}

export function MainContributors(props: MainContributors) {
    return (
        <div className="flex h-[200px] w-[500px] max-w-full items-center justify-around rounded-xl border bg-background">
            <Avatar className="h-32 w-32 rounded-full bg-secondary">
                <AvatarImage
                    src="https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png"
                    alt={props.name}
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex h-[170px] w-[350px] flex-col justify-center overflow-y-hidden p-2">
                <span className="flex items-center space-x-3 text-xl">
                    {props.name}
                    <p className="ml-5 flex space-x-1 text-sm text-muted-foreground">
                        <GithubIcon height={20} color="#fff" />
                        <LinkedinIcon height={20} color="#fff" />
                    </p>
                </span>

                <span className="mb-4">{props.email}</span>
                <span className="">
                    {props.about} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Assumenda ducimus aliquid voluptate illo
                    officiis quibusdam eos,{" "}
                </span>
            </div>
        </div>
    )
}
