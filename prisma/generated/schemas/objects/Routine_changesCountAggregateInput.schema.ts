import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.Routine_changesCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    created_at: z.literal(true).optional(),
    created_by: z.literal(true).optional(),
    date: z.literal(true).optional(),
    description: z.literal(true).optional(),
    routine_id: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const Routine_changesCountAggregateInputObjectSchema = Schema
