import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateOrConnectWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedCreateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUpdateWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteUpsertWithoutCourses_courses_instituteToinstituteInputObjectSchema } from "./instituteUpsertWithoutCourses_courses_instituteToinstituteInput.schema"
import { instituteWhereUniqueInputObjectSchema } from "./instituteWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.instituteUpdateOneRequiredWithoutCourses_courses_instituteToinstituteNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            instituteUpsertWithoutCourses_courses_instituteToinstituteInputObjectSchema
        )
        .optional(),
      connect: z.lazy(() => instituteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              instituteUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema
          ),
          z.lazy(
            () =>
              instituteUncheckedUpdateWithoutCourses_courses_instituteToinstituteInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const instituteUpdateOneRequiredWithoutCourses_courses_instituteToinstituteNestedInputObjectSchema =
  Schema
