"use client"

import { useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function ContactDeveloper() {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <a href="mailto:rohansen856@gmail.com" className="w-full">
                <Button
                    variant={"default"}
                    className="z-20 w-full max-w-[500px] bg-secondary py-8 text-lg text-primary hover:bg-muted"
                    onClick={() => setActive(!active)}
                >
                    Contact the devs
                </Button>
            </a>
        </div>
    )
}
