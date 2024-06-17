"use client"

import { useEffect, useState } from "react"
import { Mess } from "@prisma/client"
import axios from "axios"

export function MessToday() {
  const [data, setData] = useState<Mess | null>(null)
  async function getMessToday() {
    try {
      const mess = await axios.get("/api/mess/today")
      if (mess.status === 200) setData(mess.data)
    } catch (error) {
      setData(null)
      console.log(error)
    }
  }
  useEffect(() => {
    getMessToday()
  }, [])
  return (
    <div className="flex flex-wrap gap-2">
      {data && (
        <>
          <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
            {data.breakfast}
          </div>
          <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
            {data.lunch}
          </div>
          <div className="h-32 w-44 cursor-pointer rounded-lg border p-2 hover:bg-secondary">
            {data.dinner}
          </div>
        </>
      )}
    </div>
  )
}
