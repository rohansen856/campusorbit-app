"use client"

import { useState } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface ClubJoinButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  clubId: string
}

export function ClubJoinButton({ clubId, ...props }: ClubJoinButtonProps) {
  const [isLoading, setLoading] = useState(false)

  async function joinClub() {
    setLoading(true)
    try {
      const res = await axios.post("/api/clubs", { clubId })
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full p-2 rounded-lg border flex items-center justify-between mt-8 lg:mt-auto bg-secondary">
      <p>You are not a member</p>
      <Button className="gap-2" onClick={joinClub} disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="size-4 animate-spin" />
        ) : (
          <>
            Join
            <Icons.arrowRight className="size-4" />
          </>
        )}
      </Button>
    </div>
  )
}
