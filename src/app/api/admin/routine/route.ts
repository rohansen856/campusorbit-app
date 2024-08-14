import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { getCurrentUser } from "@/lib/session"
import { routineModificationSchema } from "@/lib/validations/routine"

export async function POST(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const isAdmin = await db.admins.findFirst({
      where: {
        user_id: session.user.id,
      },
    })

    if (!isAdmin) return new Response(null, { status: 403 })

    const body = await req.json()
    const payload = routineModificationSchema.parse(body)

    // Modify the routine.
    const routineModification = await db.routineChanges.create({
      data: {
        created_by: session.user.id,
        date: new Date(),
        description: payload.modification,
        routine_id: payload.routineId,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = { user: await getCurrentUser() }
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const isAdmin = await db.admins.findFirst({
      where: {
        user_id: session.user.id,
      },
    })

    if (!isAdmin) return new Response(null, { status: 403 })

    const body = await req.json()
    const payload = body as { routineId: string }

    // Modify the routine.
    await db.routineChanges.deleteMany({
      where: {
        date: new Date(),
        routine_id: payload.routineId,
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
