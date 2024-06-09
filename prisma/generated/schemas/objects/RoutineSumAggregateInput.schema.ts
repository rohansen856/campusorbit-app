import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.RoutineSumAggregateInputType> = z
  .object({
    day: z.literal(true).optional(),
    semester: z.literal(true).optional(),
  })
  .strict()

export const RoutineSumAggregateInputObjectSchema = Schema
