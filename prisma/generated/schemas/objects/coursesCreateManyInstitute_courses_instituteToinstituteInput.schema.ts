import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<Prisma.coursesCreateManyInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      id: z.string().optional(),
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

export const coursesCreateManyInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
