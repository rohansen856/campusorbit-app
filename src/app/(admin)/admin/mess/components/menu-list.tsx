import { Mess } from "@prisma/client"

import { MenuListSquare } from "./menu-list-square"

interface MenuListProps extends React.HTMLAttributes<HTMLDivElement> {
  menu: Mess
}

export async function MenuList({ menu, ...props }: MenuListProps) {
  return (
    <div className="flex gap-4">
      <MenuListSquare id={menu.id} time={"Breakfast"} food={menu.breakfast} />
      <MenuListSquare id={menu.id} time={"Lunch"} food={menu.lunch} />
      <MenuListSquare id={menu.id} time={"Dinner"} food={menu.dinner} />
    </div>
  )
}
