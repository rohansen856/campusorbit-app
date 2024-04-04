"use client"

import { BellPlus } from "lucide-react"

import { Input } from "@/components/ui/input"

import { NewNotifications } from "./new-notifications-button"

export function NotificationHeader() {
  return (
    <div className="flex w-full justify-around gap-3 rounded-lg bg-secondary p-3 flex-col md:flex-row">
      <Input placeholder="Search..." />
      <NewNotifications />
    </div>
  )
}
