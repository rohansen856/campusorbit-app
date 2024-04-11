import { RoutineCardProps } from "@/types"

import { Separator } from "@/components/ui/separator"

import { RoutineCard } from "./routine-card"

interface RoutineLayoutProps {
  day: number
  data: RoutineCardProps[]
}

export function RoutineLayout({ day, data }: RoutineLayoutProps) {
  const today = new Date()
  const dayOfWeek = today.getDay()

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  return (
    <div className="mb-4">
      <div className="flex items-center p-2">
        {day === dayOfWeek ? (
          <p className="mr-2 size-2 rounded-full bg-red-700"></p>
        ) : (
          ""
        )}
        {weekDays[day]}
      </div>
      <div className="flex gap-2 overflow-x-auto overflow-y-hidden">
        {data.map((i) => (
          <RoutineCard data={i} />
        ))}
      </div>
      <Separator className="mt-2" />
    </div>
  )
}
