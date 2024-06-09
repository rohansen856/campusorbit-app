import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUpdateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => coursesWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            coursesUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
        z.lazy(
          () =>
            coursesUncheckedUpdateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
        ),
      ]),
    })
    .strict()

export const coursesUpdateWithWhereUniqueWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
