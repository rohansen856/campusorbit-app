import { redirect } from "next/navigation"

import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

import { RoutineGrid } from "./components/routine-grid"

export const metadata = {
  title: "Routine",
}

export default async function Routine() {
  const user = await getCurrentUser()
  if (!user) return redirect("/login")

  const profile = await db.profile.findUnique({
    where: {
      id: user.id,
    },
  })

  if (!profile)
    return (
      <i className="text-destructive-foreground">
        we could not get your profile!
      </i>
    )

  const routine = await db.routine.findMany({
    where: {
      branch: profile?.branch,
      semester: profile?.semester,
      group: profile?.group ?? "",
    },
  })

  const electives = await db.routine.findMany({
    where: {
      OR: [...profile.electives.map((elective) => ({ course_id: elective }))],
    },
  })

  return (
    <div className="flex size-full flex-col md:flex-row">
      <RoutineGrid routine={[...routine, ...electives]} />
    </div>
  )
}
