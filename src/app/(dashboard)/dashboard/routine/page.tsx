import { redirect } from "next/navigation"
import { Routine as RoutineProps } from "@prisma/client"

import { db } from "@/lib/db"
import { redis } from "@/lib/redis"
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
    select: {
      institute: true,
      branch: true,
      semester: true,
      group: true,
      electives: true,
    },
  })

  if (!profile)
    return (
      <i className="text-destructive-foreground">
        we could not get your profile!
      </i>
    )

  const cache = null //await redis.get(`routine-compulsory-all-${profile.group}-${profile.semester}-${profile.branch}-${profile.institute}`)

  const routine = cache
    ? (JSON.parse(cache) as RoutineProps[])
    : await db.routine
        .findMany({
          where: {
            institute: profile?.institute,
            branch: profile?.branch,
            semester: profile?.semester,
            group: profile?.group ?? "",
            compulsory: true,
          },
        })
        .then(async (data) => {
          redis.set(
            `routine-compulsory-all-${profile.group}-${profile.semester}-${profile.branch}-${profile.institute}`,
            JSON.stringify(data),
            "EX",
            3600
          )
          return data
        })

  const electives = await db.routine.findMany({
    where: {
      OR: [...profile.electives.map((elective) => ({ course_id: elective }))],
    },
  })

  return (
    <div className="flex flex-row overflow-x-auto">
      <RoutineGrid routine={[...routine, ...electives]} />
    </div>
  )
}
