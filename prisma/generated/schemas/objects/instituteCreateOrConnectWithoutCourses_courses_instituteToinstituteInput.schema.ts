import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => instituteWhereUniqueInputObjectSchema),
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

export const instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInputObjectSchema =
  Schema
