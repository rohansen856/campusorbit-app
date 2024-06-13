import { Routine } from "@prisma/client"

import { db } from "@/lib/db"
import { Icons } from "@/components/icons"

import { RoutineGridRow } from "./routine-grid-row"

interface RoutineGridProps extends React.HTMLAttributes<HTMLDivElement> {
  routine: Routine[]
}

export async function RoutineGrid({ ...props }: RoutineGridProps) {
  const currentDay = new Date().getDay()
  const changes = await db.routineChanges.findMany({
    where: {
      date: {
        gte: new Date(),
      },
      OR: [
        ...props.routine
          .filter((item) => item.day === currentDay)
          .map((item) => ({ routine_id: item.id })),
      ],
    },
  })

  return (
    <div className="p-2">
      {changes.length > 0 ? (
        <div className="mb-2 flex max-w-lg gap-2 rounded bg-yellow-600 p-2">
          <Icons.warning /> There is a change in today&apos;s classes
        </div>
      ) : (
        <div className="mb-2 flex max-w-lg gap-2 rounded bg-green-600 p-2">
          <Icons.check /> There is no change in today&apos;s classes
        </div>
      )}
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
