"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export function UpcomingEvents({ events = [] }: { events?: string[] }) {
  return (
    <div className="flex-1 p-2 space-y-4">
      <h3 className="text-lg lg:text-xl 2xl:text-3xl text-pretty">
        Upcoming events
      </h3>
      <div className="relative flex">
        <Input />
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute right-0"
        >
          <Icons.search />
        </Button>
      </div>
      <div className="space-y-1">
        {events.length < 1 && (
          <p className="text-center">No events scheduled for now!</p>
        )}
        {events.map((event) => (
          <p>event</p>
        ))}
      </div>
    </div>
  )
}
