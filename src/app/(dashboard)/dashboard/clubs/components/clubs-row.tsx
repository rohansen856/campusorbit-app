"use client"

import { useEffect, useState } from "react"
import { Clubs } from "@prisma/client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface ClubsRowProps {
  title: string
  subtitle: string
  clubs: Clubs[]
}

export function ClubsRow({ ...props }: ClubsRowProps) {
  const [filter, setFilter] = useState<string>("")
  const [data, setData] = useState<Clubs[]>(props.clubs)
  useEffect(() => {
    if (filter.length < 1) setData(props.clubs)
    setData([
      ...props.clubs.filter(
        (el) =>
          el.name.toLowerCase().includes(filter.toLowerCase()) ||
          el.field.toLowerCase().includes(filter.toLowerCase())
      ),
    ])
  }, [filter, props.clubs])
  return (
    <div className="rounded border p-2">
      <div className="flex justify-between gap-4">
        <div>
          <h4 className="text-md">{props.title}</h4>
          <p className="mb-3 text-xs text-muted-foreground">{props.subtitle}</p>
        </div>
        <div className="relative flex h-full items-center">
          <Input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search clubs..."
            className="max-w-md border-2 lg:max-w-lg"
          />
          <Button
            className="absolute right-2 size-7 p-0"
            variant="secondary"
            size="icon"
          >
            <Icons.search className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex overflow-x-auto">
        {data.length < 1 && (
          <div className="flex h-28 w-36 items-center justify-center rounded bg-secondary p-2 text-destructive">
            No clubs
          </div>
        )}
        <div className="flex gap-2">
          {data.map((club, index) => (
            <div
              className="h-28 w-36 cursor-pointer rounded bg-secondary p-2"
              key={index}
            >
              {club.name} {club.club_type}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
