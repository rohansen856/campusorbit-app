import { profiles } from "drizzle/migrations/schema"

import { db } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const allProfiles = await db.select().from(profiles)
    return new Response(JSON.stringify(allProfiles), { status: 200 })
  } catch (e) {
    return new Response(null, { status: 500 })
  }
}
