import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"

export default async function RoutinePage() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")
  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
  })

  const routine = await db.routine.findMany({
    where: {
      branch: profile?.branch,
      semester: profile?.semester,
      group: profile?.group ?? "",
      //   day: new Date().getDay(),
    },
  })
  return (
    <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
      <DataTable
        data={routine
          .sort((a, b) => a.from.getHours() - b.from.getHours())
          .sort((a, b) => a.day - b.day)}
        columns={columns}
      />
    </div>
  )
}
