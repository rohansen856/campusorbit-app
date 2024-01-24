"use client"

import React from "react"
import { type UserSchema } from "@/types"
import { Label, Legend, Line, Pie, PieChart, Tooltip } from "recharts"

export function ChartComponent({ users }: { users: UserSchema[] }) {
    const yearData = [
        {
            name: "1st Year",
            value: users.filter((user) => user.year === 23).length,
        },
        {
            name: "2nd Year",
            value: users.filter((user) => user.year === 22).length,
        },
        {
            name: "3rd Year",
            value: users.filter((user) => user.year === 21).length,
        },
        {
            name: "4th Year",
            value: users.filter((user) => user.year === 20).length,
        },
    ]
    const branchData = [
        {
            name: "CS",
            value: users.filter((user) => user.branch?.substring(1, 3) === "cs")
                .length,
        },
        {
            name: "EC",
            value: users.filter((user) => user.branch?.substring(1, 3) === "ec")
                .length,
        },
        {
            name: "ME",
            value: users.filter((user) => user.branch?.substring(1, 3) === "me")
                .length,
        },
        {
            name: "SM",
            value: users.filter((user) => user.branch?.substring(1, 3) === "sm")
                .length,
        },
        {
            name: "DS",
            value: users.filter((user) => user.branch?.substring(1, 3) === "ds")
                .length,
        },
    ]
    const programmeData = [
        {
            name: "B. Tech.",
            value: users.filter((user) => user.branch?.substring(0, 1) === "b")
                .length,
        },
        {
            name: "M. Tech.",
            value: users.filter((user) => user.branch?.substring(0, 1) === "m")
                .length,
        },
        {
            name: "P. hd",
            value: users.filter((user) => user.branch?.substring(0, 1) === "p")
                .length,
        },
    ]

    return (
        <div className="flex justify-between">
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
                <span className="text-xl font-bold uppercase">
                    yearwise users
                </span>
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
                <span className="text-xl font-bold uppercase">
                    branchwise users
                </span>
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
                <span className="text-xl font-bold uppercase">
                    Programmewise users
                </span>
            </div>
        </div>
    )
}
