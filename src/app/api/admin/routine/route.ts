import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { routineModificationSchema } from "@/lib/validations/routine"

export async function POST(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const accessLevel = await db.account.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        access_level: true,
      },
    })

    if (!accessLevel || accessLevel.access_level < 2)
      return new Response(null, { status: 403 })

    const body = await req.json()
    const payload = routineModificationSchema.parse(body)

    // Modify the routine.
    const routineModification = await db.routine_changes.create({
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
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the user data.
    const accessLevel = await db.account.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        access_level: true,
      },
    })

    if (!accessLevel || accessLevel.access_level < 2)
      return new Response(null, { status: 403 })

    const body = await req.json()
    const payload = body as { routineId: string }

    // Modify the routine.
    await db.routine_changes.deleteMany({
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
