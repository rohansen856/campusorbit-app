import { mess as MessType } from "@prisma/client"

import { Badge } from "@/components/ui/badge"

import { MenuList } from "./menu-list"

interface MenuTableProps extends React.HTMLAttributes<HTMLDivElement> {
  menu: MessType[]
}

export function MenuTable({ menu, ...props }: MenuTableProps) {
  menu.sort((a, b) => a.mess_no - b.mess_no)
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4 rounded bg-secondary p-2">
        <h3 className="text-md lg:text-lg 2xl:text-xl">
          Today&apos; mess menu
        </h3>
        <Badge>0 changes</Badge>
        <Badge>0 cancelled</Badge>
        <Badge>0 rescheduled</Badge>
      </div>
      {menu.map((item, index) => (
        <div className="" key={index}>
          <h4 className="lg:text-md text-sm 2xl:text-lg">
            Mess {item.mess_no} Menu
          </h4>
          <MenuList menu={item} />
        </div>
      ))}
    </div>
  )
}
