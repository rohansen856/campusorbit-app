"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// const data = [
//   {
//     name: "Jan",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Feb",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Mar",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Apr",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "May",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jun",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jul",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Aug",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Sep",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Oct",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Nov",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Dec",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
// ]

export function Overview() {
  const [users, setUsers] = useState<{ name: string; total: number }[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  async function getUsersData() {
    try {
      const res = await axios.get("/api/admin/users/collegewise")
      if (res.status !== 200) return setUsers([])
      const countMap = {}

      res.data.forEach((item) => {
        const college = item.college
        countMap[college] = (countMap[college] || 0) + 1
      })

      const result = Object.keys(countMap).map((college) => {
        return { name: college, total: countMap[college] }
      })
      console.log(result)
      return setUsers(result)
    } catch (error) {
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsersData()
  }, [])
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={users}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value * 100}%`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="max-w-10 fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

// const data = [
//   { college: "iiitdmj" },
//   { college: "iiitd" },
//   { college: "iiitk" },
//   { college: "iiitk" },
//   { college: "iiitdmj" },
//   { college: "iiitdmj" },
// ]
