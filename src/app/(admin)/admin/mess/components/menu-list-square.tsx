"use client"

import { Edit } from "lucide-react"

import { Button } from "@/components/ui/button"

interface MenuListProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  food: string
  time: string
}

export function MenuListSquare({ id, food, time, ...props }: MenuListProps) {
  return (
    <div className="flex h-48 w-40 shrink-0 flex-col space-y-2 rounded bg-secondary p-2">
      <span className="flex items-center justify-between rounded bg-background p-2">
        {time}
        <Button size="icon" className="size-5" variant="secondary">
          <Edit />
        </Button>
      </span>
      <h5 className="lg:text-md text-pretty text-sm">{food}</h5>
    </div>
  )
}
