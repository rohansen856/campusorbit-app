"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { HardDriveDownload, Pin, Table } from "lucide-react"

import { cn } from "@/lib/utils"

export function RoutineFilter() {
  const params = useSearchParams()
  const currentFilter = params?.get("filter") || "myclasses"
  console.log(currentFilter)
  return (
    <section className="w-full max-w-full pr-2 md:w-[200px] md:border-r">
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={"/dashboard/routine?filter=myclasses"}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded p-2",
              currentFilter === "myclasses" && "border bg-green-600/40"
            )}
          >
            <Pin size={15} />
            Your classes
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/routine?filter=allclasses"}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded p-2",
              currentFilter === "allclasses" && "border bg-green-600/40"
            )}
          >
            <Table size={15} />
            All classes
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/routine?filter=download"}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded p-2",
              currentFilter === "download" && "border bg-green-600/40"
            )}
          >
            {" "}
            <HardDriveDownload size={15} /> Download
          </Link>
        </li>
      </ul>
    </section>
  )
}
