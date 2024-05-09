import { db } from "@/lib/db"
import { account } from "@/lib/schema"

export async function GET(req: Request) {
  try {
    const allInstitutes = await db
      .select({ college: account.institute })
      .from(account)
    return new Response(JSON.stringify(allInstitutes), { status: 200 })
  } catch (e) {
    return new Response(null, { status: 500 })
  }
}
