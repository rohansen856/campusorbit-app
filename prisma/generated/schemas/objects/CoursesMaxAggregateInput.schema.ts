import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.CoursesMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    institute: z.literal(true).optional(),
    course_code: z.literal(true).optional(),
    course_title: z.literal(true).optional(),
    theory: z.literal(true).optional(),
    lab: z.literal(true).optional(),
    type: z.literal(true).optional(),
    credits: z.literal(true).optional(),
    semester: z.literal(true).optional(),
    branch: z.literal(true).optional(),
    drive_link: z.literal(true).optional(),
  })
  .strict()

export const CoursesMaxAggregateInputObjectSchema = Schema
