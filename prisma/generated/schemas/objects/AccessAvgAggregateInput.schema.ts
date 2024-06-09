import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.AccessAvgAggregateInputType> = z
  .object({
    level: z.literal(true).optional(),
  })
  .strict()

export const AccessAvgAggregateInputObjectSchema = Schema
