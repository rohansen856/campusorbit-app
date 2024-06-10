import { Skeleton } from "@/components/ui/skeleton"

export default function RoutineLoading() {
  return (
    <div className="size-full p-2">
      <Skeleton className="mb-2 h-6 max-w-lg" />
      <Skeleton className="size-full" />
    </div>
  )
}
