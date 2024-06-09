import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.RoutineMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    course_id: z.literal(true).optional(),
    course_code: z.literal(true).optional(),
    course_title: z.literal(true).optional(),
    prof: z.literal(true).optional(),
    type: z.literal(true).optional(),
    day: z.literal(true).optional(),
    from: z.literal(true).optional(),
    to: z.literal(true).optional(),
    group: z.literal(true).optional(),
    branch: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    room: z.literal(true).optional(),
    semester: z.literal(true).optional(),
    compulsory: z.literal(true).optional(),
  })
  .strict()

export const RoutineMaxAggregateInputObjectSchema = Schema
