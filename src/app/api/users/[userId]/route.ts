import { cookies } from "next/headers"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { db } from "@/lib/db"
import { profile } from "@/lib/schema"

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
    // const userId = params.userId

    // if (!userId) return new Response(null, { status: 403 })

    // const body = await req.json()
    // const data = body

    // const user = await db
    //   .update(profile)
    //   .set(data)
    //   .where(eq(profile.id, userId))

    return new Response(JSON.stringify("data"), { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(error, { status: 500 })
  }
}
