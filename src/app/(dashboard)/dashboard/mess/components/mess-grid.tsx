import { type mess as MessMenuType } from "@prisma/client"

import { MessGridRow } from "./mess-grid-row"

interface MessGridProps {
  menu: MessMenuType[]
  active?: number | null
}

export async function MessGrid({ ...props }: MessGridProps) {
  return (
    <div className="flex size-full flex-col gap-2">
      {props.menu.map((item) => (
        <MessGridRow
          day={item.day}
          breakfast={item.breakfast}
          lunch={item.lunch}
          dinner={item.dinner}
        />
      ))}
    </div>
  )
}
