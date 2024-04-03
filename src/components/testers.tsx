"use client"

import { useEffect, useState } from "react"
import { MainContributors } from "@/types"
import axios from "axios"

import { TestersCard } from "@/components/testers-card"

import { AnimatedTooltip } from "./testers-tooltip"
import { Skeleton } from "./ui/skeleton"

export function Testers() {
  const [allTesters, setTesters] = useState<MainContributors[]>([])

  async function getTesters() {
    try {
      const response = await axios.get("/api/testers")
      if (response.status === 200) setTesters(response.data)
    } catch (error) {
      setTesters([])
    }
  }

  useEffect(() => {
    getTesters()
  }, [])

  return (
    <div className="flex w-full flex-col items-center justify-center pb-16">
      {allTesters.length <= 0 ? (
        <Skeleton className="mb-6 h-16 w-[500px] max-w-[80vw] rounded-lg" />
      ) : (
        <div className="mb-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={allTesters} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {allTesters.length <= 0 ? (
          <Skeleton className="h-32 w-[500px] max-w-[80vw] rounded-lg" />
        ) : (
          allTesters.map((tester) => (
            <TestersCard
              id={tester.id}
              name={tester.name}
              email={tester.email}
              image={tester.image}
            />
          ))
        )}
      </div>
    </div>
  )
}
