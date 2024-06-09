import { type routine as RoutineType } from "@prisma/client"

import { RoutineGridRow } from "./routine-grid-row"
import { RoutineGridSquare } from "./routine-grid-square"

interface RoutineGridProps extends React.HTMLAttributes<HTMLDivElement> {
  routine: RoutineType[]
}

export function RoutineGrid({ ...props }: RoutineGridProps) {
  return (
    <div className="flex-1 p-2">
      <RoutineGridRow
        day="Monday"
        routine={props.routine.filter((item) => item.day === 1)}
      />
      <RoutineGridRow
        day="Tuesday"
        routine={props.routine.filter((item) => item.day === 2)}
      />

      <RoutineGridRow
        day="Wednesday"
        routine={props.routine.filter((item) => item.day === 3)}
      />
      <RoutineGridRow
        day="Thursday"
        routine={props.routine.filter((item) => item.day === 4)}
      />
      <RoutineGridRow
        day="Friday"
        routine={props.routine.filter((item) => item.day === 5)}
      />
    </div>
  )
}
