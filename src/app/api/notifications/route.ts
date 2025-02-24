// import { eq } from "drizzle-orm"

// import { notifications } from "@/lib/schema"

// import { db } from "@/lib/db"
// import { getCurrentUser } from "@/lib/session"
// import { insertNotificationsSchema } from "@/lib/validations/notification"

export async function POST(req: Request) {
  try {
    // const user = await getCurrentUser()
    // if (!user) return new Response(null, { status: 403 })

    // const body = await req.json()
    // const payload = insertNotificationsSchema.parse(body)

    // await db.insert(notifications).values(payload)

    return new Response(null, { status: 204 })
  } catch (error) {
    return new Response(error, { status: 500 })
  }
}

export async function GET() {
  try {
    // const user = await getCurrentUser()
    // if (!user) return new Response(null, { status: 403 })

    // const data = await db.select().from(notifications)

    return new Response(JSON.stringify([]), { status: 200 })
  } catch (error) {
    return new Response(error, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    // const user = await getCurrentUser()
    // if (!user) return new Response(null, { status: 403 })

    // const json = await req.json()
    // const body = json as { id: string }
    // const notificationId = body.id

    // if (!notificationId) return new Response(null, { status: 400 })

    // const data = await db
    //   .delete(notifications)
    //   .where(eq(notifications.id, notificationId))

    return new Response(JSON.stringify([]), { status: 200 })
  } catch (error) {
    return new Response(error, { status: 500 })
  }
}
