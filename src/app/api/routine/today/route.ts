import { Routine } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { redis } from "@/lib/redis"
import { userNameSchema } from "@/lib/validations/user"

export async function GET(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const userData = await db.profile.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        institute: true,
        branch: true,
        semester: true,
        group: true,
        electives: true,
      },
    })

    if (!userData) return new Response(null, { status: 403 })

    // Get the routine.
    const cache = await redis.get(
      `routine-compulsory-day${new Date().getDay()}-${userData.group}-${userData.semester}-${userData.branch}-${userData.institute}`
    )
    const routine = cache
      ? (JSON.parse(cache) as Routine[])
      : await db.routine
          .findMany({
            where: {
              institute: userData.institute,
              branch: userData.branch,
              semester: userData.semester,
              group: userData.group ?? "",
              day: new Date().getDay(),
              compulsory: true,
            },
          })
          .then((data) => {
            redis.set(
              `routine-compulsory-day${new Date().getDay()}-${userData.group}-${userData.semester}-${userData.branch}-${userData.institute}`,
              JSON.stringify(data),
              "EX",
              3600
            )
            return data
          })

    const electives = await db.routine.findMany({
      where: {
        compulsory: false,
        OR: [
          ...userData.electives.map((elective) => ({ course_id: elective })),
        ],
      },
    })

    const changes = await db.routineChanges.count({
      where: {
        date: {
          gte: new Date(),
        },
        OR: [
          ...routine
            .filter((item) => item.day === new Date().getDay())
            .map((item) => ({ routine_id: item.id })),
          ...electives
            .filter((item) => item.day === new Date().getDay())
            .map((item) => ({ routine_id: item.id })),
        ],
      },
    })

    return new Response(
      JSON.stringify({
        routine: [...routine, ...electives],
        changed: changes > 0,
      }),
      {
        status: 200,
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
