import axios from "axios"
import { z } from "zod"

import { env } from "@/env.mjs"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"

export async function GET(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const userData = await db.profile.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        electives: true,
      },
    })

    if (!userData) return new Response(null, { status: 403 })

    // const data = await axios.get(
    //   `${env.BACKEND_URL}/courses/electives/my-electives`,
    //   {
    //     params: {
    //       ids: [...userData.electives],
    //     },
    //   }
    // )
    // if (data)
    //   return new Response(JSON.stringify(data.data.courses), { status: 200 })

    // Get the courses.
    const electives = await db.courses.findMany({
      where: {
        course_type: "elective",
        OR: [...userData.electives.map((data) => ({ id: data }))],
      },
    })

    return new Response(JSON.stringify(electives), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

const updateElectivesSchema = z.object({
  id: z.array(z.string().uuid()),
})

export async function PATCH(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const payload = updateElectivesSchema.parse({ id: body })

    // Update the user.
    await db.profile.update({
      where: {
        id: session.user.id,
      },
      data: {
        electives: payload.id,
      },
    })

    return new Response(null, { status: 203 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
