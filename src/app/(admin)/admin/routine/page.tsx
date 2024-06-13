import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { NoAdminAccess } from "@/components/no-admin-access"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

export default async function RoutineAdmin() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const hasAccess = await db.admins.findFirst({
    where: {
      user_id: user.id,
      route: "/routine",
    },
  })
  if (!hasAccess) return <NoAdminAccess route="/routine" />

  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
    select: {
      institute: true,
      branch: true,
      semester: true,
      group: true,
    },
  })

  if (!profile) return "You dont have a profile!"

  const routineToday = await db.routine.findMany({
    where: {
      institute: profile.institute,
      branch: profile.branch,
      semester: profile.semester,
      group: profile.group ?? "",
      day: new Date().getDay(),
    },
  })

  const modifications = await db.routineChanges.findMany({
    where: {
      OR: [...routineToday.map((routine) => ({ routine_id: routine.id }))],
      date: new Date(),
    },
    select: {
      routine_id: true,
      description: true,
    },
  })

  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        data={routineToday
          .sort((a, b) => a.from.getHours() - b.from.getHours())
          .sort((a, b) => a.day - b.day)}
        columns={columns}
        modifications={modifications}
      />
    </div>
  )
}
