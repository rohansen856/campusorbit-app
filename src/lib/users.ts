"use server"

import { UserSchema } from "@/types"

import { db } from "./db"
import { profiles } from "./schema"

export async function getUsers(): Promise<UserSchema[]> {
  const data = await db.select().from(profiles)
  return data
}
