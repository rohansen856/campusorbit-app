"use client"

import { useEffect, useState } from "react"
import { Routine } from "@prisma/client"
import axios from "axios"

import { cn } from "@/lib/utils"

export function RoutineToday() {
  const [data, setData] = useState<Routine[]>([])
  async function getData() {
    try {
      const routine = await axios.get("/api/routine/today")
      if (routine.status === 200) setData(routine.data)
    } catch (error) {
      setData([])
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="flex w-full flex-wrap">
      {data.length > 0 &&
        data.map((item, index) => (
          <span
            key={index}
            className={cn(
              "size-32 cursor-pointer border p-2 hover:bg-secondary",
              `w-[${(new Date(item.to).getHours() - new Date(item.from).getHours()) * 32}]`
            )}
          >
            <p className="">{item.course_code}</p>
            <p className="mb-1 text-xs text-muted-foreground">({item.type})</p>
            <p className="mb-1 text-sm">{item.prof}</p>
            <p className="text-xs">
              {new Date(item.from).getHours() - 5}:00 -{" "}
              {new Date(item.to).getHours() - 5}:00
              {/* {JSON.stringify(item, null, 2)} */}
            </p>
            <p className="text-xs">{item.room}</p>
          </span>
        ))}
    </div>
  )
}
