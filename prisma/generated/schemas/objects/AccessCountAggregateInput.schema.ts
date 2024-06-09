import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.AccessCountAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
    details: z.literal(true).optional(),
    domain: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const AccessCountAggregateInputObjectSchema = Schema
