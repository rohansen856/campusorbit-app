import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.AccountCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    access_level: z.literal(true).optional(),
    password: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AccountCountAggregateInputObjectSchema = Schema
