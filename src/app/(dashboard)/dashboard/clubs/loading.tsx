import { Skeleton } from "@/components/ui/skeleton"

export default function ClubsLoading() {
  return (
    <div className="size-full p-2">
      <Skeleton className="mb-2 h-44 w-full" />
      <Skeleton className="mb-2 h-44 w-full" />
      <Skeleton className="mb-2 h-44 w-full" />
      <Skeleton className="mb-2 h-44 w-full" />
      <Skeleton className="mb-2 h-44 w-full" />
    </div>
  )
}
