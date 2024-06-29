import { Courses } from "@prisma/client"
import axios from "axios"
import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { env } from "@/env.mjs"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { redis } from "@/lib/redis"
import { clubJoinSchema } from "@/lib/validations/club"

export async function POST(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id || !session.user.email) {
      return new Response(null, { status: 403 })
    }

    const body = await req.json()
    const payload = clubJoinSchema.parse(body)

    await db.clubMembers.create({
      data: {
        email: session.user.email,
        club_id: payload.clubId,
        user_id: session.user.id,
      },
    })

    return new Response(JSON.stringify(body), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
