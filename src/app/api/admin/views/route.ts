import { getServerSession } from "next-auth/next"
import { z } from "zod"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { mongo } from "@/lib/mongo"
import { viewsSchema } from "@/lib/validations/views"

export async function GET(req: Request) {
  try {
    // Ensure user is authentication and has access to this user.
    const session = await getServerSession(authOptions)
    if (!session?.user || !session.user.id) {
      return new Response(null, { status: 403 })
    }

    await mongo.db("analytics").collection("views").insertOne({
      email: session.user.email,
      time: new Date(),
      route: "/api/admin/views",
      user_id: session.user.id,
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    await mongo
      .db("analytics")
      .collection("errors")
      .insertOne({
        error: (error as any).toString(),
        time: new Date(),
      })
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }
    return new Response(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    // Get the request body and validate it.
    const body = await req.json()
    const payload = viewsSchema.parse(body)

    // Extract analytics data from the req object
    const ip = req.headers.get("x-forwarded-for")

    await mongo.db("analytics").collection("views").insertOne({
      route: payload.route,
      user: ip,
      email: payload.email,
      device: payload.device,
      time: new Date(),
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    await mongo
      .db("analytics")
      .collection("errors")
      .insertOne({
        error: (error as any).toString(),
        time: new Date(),
      })
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
