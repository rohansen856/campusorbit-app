import { redirect } from "next/navigation"
import { and, eq } from "drizzle-orm"

import { db } from "@/lib/db"
import { routine } from "@/lib/schema"
import { getCurrentUser } from "@/lib/session"

import { RoutineLayout } from "./components/routine-layout"

export const metadata = {
  title: "Routine",
}

export default async function Page() {
  const user = await getCurrentUser()

  if (!user) {
    return redirect("/login")
  }

  if (!user.branch || !user.group) {
    return (
      <div className="flex h-[30vh] w-full items-center justify-center font-heading">
        Set Your Branch and Group from Settings Menu
      </div>
    )
  }

  const data = await db
    .select()
    .from(routine)
    .where(
      and(
        eq(routine.branch, user.branch.toUpperCase()),
        eq(routine.group, user.group.toUpperCase())
      )
    )

  //   await sleep(5000)

  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <RoutineLayout day={i} data={data.filter((j) => j.day === i)} />
      ))}
    </div>
  )
}
