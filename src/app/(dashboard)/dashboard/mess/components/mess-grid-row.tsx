import { cn } from "@/lib/utils"

interface MessGridRowProps {
  day: number
  breakfast: string
  lunch: string
  dinner: string
}

export async function MessGridRow({ ...props }: MessGridRowProps) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const dayName = weekDays[props.day - 1]
  const currentDayName = weekDays[new Date().getDay()]
  return (
    <div className="flex gap-2">
      <div
        className={cn(
          "w-32 rounded p-2",
          currentDayName === dayName && "bg-secondary"
        )}
      >
        {dayName}
      </div>
      <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
        {props.breakfast}
      </div>
      <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
        {props.lunch}
      </div>
      <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
        {props.dinner}
      </div>
    </div>
  )
}
