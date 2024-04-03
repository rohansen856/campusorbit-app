import { testers } from "drizzle/migrations/schema"

import { db } from "@/lib/db"

export async function GET(req: Request) {
  try {
    const allTesters = await db.select().from(testers)
    return new Response(JSON.stringify(allTesters), { status: 200 })
  } catch (e) {
    return new Response(null, { status: 500 })
  }
}
