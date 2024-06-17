import { Courses } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { redis } from "@/lib/redis"

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
        semester: true,
      },
    })

    if (!userData) return new Response(null, { status: 403 })

    // Get the courses.
    const cache = await redis.get(
      `courses-elective-${userData.semester}-${userData.institute}`
    )
    const electives = cache
      ? (JSON.parse(cache) as Courses[])
      : await db.courses
          .findMany({
            where: {
              institute: userData.institute,
              semester: userData.semester,
              type: "elective",
            },
          })
          .then((data) => {
            redis.set(
              `courses-elective-${userData.semester}-${userData.institute}`,
              JSON.stringify(data),
              "EX",
              3600
            )
            return data
          })

    return new Response(JSON.stringify(electives), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
