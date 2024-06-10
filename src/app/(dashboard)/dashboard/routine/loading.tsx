import { HardDriveDownload, Pin, Table } from "lucide-react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

export default function RoutineLoading() {
  return (
    <div className="size-full p-2">
      <Skeleton className="size-full" />
    </div>
  )
}
