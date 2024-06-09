import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.InstituteCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    domain: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const InstituteCountAggregateInputObjectSchema = Schema
