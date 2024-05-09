"use client"

import { useEffect, useState } from "react"
import { UserSchema } from "@/types"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Icons } from "@/components/icons"
import { Overview } from "@/components/overview"
import { Search } from "@/components/search"
import { ChartComponent } from "@/components/user-chart"
import { UsersTable } from "@/components/users-table"

export default function DashboardPage() {
  const [users, setUsers] = useState<UserSchema[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  async function getUsersData() {
    try {
      const res = await axios.get("/api/admin/users/details")
      if (res.status !== 200) return setUsers([])
      return setUsers(res.data)
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
    <>
      <div className="flex flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <section className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="size-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {isLoading ? (
                      <Icons.spinner className="animate-spin" />
                    ) : (
                      users.length
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card
                className="col-span-4 max-h-[70vh] overflow-x-hidden overflow-y-scroll lg:col-span-3"
                style={{
                  scrollbarWidth: "none",
                }}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col items-center justify-between md:flex-row">
                    <p className="mb-2 md:mb-0">All Users</p> <Search />
                  </CardTitle>
                  <CardDescription className="flex justify-center md:justify-start">
                    {isLoading ? (
                      <Icons.spinner className="animate-spin" />
                    ) : (
                      `Total ${users.length} users found`
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UsersTable users={users} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    User Analytics graph
                  </CardTitle>
                  <CardDescription>
                    Curated analysed data of all users
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center md:hidden">
                  <p>
                    ←{"  "} scroll {"  "}→
                  </p>
                </CardContent>
                <CardContent className="overflow-x-scroll md:overflow-x-hidden">
                  <ChartComponent users={users} />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
