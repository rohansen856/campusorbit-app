import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUpdateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => coursesWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            coursesUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const coursesUpsertWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
