import * as z from "zod"

export const userNameSchema = z.object({
  username: z.string().min(3).max(32),
})

export const fullNameSchema = z.object({
  full_name: z.string().min(3),
})
