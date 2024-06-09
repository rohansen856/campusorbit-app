import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.coursesUncheckedCreateWithoutRoutineInput> = z
  .object({
    id: z.string().optional(),
    institute: z.string(),
    course_code: z.string(),
    course_title: z.string(),
    theory: z.boolean(),
    lab: z.boolean(),
    type: z.string(),
    credits: z.number(),
    semester: z.number(),
    branch: z.string(),
    drive_link: z.string().optional().nullable(),
  })
  .strict()

export const coursesUncheckedCreateWithoutRoutineInputObjectSchema = Schema
