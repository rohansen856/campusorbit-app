import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.RoutineAvgAggregateInputType> = z
  .object({
    day: z.literal(true).optional(),
    semester: z.literal(true).optional(),
  })
  .strict()

export const RoutineAvgAggregateInputObjectSchema = Schema
