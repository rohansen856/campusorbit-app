import { Routine } from "@prisma/client"

import { cn } from "@/lib/utils"

interface RoutineGridSquareProps extends React.HTMLAttributes<HTMLSpanElement> {
  data: Routine
  change: {
    description: string | null
    routine_id: string
  }[]
}

export function RoutineGridSquare({ ...props }: RoutineGridSquareProps) {
  const { data } = props
  const len = new Date(data.to).getHours() - new Date(data.from).getHours() ?? 0

  return (
    <span
      className={cn(
        "size-32 cursor-pointer border p-2 hover:bg-secondary",
        len === 1 && "w-32",
        len === 2 && "w-64",
        len === 3 && "w-96",
        props.change.length &&
          (props.change[0].description === "cancelled"
            ? "bg-red-500/30"
            : "bg-yellow-500/30")
      )}
    >
      <p className="">{data.course_code}</p>
      <p className="mb-1 text-xs text-muted-foreground">({data.type})</p>
      <p className="mb-1 text-sm">{data.prof}</p>
      <p className="text-xs">
        {new Date(data.from).getHours()}:00 - {new Date(data.to).getHours()}:00{" "}
      </p>
      <p className="text-xs">{data.room}</p>
    </span>
  )
}
