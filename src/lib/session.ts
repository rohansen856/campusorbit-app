import { cookies } from "next/headers"
import { UserSchema } from "@/types"
import { eq } from "drizzle-orm"

import { db } from "./db"
import { profiles } from "./schema"

export async function getCurrentSession() {
  const cookie = cookies()
  if (cookie.has("userId")) {
    const userId = cookie.get("userId")?.value
    return userId
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
      .where(eq(profiles.id, "af8c5123-3761-455f-b162-104f38f76f70"))
    if (!user) return null
    return user[0]
  }
  return null
}

export async function logoutUser() {
  const cookie = cookies()
  cookie.delete("userId")
  return null
}
