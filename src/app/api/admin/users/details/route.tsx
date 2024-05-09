import { db } from "@/lib/db"
import { profile } from "@/lib/schema"

export async function GET(req: Request) {
  try {
    const allProfiles = await db.select().from(profile)
    return new Response(JSON.stringify(allProfiles), { status: 200 })
  } catch (e) {
    return new Response(null, { status: 500 })
  }
}
