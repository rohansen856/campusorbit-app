import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.accountCreateManyAccessInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    institute: z.string(),
    created_at: z.coerce.date().optional(),
    password: z.string().optional().nullable(),
  })
  .strict()

export const accountCreateManyAccessInputObjectSchema = Schema
