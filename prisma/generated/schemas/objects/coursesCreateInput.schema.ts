import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateNestedOneWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateNestedOneWithoutCourses_courses_instituteToinstituteInput.schema"
import { routineCreateNestedManyWithoutCoursesInputObjectSchema } from "./routineCreateNestedManyWithoutCoursesInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateInput> = z
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
    institute_courses_instituteToinstitute: z.lazy(
      () =>
        instituteCreateNestedOneWithoutCourses_courses_instituteToinstituteInputObjectSchema
    ),
    routine: z
      .lazy(() => routineCreateNestedManyWithoutCoursesInputObjectSchema)
      .optional(),
  })
  .strict()

export const coursesCreateInputObjectSchema = Schema
