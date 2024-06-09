import { HardDriveDownload, Pin, Table } from "lucide-react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export default function RoutineLoading() {
  return (
    <div className="flex size-full flex-col md:flex-row">
      <section className="w-full max-w-full pr-2 md:w-[200px] md:border-r">
        <ul className="flex flex-col gap-1">
          <li>
            <span
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded p-2"
              )}
            >
              <Pin size={15} />
              Your classes
            </span>
          </li>
          <li>
            <span
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded p-2"
              )}
            >
              <Table size={15} />
              All classes
            </span>
          </li>
          <li>
            <span
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded p-2"
              )}
            >
              {" "}
              <HardDriveDownload size={15} /> Download
            </span>
          </li>
        </ul>
      </section>
      <div className="size-full p-2">
        <Skeleton className="size-full" />
      </div>
    </div>
  )
}
