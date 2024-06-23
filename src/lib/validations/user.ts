import * as z from "zod"

export const userNameSchema = z.object({
  username: z.string().min(3).max(32),
})

export const fullNameSchema = z.object({
  full_name: z.string().min(3),
})

export const userProfileSchema = z.object({
  username: z.string().min(2),
  full_name: z.string().min(2),
  programme: z.enum(["btech", "mtech", "phd"]),
  branch: z.enum(["cs", "ec", "sm", "me"]),
  semester: z.number().min(1).max(10),
  group: z.enum(["A", "B", "C", "D", "E"]),
  mess: z.number().min(1).max(20),
})
