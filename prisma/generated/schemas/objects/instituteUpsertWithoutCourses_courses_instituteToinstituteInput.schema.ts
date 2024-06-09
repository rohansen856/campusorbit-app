import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutCourses_courses_instituteToinstituteInput.schema"

const Schema: z.ZodType<Prisma.instituteUpsertWithoutCourses_courses_instituteToinstituteInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            instituteUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const instituteUpsertWithoutCourses_courses_instituteToinstituteInputObjectSchema =
  Schema
