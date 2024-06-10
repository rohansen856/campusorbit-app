import { Skeleton } from "@/components/ui/skeleton"

export default function MessLoading() {
  return (
    <div className="size-full p-2">
      <Skeleton className="mb-2 h-12 max-w-lg" />
      <Skeleton className="h-72 w-full" />
    </div>
  )
}
