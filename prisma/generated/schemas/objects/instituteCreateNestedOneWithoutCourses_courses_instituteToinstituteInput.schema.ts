import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteCreateNestedOneWithoutCourses_courses_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const instituteCreateNestedOneWithoutCourses_courses_instituteToinstituteInputObjectSchema =
  Schema
