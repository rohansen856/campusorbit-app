import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineCreateNestedManyWithoutCoursesInputObjectSchema } from "./routineCreateNestedManyWithoutCoursesInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateWithoutInstitute_courses_instituteToinstituteInput> =
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
      routine: z
        .lazy(() => routineCreateNestedManyWithoutCoursesInputObjectSchema)
        .optional(),
    })
    .strict()

export const coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
