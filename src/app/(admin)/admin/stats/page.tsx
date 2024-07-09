import Link from "next/link"
import { redirect } from "next/navigation"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import { db } from "@/lib/db"
import { mongo } from "@/lib/mongo"
import { getCurrentUser } from "@/lib/session"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { AnalyticsCharts } from "./components/analytic-charts"
import { StatsCard } from "./components/stats-card"
import { UsersTable } from "./components/users-table"

export default async function StatsPage() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  //   const hasAccess = await db.admins.findFirst({
  //     where: {
  //       user_id: user.id,
  //       route: "/stats",
  //     },
  //   })
  //   if (!hasAccess) return <NoAdminAccess route="/stats" />

  const allViews = (
    await mongo
      .db("analytics")
      .collection("views")
      .aggregate<{ _id: string; count: number }>([
        { $group: { _id: "$route", count: { $sum: 1 } } },
      ])
      .toArray()
  ).sort((a, b) => a.count - b.count)

  const devLogs = await mongo
    .db("analytics")
    .collection("views")
    .countDocuments({
      user: "::1",
    })

  const totalLogs = allViews.reduce((acc, num) => acc + num.count, 0)
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <StatsCard title="Total users" />
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{totalLogs}</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Developer Logs
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{devLogs}</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <UsersTable allViews={allViews.sort((a, b) => b.count - a.count)} />
      </main>
      <AnalyticsCharts />
    </div>
  )
}
