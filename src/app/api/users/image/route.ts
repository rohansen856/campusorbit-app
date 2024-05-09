import { cookies } from "next/headers"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { profile } from "@/lib/schema"
import { getCurrentSession } from "@/lib/session"

export async function POST(req: Request) {
  try {
    const userId = await getCurrentSession()
    if (!userId) return new Response(null, { status: 403 })

    const body = (await req.json()) as { key: string }
    const key = body.key

    const user = await db
      .update(profile)
      .set({ image: key })
      .where(eq(profile.id, userId))

    return new Response(null, { status: 204 })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
