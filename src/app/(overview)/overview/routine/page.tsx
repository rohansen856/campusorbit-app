import { Metadata } from "next"
import { redirect } from "next/navigation"
import { and, eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { profile, routine } from "@/lib/schema"
import { getCurrentUser } from "@/lib/session"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { routineSchema } from "./components/schema"
import { UserNav } from "./components/user-nav"

export const metadata: Metadata = {
  title: "Routine",
  description: "Routine of classes under you",
}

// Simulate a database read for tasks.
async function getRoutine() {
  const user = await getCurrentUser()
  if (!user) return redirect("/user/profile")
  const userProfile = await db
    .select()
    .from(profile)
    .where(eq(profile.id, user?.id))

  const data = await db
    .select()
    .from(routine)
    .where(
      and(
        eq(routine.institute, userProfile[0].institute),
        eq(routine.branch, userProfile[0].branch),
        eq(routine.semester, userProfile[0].semester)
      )
    )

  return z.array(routineSchema).parse(data)
}

export default async function TaskPage() {
  const tasks = await getRoutine()

  return (
    <>
      <div className=" flex h-full flex-1 flex-col space-y-8 p-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome back CR!
            </h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all the scheduled classes.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
