"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { NotificationPanel } from "./notification-panel"

export function AllNotifications() {
  const [notification, setNotification] = useState([])

  async function getNotifications() {
    try {
      const res = await axios.get("/api/notifications")
      if (res.status === 200) setNotification(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])
  return (
    <div className="mt-10 w-full space-y-2">
      {notification.map((data, i) => (
        <NotificationPanel key={i} data={data} />
      ))}
    </div>
  )
}
