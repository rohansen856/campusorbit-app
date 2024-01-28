import { z } from "zod"

import { db } from "@/lib/db"
import { routineModifications } from "@/lib/schema"

const routeContextSchema = z.object({
    params: z.object({
        lectureId: z.string(),
    }),
})

export async function POST(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)
        const body = (await req.json()) as { status: string }

        const data = await db.insert(routineModifications).values({
            classId: params.lectureId,
            status: body.status,
        })

        return new Response(JSON.stringify(""), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}
