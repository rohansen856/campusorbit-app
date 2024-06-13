import { Routine } from "@prisma/client"

import { cn } from "@/lib/utils"

interface RoutineGridSquareProps extends React.HTMLAttributes<HTMLSpanElement> {
  data: Routine
}

export function RoutineGridSquare({ ...props }: RoutineGridSquareProps) {
  const { data } = props
  const len = data.to.getHours() - data.from.getHours() ?? 0

  return (
    <span
      className={cn(
        "size-32 cursor-pointer border p-2 hover:bg-secondary",
        len === 1 && "w-32",
        len === 2 && "w-64",
        len === 3 && "w-96"
      )}
    >
      <p className="">{data.course_code}</p>
      <p className="mb-1 text-xs text-muted-foreground">({data.type})</p>
      <p className="mb-1 text-sm">{data.prof}</p>
      <p className="text-xs">
        {data.from.getHours() - 5}:00 - {data.to.getHours() - 5}:00{" "}
      </p>
      <p className="text-xs">{data.room}</p>
    </span>
  )
}
