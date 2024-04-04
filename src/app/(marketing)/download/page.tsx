import Link from "next/link"
import { Metadata } from "next/types"
import { StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Download",
  description: "Download the latest version of Campusorbit.",
}

export default async function DownloadPage() {
  return (
    <>
      <section className="space-y-6 px-4 pb-8 md:pt-2 lg:pt-6 2xl:pt-10">
        <div className="container flex h-[80vh] flex-col items-center gap-4 rounded-lg bg-teal-900/35 text-center lg:flex-row">
          <div className="flex size-full items-center justify-center lg:w-1/2">
            <Icons.logo className="size-2/3" />
          </div>
          <div className="flex size-full flex-col justify-between py-6 lg:w-1/2">
            <div className="flex h-32 w-full">
              <span className="h-full w-1 rounded-lg bg-white" />
              <div className="ml-4 flex flex-col items-start justify-around">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                  CampusOrbit
                </h1>
                <h3 className="text-xs text-muted-foreground md:text-lg">
                  An app built for ease of students
                </h3>
                <span className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(() => (
                    <StarIcon
                      fill="#FFD700"
                      color="#FFD700"
                      className="cursor-pointer"
                    />
                  ))}
                </span>
              </div>
            </div>
            <Link href={"/app-release.apk"}>
              <Button className="w-full bg-green-800 py-8 text-lg text-white duration-300 hover:bg-green-700">
                Download
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
