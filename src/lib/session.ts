import { cookies } from "next/headers"

export async function getCurrentUser() {
  const cookie = cookies()
  if (cookie.has("userId")) {
    const userId = cookie.get("userId")
    return userId
  }
  return null
}
