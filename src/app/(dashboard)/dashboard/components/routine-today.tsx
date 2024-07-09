"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Routine } from "@prisma/client"
import axios from "axios"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export function RoutineToday() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<{ routine: Routine[]; changed: boolean }>({
    routine: [],
    changed: false,
  })
  async function getRoutineToday() {
    setIsLoading(true)
    try {
      const routine = await axios.get("/api/routine/today")
      if (routine.status !== 200)
        toast({
          title: "There was an error getting the classes!",
          variant: "destructive",
        })
      setData(routine.data)
    } catch (error) {
      setData({ routine: [], changed: false })
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getRoutineToday()
  }, [])
  return (
    <div>
      {!isLoading && !data.routine.length && (
        <p className="p-2 rounded bg-secondary max-w-md">No classes today!</p>
      )}
      <div className="flex w-full flex-wrap justify-center">
        {data.routine.sort(
          (a, b) => new Date(a.from).getHours() - new Date(b.from).getHours()
        ).length > 0 &&
          data.routine.map((item, index) => (
            <Link
              href={`/dashboard/classes/${item.id}`}
              key={index}
              className={cn(
                "size-32 cursor-pointer border p-2 hover:bg-secondary",
                `w-[${(new Date(item.to).getHours() - new Date(item.from).getHours()) * 32}]`
              )}
            >
              <p className="">{item.course_code}</p>
              <p className="mb-1 text-xs text-muted-foreground">
                ({item.class_type})
              </p>
              <p className="mb-1 text-sm">{item.prof}</p>
              <p className="text-xs">
                {new Date(item.from).getHours()}:00 -{" "}
                {new Date(item.to).getHours()}:00
                {/* {JSON.stringify(item, null, 2)} */}
              </p>
              <p className="text-xs">{item.room}</p>
            </Link>
          ))}
      </div>

      {data.routine.length > 0 &&
        (data.changed ? (
          <div className="mb-2 flex items-center gap-6 p-2 text-yellow-600">
            <span className="flex gap-2">
              <Icons.warning /> There is a change in today&apos;s classes
            </span>
            <Link
              href={"/dashboard/routine"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
                "text-yellow-600"
              )}
            >
              <Icons.arrowRight className="size-6" />
            </Link>
          </div>
        ) : (
          <div className="flex gap-2 rounded p-2 text-green-600">
            <Icons.check /> There is no change in today&apos;s classes
          </div>
        ))}
    </div>
  )
}
