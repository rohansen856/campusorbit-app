import { cookies } from "next/headers"
import { UserSchema } from "@/types"
import { eq } from "drizzle-orm"

import { db } from "./db"
import { profiles } from "./schema"

export async function getCurrentSession() {
  const cookie = cookies()
  if (cookie.has("userId")) {
    const userId = cookie.get("userId")?.value
    if (!userId) return null
    return userId.toString().slice(1, -1)
  }
  return null
}

export async function getCurrentUser() {
  const cookie = cookies()
  if (cookie.has("userId")) {
    const userId = await getCurrentSession()
    if (!userId) return null
    const user = await db
      .select()
      .from(profiles)
      .where(eq(profiles.id, userId.toString()))
    if (!user) return null
    return user[0]
  }
  return null
}
export async function getCurrentAdmin() {
  const cookie = cookies()
  if (cookie.has("access_token")) {
    const userId = await getCurrentSession()
    if (!userId) return null
    const token = cookie.get("access_token")?.value
    if (token !== "629059") return null
    return token
  }
  return null
}

export async function logoutUser() {
  const cookie = cookies()
  cookie.delete("userId")
  return null
}
