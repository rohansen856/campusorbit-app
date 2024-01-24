import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

type MainContributors = {
    name: string
    email: string
    image?: string
}

export function Testers(props: MainContributors) {
    return (
        <div className="flex h-[100px] w-[400px] max-w-full items-center justify-around rounded-xl border bg-secondary px-3">
            <Avatar className="h-20 w-20 rounded-full bg-secondary">
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
                <span className="flex items-center space-x-3 text-xl">
                    {props.name}
                    <p className="ml-5 flex space-x-1 text-sm text-muted-foreground">
                        <Image
                            height={20}
                            width={20}
                            src={"/linkedin.png"}
                            alt="in"
                        />
                    </p>
                </span>

                <span className="mb-4">{props.email}</span>
            </div>
        </div>
    )
}
