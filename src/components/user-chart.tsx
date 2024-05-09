"use client"

import React from "react"
import { Pie, PieChart, Tooltip } from "recharts"

export function ChartComponent({ users }) {
  const yearData = [
    {
      name: "1st Year",
      value: users.filter((user) => user.year === 1).length,
    },
    {
      name: "2nd Year",
      value: users.filter((user) => user.year === 2).length,
    },
    {
      name: "3rd Year",
      value: users.filter((user) => user.year === 3).length,
    },
    {
      name: "4th Year",
      value: users.filter((user) => user.year === 5).length,
    },
  ]
  const branchData = [
    {
      name: "CS",
      value: users.filter((user) => user.branch === "cs").length,
    },
    {
      name: "EC",
      value: users.filter((user) => user.branch === "ec").length,
    },
    {
      name: "ME",
      value: users.filter((user) => user.branch === "me").length,
    },
    {
      name: "SM",
      value: users.filter((user) => user.branch === "sm").length,
    },
    {
      name: "DS",
      value: users.filter((user) => user.branch === "ds").length,
    },
  ]
  const programmeData = [
    {
      name: "B. Tech.",
      value: users.filter((user) => user.programme === "btech").length,
    },
    {
      name: "M. Tech.",
      value: users.filter((user) => user.programme === "mtech").length,
    },
    {
      name: "P. hd",
      value: users.filter((user) => user.programme === "phd").length,
    },
  ]

  return (
    <div className="flex flex-wrap justify-between md:justify-center md:gap-3">
      <div className="flex flex-col items-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={yearData}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#FAF9F6"
            stroke="#0F1629"
            label
          />
          <Tooltip />
        </PieChart>
        <span className="text-xl font-bold uppercase">yearwise users</span>
      </div>
      <div className="flex flex-col items-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={branchData}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#FAF9F6"
            stroke="#0F1629"
            label
          />
          <Tooltip />
        </PieChart>
        <span className="text-xl font-bold uppercase">branchwise users</span>
      </div>
      <div className="flex flex-col items-center">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={programmeData}
            cx={200}
            cy={200}
            outerRadius={150}
            fill="#FAF9F6"
            stroke="#0F1629"
            label
          />
          <Tooltip />
        </PieChart>
        <span className="text-xl font-bold uppercase">Programmewise users</span>
      </div>
    </div>
  )
}
