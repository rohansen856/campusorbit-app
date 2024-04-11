"use client"

import { Edit } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface UserNameFieldProps {
  username: string | null
}

export function UserNameField({ username }: UserNameFieldProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-3 rounded p-2 text-center">
      <div className="rounded-md bg-secondary p-2">
        {username ?? (
          <span className="text-muted-foreground">
            Set username from settings
          </span>
        )}
      </div>
    </div>
  )
}
