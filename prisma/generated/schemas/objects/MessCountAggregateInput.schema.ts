import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.MessCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    mess_no: z.literal(true).optional(),
    day: z.literal(true).optional(),
    breakfast: z.literal(true).optional(),
    lunch: z.literal(true).optional(),
    dinner: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const MessCountAggregateInputObjectSchema = Schema
