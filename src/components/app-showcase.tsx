"use client"

import Image from "next/image"
import { ArrowRight, StarIcon } from "lucide-react"

import { AppShowcaseBg } from "./app-showcase-bg"
import { Button } from "./ui/button"

function AppShowcase() {
    return (
        <div className="relative flex h-full w-full flex-col justify-around overflow-hidden rounded-lg border lg:flex-row">
            <AppShowcaseBg />
            <div className="z-20 flex h-full max-w-full items-center justify-around overflow-x-hidden p-2 lg:w-[50%]">
                <div className="relative h-full w-[45%]">
                    <Image
                        fill
                        src="https://utfs.io/f/d90b3af7-5248-487d-b684-3710db0450ca-uzdr05.example.admin_ui.jpg"
                        alt=""
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <div className="relative h-full w-[45%]">
                    <Image
                        fill
                        src="https://utfs.io/f/ab9dd6fa-a895-4207-8cf5-5b0e707a4db1-xsgs5z.example.admin_ui.jpg"
                        alt=""
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
            </div>
            <div className="z-20 flex flex-col justify-between py-2 lg:w-[50%]">
                <div className="flex w-full">
                    <div className="hidden h-full w-1 rounded bg-foreground lg:block" />
                    <div className="flex h-full flex-col overflow-x-hidden p-5">
                        <h1 className="font-heading text-5xl text-primary lg:text-7xl">
                            CampusOrbit
                        </h1>
                        <h3 className="text-muted-foreground">
                            An app built for ease of students
                        </h3>
                        <p className="flex gap-1">
                            <StarIcon
                                fill="#FFD700"
                                color="#FFD700"
                                className="cursor-pointer"
                            />
                            <StarIcon
                                fill="#FFD700"
                                color="#FFD700"
                                className="cursor-pointer"
                            />
                            <StarIcon
                                fill="#FFD700"
                                color="#FFD700"
                                className="cursor-pointer"
                            />
                            <StarIcon
                                fill="#FFD700"
                                color="#FFD700"
                                className="cursor-pointer"
                            />
                            <StarIcon
                                fill="#FFD700"
                                color="#FFD700"
                                className="cursor-pointer"
                            />
                        </p>
                    </div>
                </div>
                <a
                    href="https://utfs.io/f/ea7e7a24-f4c4-4259-b9b5-a823b6928e13-n7xrc5.apk"
                    className="mx-auto mb-5 h-16 w-[75%] lg:mx-0"
                >
                    <Button className="download-button h-full w-full cursor-pointer gap-3 bg-green-500 text-xl font-bold duration-200 hover:bg-green-600 lg:bg-green-700">
                        Download
                        <ArrowRight className="arrow duration-200" />
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default AppShowcase
