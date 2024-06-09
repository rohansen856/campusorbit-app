import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.MessAvgAggregateInputType> = z
  .object({
    mess_no: z.literal(true).optional(),
    day: z.literal(true).optional(),
  })
  .strict()

export const MessAvgAggregateInputObjectSchema = Schema
