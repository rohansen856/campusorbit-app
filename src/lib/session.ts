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
    const user = [
      {
        id: "af8c5123-3761-455f-b162-104f38f76f70",
        createdAt: "2024-03-11T20:21:31.565Z",
        email: "23bcs212@iiitdmj.ac.in",
        username: null,
        fullName: null,
        branch: "bcs",
        sem: 2,
        mess: 2,
        year: 23,
        roll: 212,
        visibility: true,
        group: "B",
      },
    ]
    // await db
    //   .select()
    //   .from(profiles)
    //   .where(eq(profiles.id, userId.toString().slice(1, -1)))
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
