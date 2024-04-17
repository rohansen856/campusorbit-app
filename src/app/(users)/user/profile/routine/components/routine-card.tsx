import { Separator } from "@/components/ui/separator"
import { Routine } from "@/app/(overview)/overview/routine/components/schema"

interface RoutineCardProps {
  data: Pick<Routine, "code" | "room" | "prof" | "from" | "to">
}

export function RoutineCard({ data }: RoutineCardProps) {
  return (
    <div className="mr-2 h-28 w-40 min-w-40 rounded-md rounded-tl-[25%] border border-white/50 bg-secondary p-2 pl-6 pt-4">
      <h3 className="font-bold">{data.code}</h3>
      <Separator className=" bg-white" />
      <h5 className="mt-2">
        {data.from / 100}:00 - {data.to / 100}:00
      </h5>
      <h6 className="mt-2 flex w-full justify-between">
        <div>{data.prof}</div>
        <div>{data.room}</div>
      </h6>
    </div>
  )
}
