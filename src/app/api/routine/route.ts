import { db } from "@/lib/db"
import { routine } from "@/lib/schema"

export async function GET() {
    try {
        const data = await db.select().from(routine)
        return new Response(JSON.stringify("data"), { status: 200 })
    } catch (error) {
        return new Response(null, { status: 400 })
    }
}

export async function POST() {
    try {
    } catch (error) {}
    return new Response("hi")
}
