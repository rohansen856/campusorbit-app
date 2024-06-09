import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      where: z.lazy(() => coursesWhereUniqueInputObjectSchema),
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

export const coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
