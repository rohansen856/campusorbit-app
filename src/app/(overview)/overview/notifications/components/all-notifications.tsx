"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Skeleton } from "@/components/ui/skeleton"

import { NotificationPanel } from "./notification-panel"

export function AllNotifications() {
  const [notification, setNotification] = useState([])
  const [isLoading, setLoading] = useState(true)

  async function getNotifications() {
    try {
      setLoading(true)
      const res = await axios.get("/api/notifications")
      if (res.status === 200) setNotification(res.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])
  return (
    <div className="mt-10 w-full space-y-2">
      {isLoading ? (
        <Skeleton className="h-32 w-full" />
      ) : (
        notification.map((data, i) => <NotificationPanel key={i} data={data} />)
      )}
    </div>
  )
}
