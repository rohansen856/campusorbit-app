"use client"

import { useEffect, useState } from "react"
import { Courses, Mess } from "@prisma/client"
import axios from "axios"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Electives() {
  const [allElectives, setAllElectives] = useState<Courses[]>([])
  const [myElectives, setMyElectives] = useState<Courses[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  async function getAllElectives() {
    setIsLoading(true)
    try {
      const electives = await axios.get("/api/courses/electives")
      if (electives.status === 200) setAllElectives(electives.data)
    } catch (error) {
      setAllElectives([])
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function getMyElectives() {
    setIsLoading(true)
    try {
      const electives = await axios.get("/api/courses/electives/my-electives")
      if (electives.status === 200) setMyElectives(electives.data)
    } catch (error) {
      setAllElectives([])
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function updateElectives(id: string, action: "add" | "remove") {
    try {
      const updatedIds: string[] =
        action === "add"
          ? [...myElectives.map((item) => item.id), id]
          : [...myElectives.map((item) => item.id)].filter(
              (item) => item !== id
            )
      const electives = await axios.patch(
        "/api/courses/electives/my-electives",
        updatedIds
      )
      if (electives.status === 203) {
        setMyElectives((items) =>
          action === "add"
            ? [...items, allElectives.find((data) => data.id === id)!]
            : items.filter((data) => data.id !== id)
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllElectives()
    getMyElectives()
  }, [])
  return (
    <div className="flex flex-wrap gap-2 w-full">
      {!isLoading && allElectives.length === 0 && (
        <p className="p-2 rounded bg-secondary w-full text-center max-w-lg mx-auto">
          No electives registered for this semester
        </p>
      )}
      {allElectives.map((topic) => (
        <div
          key={topic.id}
          className={cn(
            "flex flex-col items-center justify-center rounded-lg border p-2",
            [...myElectives.map((item) => item.id)].includes(topic.id)
              ? "bg-green-700"
              : "bg-secondary"
          )}
        >
          <h3>{topic.course_title}</h3>
          <h4>{topic.course_code}</h4>
          <h4>credits: {topic.credits}</h4>
          <Button
            onClick={() => {
              updateElectives(
                topic.id,
                [...myElectives.map((item) => item.id)].includes(topic.id)
                  ? "remove"
                  : "add"
              )
            }}
          >
            {[...myElectives.map((item) => item.id)].includes(topic.id)
              ? "remove"
              : "add"}
          </Button>
        </div>
      ))}
    </div>
  )
}
