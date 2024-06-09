import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { routineUncheckedCreateNestedManyWithoutCoursesInputObjectSchema } from "./routineUncheckedCreateNestedManyWithoutCoursesInput.schema"

const Schema: z.ZodType<Prisma.coursesUncheckedCreateInput> = z
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
    routine: z
      .lazy(
        () => routineUncheckedCreateNestedManyWithoutCoursesInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const coursesUncheckedCreateInputObjectSchema = Schema
