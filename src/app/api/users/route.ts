import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { userProfileSchema } from "@/lib/validations/user"

export async function GET(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the routine.
    const profiles = await db.profile.findMany({
      where: {
        visibility: true,
      },
    })

    return new Response(JSON.stringify(profiles), { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const payload = userProfileSchema.parse(body)

    const account = await db.account.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        institute: true,
      },
    })

    if (!account) return new Response(null, { status: 403 })

    // Update the user.
    await db.profile.create({
      data: {
        id: session.user.id,
        username: payload.username,
        full_name: payload.full_name,
        programme: payload.programme,
        branch: payload.branch,
        semester: payload.semester,
        year: Math.ceil(payload.semester / 2),
        institute: account?.institute,
        group: payload.group,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
