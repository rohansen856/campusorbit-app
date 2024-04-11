import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { pin: string }
    const pin = body.pin
    const validPin = "629059"
    if (pin !== validPin) return new Response(null, { status: 201 })

    const cookie = cookies()
    cookie.set("access_token", pin)
    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
