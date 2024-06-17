import { Routine } from "@prisma/client"

import { cn } from "@/lib/utils"

import { RoutineGridSquare } from "./routine-grid-square"

interface RoutineGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean
  day: string
  routine: Routine[]
  changes: {
    description: string | null
    routine_id: string
  }[]
}

export function RoutineGridRow({ ...props }: RoutineGridRowProps) {
  props.routine.sort(
    (a, b) => new Date(a.from).getTime() - new Date(b.from).getTime()
  )
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
          props.isActive && "bg-secondary"
        )}
      >
        {props.day}{" "}
        <p className="text-xs text-secondary-foreground">
          {props.routine.length} classes
        </p>
      </span>
      {props.routine.map((item, index) => (
        <RoutineGridSquare
          key={index}
          data={item}
          change={props.changes.filter((data) => data.routine_id === item.id)}
        />
      ))}
    </div>
  )
}
