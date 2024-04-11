import { cookies } from "next/headers"

export async function DELETE(req: Request) {
  try {
    const cookie = cookies()
    cookie.delete("userId")
    return new Response(null, { status: 200 })
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
