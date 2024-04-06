"use client"

import { redirect } from "next/navigation"
import { Button } from "react-day-picker"

import { logoutUser } from "@/lib/session"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

export function LogoutButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className={cn(
        buttonVariants({ variant: "secondary", size: "sm" }),
        "px-4"
      )}
      onClick={onClick}
    >
      Logout
    </Button>
  )
}
