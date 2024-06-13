import { Routine } from "@prisma/client"

import { cn } from "@/lib/utils"

import { RoutineGridSquare } from "./routine-grid-square"

interface RoutineGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  day: string
  routine: Routine[]
}

export function RoutineGridRow({ ...props }: RoutineGridRowProps) {
  props.routine.sort((a, b) => a.from.getTime() - b.from.getTime())
  const currentDayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()]

  return (
    <div className="flex w-full">
      <span
        className={cn(
          "size-32 cursor-pointer border p-2 text-sm hover:bg-secondary",
          currentDayName === props.day && "bg-secondary"
        )}
      >
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
