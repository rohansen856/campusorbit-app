import { type routine as RoutineType } from "@prisma/client"

import { RoutineGridSquare } from "./routine-grid-square"

interface RoutineGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  day: string
  routine: RoutineType[]
}

export function RoutineGridRow({ ...props }: RoutineGridRowProps) {
  console.log(props.routine.length)
  props.routine.sort((a, b) => a.from.getTime() - b.from.getTime())

  return (
    <div className="flex w-full">
      <span className="size-32 cursor-pointer border p-2 text-sm hover:bg-secondary">
        {props.day}{" "}
        <p className="text-xs text-secondary-foreground">
          {props.routine.length} classes
        </p>
      </span>
      {props.routine.map((item, index) => (
        <RoutineGridSquare key={index} data={item} />
      ))}
    </div>
  )
}
