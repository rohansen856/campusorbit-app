import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.CoursesAvgAggregateInputType> = z
  .object({
    credits: z.literal(true).optional(),
    semester: z.literal(true).optional(),
  })
  .strict()

export const CoursesAvgAggregateInputObjectSchema = Schema
