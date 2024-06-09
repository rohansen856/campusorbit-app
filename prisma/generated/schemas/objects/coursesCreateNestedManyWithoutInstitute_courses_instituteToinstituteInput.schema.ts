import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelopeObjectSchema } from "./coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelope.schema"
import { coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema } from "./coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInput.schema"
import { coursesWhereUniqueInputObjectSchema } from "./coursesWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.coursesCreateNestedManyWithoutInstitute_courses_instituteToinstituteInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
          z.lazy(
            () =>
              coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesUncheckedCreateWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema
          ),
          z
            .lazy(
              () =>
                coursesCreateOrConnectWithoutInstitute_courses_instituteToinstituteInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            coursesCreateManyInstitute_courses_instituteToinstituteInputEnvelopeObjectSchema
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => coursesWhereUniqueInputObjectSchema),
          z.lazy(() => coursesWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const coursesCreateNestedManyWithoutInstitute_courses_instituteToinstituteInputObjectSchema =
  Schema
