import { cookies } from "next/headers"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { profiles } from "@/lib/schema"

const routeContextSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export async function POST(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route context.
    const { params } = routeContextSchema.parse(context)

    const userId = params.userId

    const user = await db.select().from(profiles).where(eq(profiles.id, userId))
    if (user.length <= 0) return new Response(null, { status: 404 })

    const cookie = cookies()
    cookie.set("userId", JSON.stringify(user[0].id), { sameSite: "lax" })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
