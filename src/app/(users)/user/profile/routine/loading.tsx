import { Skeleton } from "@/components/ui/skeleton"

export default async function Loader() {
  return (
    <div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
      <div className="mb-6">
        <Skeleton className="mb-2 h-8 w-48 bg-secondary" />
        <Skeleton className="h-32 w-full overflow-x-auto bg-secondary" />
      </div>
    </div>
  )
}
