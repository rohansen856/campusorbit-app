import { Mess } from "@prisma/client"

import { MessGridRow } from "./mess-grid-row"

interface MessGridProps {
  menu: Mess[]
  active?: number | null
}

export async function MessGrid({ ...props }: MessGridProps) {
  return (
    <div className="flex flex-col gap-2">
      {props.menu.map((item, index) => (
        <MessGridRow
          key={index}
          day={item.day}
          breakfast={item.breakfast}
          lunch={item.lunch}
          dinner={item.dinner}
        />
      ))}
    </div>
  )
}
